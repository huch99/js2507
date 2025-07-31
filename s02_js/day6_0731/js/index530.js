let userNumber2 = prompt('숫자를 입력하세요.');

if (userNumber2 !== null) {
    (parseInt(userNumber2)%3 === 0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.');
}
else {
    alert('입력이 취소 됐습니다.');
}
// ?조건 연산자를 사용해 3의 배수 확인하기 530p