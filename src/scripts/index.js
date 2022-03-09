import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.min.css';
import '../styles/detailtemplate.min.css';
import '../styles/navbar.min.css';
import '../styles/jumbotron.min.css';
import '../styles/posts.min.css';
import '../styles/footer.min.css';
import '../styles/responsive.css';
import './components/footercatalog.js';
import './components/herocatalog.js';
import './components/navbar.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

 
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
