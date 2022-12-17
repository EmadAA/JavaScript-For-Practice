let section = document.querySelector(".sec");
section.style.textAlign = "center";
section.style.marginTop = "50px"; 

let name= document.getElementById("name");
let age= document.getElementById("age");
let position= document.getElementById("position");
let skills= document.getElementById("skills");
let paraGraph = document.getElementById("textArea"); 
paraGraph.style.height ="250px";
paraGraph.style.width ="90%";
paraGraph.style.textAlign ="center";
paraGraph.style.border ="1px solid black";




let textArea = document.getElementById("textArea");
let btn= document.getElementById("btn");
btn.addEventListener("click", ()=>{
    textArea.innerHTML =` I am ${name.value} . I am ${age.value} years old. I am a  ${position.value} . I am skilled at ${skills.value} `;
});