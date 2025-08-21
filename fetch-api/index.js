const btn=document.getElementById("button");
const joke=document.getElementById("joke");
const API="Tk9Wxcp+R/9ubJNZ2Z75zw==mk8I6xXCE0RFgFNm";

const option={
    method:"GET",
    headers:{
        "X-Api-Key":API,
    },
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes";

btn.addEventListener("click",()=>{
 async function getJoke(){
    
    try{
        joke.innerHTML="Updating";
    let fetch_data= await fetch(apiurl,option);
    let data= await fetch_data.json();
       joke.innerHTML=data[0].joke;
    }catch(e){
           joke.innerHTML="Error is ocuuring"
    }
    
}
getJoke();
})