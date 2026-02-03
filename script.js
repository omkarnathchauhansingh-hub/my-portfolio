// Loader
window.onload = () => {
document.getElementById("loader").style.display="none";
};

// Typing Effect
const text = ["Websites", "UI Designs", "Modern UI"];
let i=0,j=0;
function typing(){
if(j < text[i].length){
document.querySelector(".typing").innerHTML += text[i][j];
j++;
setTimeout(typing,100);
}else{
setTimeout(()=>{
document.querySelector(".typing").innerHTML="";
j=0;
i=(i+1)%text.length;
typing();
},1500);
}
}
typing();

// Dark Light Mode
document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("light");
};