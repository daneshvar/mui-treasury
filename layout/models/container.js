function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';
import combineMargin from '../utils/combineMargin';
export default ((ctx = {}) => {
  const {
    container = {}
  } = ctx;
  const {
    mainEffect,
    subEffect,
    mapSecondaryConfig,
    isEdgeAndInset,
    isPrimaryEdge,
    isSecondaryEdge
  } = createAllSidebars(ctx);
  const subFooter = mapSecondaryConfig(container);
  const mainAttached = isEdgeAndInset && isPrimaryEdge;
  const subAttached = isEdgeAndInset && isSecondaryEdge;
  return {
    getMarginStyle() {
      return combineMargin(mainAttached ? mainEffect.getMarginStyle(container) : undefined, subAttached ? subEffect.getMarginStyle(subFooter) : undefined);
    },

    getWidthStyle() {
      const finalWidthObj = reduceWidths([...(mainAttached ? [mainEffect.getWidthObj(container)] : []), ...(subAttached ? [subEffect.getWidthObj(subFooter)] : [])]);
      return finalWidthObj.getStyle();
    },

    getStyle() {
      return _extends({}, this.getMarginStyle(), {}, this.getWidthStyle());
    }

  };
});