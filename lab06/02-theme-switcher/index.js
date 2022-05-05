/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeColorDesert = () => {
   let contentElement = document.querySelector("body"); 
   let bodyStyle = contentElement.style;
   contentElement.className = 'desert';
   console.log(bodyStyle);


}

const changeColorOcean = () => {
   let contentElement = document.querySelector("body"); 
   let bodyStyle = contentElement.style;
   contentElement.className = 'ocean';
   console.log(bodyStyle);

}  

const changeColorHighContrast = () => {

   let contentElement = document.querySelector("body"); 
   let bodyStyle = contentElement.style;

   contentElement.className = 'high-contrast';
   console.log(bodyStyle);

}  

const changeColorDefault = () => {
   let contentElement = document.querySelector("body"); 
   let bodyStyle = contentElement.style;
   
   contentElement.className = '';
   console.log(bodyStyle);

}  