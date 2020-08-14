import { header } from './header';
import { footer } from './footer';
import { welcomePage } from './welcome';
import { contactPage } from './contact';
import menuPage from './menu';

const navigate = (menuButton, content) => {
  const container = document.querySelector('.content');
  container.innerHTML = '';
  container.appendChild(header());
  container.appendChild(content());
  container.appendChild(footer());
  const navButtons = document.querySelectorAll('.nav-element');
  navButtons[menuButton].classList.add('selected');
  navButtons[0].onclick = () => {
    navigate(0, welcomePage);
  };
  navButtons[1].onclick = () => {
    navigate(1, contactPage);
  };
  navButtons[2].onclick = () => {
    navigate(2, menuPage);
  };
};

const init = () => {
  const content = document.querySelector('.content');

  content.appendChild(header());
  content.appendChild(welcomePage());
  content.appendChild(footer());

  navigate(0, welcomePage);
};

export default init;