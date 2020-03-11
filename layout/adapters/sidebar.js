function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const SidebarAdapter = () => ({});

SidebarAdapter.mapSecondaryConfig = (_ref = {}) => {
  let {
    secondarySidebar,
    secondaryOpened,
    setSecondaryOpened,
    secondaryCollapsed,
    setSecondaryCollapsed,
    secondaryClipped,
    secondaryAutoCollapseDisabled,
    secondaryCollapseBreakpoint,
    secondaryInsetHiddenBreakpoint,
    secondaryInsetHiddenDisabled,
    getSecondarySidebarWidth,
    getSecondarySidebarGap,
    getSecondarySidebarZIndex,
    getSecondaryInsetSidebarStyle,
    getSecondaryInsetSidebarBodyStyle,
    // header, footer, content
    secondaryPersistentBehavior,
    secondaryInsetBehavior
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, ["secondarySidebar", "secondaryOpened", "setSecondaryOpened", "secondaryCollapsed", "setSecondaryCollapsed", "secondaryClipped", "secondaryAutoCollapseDisabled", "secondaryCollapseBreakpoint", "secondaryInsetHiddenBreakpoint", "secondaryInsetHiddenDisabled", "getSecondarySidebarWidth", "getSecondarySidebarGap", "getSecondarySidebarZIndex", "getSecondaryInsetSidebarStyle", "getSecondaryInsetSidebarBodyStyle", "secondaryPersistentBehavior", "secondaryInsetBehavior"]);

  return _extends({}, rest, {
    sidebar: secondarySidebar,
    opened: secondaryOpened,
    collapsed: secondaryCollapsed,
    clipped: secondaryClipped,
    setOpened: setSecondaryOpened,
    setCollapsed: setSecondaryCollapsed,
    autoCollapseDisabled: secondaryAutoCollapseDisabled,
    collapseBreakpoint: secondaryCollapseBreakpoint,
    insetHiddenBreakpoint: secondaryInsetHiddenBreakpoint,
    insetHiddenDisabled: secondaryInsetHiddenDisabled,
    getSidebarWidth: getSecondarySidebarWidth,
    getSidebarGap: getSecondarySidebarGap,
    getSidebarZIndex: getSecondarySidebarZIndex,
    getInsetSidebarStyle: getSecondaryInsetSidebarStyle,
    getInsetSidebarBodyStyle: getSecondaryInsetSidebarBodyStyle,
    // header, footer, content
    persistentBehavior: secondaryPersistentBehavior,
    insetBehavior: secondaryInsetBehavior
  });
};

SidebarAdapter.normalize2ndSidebarConfigToFn = (fn, ctx) => fn(SidebarAdapter.mapSecondaryConfig(ctx));

export default SidebarAdapter;