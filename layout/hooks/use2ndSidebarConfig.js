function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import get from 'lodash.get';
import useLayoutCtx from './useLayoutCtx';
import SidebarAdapter from '../adapters/sidebar';
import createAllSidebars from '../models/allSidebars';
export default (() => {
  const ctx = useLayoutCtx();
  const allSidebars = createAllSidebars(ctx);
  const parsedCtx = SidebarAdapter.mapSecondaryConfig(ctx);
  return _extends({}, parsedCtx, {
    getSidebarZIndex: allSidebars.getSecondaryStyle,
    clipped: get(parsedCtx, ['header', 'secondaryClipped'])
  });
});