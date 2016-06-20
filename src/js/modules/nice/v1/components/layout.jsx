import React from 'react';
import {
  CLLayout,
  CLHeader,
  CLHeaderRow,
  CLSpacer,
  CLDrawer,
  CLLogo,
  CLBody,
  CLNav
} from './../../../comp-lib';

export class Layout extends React.Component {
  render() {
    const {Nav = CLNav, children} = this.props;
    const logoAttributes = {
      image: 'https://firebasestorage.googleapis.com/v0/b/project-nice.appspot.com/o/' +
        'lifebank-logo-2.png?alt=media&token=0d59f8f5-c5d8-4c5c-a1da-044375d06199',
      label: 'Network of Information and Collaboration Exchange'
    };

    const Logo = (<CLLogo {...logoAttributes} />);

    return (
      <CLLayout fixedHeader={true}>
        <CLHeader>
          <CLHeaderRow>
            {Logo}
            <CLSpacer />
            {Nav}
          </CLHeaderRow>
        </CLHeader>
        <CLDrawer>
          {Logo}
          {Nav}
        </CLDrawer>
        <CLBody>
          {React.Children.map(children, child => (child ? child : null))}
        </CLBody>
      </CLLayout>
    );
  }
}
