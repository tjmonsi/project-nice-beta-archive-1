import firebase from 'firebase';
import {mount} from 'react-mounter';
import page from 'page';
import qs from 'qs';
import mainStore from './main-store';
import _ from 'underscore';
import {marked, renderer} from './marked';

export const initContext = () => {

  const config = {
    apiKey: 'AIzaSyCGZzc25YOgV7iuZBkPf7IfgF1x-NbTrSQ',
    authDomain: 'project-nice.firebaseapp.com',
    databaseURL: 'https://project-nice.firebaseio.com',
    storageBucket: 'project-nice.appspot.com',
  };

  firebase.initializeApp(config);

  return {
    mount,
    marked,
    renderer,
    firebase,
    mainStore,
    page,
    qs,
    _
  };
};
