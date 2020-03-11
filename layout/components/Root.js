function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { LayoutProvider, LayoutConsumer } from '../core/layoutContext';
import * as styles from '../styles';
const baseTheme = createMuiTheme();
const useSidebarStyles = makeStyles(styles.sidebarStyles);
const useHeaderStyles = makeStyles(styles.headerStyles);
const useContainerStyles = makeStyles(styles.containerStyles); // eslint-disable-next-line react/prop-types

const Layout = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  const sidebarStyles = useSidebarStyles();
  const headerStyles = useHeaderStyles();
  const containerStyles = useContainerStyles();
  return React.createElement(LayoutProvider, props, typeof children === 'function' ? React.createElement(LayoutConsumer, null, ctx => children(_extends({
    sidebarStyles,
    headerStyles,
    containerStyles
  }, ctx))) : children);
};

const Root = (_ref2) => {
  let {
    theme,
    omitThemeProvider
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, ["theme", "omitThemeProvider"]);

  if (omitThemeProvider) {
    return React.createElement(Layout, props);
  }

  return React.createElement(ThemeProvider, {
    theme: theme || baseTheme
  }, React.createElement(Layout, props));
};

Root.propTypes = {
  theme: PropTypes.shape({}),
  omitThemeProvider: PropTypes.bool
};
Root.defaultProps = {
  omitThemeProvider: undefined,
  theme: undefined
};
export default Root;