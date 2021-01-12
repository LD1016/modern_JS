const loadJokes = (e) => {
  const number = document.querySelector('input[type=number]').value;
  //   console.log(number);
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(xhr.responseText);
      let output = '';
      const out = document.getElementsByClassName('output')[0];
      if (data.type === 'success') {
        data.value.forEach((i) => {
          output += `<li>${i.joke}</li>`;
        });
        // console.log(out);
        out.innerHTML = output;
      } else {
        out.innerHTML = 'Something Wrong';
      }
    }
  };

  xhr.send();

  e.preventDefault();
};
document.querySelector('#submit').addEventListener('click', loadJokes);
