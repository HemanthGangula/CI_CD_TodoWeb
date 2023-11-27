document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');

    newTodoInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && newTodoInput.value.trim() !== '') {
            addTodoItem(newTodoInput.value.trim());
            newTodoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const todoText = document.createElement('div');
        todoText.textContent = text;
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoList.appendChild(todoItem);

        checkbox.addEventListener('change', function () {
            todoItem.classList.toggle('completed', checkbox.checked);
        });
    }
});
