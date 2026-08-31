async function biodata(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers:{
            "content-type":"aplication/json",
        },
        body: JSON.stringify({
            title:"my first API post",
            body:"learning API's with javascript",
            userid:1
        })
    });

    const newpost = await response.json();
    console.log(newpost)
}
biodata();