import React from 'react';
import {Layout} from './../components/layout.jsx';
import {RootCarousel, Banner as slide} from './../containers';

export default (PageCtx, {mount, page}, {Components, Nav}) => {
  page('/', () => {
    const layoutAttributes = {
      Nav
    };

    const carouselAttributes = {
      slide,
      height: 550,
      buttonColor: 'white'
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
