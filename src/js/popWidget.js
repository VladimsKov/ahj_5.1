export default class Tooltip {
  constructor() {
    this.activeTooltips = [];
    this.messages = [
      {
        title: 'Good morning!',
        text: 'Today is sunny',
      },
      {
        title: 'Good evening!',
        text: 'Today was a good weather   etetoi  teruyo tyioyti iuyoiuyo oiuyo oiuyouy pynvkjhg jfgj',
      },
      {
        title: 'Good afternoon!',
        text: 'Today is a nice day!',
      },
    ];
  }

  showTooltip(message, element) {
    if (!element.dataset.id) {
      const tooltipElem = this.createTip(message);
      const id = performance.now();
      element.dataset.id = id;
      tooltipElem.dataset.id = id;
      this.setTipPosition(element, tooltipElem);
    } else {
      this.removeTip(element);
    }
  }

  createTip(message) {
    // create tooltip:
    const tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tip-active');
    tooltipElem.insertAdjacentHTML('beforeend',
      `<div class = 'tip-title'>${message.title}</div>
    <div class = 'tip-text'>${message.text}</div>`);
    document.body.appendChild(tooltipElem);
    // element.offsetParent.appendChild(tooltipElem);
    return tooltipElem;
  }

  removeTip(element) {
    const tips = Array.from(document.querySelectorAll('.tip-active'));
    const activeTip = tips.find((t) => t.dataset.id === element.dataset.id);
    activeTip.remove();
    delete element.dataset.id;
  }

  setTipPosition(element, tipEl) {
    tipEl.style.top = `${element.offsetTop - tipEl.offsetHeight - 10}px`;
    tipEl.style.left = `${element.offsetLeft + element.offsetWidth / 2 - tipEl.offsetWidth / 2}px`;
  }
}
