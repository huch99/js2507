let userNumber = prompt('숫자 입력');

if (userNumber === "") {
    alert('입력이 취소 됐습니다.')
}
else if (userNumber !== null) {
    if (parseInt(userNumber)%3 === 0) {
        alert('3의 배수입니다.');
    }
    else {
        alert('3의 배수가 아닙니다.');
    }
}
else {
    alert('입력이 취소 됐습니다.');
}
// 3의 배수 확인하기2 529p