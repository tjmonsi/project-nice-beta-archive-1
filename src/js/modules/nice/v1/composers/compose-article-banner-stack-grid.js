import React from 'react';
import {CLButton} from './../../../comp-lib';
import random from 'random-js';
// import {handleAuthError} from './../libs';

export const composeArticleBannerStackGrid = ({
  context,
  actions,
  snackbar,
  id,
  specificClassName,
  itemColor
}, onData) => {
  const {article} = actions();
  const {getArticle} = article;
  const rm = random();
  const r = rm.integer(0, 100);
  const g = rm.integer(0, 100);
  const b = rm.integer(0, 100);
  const color = `rgba(${r},${g},${b},0.7)`;

  const callback = (err, articleObject) => {
    if (err) {
      snackbar.showNotification(err.message);
    } else {
      const {title, excerpt: subTitle, image_url} = articleObject;
      onData(null, {
        id,
        title,
        subTitle,
        textpos: 'left',
        background: `linear-gradient(${color}, ${color}), url('${image_url}')
          center center/cover no-repeat`,
        color: itemColor,
        minHeight: 0.8,
        contentWidth: 'full',
        specificClassName,
        children: [
          React.createElement(CLButton, {
            label: 'Read more',
            href: `/articles/read/${id}`,
            colored: 'primary',
            isRaised: true
          })
        ]
      });
    }
  };

  getArticle({callback, id});

};
