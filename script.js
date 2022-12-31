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
      // eslint-disable-next-line sonarjs/no-duplicate-string
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
  addDivBody('buttons');
  const divButton = document.querySelector('#buttons');
  divButton.style.display = 'flex';
  divButton.style.justifyContent = 'center';
  const elementButton = document.createElement('button');
  elementButton.id = 'button-random-color';
  elementButton.innerText = 'Cores aleatórias';
  elementButton.style.margin = '20px';
  elementButton.style.padding = '10px';
  elementButton.style.borderRadius = '10%';
  divButton.appendChild(elementButton);
};

const buttonAleatoryColor = () => {
  const getButton = document.querySelector('#button-random-color');
  getButton.addEventListener('click', paintPalette);
};

const createInputSizeFrame = () => {
  addDivBody('size');
  const divSize = document.querySelector('#size');
  divSize.style.display = 'flex';
  divSize.style.justifyContent = 'center';
  const inputSize = document.createElement('input');
  inputSize.type = 'number';
  inputSize.min = '1';
  inputSize.id = 'board-size';
  inputSize.style.borderRadius = '10%';
  divSize.appendChild(inputSize);
};

const createButtomGenerateBoard = () => {
  const divSize = document.querySelector('#size');
  const buttonSize = document.createElement('button');
  buttonSize.id = 'generate-board';
  buttonSize.innerText = 'VQV';
  buttonSize.style.marginLeft = '20px';
  buttonSize.style.borderRadius = '10%';
  buttonSize.style.padding = '10px';
  divSize.appendChild(buttonSize);
};

const addDivFrame = () => {
  addDivBody('pixel-board');
};

const createFrame = (size) => {
  const divPixelBoard = document.querySelector('#pixel-board');
  divPixelBoard.style.margin = '20px';
  for (let index = 0; index < size; index += 1) {
    const line = document.createElement('div');
    line.style.display = 'flex';
    line.style.justifyContent = 'center';
    line.className = 'line';
    for (let index1 = 0; index1 < size; index1 += 1) {
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
  paletteColors.addEventListener('click', (event) => {
    const elementBackGroundPalette = event.target.style.backgroundColor;
    for (let index = 0; index < elementClassSelected.length; index += 1) {
      if (
        // eslint-disable-next-line operator-linebreak
        elementClassSelected[index].style.backgroundColor !==
        elementBackGroundPalette
      ) {
        elementClassSelected[index].className = 'color';
      } else {
        elementClassSelected[index].className = 'color selected';
      }
    }
  });
};

const saveLocalStoragePixels = () => {
  const pixelsList = document.querySelectorAll('.pixel');
  const pixelColorList = [];
  for (let index = 0; index < pixelsList.length; index += 1) {
    const pixelColor = pixelsList[index].style.backgroundColor;
    pixelColorList.push(pixelColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelColorList));
};

const paintPixel = () => {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const colorSelected = document.querySelector('.selected');
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = colorSelected.style.backgroundColor;
    saveLocalStoragePixels();
  });
};

const getPixelsColorsStorage = () => {
  const getPixels = document.querySelectorAll('.pixel');
  const getLocalStoragePixel = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].style.backgroundColor = getLocalStoragePixel[index];
  }
};

const removeFrame = () => {
  const elementLine = document.querySelectorAll('.line');
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < elementLine.length; index += 1) {
    pixelBoard.firstChild.remove();
  }
};

const buttonSizeFrame = () => {
  const elementButtonVQV = document.querySelector('#generate-board');
  elementButtonVQV.addEventListener('click', () => {
    const elementInputSizeValue = document.querySelector('#board-size').value;
    console.log(elementInputSizeValue);
    if (elementInputSizeValue === '') {
      alert('Board inválido!');
    } else {
      removeFrame();
      createFrame(elementInputSizeValue);
      localStorage.removeItem('pixelBoard');
    }
  });
};

const createButtonStartedColor = () => {
  const divButtons = document.querySelector('#buttons');
  const buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonClear.style.margin = '20px';
  buttonClear.style.display = 'flex';
  buttonClear.style.padding = '10px';
  buttonClear.style.borderRadius = '10%';
  divButtons.appendChild(buttonClear);
};

const clearColor = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  saveLocalStoragePixels();
};

const buttonClearColor = () => {
  const buttonClearBoard = document.querySelector('#clear-board');
  buttonClearBoard.addEventListener('click', clearColor);
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
  buttonAleatoryColor();
  createInputSizeFrame();
  createButtomGenerateBoard();
  addDivFrame();
  createFrame(5);
  selectColorPalette();
  paintPixel();
  buttonSizeFrame();
  createButtonStartedColor();
  buttonClearColor();
  if (localStorage.getItem('pixelBoard') === null) {
    clearColor();
  } else {
    getPixelsColorsStorage();
  }
};
