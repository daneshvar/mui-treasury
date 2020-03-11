function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { transitionStyles } from '../styles';
import { useLayoutCtx } from '../hooks';
import createContent from '../models/content';
import HeaderOffset from './HeaderOffset';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));
const useTransitionStyles = makeStyles(transitionStyles);

const Content = (_ref) => {
  let {
    component: Component,
    className,
    children,
    style,
    omitHeaderOffset
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["component", "className", "children", "style", "omitHeaderOffset"]);

  const ctx = useLayoutCtx();
  const contentModel = createContent(ctx);
  const styles = useStyles(props);
  const transition = useTransitionStyles();
  return React.createElement(Component, _extends({}, props, {
    className: cx(styles.root, transition.root, className),
    style: _extends({}, style, {}, contentModel.getStyle())
  }), !omitHeaderOffset && React.createElement(HeaderOffset, null), children);
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
  omitHeaderOffset: PropTypes.bool
};
Content.defaultProps = {
  className: undefined,
  component: 'main',
  style: undefined,
  omitHeaderOffset: false
};
export default Content;