const one = document.querySelector('.elem');
let c = '#3D9DA4';
let count = 1;

one.style.width= '200px';
one.style.paddingBottom ='20px';
one.style.backgroundColor= c;

/*let a = document.createElement('div');
 a.classList.add('newelem');
a.style.backgroundColor= c;
a.style.color='yellow';
a.style.paddingBottom ='20px';
a.style.width= '250px';
a.style.borderRadius= '5px';
a.innerHTML = 'Вставил элемент';

a.style.margin= '20px';
a.onclick = function(){
    alert ('Цвет фона     ' + c);
}

document.querySelector('.hostElt').appendChild(a);*/

let  ne = document.querySelectorAll('.newelem');




const col = document.querySelector('.colrize');
col.style.margin= '20px';
col.style.value=c;
col.onchange = function(){
    let c = col.value; 
     one.style.backgroundColor =c;
 //   a.style.backgroundColor =c;
    creat.style.backgroundColor =c;
    //ne.style.backgroundColor =c;
    for(let i =0; i< ne.length; i++){
    ne[i].style.backgroundColor =c;
       }
     for(let k =0; k< ne.length; k++){
    bt[k].style.backgroundColor =c;
    }
}

const bt = document.querySelectorAll('.btn');
for(let k =0; k< bt.length; k++){
   bt[k].style.backgroundColor =c;
   bt[k].style.color = 'yellow';
    bt[k].style.width= '60px';
    bt[k].style.height= '60px';
    }

const creat = document.querySelector('.creat'); 
  for (let a=1;a<=10; a++){
      let n_col =col.value;
      let d = document.createElement('div');
       d.classList.add('newelem');
       d.style.backgroundColor= n_col;
        d.style.color='yellow';
      // d.style.paddingBottom ='20px';
        d.style.borderRadius= '5px';
        d.style.width= '18%';
        d.style.height= '35px';
        d.style.margin= '1px'
        d.style.float= 'left';
         d.style.cursor= 'pointer';
        d.innerHTML = count;
        count = count +1;
       document.querySelector('.hostElt').appendChild(d);
        ne = document.querySelectorAll('.newelem');
}


function handleClick(event) {
        const currentPal = event.currentTarget;
        console.log (currentPal.textContent);
      /*  currentPal.style.height= '0px';
        currentPal.style.width='0px';
        currentPal.style.opacity=0;
         currentPal.style.transitionDuration = '500ms';
         currentPal.style.position='fixed';*/
         currentPal.style.backgroundColor='red';
         //currentPal.classList.add('hide');
        // currentPal.classList.remove('newelem'); 
}

ne.forEach (pallet =>{
    pallet.addEventListener('click', handleClick)
});
 
 delpallet= document.querySelector('.delet'); 
 delpallet.addEventListener('click', delPalette);


function delPalette() {
  creatpallet.removeAttribute('disabled');
let  hi = document.querySelectorAll('.hide');
console.log(hi);
console.log((10-hi.length));
for (let i=0;i<10;i++){
  if ((10-hi.length) == i+1){
    console.log(ne[i].textContent);
    ne[i].classList.add('hide');
    if ((10-hi.length) ==1){delpallet.setAttribute('disabled', true)}
 
  }
 }
}

creatpallet= document.querySelector('.creat'); 
creatpallet.addEventListener('click', creatPalette);


function creatPalette() {
  delpallet.removeAttribute('disabled');
let  hi = document.querySelectorAll('.hide');
console.log(hi);
console.log((10-hi.length));
for (let i=0;i<10;i++){
  if ((10-hi.length) == i){
    console.log(ne[i].textContent);
    ne[i].classList.remove('hide');
    if ((10-hi.length) ==9){creatpallet.setAttribute('disabled', true)}
  }
 }
}
