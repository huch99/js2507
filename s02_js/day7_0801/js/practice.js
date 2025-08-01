document.addEventListener('DOMContentLoaded', function() {
    const resultDisplay = document.querySelector('#result');

    // 숫자 버튼 및 연산자 버튼 모두 선택
    const buttons = document.querySelectorAll('button');

    // 계산 상태 저장 변수
    let currentInput = '';
    let previousInput = '';
    let currentOperator = '';

    // 버튼별 클릭 이벤트 등록
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            handleButtonClick(event.target.id);
        });
    });

    function handleButtonClick(id) {
        if (id.startsWith('num')) {
            addNumber(document.querySelector('#' + id).textContent);
        } else {
            switch(id) {
                case 'reset':
                    resetCalculator();
                    break;
                case 'sl':
                case 'ab':
                case 'minus':
                case 'plus':
                    addOperator(id);
                    break;
                case 'equ':
                    calculateResult();
                    break;
                case 'dot':
                    addDot();
                    break;
            }
        }
    }

    function resetCalculator() {
        currentInput = '';
        previousInput = '';
        currentOperator = '';
        updateDisplay('');
    }

    function addNumber(num) {
        currentInput += num;
        updateDisplay(currentInput);
    }

    function addOperator(opId) {
        if (currentInput === '') return; // 숫자가 먼저 입력되어야 함

        // 이미 이전 값과 연산자가 있다면 계산 후 새로 할당
        if (previousInput !== '' && currentOperator !== '') {
            calculateResult();
       }
        // 연산자 저장
        if (opId === 'sl') {
            currentOperator = '/';
        } else if (opId === 'ab') {
            currentOperator = '*';
        } else if (opId === 'minus') {
            currentOperator = '-';
        } else if (opId === 'plus') {
            currentOperator = '+';
        }

        previousInput = currentInput;
        currentInput = '';
    }

    function addDot() {
        if (!currentInput.includes('.')) {
            if (currentInput === '') {
                currentInput = '0.';
            } else {
                currentInput += '.';
            }
            updateDisplay(currentInput);
        }
    }

    function calculateResult() {
        let prevNum = parseFloat(previousInput);
        let currNum = parseFloat(currentInput);
        let result = 0;

        if (isNaN(prevNum) || isNaN(currNum)) return;

        switch(currentOperator) {
            case '+':
                result = prevNum + currNum;
                break;
            case '-':
                result = prevNum - currNum;
                break;
            case '*':
                result = prevNum * currNum;
                break;
            case '/':
                if (currNum === 0) {
                    alert('0으로 나눌 수 없습니다.');
                    return;
                }
                result = prevNum / currNum;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        previousInput = '';
        currentOperator = '';
        updateDisplay(currentInput);
    }

    function updateDisplay(value) {
        resultDisplay.textContent = value;
    }
});