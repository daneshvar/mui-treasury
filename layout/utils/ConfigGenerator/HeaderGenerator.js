function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import createSet from '../createSet';
import BehaviorGenerator from './BehaviorGenerator';
export default (() => {
  const behavior = BehaviorGenerator().initHeader();
  const config = {
    position: 'fixed',
    offsetHeight: 64,
    clipped: true,
    secondaryClipped: false
  };
  return _extends({}, behavior, {
    get: () => _extends({}, config, {}, behavior.get()),
    setPosition: createSet(config, 'position'),
    setOffsetHeight: createSet(config, 'offsetHeight'),
    setClipped: createSet(config, 'clipped'),
    setSecondaryClipped: createSet(config, 'secondaryClipped'),

    unclipPrimary() {
      this.setClipped(false);
      return this;
    },

    unclipSecondary() {
      this.setSecondaryClipped(false);
      return this;
    },

    set(value) {
      _extends(config, value);

      return this;
    }

  });
});