//4 pilars of domn
/**
 * 1. Selecting element
 * 2. changing html content
 * 3. changing css 
 * 4. event listenr
 */

var a = document.querySelector("h1")   // 1.
/**
 * queryselector will only select the first element and if there are more than one elem and all are to be selected than we have to use
 * document.querySelectorAll()  this wull select all the element 
 */

a.innerHTML = "GGGGGG"              //2.
a.textContent = "fffff"             // both are used to change html content difference is text content will consider evrything as text whereas innerhtml will convert tags to tags 

a.style.color = "red"               //3.

a.addEventListener("click",function(){      //4.
    a.style.color = "blue"             
})

