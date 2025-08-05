const d = document;



const logIn = (event) => {
    event.preventDefault();

    const userId = d.querySelector('#userId').value.trim();
    const userPw = d.querySelector('#userPw').value.trim();

    const userList = [
        { id: 'user', pw: 'password', name: '이름' }
    ];
    if (userId !== '' && userPw !== '') {
        const user = userList.find(u => u.id === userId);
        if (user && user.pw === userPw) {
            const logInForm = d.querySelector('#logInForm');
            logInForm.innerHTML = `${user.name}님 안녕하세요.`;
        } else {
            alert('ID 또는 PW가 맞지 않습니다.');
        }
    } else {
        alert('ID와 PW를 입력해주세요.')
    }
};

const postWrite = (event) => {
    const post = d.querySelector('#post');

    post.style.display = 'block';
    event.preventDefault();

    const title = d.querySelector('#postTitle').value.trim();
    const content = d.querySelector('#postContent').value.trim();

    if (title === '' || content === '') {
        alert('제목과 내용을 모두 입력해 주세요.')
        return;
    }

    const postArea = d.querySelector('#postArea');

    const li = d.createElement('li');
    li.className = 'postList';
    li.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    d.querySelector('#postForm').reset();
};

document.addEventListener('DOMContentLoaded', () => {
    d.querySelector('#logInForm').addEventListener('submit', logIn);
});