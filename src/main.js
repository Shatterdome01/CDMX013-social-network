import { Welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/login': login,
  '/register': register,
  // '/wall': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
// myFunction();
