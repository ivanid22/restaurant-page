
const title = () => {
  const t = document.createElement('h3');
  t.innerText = 'Café Antares Rut';
  return t;
};

const paragraph = () => {
  const p = document.createElement('p');
  p.innerText = 'A new experience every week';
  return p;
};

const paragraphContainer = () => {
  const cont = document.createElement('div');
  cont.classList = 'paragraph-container';
  cont.appendChild(title());
  cont.appendChild(paragraph());
  return cont;
};

const menuButton = () => {
  const b = document.createElement('button');
  b.classList = 'btn btn-menu';
  b.innerText = 'Browse our menu';
  b.onclick = () => {
    document.querySelectorAll('.nav-element')[2].click();
  };
  return b;
};

const welcomePage = () => {
  const welcome = document.createElement('div');
  welcome.classList = 'main';
  welcome.append(paragraphContainer(), menuButton());
  return welcome;
};

module.exports = {
  welcomePage,
};