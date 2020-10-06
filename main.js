const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const list = document.getElementById('list');
const form = document.getElementById('form-container');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const closeBtn = document.getElementById('close-btn');
const submit = document.querySelector('.submit-btn');

const dummyTransactions = [
  { id: 1, text: 'grocery', amount: -50 },
  { id: 2, text: 'cinema', amount: -100 },
  { id: 3, text: 'project', amount: 500 },
  { id: 4, text: 'lottery win', amount: 10 }
]

const transactions = dummyTransactions;

function showTransactionsDOM() {
  const sign = (`${transactions.amount}` > 0 ? '+' : '-');
  console.log(sign);
};


function generateRandomID() {
  return Math.floor(Math.random() * 10000000000000)
};

console.log(generateRandomID());


function init() {
  list.innerHTML = '';
  transactions.forEach(showTransactionsDOM);
}

init();
