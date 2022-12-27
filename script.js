// escopo global
const getBody = document.querySelector('body');

const addHeader = () => {
  const elementHeader = document.createElement('header');
  getBody.appendChild(elementHeader);
};

const addTitle = () => {
  const getHeader = document.querySelector('header');
  const elementH1 = document.createElement('h1');
  elementH1.id = 'title';
  elementH1.innerHTML = 'Paleta de Cores';
  elementH1.style.textAlign = 'center';
  getHeader.appendChild(elementH1);
};

const addDivBody = (id) => {
  const elementDiv = document.createElement('div');
  elementDiv.id = id;
  getBody.appendChild(elementDiv);
};

const addRandomColor = () => {
  const colorRed = Math.floor(Math.random() * 255);
  const colorGreen = Math.floor(Math.random() * 255);
  const colorBlue = Math.floor(Math.random() * 255);
  return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
};

const addPalette = (numberOfColors) => {
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < numberOfColors; index += 1) {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'color';
    elementDiv.style.border = 'solid 1px black';
    elementDiv.style.width = '50px';
    elementDiv.style.height = '50px';
    elementDiv.style.borderRadius = '50%';
    colorPalette.appendChild(elementDiv);
  }
};

const createPalette = () => {
  const elementDiv = document.createElement('div');
  elementDiv.id = 'color-palette';
  elementDiv.style.display = 'flex';
  elementDiv.style.justifyContent = 'center';
  elementDiv.style.gap = '20px';
  getBody.appendChild(elementDiv);
  addPalette(4);
};

const saveLocalStorageColors = () => {
  const colorPalette = document.querySelectorAll('.color');
  const paletteColors = [];
  for (let index = 0; index < colorPalette.length; index += 1) {
    const color = colorPalette[index].style.backgroundColor;
    paletteColors.push(color);
  }
  localStorage.setItem('colorPalette', JSON.stringify(paletteColors));
};

const paintPalette = () => {
  const getColor = document.querySelectorAll('.color');
  for (let index = 0; index < getColor.length; index += 1) {
    if (index === 0) {
      getColor[index].style.backgroundColor = 'rgb(0,0,0)';
      getColor[index].className = 'color selected';
    } else {
      getColor[index].style.backgroundColor = addRandomColor();
    }
  }
  saveLocalStorageColors();
};

const getPaletteColorsStorage = () => {
  const getColors = document.querySelectorAll('.color');
  const getLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));

  for (let index = 0; index < getColors.length; index += 1) {
    if (index === 0) {
      getColors[index].style.backgroundColor = getLocalStorage[index];
      getColors[index].className = 'color selected';
    }
    getColors[index].style.backgroundColor = getLocalStorage[index];
  }
};

const addButtonColor = () => {
  addDivBody('button-div');
  const divButton = document.querySelector('#button-div');
  divButton.style.display = 'flex';
  divButton.style.justifyContent = 'center';
  divButton.style.paddingTop = '20px';
  const elementButton = document.createElement('button');
  elementButton.id = 'button-random-color';
  elementButton.innerText = 'Cores aleatórias';
  divButton.appendChild(elementButton);
};

const eventButtonColor = () => {
  const getButton = document.querySelector('#button-random-color');
  getButton.addEventListener('click', paintPalette);
};

const createFrame = () => {
  addDivBody('pixel-board');
  const divPixelBoard = document.querySelector('#pixel-board');
  divPixelBoard.style.margin = '20px';
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.style.display = 'flex';
    line.style.justifyContent = 'center';
    for (let index1 = 0; index1 < 5; index1 += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      cell.style.width = '40px';
      cell.style.height = '40px';
      cell.style.border = 'solid 1px black';
      cell.style.backgroundColor = 'white';
      line.appendChild(cell);
    }
    divPixelBoard.appendChild(line);
  }
};

const selectColorPalette = () => {
  const paletteColors = document.querySelector('#color-palette');
  const elementClassSelected = document.querySelectorAll('.color');
  paletteColors.addEventListener('click', (element) => {
    const elementBackGroundColor = element.target.style.backgroundColor;
    for (let index = 0; index < elementClassSelected.length; index += 1) {
      if (
        elementClassSelected[index].style.backgroundColor !==
        elementBackGroundColor
      ) {
        elementClassSelected[index].className = 'color';
      } else {
        elementClassSelected[index].className = 'color selected';
      }
    }
  });
};

window.onload = () => {
  addHeader();
  addTitle();
  createPalette();
  if (localStorage.getItem('colorPalette') === null) {
    paintPalette();
  } else {
    getPaletteColorsStorage();
  }
  addButtonColor();
  eventButtonColor();
  createFrame();
  selectColorPalette();
};
