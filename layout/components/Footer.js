function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx, useInsetBreakpoint } from '../hooks';
import SidebarAdapter from '../adapters/sidebar';
import { transitionStyles } from '../styles';
import createFooter from '../models/footer';
import upperFirst from '../utils/upperFirst';
const useStyles = makeStyles(({
  breakpoints,
  palette,
  spacing
}) => ({
  root: {
    borderTop: '1px solid',
    borderColor: palette.grey[200],
    padding: spacing(2),
    flex: 'auto',
    [breakpoints.up('sm')]: {
      padding: spacing(3)
    }
  }
}));
const useTransitionStyles = makeStyles(transitionStyles);

const Footer = (_ref) => {
  let {
    className,
    component: Component,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "component", "style"]);

  const ctx = useLayoutCtx();
  const {
    sidebar = {},
    secondarySidebar = {}
  } = ctx;
  const footerModel = createFooter(ctx);
  const main = useInsetBreakpoint(ctx);
  const sub = useInsetBreakpoint(SidebarAdapter.mapSecondaryConfig(ctx));
  const styles = useStyles(props);
  const transition = useTransitionStyles();
  const footerStyle = footerModel.getStyle();

  if (main.isTargetDown && !main.insetHiddenDisabled && sidebar.inset) {
    delete footerStyle[`margin${upperFirst(sidebar.anchor)}`];
  }

  if (sub.isTargetDown && !sub.insetHiddenDisabled && secondarySidebar.inset) {
    delete footerStyle[`margin${upperFirst(secondarySidebar.anchor)}`];
  }

  return React.createElement(Component, _extends({}, props, {
    className: cx(styles.root, transition.root, className),
    style: _extends({}, style, {}, footerStyle)
  }));
};

Footer.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  style: PropTypes.shape({})
};
Footer.defaultProps = {
  className: undefined,
  component: 'footer',
  style: undefined
};
export default Footer;