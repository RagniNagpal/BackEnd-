let box = document.querySelector(".box");
let genbtn= document.querySelector(".btn");
let stop=document.querySelector(".stop");

let colors = ["red", "black" , "blue", "green", "orange","brown","yellow","purple","pink","grey"]
let intervalId = null;
//random sirf 0 ya 1 mei hi no deta h hamko mul karna padega
function randomColor(){
  let index=Math.floor(Math.random()*10);
  let color=colors[index];
  return color;
}

genbtn.addEventListener("click", () => {
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
      box.style.backgroundColor = randomColor();
    }, 1000); 
  });

  stop.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
  });


// stop.addEventListener("click", () => {
//   box.style.backgroundColor = "transparent";
// });









