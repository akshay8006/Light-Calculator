let btn=document.querySelectorAll('.btn');
let result=document.querySelector('input');
btn.forEach(element =>element.addEventListener('click',()=>{
result.value +=element.textContent;
if(element.textContent=='AC'){
  result.value='';}
let calc=document.querySelector('.equal');
calc.addEventListener('click',()=>{
result.value=eval(result.value);
})
}));
