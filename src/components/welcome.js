import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const divInput = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const copyright = document.createElement('p');

  div.classList = 'divContent';
  buttonRegister.textContent = 'REGISTRATE';
  buttonRegister.className = 'buttonRegister';
  buttonRegister.classList = 'buttonStyle';
  buttonLogin.textContent = 'INICIA SESIÓN';
  buttonLogin.className = 'buttonLogin';
  buttonLogin.classList = 'buttonStyle';
  title.textContent = 'Bienvenidos';
  copyright.textContent = 'Todos los derechos reservados 2022';
  divInput.classList = 'divDirection';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  divInput.append(buttonLogin, buttonRegister);
  div.append(title, divInput, copyright);

  return div;
};
