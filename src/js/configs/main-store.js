import {createStore} from 'redux';

const defaultState = {
  articles: {}
};

export default createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ARTICLE':
      const a = {};
      a[action.key] = action.data;
      const obj = Object.assign({}, state, {
        article: {
          ...state.article,
          ...a
        }
      });
      return obj;
    default:
      return state;
  }
});
