let button = document.getElementById("but")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>lladshfhdshflkjsdhfhsdafhdlkhflahsdlfhsdkhfkhdaskfhksdhfkhdlhfljajshdflkjhdsjhfhdsfhdaslhflkhzhdkfhsalkdhfljkdshfhslahfiwrjhfiudshfhiuwefkjhdlshfjhdhfkljdhfhdshflahsdflhlsdahflhdslafhlhdsalkfhkahdsfkhdskjfhhdsalfhkjhsf</b> hey this is my bd"
})
button.addEventListener("contextmenu", ()=>{
   alert("right click to change contant")
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode);
    
})