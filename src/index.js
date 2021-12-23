import './style.css';
import { postFormAction, getFormAction } from './formActions';

const refreshBtn = document.querySelector('[type=button]');

refreshBtn.addEventListener('click', () => {
  getFormAction();
  window.location.reload();
})

getFormAction();
postFormAction();