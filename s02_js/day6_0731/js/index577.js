(function(a,b) {
    sum = a+b;
    document.writeln(`함수 실행 결과 : ${sum}`);
} (100,200));

const hi = () => "안녕하세요";

let hi2 = user => {document.writeln(`${user}님 안녕하세요.`)};

let sum2 = (a,b) => a+b;