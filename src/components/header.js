const logo = () => {
  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', '1536251606.svg');
  logoImg.setAttribute('alt', 'Logo');
  return logoImg;
};

const navElement = (text) => {
  const cont = document.createElement('div');
  cont.className = 'nav-element';
  const elem = document.createElement('span');
  elem.innerText = text;
  cont.appendChild(elem);
  return cont;
};

const nav = () => {
  const navCont = document.createElement('div');
  navCont.classList = 'nav-container';
  navCont.appendChild(navElement('Home'));
  navCont.appendChild(navElement('Contact'));
  navCont.appendChild(navElement('Menu'));
  return navCont;
};

const header = () => {
  const logoImg = logo();
  const headerElement = document.createElement('div');
  headerElement.classList = 'header';
  headerElement.appendChild(logoImg);
  headerElement.appendChild(nav());
  return headerElement;
};

module.exports = {
  header,
};