/* async function get_Joke(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    console.log(`${data.setup} - ${data.punchline}`);

}
get_Joke(); 

async function intro(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data  = await response.json();
    console.log(data);    
}
intro();
*/

async function animal(){
    const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Elephant");
    const mammal = await response.json();
    console.log(mammal);
}

animal();