
const title = () => {
  const t = document.createElement('h3');
  t.innerText = "Café Antares Rut"
  return t;
}

const welcomePage = () => {
  const welcome = document.createElement('div');
  welcome.classList = "main"
  welcome.appendChild(title());
  return welcome
}

module.exports = {
  welcomePage
};