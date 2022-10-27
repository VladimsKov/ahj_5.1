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

  static showTooltip(message, element) {
    if (!element.dataset.id) {
      const tooltipElem = Tooltip.createTip(message);
      const id = performance.now();
      const elem = element;
      elem.dataset.id = id;
      tooltipElem.dataset.id = id;
      Tooltip.setTipPosition(elem, tooltipElem);
    } else {
      Tooltip.removeTip(element);
    }
  }

  static createTip(message) {
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

  static removeTip(element) {
    const tips = Array.from(document.querySelectorAll('.tip-active'));
    const activeTip = tips.find((t) => t.dataset.id === element.dataset.id);
    activeTip.remove();
    const elem = element;
    delete elem.dataset.id;
  }

  static setTipPosition(element, tipEl) {
    const tipElem = tipEl;
    tipElem.style.top = `${element.offsetTop - tipEl.offsetHeight - 10}px`;
    tipElem.style.left = `${element.offsetLeft + element.offsetWidth / 2 - tipEl.offsetWidth / 2}px`;
  }
}
