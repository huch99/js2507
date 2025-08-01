function newRegister() {
    const newItem = document.createElement('li');               //요소 노드 추가
    const subject = document.querySelector('#subject');         //텍스트 필드 가져옴
    const newText = document.createTextNode(subject.value);     //텍스트 필드 값을 텍스트 노드로 추가

    newItem.appendChild(newText);

    const itemList = document.querySelector('#itemList');
    itemList.appendChild(newItem);

    subject.value = "";

}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('button');
    button.addEventListener("click", function() {
        event.preventDefault();
        newRegister();
    });

    const itemList = document.querySelector('#itemList');
    itemList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            if (confirm("삭제하시겠습니까?")) {
                event.target.remove();
            }
        }
    });
});