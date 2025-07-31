let myData = [
    {singer : "qwer", title : "1", source : "#"},
    {singer : "qwer", title : "2", source : "#"},
    {singer : "qwer", title : "3", source : "#"},
    {singer : "qwer", title : "4", source : "#"},
    {singer : "bts", title : "a", source : "#"},
    {singer : "bts", title : "b", source : "#"},
    {singer : "bts", title : "c", source : "#"},
    {singer : "bts", title : "d", source : "#"},
    {singer : "bts", title : "e", source : "#"},
    {singer : "wing", title : "A", source : "#"},
    {singer : "wing", title : "B", source : "#"},
    {singer : "wing", title : "C", source : "#"},
    {singer : "wing", title : "D", source : "#"},
    {singer : "wing", title : "E", source : "#"}
];

function search() {
    const userSearchV = document.getElementById('search').value.trim();
    const resultContainer = document.getElementById('result');

    // 검색 시작 전에 결과창 비우기
    resultContainer.innerHTML = '';

    // 입력값과 일치하는 데이터 필터링
    const matchedData = myData.filter(item => 
        item.singer.includes(userSearchV) || item.title.includes(userSearchV)
    );

    // 일치하는 항목들이 있다면 iframe 생성
    if (matchedData.length > 0) {
        matchedData.forEach(item => {
            const div = document.createElement('div.box');


            // div.src = item.source; // source 주소 사용
            div.style.border = "1px solid #ccc";
            resultContainer.appendChild(div);

        });
    } else {
        // 일치하는 항목이 없을 경우 메시지
        resultContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
    }
}