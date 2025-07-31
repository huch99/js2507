let userNumber = prompt('숫자를 입력하세요.');

if (!isNaN(parseInt(userNumber))) {
    if (userNumber !== null) {
        for (let i = 1; i <= userNumber; i++) {
            if (i%3 !== 0) {
                continue;
            }
            document.querySelector('#result1').innerText += `${i}, `;
        }

        let total = parseInt(userNumber/3);
        document.querySelector('#result2').innerText = `${userNumber}까지의 3의 배수 : ${total}개`;
    }
    else if (userNumber === "") {
        alert('입력이 취소 됐습니다.');
    }
    else {
        alert('입력이 취소 됐습니다.');
    }
}
else {
    alert('숫자가 아닙니다.');
}