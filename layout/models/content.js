function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';
import combineMargin from '../utils/combineMargin';
export default ((ctx = {}) => {
  const {
    content = {}
  } = ctx;
  const {
    mainEffect,
    subEffect,
    mapSecondaryConfig,
    isEdgeAndInset
  } = createAllSidebars(ctx);
  const subContent = mapSecondaryConfig(content);
  return {
    getMarginStyle() {
      if (isEdgeAndInset) return undefined;
      return combineMargin(mainEffect.getMarginStyle(content), subEffect.getMarginStyle(subContent));
    },

    getWidthStyle() {
      if (isEdgeAndInset) return undefined;
      return reduceWidths([mainEffect.getWidthObj(content), subEffect.getWidthObj(subContent)]).getStyle();
    },

    getStyle() {
      return _extends({}, this.getMarginStyle(), {}, this.getWidthStyle());
    }

  };
});