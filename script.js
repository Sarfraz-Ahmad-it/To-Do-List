let inputs = document.getElementById('inputt');
let text = document.querySelector('.text');
let button = document.querySelector('button');
let un = document.querySelector('ul');

button.addEventListener('click', ()=>{
   if(inputs.value == ""){
    alert("please enter value")
   }
   else{
    text.innerHTML = inputs.value;
   }
})