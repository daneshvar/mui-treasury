function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useLayoutCtx } from '../hooks';
import { transitionStyles } from '../styles';
const useTransitionStyles = makeStyles(transitionStyles);

const HeaderOffset = (_ref) => {
  let {
    className,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style"]);

  const {
    header = {}
  } = useLayoutCtx();
  const transition = useTransitionStyles();
  const hasOffset = header.position === 'fixed' || header.position === 'absolute';
  return React.createElement("div", _extends({}, props, {
    className: cx('HeaderOffset', transition.root, className),
    style: _extends({}, style, {
      height: hasOffset ? header.offsetHeight : 0,
      flexShrink: 0
    })
  }));
};

HeaderOffset.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({})
};
HeaderOffset.defaultProps = {
  className: undefined,
  style: undefined
};
export default HeaderOffset;