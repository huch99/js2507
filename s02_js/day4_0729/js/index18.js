let now = new Date();
document.querySelector('#now').innerHTML = now;

document.querySelector('#localNow').innerHTML = `현재 시각은 ${now.toLocaleString()}`;

// 배열

let arr1 = new Array(); //배열의 크기를 지정하지 않음
let arr2 = new Array(4); //배열의 크기를 지정함
let arr3 = ["one","two","three","four"];
let arr4 = Array("one","two","three", "four");

for (let i = 0; i < arr3.length; i++) {
    document.querySelector('#arrayArea').innerHTML
    += `<p>${arr3[i]}</p>`;
}

// concat : 기존 배열에 요소를 추가해 새로운 배열을 생성.
let arr5 = arr4.concat("five");
for (let i = 0; i <arr5.length; i++) {
    document.querySelector('#result').innerHTML
    += arr5[i]; 
}
document.querySelector('#result').innerHTML += " : concat()";

// every : 배열의 모든 요소가 주어진 함수에 대해 참이면 true, 그렇지 않으면 false를 반환.
let arr6 = [1,2,3,4,5,6];
const allEven = arr6.every(function(num) {
    return num % 2 === 0 ; //모든 요소가 2의 배수인지 검사
});
document.querySelector('#result2').innerHTML
= allEven + " : every()";

// filter : 배열 요소 중에서 주어진 필터링 함수에 대해 true인 요소만 골라 새로운 배열을 만듭니다.
let arr7 = [1,2,3,4,5,6];
const allOdd = arr7.filter(function(num){
    return num%2 !== 0 ;
});
document.querySelector('#result3').innerHTML
= allOdd + " : filter()";

// forEach : 배열의 모든 요소에 주어진 함수를 실행.
arr7.forEach(function(num) {
    document.querySelector('#result4').innerHTML 
    += num;
})
document.querySelector('#result4').innerHTML += " : forEach()"

// indexOf : 주어진 값과 일치하는 값이 있는 배열 요소의 첫 인덱스를 찾습니다.
let indOf = arr7.indexOf(4);
document.querySelector('#result5').innerHTML
= `${arr7[indOf]}는 ${indOf}번째 자리에 있습니다. : indexOf()`;

// join : 배열 요소를 문자열로 합칩니다. 이 때 구분자를 지정할 수 있습니다.
let joinIn = arr7.join(",");
document.querySelector('#result6').innerHTML
= joinIn + " : join()";

// push : 배열의 맨 끝에 새로운 요소를 추가한 후 새로운 length를 반환합니다.
arr7.push(7);
for (let i = 0; i < arr7.length; i++) {
    document.querySelector('#result7').innerHTML
    += arr7[i];
}
document.querySelector('#result7').innerHTML
+= " : push()";

// unshift : 배열의 시작 부분에 새로운 요소를 추가합니다.
arr7.unshift(0);
for (let i = 0; i < arr7.length; i++) {
    document.querySelector('#result8').innerHTML
    += arr7[i];
}
document.querySelector('#result8').innerHTML
+= " : unshift()";

// pop : 배열의 마지막 요소를 꺼내 그 값을 결과로 반환합니다.
let arPop = arr7.pop();
document.querySelector('#result9').innerHTML 
= arPop + " : pop()"; // length 반환됨

// shift : 배열의 첫 번째 요소를 꺼내 그 값을 결과로 반환합니다.
let arShift = arr7.shift();
document.querySelector('#result10').innerHTML
= arShift + " : shift()"; // length 반환됨

// splice : 배열에 요소를 추가하거나 삭제합니다.
let splice1 = arr7.splice(3) //index 3번 부터 모두 삭제
for (i = 0; i< arr7.length; i++) {
    document.querySelector('#result11').innerHTML += arr7[i];
}

document.querySelector('#result11').innerHTML += ",";

for (let i = 0; i< splice1.length; i++) {
    document.querySelector('#result11').innerHTML += splice1[i];
}

document.querySelector('#result11').innerHTML += ",";

let splice2 = splice1.splice(0,2) // 0번부터 2개 삭제

for (let i = 0; i< splice1.length; i++) {
    document.querySelector('#result11').innerHTML += splice1[i];
}

document.querySelector('#result11').innerHTML += ",";

for (let i = 0; i< splice2.length; i++) {
    document.querySelector('#result11').innerHTML += splice2[i];
}

document.querySelector('#result11').innerHTML += ",";

let splice3 = arr7.splice(1,2,9,0); // 1번부터 2개 삭제하고 그 자리부터 추가
for (let i = 0; i< arr7.length; i++) {
    document.querySelector('#result11').innerHTML += arr7[i];
}

document.querySelector('#result11').innerHTML += " : splice()";

// slice : 배열에서 특정한 부분만 잘라 냅니다.
let slice11 = arr6.slice(2,4);
for (let i = 0; i< arr6.length; i++) {
    document.querySelector('#result12').innerHTML += arr6[i];
}

document.querySelector('#result12').innerHTML += ",";

for (let i = 0; i< slice11.length; i++) {
    document.querySelector('#result12').innerHTML += slice11[i];
}

document.querySelector('#result12').innerHTML += " : slice()";// 꺼내기만 하고 배열 바꾸지 않음

// reverse : 배열의 배치 순서를 역순으로 바꿉니다.
arr6.reverse();
for (let i = 0; i< arr6.length; i++) {
    document.querySelector('#result13').innerHTML += arr6[i];
}
document.querySelector('#result13').innerHTML += " : reverse()";

// sort : 배열 요소를 지정한 조건에 따라 정렬합니다.
let arr8 = [1,3,2,4,8,9,7];
arr8.sort();
for (let i = 0; i< arr8.length; i++) {
    document.querySelector('#result14').innerHTML += arr8[i];
}

arr8.sort((a,b) => b-a);

document.querySelector('#result14').innerHTML += ",";

for (let i = 0; i< arr8.length; i++) {
    document.querySelector('#result14').innerHTML += arr8[i];
}
document.querySelector('#result14').innerHTML += " : sort()";

// toString : 배열에서 지정한 부분을 문자열로 반환합니다. 이 때 각 요소는 쉼표(,)로 구분합니다.
arr8.toString();
document.querySelector('#result15').innerHTML = arr8 + " : toString()";

//------------------------------------------------------------------------------

let now2 = new Date('2024-02-25T18:00:00');
document.querySelector('#dateThe').innerHTML = now2;

let firstDay = new Date('2025-07-16');

let toFirst = firstDay.getTime();
let toNow = now.getTime();
let passedTime = toNow - toFirst;

passedTime = Math.round(passedTime/(1000*60*60*24));

document.getElementById('dday').innerHTML = passedTime;

//------------------------------------------------------------------------------

let people = parseInt(prompt('응모 인원 수'));
let picked = Math.floor(Math.random()*people)+1;

document.querySelector('#people').innerHTML = people;
document.querySelector('#picked').innerHTML = picked;

//------------------------------------------------------------------------------

let scWid = screen.availWidth;
let scHei = screen.availHeight;

function openCenter(doc, win, width, height) {
    let left = (scWid - width) /2;
    let top = (scHei - height) /2;
    let opt = `left=${left}, top=${top}, width=${width}, height=${height}`;
    window.open(doc,win,opt);
}

openCenter('./index_re.html','',500, 400);