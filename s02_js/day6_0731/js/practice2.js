const aside = document.querySelector('div.aside');

function makeMenu() {
    
    if (window.innerWidth < 600) {
        if (aside.style.width === '0' || aside.style.width === '' || aside.style.width === '0px') {
            aside.style.width = '150px';
        } else {
            aside.style.width = '0';
        }
    } else {
         if (aside.style.width === '0' || aside.style.width === '' || aside.style.width === '0px') {
            aside.style.width = '200px';
        } else {
            aside.style.width = '0';
        }
    }


}