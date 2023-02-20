import './styles.css';
import { Todo } from './js/todo';
import { switchTodos } from './js/todomanager';
import { getTodoHTML } from './js/DOMmanager';

const todos = document.querySelector('.todos');
const menuButtons = document.querySelectorAll('.menu button');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchTodos(button.innerText, todos);
    });
});

for(let i = 0; i < 10; i++) {
    let todo = Object.create(Todo("Testing the description functionality for this todo", null));
    todos.append(getTodoHTML(todo));
}