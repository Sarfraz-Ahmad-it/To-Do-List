let inputs = document.getElementById('input');
let text = document.querySelector('.text');
let button = document.querySelector('button');

button.addEventListener('click', ()=>{
   if(inputs.value == ""){
    alert("please enter something! ")
   }
   else{
    let newEle = document.createElement('ul');
    newEle.innerHTML= `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle); 
    inputs.value ="";
    newEle.querySelector('i').addEventListener('click',()=>{
        newEle.remove();
    })  

   }
})      