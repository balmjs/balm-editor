import getType from '../utils/typeof';

export default class BalmEditor {
  constructor(el, config) {
    this.el = getType(el) === 'string' ? document.querySelector(el) : el;
    this.config = Object.assign({}, config);
  }
}
