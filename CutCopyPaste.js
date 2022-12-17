//Cut COpy Paste start here   

//Copy Section

let copyText = document.getElementById('CopyText');
let copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyText.value);
    alert('Copy Successful')
})

//Cut Section
let cutText = document.getElementById('CutText');
let cutBtn = document.getElementById('cutBtn');
cutBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(cutText.value);
    cutText.value="";
})

//Paste Section
let pasteText = document.getElementById('PasteText');
let pasteBtn = document.getElementById('pasteBtn');
pasteBtn.addEventListener('click', ()=>{
    pasteText.value="";
    navigator.clipboard.readText()
    .then((txt)=>{
        pasteText.value= txt;
    })
    
})

//Cut COpy Paste end here 