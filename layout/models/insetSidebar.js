function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import get from 'lodash.get';

const parseUnit = amount => typeof amount === 'number' ? `${amount}px` : amount;

export default ((ctx = {}) => {
  const {
    sidebar = {},
    header = {}
  } = ctx;
  const insetProps = get(sidebar, 'insetProps', {});
  return {
    getWidth: () => {
      if (sidebar.hidden) return 0;
      return sidebar.width;
    },
    getDrawerAnchor: () => insetProps.drawerAnchor,
    getBodyStyle: () => _extends({
      position: insetProps.position,
      top: insetProps.top
    }, insetProps.position === 'fixed' && {
      height: '100%'
    }, {}, insetProps.position === 'absolute' && {
      height: `calc(100vh - ${parseUnit(header.offsetHeight)})`,
      width: '100%'
    })
  };
});