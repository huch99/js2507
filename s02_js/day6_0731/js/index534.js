// switch문으로 조건 체크하기

let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

switch(session) {
    case "1" :
    case "마케팅" :
    document.writeln('<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>');
    break;

    case "2" :
    case "개발" : 
    document.writeln('<p>개발 세션은 <strong>202호</strong>에서 진행됩니다.</p>');
    break;

    case "3" :
    case "디자인" : 
    document.writeln('<p>디자인 세션은 <strong>203호</strong>에서 진행됩니다.</p>');
    break;

    default : alert('잘못 입력했습니다.');
}