import React from 'react';
import {Layout} from './../components/layout.jsx';
import {CardSummary} from './../components/card-summary.jsx';
import {ClickableListItem} from './../components/clickable-list-item.jsx';
import {RootBanner, RootCard, RootCards, RootList, StackGridBanner} from './../containers';

export default (PageCtx, {mount, page}, {Components, Nav}) => {
  page('/', () => {
    const {
      CLSideContent,
      CLCenter,
      CLGrid
    } = Components;

    const layoutAttributes = {
      Nav
    };

    const bannerAttributes = {
      container: StackGridBanner,
      stackHeight: 550,
      limit: 7,
      specificClassName: 'nice',
      itemSpecificClassName: 'nice-stack-grid',
      itemColor: 'white'
    };


    const cardListAttributes = {
      container: RootCard,
      limit: 4,
      columns: 2,
      forceSingleColumnPhone: true
    };

    const listAttributes = {
      container: ClickableListItem,
      limit: 4,
      start: 4,
      width: '100%'
    };

    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <RootBanner {...bannerAttributes} />
          <CLCenter centerSize="eight" noSpacing={true} >
            <CLSideContent mainContent="left">
              <RootCards {...cardListAttributes} />
              <CLGrid columns={1} noSPacing={true}>
                <h3 style={{paddingBottom: 0, marginBottom: 0}}>
                  Other Articles
                </h3>
                <RootList {...listAttributes} />
              </CLGrid>
            </CLSideContent>
          </CLCenter>
        </Layout>
      )
    });
  });
};
