import React from 'react';
import {Layout} from './../components/layout.jsx';

export default (PageCtx, {mount, page}, {Components, Nav}) => {
  page('/', () => {
    const layoutAttributes = {
      Nav
    };

    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
        </Layout>
      )
    });
  });
};
