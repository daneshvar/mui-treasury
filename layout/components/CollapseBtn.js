function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SharedCollapseBtn from './internal/SharedCollapseBtn';
import useSidebarConfig from '../hooks/useSidebarConfig';

const CollapseBtn = props => React.createElement(SharedCollapseBtn, _extends({}, props, {
  useSidebarConfig: useSidebarConfig
}));

CollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType
};
CollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button
};
export default CollapseBtn;