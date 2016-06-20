import React from 'react';
import {
  CLLayout,
  CLHeader,
  CLHeaderRow,
  CLSpacer,
  CLDrawer,
  CLLogo,
  CLBody,
  CLNav,
  CLSnackbar,
  windowSize
} from './../../../comp-lib';
import {debounce} from 'underscore';

export class Layout extends React.Component {
  render() {
    const {Nav = CLNav, children} = this.props;
    const {width} = windowSize();
    const logoAttributes = {
      image: 'https://firebasestorage.googleapis.com/v0/b/project-nice.appspot.com/o/' +
        'lifebank-logo-2.png?alt=media&token=0d59f8f5-c5d8-4c5c-a1da-044375d06199',
      label: width > 700 ? 'Network of Information and Collaboration Exchange' : 'N.I.C.E'
    };

    const Logo = (<CLLogo {...logoAttributes} />);

    const showNotif = (message) => {
      if (this.snackbar) {
        this.snackbar.showNotification(message);
      } else {
        alert(message);
      }
    };

    const snackbar = {
      showNotification: debounce(showNotif, 1)
    };

    const snackbarRef = (c) => {
      this.snackbar = c;
    };

    return (
      <CLLayout fixedHeader={true}>
        <CLHeader>
          <CLHeaderRow>
            {Logo}
            <CLSpacer />
            <Nav snackbar = {snackbar} />
          </CLHeaderRow>
        </CLHeader>
        <CLDrawer>
          <CLLogo {...logoAttributes} label="N.I.C.E" />
          <Nav snackbar = {snackbar} />
        </CLDrawer>
        <CLBody>
          {React.Children.map(children, child => (typeof child !== 'string' ?
            React.cloneElement(child, {
              snackbar
            }) : child
          ))}
        </CLBody>
        <CLSnackbar ref={snackbarRef}/>
      </CLLayout>
    );
  }
}
