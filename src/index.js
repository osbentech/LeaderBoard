import './main.css';
import sendAPi from '../module/sendScores.js';
import getApi from '../module/getApi.js';

const refbtn = document.querySelector('.refbtn');
export const boardList = document.querySelector('.boardList');
const inp1 = document.querySelector('#inp1');
const inp2 = document.querySelector('#inp2');
const submitbtn = document.querySelector('.sbtn');

submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameValue = inp1.value;
  const scoreValue = inp2.value;
  sendAPi(nameValue, scoreValue);
  inp1.value = '';
  inp2.value = '';
});

refbtn.addEventListener('click', () => {
  getApi();
});