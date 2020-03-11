function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../hooks';
import createContainer from '../models/container';
import * as styles from '../styles';
const useTransitionStyles = makeStyles(styles.transitionStyles);
const useContainerStyles = makeStyles(styles.containerStyles);

const InsetContainer = (_ref) => {
  let {
    component: Component,
    className,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["component", "className", "style"]);

  const ctx = useLayoutCtx();
  const containerModel = createContainer(ctx);
  const transition = useTransitionStyles();
  const containerStyles = useContainerStyles();
  return React.createElement(Component, _extends({}, props, {
    className: cx(containerStyles.root, transition.root, className),
    style: _extends({}, style, {}, containerModel.getStyle())
  }));
};

InsetContainer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  component: PropTypes.elementType
};
InsetContainer.defaultProps = {
  className: undefined,
  style: undefined,
  component: 'div'
};
export default InsetContainer;