const toDoList = [];
const d = document;

const listArea = d.querySelector('#toDoListArea');

const toDoInput = d.querySelector('#toDo');
function makeList() {
    let toDo = toDoInput.value.trim();
    if (toDo !== '') {

        toDoList.push(toDo);

        const li = d.createElement('li');
        li.innerText = toDo;

        const delButton = d.createElement('button');
        delButton.innerText = 'X';
        delButton.className = 'delBtn'
        delButton.addEventListener('click', () => {
            deleteListItem(li);
        });

        li.appendChild(delButton);
        listArea.appendChild(li);

        toDoInput.value = '';

       
    }
    
}

function deleteListItem(listItem) {
    listItem.remove();
}