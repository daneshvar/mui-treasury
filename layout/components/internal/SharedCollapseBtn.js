function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const CollapseBtn = (_ref) => {
  let {
    component: Component,
    onClick,
    mapContext,
    useSidebarConfig
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["component", "onClick", "mapContext", "useSidebarConfig"]);

  const ctx = useSidebarConfig();
  const {
    setCollapsed,
    collapsed,
    opened,
    sidebar
  } = mapContext(ctx);

  if (!sidebar || !sidebar.collapsible || sidebar.variant === 'persistent' && !opened) {
    return null;
  }

  return React.createElement(Component, _extends({
    onClick: e => {
      onClick(e);
      setCollapsed(!collapsed);
    }
  }, props));
};

CollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType,
  mapContext: PropTypes.func,
  useSidebarConfig: PropTypes.func.isRequired
};
CollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
  mapContext: ctx => ctx
};
export default CollapseBtn;