function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const createSet = (config, key) => function set(value) {
  // eslint-disable-next-line no-param-reassign
  config[key] = typeof value === 'object' ? _extends({}, config[key], {}, value) : value;
  return this;
};

export default createSet;