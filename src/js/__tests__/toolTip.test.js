import Tooltip from '../popWidget';

test('toolTips', () => {
  document.body.innerHTML = `<div class="container">
  <button class="btn" id="btn_1">Click to toggle popover</button>       
  </div>
  <button class="btn" id="btn_2">Click to toggle popover2</button> `;
  const btn1 = document.querySelector('#btn_1');
  const btn2 = document.querySelector('#btn_2');
  const tipsBlock = new Tooltip();
  btn1.addEventListener('click', (evt) => {
    tipsBlock.showTooltip(tipsBlock.messages[0], evt.currentTarget);
  });
  btn2.addEventListener('click', (evt) => {
    tipsBlock.showTooltip(tipsBlock.messages[1], evt.currentTarget);
  });

  btn1.click();
  const tipEl = document.querySelector('.tip-active');
  expect(document.body.contains(tipEl)).toEqual(true);
  expect(tipEl.nextElementSibling).toBeNull();
  expect(tipEl.lastElementChild.textContent).toBe('Today is sunny');

  btn1.click();
  expect(document.body.contains(tipEl)).toEqual(false);

  // Test of 2 tips position in DOM
  btn1.click();
  btn2.click();
  const tipEls = document.querySelectorAll('.tip-active');
  expect(tipEls[0].nextElementSibling === tipEls[1] && tipEls[1]
    .nextElementSibling === null).toEqual(true);
});
