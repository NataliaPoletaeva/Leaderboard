import './style.css';
import { postFormAction, getFormAction } from './formActions.js';

const refreshBtn = document.querySelector('[type=button]');

refreshBtn.addEventListener('click', () => {
  getFormAction();
  window.location.reload();
});

getFormAction();
postFormAction();