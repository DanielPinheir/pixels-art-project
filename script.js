// challenge1
const addTitle = () => {
  const getBody = document.getElementsByTagName('body')[0];
  const elementH1 = document.createElement('h1');
  elementH1.id = 'title';
  elementH1.innerHTML = 'Paleta de Cores';
  getBody.appendChild(elementH1);
};
addTitle();
