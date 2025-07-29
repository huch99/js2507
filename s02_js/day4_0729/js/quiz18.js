setInterval(displayNow, 1000);

function displayNow() {
    let now = new Date();
    let now2 = now.toLocaleTimeString();
    document.querySelector('#current').innerHTML = now2;
}

let scWid = screen.availWidth;
let scHei = screen.availHeight;

function openCenter(doc,win,width,height) {
    let left = (scWid - 400)/2;
    let top = (scHei - 300)/2;
    let opt = `left=${left}, top=${top}, width=400, height=300`;

    window.open(doc,win,opt);
}

openCenter('./index18.html','','');