const http = new EasyHTTP();

// // Get USERS
// const user = http.get('http://jsonplaceholder.typicode.com/users');

// console.log(user);

// http
//   .get('http://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const data = {
  name: 'Hello',
  email: 'hello@example.com',
};

// http
//   .post('http://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// http
//   .put('http://jsonplaceholder.typicode.com/users/3', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

http
  .delete('http://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
