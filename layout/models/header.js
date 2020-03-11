function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';
import combineMargin from '../utils/combineMargin';
export default ((ctx = {}) => {
  const {
    header = {}
  } = ctx;
  const {
    mainEffect,
    subEffect,
    mapSecondaryConfig
  } = createAllSidebars(ctx);
  const subHeader = mapSecondaryConfig(header);
  return {
    getMarginStyle() {
      return combineMargin(!header.clipped ? mainEffect.getMarginStyle(header) : undefined, !header.secondaryClipped ? subEffect.getMarginStyle(subHeader) : undefined);
    },

    getWidthStyle() {
      return reduceWidths([...(!header.clipped ? [mainEffect.getWidthObj(header)] : []), ...(!header.secondaryClipped ? [subEffect.getWidthObj(subHeader)] : [])]).getStyle();
    },

    getStyle() {
      return _extends({}, this.getMarginStyle(), {}, this.getWidthStyle());
    }

  };
});