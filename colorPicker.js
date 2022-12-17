//Making a color picker
let clearBtn = document.getElementById("clearbtn");
let hexaNumber = document.getElementById('hexanumber');
let color = document.getElementById('color'); 
color.addEventListener('input', function(){
    let inputColor = color.value;
    hexaNumber.value = inputColor;
    document.getElementById("EmadAdil").style.color =inputColor ;

}) 
clearBtn.addEventListener('click',()=>{
    hexaNumber.value = '' ;
    document.getElementById("EmadAdil").style.color ='black' ;
})