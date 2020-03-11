function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebarTrigger from './internal/SharedSidebarTrigger';
import useSidebarConfig from '../hooks/useSidebarConfig';

const SidebarTrigger = props => React.createElement(SharedSidebarTrigger, _extends({}, props, {
  useSidebarConfig: useSidebarConfig
}));

SidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};
SidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {}
};
export default SidebarTrigger;