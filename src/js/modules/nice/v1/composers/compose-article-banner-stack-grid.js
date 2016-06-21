import React from 'react';
import {CLButton} from './../../../comp-lib';
import random from 'random-js';
// import {handleAuthError} from './../libs';

export const composeArticleBannerStackGrid = ({context, actions, snackbar, id}, onData) => {
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
      const {title, excerpt: subtitle, image_url} = articleObject;
      const backgroundImage = `url('${image_url}')`;
      onData(null, {
        id,
        title,
        subtitle,
        textpos: 'left',
        backgroundGradient: `linear-gradient(${color}, ${color}), `,
        backgroundImage,
        color: 'white',
        minHeight: 0.8,
        contentWidth: 'full',
        addClasses: 'nice-stack-grid',
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
