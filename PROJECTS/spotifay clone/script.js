console.log("loading")

const playsong =  (track)=>{
    // let audio = new Audio("/music/" + track)
    currentsong.src = "/music/" + track
    currentsong.play() 
}
let currentsong = new Audio() 

async function getsongs(){
    let a = await fetch("http://127.0.0.1:5500/music/")
    let response = await a.text()
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
for (let index = 0; index < as.length; index++) {
    const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/music/")[1])
        }
}
return songs
}
async function main(){

    let songs = await getsongs()
    console.log(songs)
let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
for (const song of songs) {
    songul.innerHTML = songul.innerHTML + `<li>
    <img src="music-svgrepo-com.svg"><div class="info">${song.replaceAll("%2"," ",).replaceAll("0"," ")}</div> <img src="play-button-svgrepo-com.svg"></li> `   
}
 Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click", element=>{
        console.log(e.querySelector(".info").innerHTML)
        playsong(e.querySelector(".info").innerHTML.trim())
    })
 })

}

main()

let playbtn = document.querySelector(".play").getElementsByTagName("img")
playbtn.addEventListener("click", ()=>{
if (Audio.paused) {
    Audio.play()
}
})