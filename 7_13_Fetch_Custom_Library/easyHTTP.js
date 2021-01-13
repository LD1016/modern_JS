/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Lance Dang
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make a HTTP GET request
  get = (url) => {
    // fetch(url)
    //   .then((res) => res.json())
    // //   .then((data) => console.log(data))
    //   .then(data => data)
    //   .catch((error) => console.log(error));
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  // Make a HTTP POST request
  post = (url, data) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  // Make a HTTP PUT request
  put = (url, data) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  };

  // Make a HTTP DELETE request
  delete = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then(() => resolve('Delete Successful!'))
        .catch((error) => reject(error));
    });
  };
}
