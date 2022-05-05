/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexicStyle = () => {
  let contentElement = document.querySelector("body");
  if (contentElement.className == ''){
    contentElement.className = 'dyslexia-mode';
    
  } else {
    contentElement.className = '';
  }
}  
