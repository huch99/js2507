let x, y, z;
x = 5;
y = 6;
z = x + y;

document.getElementById('demo').innerHTML 
= "The value of z is " + z + ".";


let num0 = parseInt(prompt('숫자 입력'));
let result;

if (num0%3 === 0) {
    result = '3의 배수 입니다.';
}
else {
    result = '3의 배수가 아닙니다.';
}

alert(result);
// 변수 ----------------------
// const : 상수 - 항상 같은 수

// var, let : 변수