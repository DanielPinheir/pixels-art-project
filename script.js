// escopo global
const getBody = document.querySelector('body');

const addHeader = () => {
  const elementHeader = document.createElement('header');
  elementHeader.style.backgroundColor = 'purple';
  elementHeader.style.color = 'white';
  elementHeader.style.marginBottom = '2rem';
  getBody.appendChild(elementHeader);
};

const addFooter = () => {
  const elementFooter = document.createElement('footer');
  elementFooter.innerHTML = 'Made by Daniel Machado';
  elementFooter.style.backgroundColor = 'purple';
  elementFooter.style.color = 'white';
  elementFooter.style.textAlign = 'center';
  elementFooter.style.padding = '2rem';
  getBody.appendChild(elementFooter);
};

const addTitle = () => {
  const getHeader = document.querySelector('header');
  const elementH1 = document.createElement('h1');
  elementH1.id = 'title';
  elementH1.innerHTML = 'Paleta de Cores';
  elementH1.style.textAlign = 'center';
  elementH1.style.padding = '1rem';
  elementH1.style.fontFamily = 'monaco';
  elementH1.style.fontStyle = 'italic';
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
  elementDiv.style.display = 'flex';
  elementDiv.style.margin = '20px';
  elementDiv.style.padding = '20px';
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
  divButton.style.margin = '1rem';
  const elementButton = document.createElement('button');
  elementButton.id = 'button-random-color';
  elementButton.innerText = 'Cores aleatórias';
  elementButton.style.margin = '20px';
  elementButton.style.padding = '10px';
  elementButton.style.borderRadius = '4px';
  elementButton.style.backgroundColor = 'purple';
  elementButton.style.color = 'white';
  elementButton.style.fontFamily = 'monaco';
  divButton.appendChild(elementButton);
};

const buttonAleatoryColor = () => {
  const getButton = document.querySelector('#button-random-color');
  getButton.addEventListener('click', paintPalette);
  getButton.addEventListener('mouseover', () => {
    getButton.style.backgroundColor = 'orange';
  });
  getButton.addEventListener('mouseout', () => {
    getButton.style.backgroundColor = 'purple';
  });
};

const createInputSizeFrame = () => {
  addDivBody('size');
  const divSize = document.querySelector('#size');
  divSize.style.display = 'flex';
  divSize.style.justifyContent = 'center';
  divSize.style.margin = '1rem';
  const inputSize = document.createElement('input');
  inputSize.type = 'number';
  inputSize.min = '1';
  inputSize.id = 'board-size';
  inputSize.style.borderRadius = '10%';
  divSize.appendChild(inputSize);
};

const createButtonGenerateBoard = () => {
  const divSize = document.querySelector('#size');
  const buttonSize = document.createElement('button');
  buttonSize.id = 'generate-board';
  buttonSize.innerText = 'VQV';
  buttonSize.style.marginLeft = '20px';
  buttonSize.style.borderRadius = '4px';
  buttonSize.style.padding = '10px';
  buttonSize.style.backgroundColor = 'purple';
  buttonSize.style.color = 'white';
  buttonSize.style.fontFamily = 'Helvetica';
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

const colorPaletteShadow = () => {
  const paletteColors = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('mouseover', () => {
      paletteColors[index].style.boxShadow = '0 0 1em pink';
    });
    paletteColors[index].addEventListener('mouseout', () => {
      paletteColors[index].style.boxShadow = '';
    });
  }
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
    let elementInputSizeValue = document.querySelector('#board-size').value;
    if (elementInputSizeValue === '') {
      alert('Board inválido!');
    } else {
      if (elementInputSizeValue < 5) {
        elementInputSizeValue = '5';
      }
      if (elementInputSizeValue > 50) {
        elementInputSizeValue = '50';
      }
      removeFrame();
      createFrame(elementInputSizeValue);
      localStorage.removeItem('pixelBoard');
      localStorage.setItem('boardSize', elementInputSizeValue);
    }
  });
};

const generateBoardHover = () => {
  const elementButtonVQV = document.querySelector('#generate-board');
  elementButtonVQV.addEventListener('mouseover', () => {
    elementButtonVQV.style.backgroundColor = 'orange';
  });
  elementButtonVQV.addEventListener('mouseout', () => {
    elementButtonVQV.style.backgroundColor = 'purple';
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
  buttonClear.style.borderRadius = '4px';
  buttonClear.style.backgroundColor = 'purple';
  buttonClear.style.color = 'white';
  buttonClear.style.fontFamily = 'monaco';
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
  buttonClearBoard.addEventListener('mouseover', () => {
    buttonClearBoard.style.backgroundColor = 'orange';
  });
  buttonClearBoard.addEventListener('mouseout', () => {
    buttonClearBoard.style.backgroundColor = 'purple';
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
  buttonAleatoryColor();
  createInputSizeFrame();
  createButtonGenerateBoard();
  addDivFrame();
  if (localStorage.getItem('boardSize') === null) {
    createFrame(5);
  } else {
    createFrame(parseInt(localStorage.getItem('boardSize')));
  }
  selectColorPalette();
  colorPaletteShadow();
  paintPixel();
  buttonSizeFrame();
  generateBoardHover();
  createButtonStartedColor();
  buttonClearColor();
  if (localStorage.getItem('pixelBoard') === null) {
    clearColor();
  } else {
    getPixelsColorsStorage();
  }
  addFooter();
};
