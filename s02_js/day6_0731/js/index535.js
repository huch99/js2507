let memNum = parseInt(prompt('입장객 수를 입력해 주세요.'));
let colNum = parseInt(prompt('한 줄에 앉힐 사람의 수를 입력해주세요.'));
let rowNum = memNum / colNum;

let tableArea = document.querySelector('#tableArea');

if (memNum % colNum === 0) {
    rowNum = Math.ceil(memNum / colNum);
    let count = 1;
    let table = document.createElement('table');

    for (let i = 0; i < rowNum; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < colNum; j++) {
            let td = document.createElement('td');
            if (count <= memNum) {
                td.innerText = `${count}번 자리`;
                count++;
            }
            else {
                td.innerText = "";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableArea.appendChild(table);
}
else {
    rowNum = parseInt(memNum / colNum)+1;
    let count = 1;
    let table = document.createElement('table');

    for (let i = 0; i < rowNum; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < colNum; j++) {
            let td = document.createElement('td');
            if (count <= memNum) {
                
                td.innerText = `${count}번 자리`;
                count++;
            }
            else {
                td.innerText = "";
            }


            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableArea.appendChild(table);
}

// document.writeln(`총 ${rowNum}개의 줄이 필요합니다.`);