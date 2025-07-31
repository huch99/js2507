let userNumber3 = parseInt(prompt('50 미만인 숫자 입력'));
let userNumber4 = parseInt(prompt('50 미만인 숫자 입력'));

if (userNumber3 < 10 || userNumber4 < 10) {
    alert('두 숫자 중 적어도 하나는 10보다 작은 숫자입니다,');
}
else {
    alert('두 숫자 모두 10보다 큽니다.');
}
// or연산자를 사용해 조건 체크하기 530~531p
