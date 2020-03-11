function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const root = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: 16,
  background: 'none'
};
const link = {
  cursor: 'pointer',
  textDecoration: 'none',
  border: 'none',
  padding: 0
};
export default (({
  palette,
  spacing
}) => ({
  root: _extends({}, root, {
    color: palette.text.secondary,
    cursor: 'default'
  }),
  link: _extends({}, root, {}, link, {
    color: palette.text.secondary,
    '&:hover, &:focus': {
      color: palette.primary.main,
      '& $icon': {
        opacity: 1
      }
    }
  }),
  primaryLink: {
    color: palette.primary.light,
    opacity: 0.87,
    '&:hover, &:focus': {
      color: palette.primary.main,
      opacity: 1,
      '& $icon': {
        opacity: 1
      }
    }
  },
  icon: {
    opacity: 0.6,
    fontSize: '1.125em',
    verticalAlign: 'middle',
    '&:first-child': {
      marginRight: spacing(1)
    },
    '&:last-child': {
      marginLeft: spacing(1)
    }
  }
}));