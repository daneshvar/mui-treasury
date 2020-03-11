function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { transitionStyles } from '../styles';
const useTransitionStyles = makeStyles(transitionStyles);

const HeaderMagnet = (_ref) => {
  let {
    className,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style"]);

  const transition = useTransitionStyles();
  return React.createElement("div", _extends({
    className: cx('HeaderMagnet', transition.smooth, className),
    style: _extends({}, style, {
      flexShrink: 0
    })
  }, props));
};

HeaderMagnet.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({})
};
HeaderMagnet.defaultProps = {
  className: undefined,
  style: undefined
};
export default HeaderMagnet;