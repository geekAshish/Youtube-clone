
const API_KEY = "AIzaSyBa619vhVbZjJNx7B7P2UJQvMtc7W0gnRE"
 let searchFun = (event) => {
    let query = document.querySelector("#query").value;
    getData(query)
    let container = document.querySelector("#container");
    container.innerHTML = null
     let title = document.querySelector("h2");
     title.innerText = `Your Search ${query}`;
}

let getData = async (query) =>{

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`;

    let res = await fetch(url);
    let data = await res.json();
    appendData(data.items)
    filter(data.items)
    console.log(data)
    
}

let appendData = (data)=>{
    let container = document.querySelector("#container");
    container.innerHTML = null
    data.forEach((el)=>{
        let avtar = document.createElement("img");
        avtar.src = el.snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = el.snippet.title

        let div = document.createElement("div");
        div.setAttribute("class","video");
        div.addEventListener("click",()=>{
            videoPlay(el);
        })

        div.append(avtar,title);
        container.append(div);
    })
    
}

let videoPlay = (data) =>{
    localStorage.setItem("localData",JSON.stringify(data));
    window.location.href = "vedioPlay.html"
}




let getHomePageData = async () =>{

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=%20most%20popular%20videos%20in%20India&key=${API_KEY}`

    let res = await fetch(url);
    let data = await res.json()
    appendData(data.items)
    console.log(data.items)
}
getHomePageData()



let filter = (g) =>{
    console.log(g)

}
document.querySelector("#filterId").addEventListener("click",filter);


