async function getApi() {
    const recieved = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m7hFYbD5dsij9kvtv9nH/scores';
    const fectedData = await fetch(recieved)
    const jFormat = await fectedData.json()
    console.log(jFormat)
    console.log(jFormat.result)
}
getApi();