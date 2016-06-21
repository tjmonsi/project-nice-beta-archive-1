import React from 'react';
// import {handleAuthError} from './../libs';

export const composeCarousel = ({context, actions, snackbar, limit, slide}, onData) => {
  const {article} = actions();
  const {getFrontPublished} = article;

  const callback = (err, articles) => {
    if (err) {
      snackbar.showNotification(err.message);
    } else {
      const children = [];
      if (slide) {
        for (let i in articles) {
          if (articles[i]) {
            children.push(React.createElement(slide, {
              id: articles[i],
              key: i
            }));
          }
        }
      }
      onData(null, {children});
    }
  };

  getFrontPublished({callback, limit});

};
