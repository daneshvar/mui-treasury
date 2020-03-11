function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (({
  palette,
  spacing
}) => ({
  root: (_ref) => {
    let {
      bgColor = 'primary.main',
      offset = '-40px'
    } = _ref,
        styles = _objectWithoutPropertiesLoose(_ref, ["bgColor", "offset"]);

    return _extends({
      backgroundColor: getThemeColor(palette, bgColor),
      borderRadius: spacing(2),
      margin: `${offset} auto 0`,
      width: '88%'
    }, styles);
  },
  title: {
    color: palette.common.white,
    fontWeight: 'bold'
  },
  subheader: {
    color: 'rgba(255, 255, 255, 0.76)'
  }
}));