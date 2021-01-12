function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  const self = this.http; //avoid error of using this.http.status inside onload

  this.http.onload = function () {
    if (self.status === 200) {
      //   console.log(self.responseText);

      //   return self.responseText;
      //  Because the above cannot return synchronously
      callback(null, self.responseText);
    } else {
      callback(`Error: ${self.status}`);
    }
  };
  this.http.send();
};

// Make an HTTP POST request

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('content-type', 'application/json');

  const self = this.http;
  this.http.onload = function () {
    callback(null, self.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('content-type', 'application/json');

  const self = this.http;
  this.http.onload = function () {
    callback(null, self.responseText);
  };

  this.http.send(JSON.stringify(data));
};
// Make an HTTP DELETE request

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);
  const self = this.http;

  this.http.onload = function () {
    if (self.status === 200) {
      callback(null, 'Post Delete');
    } else {
      callback('Error: ' + self.status);
    }
  };

  this.http.send();
};
