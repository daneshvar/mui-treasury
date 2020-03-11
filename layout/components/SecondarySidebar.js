function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebar from './internal/SharedSidebar';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondarySidebar = props => React.createElement(SharedSidebar, _extends({}, props, {
  useSidebarConfig: use2ndSidebarConfig
}));

SecondarySidebar.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};
SecondarySidebar.defaultProps = {
  side: undefined,
  PaperProps: {},
  SlideProps: {},
  children: null
};
export default SecondarySidebar;