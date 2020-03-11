function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SharedCollapseIcon from './internal/SharedCollapseIcon';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondaryCollapseIcon = props => React.createElement(SharedCollapseIcon, _extends({}, props, {
  useSidebarConfig: use2ndSidebarConfig
}));

export default SecondaryCollapseIcon;