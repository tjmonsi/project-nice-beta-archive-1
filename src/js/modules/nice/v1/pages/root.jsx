import React from 'react';
import {Layout} from './../components/layout.jsx';
import {RootBanner, StackGridBanner as container} from './../containers';

export default (PageCtx, {mount, page}, {Components, Nav}) => {
  page('/', () => {
    const {
      CLSideContent,
      CLCenter
    } = Components;

    const layoutAttributes = {
      Nav
    };

    const bannerAttributes = {
      container,
      stackHeight: 550,
      buttonColor: 'white',
      limit: 7,
      addClasses: 'nice'
    };

    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <RootBanner {...bannerAttributes} />
          <CLCenter centerSize="quarter" >
            <CLSideContent mainContent="left">

            </CLSideContent>
          </CLCenter>
        </Layout>
      )
    });
  });
};
