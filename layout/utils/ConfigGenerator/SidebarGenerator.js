function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import createSet from '../createSet';
export default (() => {
  const config = {
    anchor: 'left',
    variant: 'temporary',
    width: 256,
    collapsible: false,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'fixed',
      top: 0,
      drawerAnchor: 'left'
    }
  };
  const secondaryConfig = {
    anchor: 'right',
    variant: 'persistent',
    width: 244,
    collapsible: true,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'sticky',
      top: 0,
      drawerAnchor: 'right'
    }
  };
  return {
    get: () => config,

    initSecondary() {
      _extends(config, secondaryConfig);

      return this;
    },

    setAnchor: createSet(config, 'anchor'),
    setWidth: createSet(config, 'width'),
    setVariant: createSet(config, 'variant'),
    setCollapsible: createSet(config, 'collapsible'),
    setCollapsedWidth: createSet(config, 'collapsedWidth'),
    setHidden: createSet(config, 'hidden'),
    setInset: createSet(config, 'inset'),
    setInsetProps: createSet(config, 'insetProps'),

    set(value) {
      _extends(config, value);

      return this;
    }

  };
});