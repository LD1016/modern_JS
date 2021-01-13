// // Async by itself return a Promise

// async function myFunc() {
//   //   return 'Hello';
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 2000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // Wait until promise it resolve

//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong!'));
//   }
// }

// // console.log(myFunc());
// myFunc()
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

async function getUsers(url) {
  // await response of the fetch call
  const response = await fetch(url);

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers('http://jsonplaceholder.typicode.com/users').then((data) =>
  console.log(data)
);
