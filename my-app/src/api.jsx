const BASE_URL="https://jsonplaceholder.typicode.com";

export async function getdata(endpoint){
    const response=await fetch(`${BASE_URL}/${endpoint}`);
    if(!response.ok){
        throw new Error(`HTTP ERROR! STATUS:${response.status}`);
    }
    return await response.json();
}

export async function postdata(endpoint,body) {
    const response=await fetch(`${BASE_URL}/${endpoint}`,{
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body),
    });
    if(!response.ok){
        throw new Error(`POST failed! Status:${response.status}`);
    }
    return await response.json();
}