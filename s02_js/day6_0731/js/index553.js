let userNumber = prompt('숫자를 입력하세요.');

if (!isNaN(userNumber)){
    if (userNumber !== null) {
    if(parseInt(userNumber)%4 === 0) {
        document.querySelector('#result').innerHTML 
        = `${userNumber}은(는) 4의 배수 입니다.`
    }
    else if (userNumber == "") {
        alert('입력이 취소 됐습니다.');
    }
    else {
        document.querySelector('#result').innerHTML
        = `${userNumber}은(는) 4의 배수가 아닙니다.`
    }
} else {
    alert('입력이 취소 됐습니다.');
}
} 
else {
    alert('숫자가 아닙니다.');
}

