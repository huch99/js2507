const d = document;

const reservations = [];    // 예약 데이터를 저장하는 배열

function addReservation(name, date, time, contact) {
    reservations.push({name,date,time,contact});
}

d.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();     // 페이지 새로고침 방지
    const name = d.getElementById('name').value;
    const date = d.getElementById('date').value;
    const time = d.getElementById('time').value;
    const contact = d.getElementById('contact').value;

    addReservation(name, date, time, contact);
    alert('예약이 완료 되었습니다.');
});

function displayReservation() {
    const listContainer = d.getElementById('reservationList');
    listContainer.innerHTML = '';

    reservations.forEach(function(reservation, index) {
        const item = d.createElement('div');
        item.textContent = `${index + 1}.${reservation.name} - ${reservation.date} ${reservation.time} - ${reservation.contact}`;
        listContainer.appendChild(item);
    });
}

function isTimeAvailable(date,time) {
    return!reservations.some(reservation => reservation.date === date && reservation.time === time);
}
