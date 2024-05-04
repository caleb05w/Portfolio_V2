// main.js

document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}


//document.getElementById("change").addEventListener("click", myFunction());
//document.getElementById("change").addEventListener("mouseover", function() {subtext_open()});
//document.getElementById("area").addEventListener("mouseout", subtext_close());



//test
function myFunction() {
  alert("Hello! I am an alert box!");
}

// //return any .images class that also has the .js class.
// var images = document.querySelector('.container-flex .thumbnail-row-container');
// images.addEventListener('click', changeDefOver);
// // images.addEventListener('mouseout', changeDefOut);

// function changeDefOver(e) {
//   //e.target.classList.toggle('container-showcase');
// myFunction();
// }

// function changeDefOut(e) {
//   e.target.classList.toggle('opacity-toggle');
// }


let enlarged=0;


document.getElementById("Home_button").addEventListener("mouseover", Home_text);
document.getElementById("Home_button").addEventListener("mouseout", default_text);

function Home_text() {
  document.getElementById("Home_button_cover").style.cssText =`
  transform: translate(+100%, 0);
  transition: ease-in-out 0.4s;
  `
}

function default_text() {
  document.getElementById("Home_button_cover").style.cssText =`
  transform: translate(0%, 0);
  transition: ease-in-out 0.4s;
  `
}

function toggleEnlargeImg(img) {
     if (enlarged===0){
       img.style.cssText =`
       transform: scale(0.9);
       height: 110%;
       width: 110%;
       position: fixed;
       margin: auto;
       top: -3%;
       left: -5%;
       z-index: 4;
       cursor: pointer;
       overflow: hidden;;
       `;
       img.style.transition =
       "ease-in-out 0.2s";
       enlarged = 1;
       img.classList.remove("withHover");

       document.getElementById("page-opacity").style.cssText =`
       height: 100vh;
       width: 100%;
       opacity: 80%;
       background-color: black;
       position: fixed;
       z-index: 4;
       margin: 0;
       `;
       
     }
     else{
       img.style.cssText =`
       height: relative;
       width: relative;
       background-color: black;
       overflow: hidden;
       cursor: pointer;
       `
       img.style.transition =
       "transform 0.25s ease";
       enlarged = 0;

       document.getElementById("page-opacity").style.cssText =`
       z-index: 4;
       position: fixed;
       height: 0%;
       width: 0%;
       `;
     }
     return enlarged;
  }


//page transitions
window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.margin = 0;
})