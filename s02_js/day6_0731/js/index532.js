let userNumber = parseInt(prompt('50 미만의 숫자 입력'));
let userNumber2 = parseInt(prompt('50 미만의 숫자 입력'));

if (userNumber < 50 && userNumber2 < 50) {
    alert('두 숫자 모두 50보다 작은 숫자입니다.');
}
else {
    alert('조건에 맞지 않는 숫자가 있습니다.');
}
// and연산자를 사용해 조건 체크하기