 let heading = document.querySelector("h1");
heading.textContent = "Hello JavaScript!";

alert("JS loaded!");

let btn=document.querySelector("Button");
btn.onclick=function(){
  alert("Button clicked");
  heading.textContent="Om Namah Shivayy";
}