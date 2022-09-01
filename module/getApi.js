import { boardList } from '../src/index.js';

async function getApi() {
  const recieved = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m7hFYbD5dsij9kvtv9nH/scores';
  const fectedData = await fetch(recieved);
  const jFormat = await fectedData.json();
  boardList.innerHTML = '';
  for (let i = 0; i < jFormat.result.length; i += 1) {
    boardList.innerHTML += ` <div class="score-board">
        <p class="scores">${jFormat.result[i].user}: ${jFormat.result[i].score}</p>
        </div>
        `;
  }
}
export default getApi;
