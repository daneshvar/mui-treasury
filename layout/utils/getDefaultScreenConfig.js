function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export default (({
  header,
  sidebar,
  secondarySidebar,
  content,
  footer
} = {}) => ({
  sidebar: _extends({
    anchor: 'left',
    variant: 'temporary',
    width: 256,
    collapsible: false,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'fixed',
      hiddenBreakpoint: 'sm'
    }
  }, sidebar),
  secondarySidebar: _extends({
    anchor: 'right',
    variant: 'persistent',
    width: 244,
    collapsible: true,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'sticky',
      hiddenBreakpoint: 'sm'
    }
  }, secondarySidebar),
  header: _extends({
    position: 'fixed',
    offsetHeight: 64,
    clipped: true,
    secondaryClipped: false,
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'fit'
  }, header),
  content: _extends({
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'none'
  }, content),
  footer: _extends({
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'none',
    insetBehavior: 'fit',
    secondaryInsetBehavior: 'none'
  }, footer)
}));