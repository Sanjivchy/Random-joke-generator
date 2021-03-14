const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

//add an event listner for the punchlne button . when clicked it  should called a function called getpunchline
// create the getpnchlne function the shunction shoul insert the punchlne into punchline div and
//  add the class bubble to the punchline div
//toggle the hidden class on both button

punchlineBtn.addEventListener('click',getPunchline);
newJokeBtn.addEventListener('click',getjokes);

function getPunchline(){
    punchlineDiv.innerHTML=punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');

}

async function getjokes(){
    const jokePromise =await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//other api https://official-joke-api.appspot.com/random_ten

//https://official-joke-api.appspot.com/jokes/ten
    const joke =await jokePromise.json();
    console.log(joke);
    //get the setup from the joke and insert it into the setupdiv element
    setupDiv.innerHTML=joke[0].setup;
    //create a global variable which will stire the current punch line updated each time
    // assginn the current punch line jokes punchline to the punchline variable
    punchline=joke[0].punchline
    //console.log(punchline);

    punchlineDiv.innerHTML="";
    punchlineDiv.classList.remove('bubble');
    //clear the punchline div and remove the bubble class from the puncline
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');


}

getjokes();