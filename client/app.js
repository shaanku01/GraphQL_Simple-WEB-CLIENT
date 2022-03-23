const GraphQL_URL = "http://localhost:9432/";

async function fetchGreeting(){
    const response  = await fetch(GraphQL_URL , {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            query:`
            query{
                greeting
            }
            `
        })
    });

    const {data} = await response.json();
    console.log(data);
    return data;
}


fetchGreeting().then(({greeting})=>{
    const title = document.querySelector('h1');

    title.textContent = greeting;
});