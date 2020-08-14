import breakfastImage from '../images/breakfast.jpg';
import lunchImage from '../images/lunch.jpeg';
import dinnerImage from '../images/dinner.jpg';

const menuPageItem = (desc, title, imgUrl) => {
  const cardContainer = document.createElement('div');
  const cardBody = document.createElement('div');
  const imgCover = document.createElement('img');
  const titleElement = document.createElement('h5');
  const paragraph = document.createElement('p');
  const mainContainer = document.createElement('div');
  mainContainer.classList = 'col-12 col-sm-6 col-md-4';
  cardContainer.classList = 'card';
  cardBody.classList = 'card-body';
  imgCover.setAttribute('src', imgUrl);
  imgCover.setAttribute('alt', 'Menu sample');
  imgCover.classList = 'card-img-top';
  titleElement.classList = 'card-title';
  titleElement.innerText = title;
  paragraph.classList = 'card-text';
  paragraph.innerText = desc;
  cardBody.append(titleElement, paragraph);
  cardContainer.append(imgCover, cardBody);
  mainContainer.appendChild(cardContainer);
  return mainContainer;
};

const menuPage = () => {
  const pageContainer = document.createElement('div');
  const elementsContainer = document.createElement('div');
  const row = document.createElement('div');
  pageContainer.classList = 'main';
  row.classList = 'row';
  elementsContainer.classList = 'container';
  row.appendChild(menuPageItem('Menu for breakfast', 'Breakfast', breakfastImage));
  row.appendChild(menuPageItem('Menu for lunch', 'Lunch', lunchImage));
  row.appendChild(menuPageItem('Menu for dinner', 'Dinner', dinnerImage));
  elementsContainer.appendChild(row);
  pageContainer.appendChild(elementsContainer);
  return pageContainer;
};

export default menuPage;