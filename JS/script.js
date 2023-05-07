//const toggleButton = document.getElementsByClassName('toggle-button')[0]
//const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//toggleButton.addEventListener('click', () => {
//  navbarLinks.classList.toggle('active')
//

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h9").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

//const blob = document.getElementById("blob");

//window.onpointermove = event => { 
//  const { clientX, clientY } = event;
//  
 // blob.animate({
//    left: `${clientX}px`,
//    top: `${clientY}px`
//  }, { duration: 3000, fill: "forwards" });
//}

var CoCe = document.getElementById('CC');

function openCC() {
  CC.top = '0';
  CoCe.style.opacity = '1';
  CoCe.style.zIndex = '0';
  CoCe.style.backdropFilter = 'blur(10px)';
  body.transform = 'scale(0.9)';
  dock.transform = 'scale(0.9)';
  app.transform = 'scale(0.9)';
  trig.padding = '20px 20px';
  trig.width = '275px';
  batteryDisplay.style.fontWeight = '900';
  batteryDisplay.style.fontSize = '15px';
  icon1.style.height = '30px';
  icon2.transform = 'scale(1.4)';
  icon2.margin = '6px';
}
CoCe.addEventListener('wheel', async function () {
  await delay(100);
  if (document.getElementById('top').getBoundingClientRect().y < 0) {
      trig.backdropFilter = 'blur(20px)';
      trig.borderBottom = '1px #fff2 solid';
      trig.borderRadius = '0px';
  }
  else {
      trig.backdropFilter = '';
      trig.borderBottom = '';
      trig.borderRadius = '4px';
  }
});
function closeCC() {
  CC.top = '-100%';
  CoCe.style.opacity = '0';
  CoCe.style.zIndex = '-1';
  body.transform = 'scale(1)';
  dock.transform = 'scale(1)';
  app.transform = 'scale(1)';
  trig.padding = '0';
  trig.margin = '0';
  trig.width = '';
  trig.backdropFilter = '';
  trig.borderBottom = '';
  trig.borderRadius = '4px';
  batteryDisplay.style.fontWeight = '500';
  batteryDisplay.style.fontSize = '11px';
  icon1.style.height = '20px';
  icon2.transform = 'scale(1)';
  icon2.margin = '2px';
}