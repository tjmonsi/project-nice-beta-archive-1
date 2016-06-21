export default {
  articlePreview: ({mainStore}, {key, value}) => {
    mainStore.dispatch({
      type: 'UPDATE_ARTICLE',
      key,
      value
    });
  },
  getPublished: ({firebase}, {
    callback = () => {},
    limit = 5,
    published = 'published',
    start = 0
  }) => {
    const ref = firebase
      .database()
      .ref(`content/article_group/article_category/${published}`)
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
      const arr2 = arr
        .sort((a, b) => (new Date(a[1]) > new Date(b[1])))
        .map((a) => (a[0]));

      // console.log(arr2);
      for (let i = 0; i < start; i++) {
        arr2.pop();
      }

      const articles = arr2.reverse();

      callback(null, articles);
    }, callback);
  },
  getArticle: ({firebase}, {callback = () => {}, id}) => {
    if (id) {
      const articleRef = firebase.database().ref(`content/article_group/articles/${id}`);
      articleRef.on('value', data => {
        const article = data.val();
        article.id = data.key;
        callback(null, article);
      }, callback);
    } else {
      return callback(null);
    }
  }
};
