let info = [
    { seats: 50, id: 'place1', rows: 5 },
    { seats: 70, id: 'place2', rows: 8 },
    { seats: 110, id: 'place3', rows: 10 }
];

function seat(event) {
    const clickedLi = event.target;
    const liId = clickedLi.id;

    // 해당 id에 맞는 데이터 찾기
    const placeData = info.find(item => item.id === liId);
    if (!placeData) return; // 데이터 없으면 종료

    const { seats, rows } = placeData;

    // seat 컨테이너 초기화
    const seatDiv = document.querySelector('#seat');
    seatDiv.innerHTML = '';

    // 테이블 생성
    const table = document.createElement('table');
    let count = 1;

    // 열수 계산
    const cols = seats % rows === 0 ? seats / rows : Math.ceil(seats / rows);
    let totalSeats = seats;
    let seatsFilled = 0;

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');

            if (seatsFilled < totalSeats) {
                td.innerText = count++;
                seatsFilled++;
            } else {
                td.innerText = 'x'; // 자리 없는 곳 표시
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    seatDiv.appendChild(table);
}