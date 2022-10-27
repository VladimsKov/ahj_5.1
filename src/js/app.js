// TODO: write code here
import Tooltip from './popWidget';

const tipFactory = new Tooltip();
const button_1 = document.querySelector('#btn_1');
const button_2 = document.querySelector('#btn_2');

button_1.addEventListener('click', (evt) => {
  tipFactory.showTooltip(tipFactory.messages[0], evt.currentTarget);
});
button_2.addEventListener('click', (evt) => {
  tipFactory.showTooltip(tipFactory.messages[1], evt.currentTarget);
});
