document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getUsers);

// Get from local text file
function getText() {
  //   console.log('hello World');
  fetch('test.txt')
    .then(function (res) {
      // console.log(res.text());
      return res.text();
    })
    .then(function (data) {
      //   console.log(data);
      document.getElementById('output').innerHTML = `<li>${data}</li>`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Get from local json file
function getJson() {
  fetch('posts.json')
    .then(function (res) {
      // console.log(res.json());
      // return res.json();
      // console.log(res.ok);
      if (!res.ok) {
        throw new Error(res.Error);
      }
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(function (item) {
        output += `<li>${item.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Get from external API
function getUsers() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //   console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Error Handling With Fetch
// function handleErrors(res) {
//   if (!res.ok) throw new Error(res.error);
//   return res;
// }

// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//   .then(res => res.json())
//   .then(handleErrors)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));
