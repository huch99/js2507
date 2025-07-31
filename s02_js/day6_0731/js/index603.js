// 1. 달력을 그리기 위한 데이터 준비
const july = [];
for (let i = 1; i <= 31; i++) {
    july.push(`2025-07-${i.toString().padStart(2, '0')}`);
} // july 배열에 자동으로 1일부터 31일까지의 데이터 값 넣기

// 2. 요일의 시작일과 마지막 날짜
const firstDay = new Date('2025-07-01').getDay(); // 일요일(0)부터 시작
const lastDay = 31;

// 3. 표 요소 생성
const table = document.createElement('table');

// 4. 요일 헤더 생성
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const headerRow = document.createElement('tr');
for (let day of daysOfWeek) { // daysOfWeek만큼 반복
    const th = document.createElement('th');
    th.innerText = day;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

// 5. 날짜 채우기
let count = 1;
let totalCells = Math.ceil((firstDay + lastDay) / 7) * 7; // 전체 셀 수 계산
let currentRow = document.createElement('tr');

for (let i = 0; i < totalCells; i++) {
    const td = document.createElement('td');
    // 첫 주의 빈 셀 처리
    if (i < firstDay) {
        td.innerText = ''; // 또는 비워둘 수 있습니다.
    } else if (count <= lastDay) {
        td.innerText = count;
        count++;
    } else {
        td.innerText = ''; // 달이 끝난 후 빈 셀
    }

    currentRow.appendChild(td);

    // 일주일 단위로 tr을 추가
    if ((i + 1) % 7 === 0) {
        table.appendChild(currentRow);
        currentRow = document.createElement('tr');
    }
}

// 마지막 행이 채워지지 않은 경우
if (currentRow.children.length > 0) {
    table.appendChild(currentRow);
}

// 6. 표를 문서에 추가
document.body.appendChild(table);






























// let july = [];

// for (let i = 1; i <= 31; i++) {
//     july.push(`2025-07-${i}`);
// }

// let count = 1;
// let count2 = 0;

// let table = document.createElement('table');
// for (let i = 1; i <= 5; i++) {
//     let tr = document.createElement('tr');
//     let firstDay = new Date('2025-07-01').getDay();
//     let lastDay = 31;
//     for (let j = 1; j <= 7; j++) {

//         let td = document.createElement('td');

//         if (count2 < firstDay) {
//             count2++;
//             continue;
//         }

//         if (count <= lastDay) {
//         td.innerText = `${count}`;
//         count++;
//         count2++;
//         }
//         else {
//             break;
//         }
//     }
//     tr.appendChild(td);
// }
// table.appendChild(tr);