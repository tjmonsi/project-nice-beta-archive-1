import React from 'react';
import {Layout} from './../components/layout.jsx';
import {RootCarousel, StackGridBanner as slide} from './../containers';

export default (PageCtx, {mount, page}, {Components, Nav}) => {
  page('/', () => {
    const layoutAttributes = {
      Nav
    };

    const carouselAttributes = {
      slide,
      stackHeight: 550,
      buttonColor: 'white',
      limit: 7,
      addClasses: 'nice'
    };

    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <RootCarousel {...carouselAttributes} />
        </Layout>
      )
    });
  });
};
