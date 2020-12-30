const loanForm = document.getElementById('loan-form');
const loanAmount = document.getElementById('amount');
const loanInterest = document.getElementById('interest');
const loanYear = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

loanForm.addEventListener('submit', calculation);

function calculation(e) {
  // reset (disable result)
  document.getElementById('results').style.display = 'none';

  const amount = parseFloat(loanAmount.value);
  // calculate interest for each month
  const interest = parseFloat(loanInterest.value) / 100 / 12;
  const years = parseInt(loanYear.value) * 12;

  const x = Math.pow(1 + interest, years);
  const monthly = (amount * x * interest) / (x - 1);
  if (Number.isNaN(monthly) == false) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * years).toFixed(2);
    totalInterest.value = (monthly * years - amount).toFixed(2);

    // load the spinning image
    const spinning = document.getElementById('loading');
    console.log(spinning);
    spinning.style.display = 'block';

    // disable after 2 seconds
    setTimeout(() => {
      spinning.style.display = 'none';
      // display result
      document.getElementById('results').style.display = 'block';
    }, 2000);
  } else {
    showError('Please check your number!');
  }

  e.preventDefault();
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.className = 'red';
  h3.appendChild(document.createTextNode(error));

  const card = document.querySelector('.text-center');
  // console.log(card.children);

  card.insertBefore(h3, card.children[0]);

  setTimeout(function () {
    // h3.style.display = 'none';
    h3.remove();
  }, 3000);
}
