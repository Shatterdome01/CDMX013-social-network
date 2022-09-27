import { onNavigate } from '../main.js';
import { addUser } from '../lib/auth.js';

// REGISTTRO MEDIANTE CORREO Y CONTRASEÑA
export const register = () => {
  // para crear elementos del formulario
  const form = document.createElement('div');
  const title = document.createElement('h1');
  const formu = document.createElement('p');
  const divInput = document.createElement('div');
  const inputName = document.createElement('input');
  const inputAge = document.createElement('input');
  const inputMail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegis = document.createElement('button');
  const copyright = document.createElement('p');

  // contenido de los elementos
  title.textContent = 'RedEat';
  formu.textContent = 'Completa el formulario';
  inputName.placeholder = 'Nombre';
  inputAge.placeholder = 'Edad';
  inputMail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';
  buttonRegis.textContent = 'REGISTRATE';
  buttonRegis.classList = 'buttonStyle';
  copyright.textContent = 'Todos los derechos reservados 2022';
  divInput.classList = 'divDirection';
  inputMail.setAttribute('id', 'mail');
  inputPass.setAttribute('id', 'pass');
 
  // console.log(mail, password);

  buttonRegis.addEventListener('click', () => {
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('pass').value;
    addUser(mail, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        onNavigate('/login');
        console.log('se registro en mi red social fiu fiu ');
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('nel no pues acceder a la red social fiu fiu', errorMessage);
      });
    // onNavigate('/login');
  });

  // Insertar los elementos en el div
  divInput.append(inputName, inputAge, inputMail, inputPass, buttonRegis);
  form.append(title, divInput, copyright);
  return form;
};
