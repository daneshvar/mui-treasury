function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import useScreenComparison from './useScreenComparison';
export default ((ctx = {}) => {
  const {
    insetHiddenBreakpoint,
    insetHiddenDisabled,
    sidebar
  } = ctx;
  const values = useScreenComparison(insetHiddenBreakpoint);
  return _extends({}, values, {
    insetHiddenDisabled,
    displayedAboveBreakpoint: sidebar && sidebar.inset && values.isTargetAbove && !insetHiddenDisabled,
    displayedBelowBreakpoint: sidebar && sidebar.inset && values.isTargetDown && !insetHiddenDisabled
  });
});