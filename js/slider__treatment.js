

let itemTreament = document.querySelectorAll('.item__treatment');
const itemLengthTreament = itemTreament.length;
// console.log(itemLength);

const rightArrow__treatment = document.querySelector("#rightArrow__treatment");
const leftArrow__treatment = document.querySelector("#leftArrow__treatment");
let slider = [];

for (let i = 0; i<itemLengthTreament; i++) {
  slider[i] = item[i];
  // console.log(slider[i]);
  item[i].remove();
}
let step = 0;
let offset = 0;

function burgerSlider() {
  let div = document.createElement('div');
  div = slider[slider.length-1];
  div.classList.add('item__treatment');
  div.style.left = -250 + 'px';
  // console.log(div);
  document.querySelector('.items__treatment').appendChild(div); 
  
  
  div = slider[step];
  div.classList.add('item__treatment');
  div.style.left = offset*250 + 'px';
  // console.log(div);
  document.querySelector('.items__treatment').appendChild(div); 
  div = slider[step+1];
  div.classList.add('item__treatment');
  div.style.left = offset*250 + 250 + 'px';
  // console.log(div);
  document.querySelector('.items__treatment').appendChild(div); 
  offset = 1;
  
}
function burgerSliderL() {
  console.log(step);
  if (step == (slider.length-1)) {
    step = 1;
  } else {
    if (step == (slider.length-2)) {
      step = 0;
    } else {
      step = (step +2);
    }
  }
  console.log(step);
  let div = document.createElement('div');
  div = slider[step];
  div.classList.add('item__treatment');
  div.style.left = offset*250 + 'px';
  // console.log(div);
  document.querySelector('.items__treatment').appendChild(div); 
    
  if (step == 0) {
    step = (slider.length-1);
  } else {
    step = (step - 1);
  }
  console.log(step);
  offset = 1;
}

function left() {
  leftArrow__treatment.onclick = null;
  // 
  let slider2 = document.querySelectorAll('.item__treatment');
  let offset2 = -1;
  // console.log(slider2.length);
  for (let i = 0; i<slider2.length; i++) {
    slider2[i].style.left = offset2*250 - 250 + 'px';
    offset2 ++;
  }
  setTimeout(function() {
    slider2[0].remove();
    burgerSliderL();
    leftArrow__treatment.onclick = left;
  }, 100);
  
}

function burgerSliderR() {
  console.log(step);
  if (step == 0) {
    step = (slider.length-2);
  } else {
    if (step == 1) {
      step = (slider.length-1);
    } else {
      step = (step -2);
    }
  }
  console.log(step);
  let offset = -1;
  let div = document.createElement('div');
  div = slider[step];
  div.classList.add('item__treatment');
  div.style.left = offset*250 + 'px';
  // console.log(div);
  document.querySelector('.items__treatment').insertBefore(div, items.firstElementChild);
  if (step == (slider.length-1)) {
      step = 0;
   } else {
     step = (step+1);
   }
  console.log(step);
  offset = 1;
}

function right() {
  rightArrow__treatment.onclick = null;
  
  let slider2 = document.querySelectorAll('.item__treatment');
  let offset2 = (slider2.length-1);
 
  for (let i = (slider2.length-1); i>=0; i--) {
    slider2[i].style.left = offset2*250 + 'px';
    offset2 --;
  }
  setTimeout(function() {
    slider2[(slider2.length-1)].remove();
     burgerSliderR();
     rightArrow__treatment.onclick = right;
  }, 100);
}


burgerSlider();
step = 0;

leftArrow__treatment.onclick = left;
rightArrow__treatment.onclick = right;
