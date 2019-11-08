import * as helper from './helper';

;((def) => {
  def(window._helper = window._helper || {});
})(() => {
  for (let f in helper) {
    if (typeof helper[f] === 'object' || typeof helper[f] === 'function') {
      _helper[f] = helper[f];
    } else {
      return;
    }
  }
});
