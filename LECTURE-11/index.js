//accessing dom element
// 1. using id
// 2. using class
// 3. using tag
// 4. queryselector/querySelectorAll

// const { Children } = require("react");

// let el1=document.getElementById("heading");
// console.log(el1);

// let el2=document.getElementsByClassName("item");
// console.log(el2); //collection
// console.log(el2[0]); //collection

// let el3=document.getElementsByTagName("p");
// console.log(el3);//collection (p bhi bohot ho sakte h)
// //agar ek paar hota to bhi collection hi aata 
// console.log(el3[0]);

let el4=document.querySelector("p");
console.log(el4);  //element milega

let el7=document.querySelector(".item");
console.log(el7); // non collection

let el6=document.querySelectorAll(".item");
console.log(el6);  //collection

//properties

/*
element ke upar data set ya get karna (getter aur setter dono hai ye)
innerText
innerHTML
textContent
*/

let ul=document.getElementById("container");

let data=el4.innerText;
console.log(data);
el4.innerText="changed using js";

let data2=ul.innerHTML;
console.log(data2);

let data3=ul.innerText;
console.log(data3);

let data4=ul.textContent;
console.log(data4);

//setters
//override
// ul.innerHTML=` <li class='item'>item 4</li>  <li class='item'>item 5</li>`

//append
ul.innerHTML+=` <li class='item'>item 4</li>  <li class='item'>item 5</li>`

/*
getAttribute
setAttribute
classList
*/

let el5=document.querySelector(".item");
console.dir(el5.getAttribute("id"));
console.dir(el5.getAttribute("class"))
el5.setAttribute("id","js")
console.log(el5.getAttribute("id"));
console.dir(el5) //hr baari object form mai element milega 

console.dir(el5)
console.log(el5.classList) // gives all classes 
console.log(el5.classList.contains("delete"));
el5.classList.add("delete");
console.log(el5.classList.contains("delete"));
el5.classList.remove("item");
console.log(el5.classList);

//Toggle --> agr class nhi h toh add krdega or agr class hai toh remove krdega


//SYNTAX TO ADD EVENT 
// Element.addEventListener("event name",function(){

// })