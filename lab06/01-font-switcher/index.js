const makeBigger = () => {
   let contentElement = document.querySelector(".container"); 
   let contentStyle = contentElement.style;
   let computeFontSize = parseFloat(
      contentElement.style.fontSize = getComputedStyle(contentElement).getPropertyValue("font-size")
   );
   contentElement.style.fontSize = computeFontSize + 2 + "px";
   
};

const makeSmaller = () => {
   let contentElement = document.querySelector(".container"); 
   let contentStyle = contentElement.style;
   let computeFontSize = parseFloat(
      contentElement.style.fontSize = getComputedStyle(contentElement).getPropertyValue("font-size")
   );
   contentElement.style.fontSize = computeFontSize - 2 + "px";
   
};


// document.querySelector('#a1').addEventListener('click', makeBigger);
// document.querySelector('#a2').addEventListener('click', makeSmaller);
