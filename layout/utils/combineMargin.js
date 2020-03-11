function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import isNil from 'lodash/isNil';
import toValidCssValue from './toValidCssValue';

const getCssValue = (v1, v2) => {
  if (isNil(v1)) return v2;
  if (isNil(v2)) return v1;
  return `calc(${toValidCssValue(v1)} + ${toValidCssValue(v2)})`;
};

export default ((m1, m2) => {
  if (!m1) return m2;
  if (!m2) return m1;
  const marginLeft = getCssValue(m1.marginLeft, m2.marginLeft);
  const marginRight = getCssValue(m1.marginRight, m2.marginRight);
  return _extends({}, !isNil(marginLeft) && {
    marginLeft
  }, {}, !isNil(marginRight) && {
    marginRight
  });
});