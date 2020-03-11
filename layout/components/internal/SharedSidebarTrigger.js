function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { useInsetBreakpoint } from '../../hooks';

const SharedSidebarTrigger = (_ref) => {
  let {
    children,
    onClick,
    useSidebarConfig
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onClick", "useSidebarConfig"]);

  const parsedCtx = useSidebarConfig();
  const {
    opened,
    setOpened,
    sidebar = {}
  } = parsedCtx;
  const {
    displayedAboveBreakpoint
  } = useInsetBreakpoint(parsedCtx);
  const isPermanentDrawer = !sidebar.inset && sidebar.variant === 'permanent';

  if (isPermanentDrawer || displayedAboveBreakpoint) {
    return null;
  }

  return React.createElement(IconButton, _extends({}, props, {
    onClick: e => {
      onClick(e);
      setOpened(!opened);
    }
  }), children);
};

SharedSidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  useSidebarConfig: PropTypes.func.isRequired
};
SharedSidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {}
};
export default SharedSidebarTrigger;