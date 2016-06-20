import React from 'react';
import {Layout} from './../components/layout.jsx';

export default (PageCtx, {mount, page}, {Components}) => {
  page('/', () => {
    mount(PageCtx, {
      content: (
        <Layout>
        </Layout>
      )
    });
  });
};
