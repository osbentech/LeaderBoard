import './main.css';

const boardList = document.querySelector('.boardList');

const boardListArr = [
  {
    value: 'John: 100',
    Index: 0,
  },
  {
    value: 'Tom: 20',
    Index: 1,
  },
  {
    value: 'Mark: 50',
    Index: 2,
  },
  {
    value: 'Rita: 78',
    Index: 3,
  },
  {
    value: 'Nat: 125',
    Index: 4,
  },
  {
    value: 'Ben: 77',
    Index: 5,
  },
  {
    value: 'Pat: 42',
    Index: 6,
  },
];

function showScores() {
  for (let i = 0; i < boardListArr.length; i += 1) {
    boardList.innerHTML += ` <div class="score-board">
    <p class="scores">${boardListArr[i].value}</p>
    </div>
        `;
  }
}

showScores();