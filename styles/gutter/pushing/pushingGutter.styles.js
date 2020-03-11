function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const getSpacing = (fn, space) => Array.isArray(space) ? fn(...space) : fn(space);

const createTargetStyle = ({
  selector,
  target,
  cssProp,
  space,
  firstExcluded = false,
  lastExcluded = false
}, spacing) => _extends({
  [`& ${selector} ${target}`]: {
    [cssProp]: getSpacing(spacing, space)
  }
}, firstExcluded && {
  [`& ${selector} ${target}:first-child`]: {
    [cssProp]: 'unset'
  }
}, {}, lastExcluded && {
  [`& ${selector} ${target}:last-child`]: {
    [cssProp]: 'unset'
  }
});

const reduceTargets = (_ref, spacing) => {
  let {
    targets
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["targets"]);

  return targets ? targets.reduce((result, curr) => _extends({}, result, {}, createTargetStyle(_extends({}, props, {
    target: curr
  }), spacing)), {}) : {};
};

export default (({
  spacing
}) => ({
  parent: props => {
    const {
      target = '*',
      selector = '>',
      space = 1,
      cssProp = 'marginLeft'
    } = props;

    const parsedProps = _extends({}, props, {
      selector,
      target,
      cssProp,
      space
    });

    return _extends({}, createTargetStyle(parsedProps, spacing), {}, reduceTargets(parsedProps, spacing));
  },
  child: props => {
    const {
      target = '*',
      selector = '~',
      space = 1,
      cssProp = 'marginLeft'
    } = props;

    const parsedProps = _extends({}, props, {
      selector,
      target,
      cssProp,
      space
    });

    return _extends({}, createTargetStyle(parsedProps, spacing), {}, reduceTargets(parsedProps, spacing));
  }
}));