import {handleAuthError} from './../libs';

export const composeCarousel = ({context, actions, snackbar, limit}, onData) => {
  const {article} = actions();
  const {getFrontPublished} = article;

  const callback = (err, result) => {

  };

  getFrontPublished({callback, limit});

};
