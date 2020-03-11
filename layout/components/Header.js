function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import createHeader from '../models/header';
import createAllSidebars from '../models/allSidebars';
import { useLayoutCtx } from '../hooks';
import { transitionStyles } from '../styles';
const useStyles = makeStyles(() => ({
  root: {
    left: 0
  }
}));
const useTransitionStyles = makeStyles(transitionStyles);

const Header = (_ref) => {
  let {
    className,
    children,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "style"]);

  const ctx = useLayoutCtx();
  const {
    header = {}
  } = ctx;
  const headerModel = createHeader(ctx);
  const allSidebars = createAllSidebars(ctx);
  const styles = useStyles();
  const transition = useTransitionStyles();
  const theme = useTheme();
  return React.createElement(AppBar, _extends({
    color: 'default',
    elevation: 0
  }, props, {
    position: header.position,
    className: cx(styles.root, transition.root, className),
    style: _extends({}, style, {}, headerModel.getStyle(), {}, allSidebars.getHeaderStyle(theme))
  }), typeof children === 'function' ? children(ctx) : children);
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  style: PropTypes.shape({})
};
Header.defaultProps = {
  className: undefined,
  children: null,
  style: undefined
};
export default Header;