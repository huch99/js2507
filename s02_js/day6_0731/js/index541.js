const main = document.querySelector('.main');

for (let i = 1; i < 10; i++) {
    const box = document.createElement('div');
    box.className = 'box';

    const h3 = document.createElement('h3');
    h3.innerText = `${i}단`;
    box.appendChild(h3);

    for (let j = 1; j < 10; j++) {
        const span = document.createElement('span');
        span.innerText = `${i} X ${j} = ${i * j}`;
        box.appendChild(span);
    }

    main.appendChild(box); // 각 구구단 박스를 main에 추가
}




