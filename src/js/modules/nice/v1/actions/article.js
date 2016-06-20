export default {
  articlePreview: ({mainStore}, {key, value}) => {
    mainStore.dispatch({
      type: 'UPDATE_ARTICLE',
      key,
      value
    });
  },
  getFrontPublished: ({firebase}, {callback = () => {}, limit = 5}) => {
    const ref = firebase
      .database()
      .ref('content/article_group/article_category/front_published')
      .orderByValue()
      .limitToLast(limit);

    ref.on('value', result => {
      const data = result.val();
      const arr = [];
      for (let i in data) {
        if (i !== null && data[i]) {
          arr.push([ i, data[i] ]);
        }
      }
      const frontPublished = arr
        .sort((a, b) => (new Date(a[1]) < new Date(b[1])))
        .map((a) => (a[0]));

      callback(null, frontPublished);
    }, callback);
  }
};
