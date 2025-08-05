const d= document;


const div1 = d.querySelector('#div1');


const para = d.createElement('p');
const node = d.createTextNode('새로운 문단');

para.appendChild(node);
div1.appendChild(para);

