import './style.css';
import renderNav from './components/Nav.js';
import renderMain from './components/Home.js';

const renderContent = () => {
  renderNav();
  renderMain();
};

document.addEventListener('DOMContentLoaded', renderContent);
