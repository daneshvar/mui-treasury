function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import AddOnsGenerator from '../ConfigGenerator/AddOnsGenerator';
import ConfigGenerator from '../ConfigGenerator';
export default (() => {
  const addOns = AddOnsGenerator();
  const allScreens = {};
  return {
    addOns,
    get: () => _extends({}, addOns.get(), {}, Object.entries(allScreens).reduce((result, [screen, config]) => _extends({}, result, {
      [screen]: config.get()
    }), {})),

    add(screen, updater) {
      allScreens[screen] = ConfigGenerator();

      if (updater) {
        updater(allScreens[screen]);
      }

      return this;
    },

    adjust(screen, updater) {
      updater(allScreens[screen]);
      return this;
    },

    remove(screen) {
      delete allScreens[screen];
      return this;
    }

  };
});