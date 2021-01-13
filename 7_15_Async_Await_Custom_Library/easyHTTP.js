/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Lance Dang
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make a HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  // Make a HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  }

  // Make a HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  }

  // Make a HTTP DELETE request
  async delete(url) {
    const response = await fetch(url);
    const res = await 'Resouce Deleted !!!';
    return res;
  }
}
