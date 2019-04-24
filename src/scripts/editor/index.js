import getType from '../utils/typeof';
import _init from './init';

export default class BalmEditor {
  constructor(el, config) {
    this.el = getType(el) === 'string' ? document.querySelector(el) : el;
    this.config = Object.assign(
      {
        onChange: this.onChange
      },
      config
    );
    if (this.el) {
      _init.call(this);
    } else {
      throw new Error(`[BalmEditor]: Can't found target node ${el}!`);
    }
  }
  onChange(html) {}
}
