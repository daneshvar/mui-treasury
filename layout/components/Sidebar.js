function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebar from './internal/SharedSidebar';
import useSidebarConfig from '../hooks/useSidebarConfig';

const Sidebar = props => {
  return React.createElement(SharedSidebar, _extends({}, props, {
    useSidebarConfig: useSidebarConfig
  }));
};

Sidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  ModalProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};
Sidebar.defaultProps = {
  PaperProps: undefined,
  SlideProps: undefined,
  ModalProps: undefined,
  children: null
};
export default Sidebar;