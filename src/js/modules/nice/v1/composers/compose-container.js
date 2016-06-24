import React from 'react';
// import {handleAuthError} from './../libs';

export const composePublish = ({
  context,
  actions,
  snackbar,
  limit,
  container,
  start,
  itemColor,
  itemSpecificClassName,
  insertAdditionalContainerPos,
  additionalContainer
}, onData) => {
  const {article} = actions();
  const {getPublished} = article;

  const callback = (err, articles) => {
    if (err) {
      snackbar.showNotification(err.message);
    } else {
      const children = [];
      if (container) {
        for (let i in articles) {
          if (articles[i]) {
            // check weather underground and position

            if (additionalContainer && children.length === insertAdditionalContainerPos) {

            }

            children.push(React.createElement(container, {
              id: articles[i],
              key: i,
              index: i,
              specificClassName: itemSpecificClassName,
              itemColor
            }));
          }
        }
      } else {
        for (let i in articles) {
          if (articles[i]) {
            children.push(articles[i]);
          }
        }
      }

      console.log(container);
      onData(null, {children});
    }
  };

  getPublished({callback, limit, published: 'front_published', start});

};
