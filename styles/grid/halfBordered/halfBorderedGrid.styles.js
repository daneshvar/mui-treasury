function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (({
  breakpoints,
  palette
}) => {
  const defaultColor = Color(palette.primary.main).fade(0.9).toString();
  return {
    container: ({
      borderColor = defaultColor
    }) => {
      const color = getThemeColor(palette, borderColor);
      return {
        borderTop: `1px solid ${color}`
      };
    },
    item: ({
      borderColor = defaultColor,
      colWidth = {
        xs: 12,
        sm: 6,
        md: 4
      }
    }) => {
      const color = getThemeColor(palette, borderColor);
      const screens = Object.keys(colWidth);
      return _extends({
        border: `1px solid ${color}`,
        borderTop: 'none',
        borderLeft: 'none'
      }, screens.reduce((result, key, index) => {
        const media = {};
        const width = colWidth[key];
        const {
          up,
          only
        } = breakpoints;
        const creator = index !== screens.length - 1 ? only : up;
        media[creator(key)] = {
          [`&:nth-of-type(${12 / width}n)`]: {
            borderRight: 'none'
          }
        };
        return _extends({}, result, {}, media);
      }, {}));
    }
  };
});