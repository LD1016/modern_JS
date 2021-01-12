const http = new easyHTTP();

// // Get posts
// // http.get('http://jsonplaceholder.typicode.com/posts');
// const posts = http.get(
//   'http://jsonplaceholder.typicode.com/posts',
//   function (error, posts) {
//     if (!error) {
//       console.log(posts);
//     } else {
//       console.log(error);
//     }
//   }
// );

// // Get a single post
// const posts = http.get(
//   'http://jsonplaceholder.typicode.com/posts/1',
//   function (error, post) {
//     if (!error) {
//       console.log(post);
//     } else {
//       console.log(error);
//     }
//   }
// );

const data = {
  title: 'Hello',
  body: 'Hello World!!!!',
};

// http.post(
//   'http://jsonplaceholder.typicode.com/posts',
//   data,
//   function (error, response) {
//     if (!error) {
//       console.log(response);
//     } else {
//       console.log(error);
//     }
//   }
// );

// http.put(
//   'http://jsonplaceholder.typicode.com/posts/3',
//   data,
//   function (error, update) {
//     if (!error) {
//       console.log(update);
//     } else {
//       console.log(error);
//     }
//   }
// );

http.delete(
  'http://jsonplaceholder.typicode.com/posts/1',
  function (error, response) {
    if (!error) {
      console.log(response);
    } else {
      console.log(error);
    }
  }
);
