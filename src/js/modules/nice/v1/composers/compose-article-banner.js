import React from 'react';
import {CLButton} from './../../../comp-lib';
// import {handleAuthError} from './../libs';

export const composeArticleBanner = ({context, actions, snackbar, id}, onData) => {
  const {article} = actions();
  const {getArticle} = article;

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
        backgroundImage,
        color: 'white',
        minHeight: 0.8,
        addClasses: 'nice-banner',
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
