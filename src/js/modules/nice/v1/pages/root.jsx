import React from 'react';
import {Layout} from './../components/layout.jsx';
import {CardSummary} from './../components/card-summary.jsx';
import {RootBanner, RootCards, StackGridBanner} from './../containers';

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
      container: StackGridBanner,
      stackHeight: 550,
      buttonColor: 'white',
      limit: 7,
      addClasses: 'nice'
    };

    const cardListAttributes = {
      container: CardSummary,
      limit: 4,
      columns: 2
    };

    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <RootBanner {...bannerAttributes} />
          <CLCenter centerSize="eight" noSpacing={true} >
            <CLSideContent mainContent="left">
              <RootCards {...cardListAttributes} />
            </CLSideContent>
          </CLCenter>
        </Layout>
      )
    });
  });
};
