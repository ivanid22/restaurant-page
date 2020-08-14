const icon = (classes) => {
  const ic = document.createElement('i');
  ic.classList = classes;
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.appendChild(ic);
  return link;
};

const paragraph = () => {
  const cont = document.createElement('div');
  cont.classList = 'paragraph-container';
  const p = document.createElement('p');
  p.innerText = 'Feel free to contact us through email and social media!';
  cont.appendChild(p);
  return cont;
};

const social = () => {
  const sc = document.createElement('div');
  sc.classList = 'social-container';
  const twitter = icon('social-icon fab fa-twitter');
  const facebook = icon('social-icon fab fa-facebook-f');
  const mail = icon('social-icon far fa-envelope');
  sc.append(paragraph(), twitter, facebook, mail);
  return sc;
};

const contactPage = () => {
  const cont = document.createElement('div');
  cont.classList = 'main';
  cont.appendChild(social());
  return cont;
};

module.exports = {
  contactPage,
};