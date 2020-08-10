import styles from './styles/styles.scss';
import 'bootstrap';
import {header} from './components/header';
import {welcomePage} from './components/welcome';
import {footer} from './components/footer';

const content = document.querySelector('.content');

content.appendChild(header());
content.appendChild(welcomePage());
content.appendChild(footer());



