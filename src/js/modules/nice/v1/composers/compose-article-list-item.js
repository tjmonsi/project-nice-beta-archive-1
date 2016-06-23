import React from 'react';
import {CLButton} from './../../../comp-lib';
// import {handleAuthError} from './../libs';

export const composeArticleListItem = ({
  context,
  actions,
  snackbar,
  id,
  addClasses,
  itemColor
}, onData) => {
  const {article} = actions();
  const {getArticle} = article;

  const callback = (err, articleObject) => {
    if (err) {
      snackbar.showNotification(err.message);
    } else {
      const {title: label, author, date_updated, image_url} = articleObject;
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      const datePublished = new Date(date_updated).toLocaleTimeString('en-us', options);

      const subTitle = `By: ${author ? author : 'Project NICE'}<br />Published ${datePublished}`;

      onData(null, {
        id,
        label,
        subTitle,
        addClasses
      });
    }
  };

  getArticle({callback, id});

};
