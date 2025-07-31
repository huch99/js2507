let num1;
let num2;

function addNumber(num1, num2) {
    num1 = parseInt(prompt('숫자입력'));
    num2 = parseInt(prompt('숫자입력'));
    let sum = num1 + num2;
    document.querySelector('#result').innerHTML = (`두 수를 더한 값 : ${sum}`);
    

    
}
