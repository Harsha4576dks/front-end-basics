async function get_Joke(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    console.log(`${data.setup} - ${data.punchline}`);

}
get_Joke();