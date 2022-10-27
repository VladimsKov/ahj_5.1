// TODO: write code here
import Tooltip from './popWidget';

const tipFactory = new Tooltip();
const button1 = document.querySelector('#btn_1');
const button2 = document.querySelector('#btn_2');

button1.addEventListener('click', (evt) => {
  Tooltip.showTooltip(tipFactory.messages[0], evt.currentTarget);
});
button2.addEventListener('click', (evt) => {
  Tooltip.showTooltip(tipFactory.messages[1], evt.currentTarget);
});
