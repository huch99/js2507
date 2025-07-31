let fromNum = document.getElementById('from');
let toNum = document.getElementById('to');

function fromTo(fromNum, toNum) {
    if (fromNum.value > toNum.value) {
        document.getElementById('result').innerText = "입력값이 올바르지 않습니다."
    }
    else {
        let sum = 0;
        for (let i = parseInt(fromNum.value); i <= parseInt(toNum.value); i++) {
            sum += i;
        }
        document.getElementById('result').innerText = `${fromNum.value}부터 ${toNum.value}까지 더한 값은 : ${sum}`;
    }
}