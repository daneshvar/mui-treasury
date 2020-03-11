function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SharedCollapseBtn from './internal/SharedCollapseBtn';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondaryCollapseBtn = props => React.createElement(SharedCollapseBtn, _extends({}, props, {
  useSidebarConfig: use2ndSidebarConfig
}));

SecondaryCollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType
};
SecondaryCollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button
};
export default SecondaryCollapseBtn;