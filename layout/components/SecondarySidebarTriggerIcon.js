function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SharedSidebarTriggerIcon from './internal/SharedSidebarTriggerIcon';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondarySidebarTriggerIcon = props => React.createElement(SharedSidebarTriggerIcon, _extends({}, props, {
  useSidebarConfig: use2ndSidebarConfig
}));

export default SecondarySidebarTriggerIcon;