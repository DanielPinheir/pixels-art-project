// escopo global
const getBody = document.querySelector('body');

// challenge1
const addHeader = () => {
  const elementHeader = document.createElement('header');
  getBody.appendChild(elementHeader);
};
addHeader();

const addTitle = () => {
  const getHeader = document.querySelector('header');
  const elementH1 = document.createElement('h1');
  elementH1.id = 'title';
  elementH1.innerHTML = 'Paleta de Cores';
  elementH1.style.textAlign = 'center';
  getHeader.appendChild(elementH1);
};
addTitle();

// challenge2 and challenge3
const addDiv = () => {
  const elementDiv = document.createElement('div');
  elementDiv.id = 'color-palette';
  getBody.appendChild(elementDiv);
};
addDiv();

const addPalette = () => {
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'color';
    elementDiv.style.border = 'solid 1px black';
    elementDiv.style.width = '50px';
    elementDiv.style.height = '50px';
    elementDiv.style.borderRadius = '50%';
    colorPalette.appendChild(elementDiv);
  }
};
addPalette();

// challenge 4
const addButtonColor = () => {
  const elementButton = document.createElement('button');
  elementButton.id = 'button-random-color';
  elementButton.innerText = 'Cores aleatórias';
  getBody.appendChild(elementButton);
};
addButtonColor();

const eventButtonColor = () => {
  const getButton = document.querySelector('#button-random-color');
  const colorPalette = document.querySelectorAll('.color');
  getButton.addEventListener('click', () => {
    for (let index = 0; index < colorPalette.length; index += 1) {
      if (index === 0) {
        colorPalette[index].style.backgroundColor = 'black';
      } else {
        const colorRed = Math.floor(Math.random() * 255);
        const colorGreen = Math.floor(Math.random() * 255);
        const colorBlue = Math.floor(Math.random() * 255);
        colorPalette[
          index
        ].style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
      }
    }
  });
};
eventButtonColor();
