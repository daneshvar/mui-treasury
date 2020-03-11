function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';
import combineMargin from '../utils/combineMargin';
export default ((ctx = {}) => {
  const {
    footer = {}
  } = ctx;
  const {
    mainEffect,
    subEffect,
    mapSecondaryConfig,
    isEdgeAndInset,
    isPrimaryInset,
    isPrimaryEdge,
    isSecondaryEdge,
    isSecondaryInset
  } = createAllSidebars(ctx);
  const subFooter = mapSecondaryConfig(footer);
  const mainAttached = !isEdgeAndInset || isPrimaryInset && isSecondaryEdge;
  const subAttached = !isEdgeAndInset || isPrimaryEdge && isSecondaryInset;
  return {
    getMarginStyle() {
      return combineMargin(mainEffect.getMarginStyle(footer), subEffect.getMarginStyle(subFooter));
    },

    getWidthStyle() {
      const finalWidthObj = reduceWidths([...(mainAttached ? [mainEffect.getWidthObj(footer)] : []), ...(subAttached ? [subEffect.getWidthObj(subFooter)] : [])]);
      return finalWidthObj.getStyle();
    },

    getStyle() {
      return _extends({}, this.getMarginStyle(), {}, this.getWidthStyle());
    }

  };
});