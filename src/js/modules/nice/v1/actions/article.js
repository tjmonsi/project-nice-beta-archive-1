export default {
  articlePreview: ({mainStore}, {key, value}) => {
    mainStore.dispatch({
      type: 'UPDATE_ARTICLE',
      key,
      value
    });
  }
};
