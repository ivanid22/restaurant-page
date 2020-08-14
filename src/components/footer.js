const footer = () => {
  const footerElement = document.createElement('div');
  const notice = document.createElement('p');
  notice.innerText = 'Designed by Ivan Diaz';
  footerElement.classList = 'footer';
  footerElement.appendChild(notice);
  return footerElement;
};

module.exports = {
  footer,
};