const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');

async function getjokes(){
    const jokePromise =await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke =await jokePromise.json();
    console.log(joke);
    //get the setup from the joke and insert it into the setupdiv element
    setupDiv.innerHTML=joke[0].setup;
    punchlineDiv.
}

getjokes();