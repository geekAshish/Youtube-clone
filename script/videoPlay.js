let videoPlay = () =>{
    let dataFromLS = JSON.parse(localStorage.getItem("localData"));
    let video_id = dataFromLS.id.videoId
    let play_video = document.querySelector("#play_video");
    play_video.src = `https://www.youtube.com/embed/${video_id}`

}

// my all default data

const API_KEY = "AIzaSyC3GbAOoBjJqxrBVXQGGZkI-0dBoyjPQLA"

let getHomePageData = async () =>{
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&topicId=%20most%20popular%20videos%20in%20India.&key=${API_KEY}`

    let res = await fetch(url);
    let data = await res.json()
    appendData(data.items)
}
getHomePageData()





let appendData = (data)=>{
    let container = document.querySelector("#container");
    data.forEach((el)=>{
        let avtar = document.createElement("img");
        avtar.src = el.snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = el.snippet.title

        let div = document.createElement("div");
        div.setAttribute("class","video");
        div.addEventListener("click",()=>{
            redirect(el);
        })

        div.append(avtar,title);
        container.append(div);
    })
    
}

let redirect = (el)=>{
window.location.href = "index.html"
}

