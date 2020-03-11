function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SharedSidebarTriggerIcon from './internal/SharedSidebarTriggerIcon';
import useSidebarConfig from '../hooks/useSidebarConfig';

const SidebarTriggerIcon = props => React.createElement(SharedSidebarTriggerIcon, _extends({}, props, {
  useSidebarConfig: useSidebarConfig
}));

export default SidebarTriggerIcon;