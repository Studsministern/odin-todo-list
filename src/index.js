import './styles.css';
import { switchPage } from './js/todomanager';

const todoDiv = document.querySelector('.todos');
const menuButtons = document.querySelectorAll('.menu button');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchPage(button.innerText, todoDiv);
    });
});