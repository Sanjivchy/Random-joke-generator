const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;
async function getjokes(){
    const jokePromise =await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke =await jokePromise.json();
    //console.log(joke);
    //get the setup from the joke and insert it into the setupdiv element
    setupDiv.innerHTML=joke[0].setup;
    //create a global variable which will stire the current punch line updated each time
    // assginn the current punch line jokes punchline to the punchline variable
    punchline=joke[0].punchline
    //console.log(punchline);
    

}

getjokes();