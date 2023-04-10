let items = [];

function addItem() {
    const input = document.getElementById('item');
    const text = input.value.trim();

    if (text.length > 0) {
        const item = {
            text: text,
            done: false
        };
        items.push(item);
        input.value = '';
        render();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    render();
}

function toggleDone(index) {
    items[index].done = !items[index].done;
    render();
}

function render() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item.text;
        li.appendChild(span);
        if (item.done) {
            li.classList.add('done');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteItem(i));
        li.appendChild(deleteButton);
        const doneButton = document.createElement('button');
        doneButton.textContent = item.done ? 'Undo' : 'Done';
        doneButton.addEventListener('click', () => toggleDone(i));
        li.appendChild(doneButton);
        list.appendChild(li);
