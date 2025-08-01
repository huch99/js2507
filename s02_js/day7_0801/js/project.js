const d = document;

const userName = d.querySelector('#userName');
const userDate = d.querySelector('#userDate');
const userTime = d.querySelector('#userTime');
const userTel = d.querySelector('#userTel');

const resulBtn = d.querySelector('#resultBtn');
const resetBtn = d.querySelector('#resetBtn');

const resultArea = d.querySelector('#result');

resulBtn.addEventListener('click', function (){
    insertResult();
});

function insertResult() {
     const dateObj = new Date(userDate.value);
    const month = dateObj.getMonth(); 
    const day = dateObj.getDate();

    const timeStr = userTime.value; // "HH:MM"
    const [hourStr, minuteStr] = timeStr.split(':');
    const hour = parseInt(hourStr);
    const minutes = parseInt(minuteStr);

    const message = `${userName.value}님, ${month + 1}월 ${day}일, ${hour}시 ${minutes}분에 예약이 확정되었습니다.`;
    showPopup(message);
}

resetBtn.addEventListener('click', function() {
    // 입력 필드 초기화
    userName.value = '';
    userDate.value = '';
    userTime.value = '';
    userTel.value = '';

    // 결과 출력 영역 초기화
    resultArea.innerHTML = '';
});

const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closeBtn = document.getElementById('closePopup');

function showPopup(message) {
    popupMessage.innerHTML = message;
    popup.style.display = 'block';
}

// 닫기 버튼 클릭 시 숨기기
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

const dateInput = document.querySelector('#userDate');
const timeInput = document.querySelector('#userTime');

// 오늘 날짜 문자열 반환 함수
function getTodayStr() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = (today.getDate() + 1).toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const todayStr = getTodayStr(); // 전역 변수로 선언하여 반복 호출 방지

// 제한 적용 함수
function updateRestrictions() {
    // 날짜 최대 범위 설정 (오늘 포함 과거 불가)
    dateInput.setAttribute('min', todayStr);

    const selectedDate = dateInput.value;

    // 선택이 없다면 또는 오늘 선택 시
    if (!selectedDate) {
        // 시간 비활성화
        timeInput.value = "";
        timeInput.setAttribute('disabled', 'disabled');
    } else {
        // 오늘 이후 선택 시 시간 활성화 및 제한
        timeInput.removeAttribute('disabled');
        timeInput.setAttribute('min', '10:00');
        timeInput.setAttribute('max', '16:00');
    }
}

// 페이지 로드 시 초기화
window.addEventListener('load', () => {
    // 날짜 제한
    dateInput.setAttribute('min', todayStr);
    // 시간 비활성화
    timeInput.setAttribute('disabled', 'disabled');

    // 만약 이미 날짜값이 있다면 제한 적용
    updateRestrictions();
});

// 날짜 변경 시마다 호출
dateInput.addEventListener('change', () => {
    updateRestrictions();

    // 만약 오늘이나 과거 날짜가 선택되면 최대 날짜를 오늘로 강제
    // (위에서 이미 처리됨)
});

userTime.addEventListener('change', () => {
  const value = userTime.value; // 형식: "HH:MM"
  if (value) {
    const [hours, minutes] = value.split(':');
    // 원하는 분(minute)을 제외한 경우 강제 수정
    if (minutes !== '00' && minutes !== '30') {
      // 가장 가까운 허용 분으로 변경
      if (parseInt(minutes) < 15) {
        userTime.value = `${hours}:00`;
      } else if (parseInt(minutes) < 45) {
        userTime.value = `${hours}:30`;
      } else {
        // 다음 시간으로 넘어감
        let nextHour = (parseInt(hours) + 1).toString().padStart(2, '0');
        userTime.value = `${nextHour}:00`;
      }
    }
  }
});