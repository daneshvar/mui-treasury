function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import cx from 'clsx';
import useToggleItems from './useToggleItems';
import useSelectItem from './useSelectItem';
export default ((initialSelectedKey, initialOpenKeys, options = {}) => {
  const {
    selectedKey,
    setSelectedKey
  } = useSelectItem(initialSelectedKey || '');
  const {
    openKeys,
    onToggle
  } = useToggleItems(initialOpenKeys || [], options);

  const getState = ({
    key,
    keyMap
  }) => {
    const selected = selectedKey === key;
    const active = keyMap[key].includes(selectedKey) || selected;
    return {
      selected,
      active
    };
  };

  const injectItemProps = params => {
    const {
      classes,
      level,
      key,
      onClick,
      subMenus,
      toggleSeparated,
      keyMap
    } = params;
    const {
      active,
      selected
    } = getState({
      key,
      keyMap
    });
    return {
      key,
      className: cx(classes[`lv${level}Item`], active && classes[`lv${level}ItemActive`], selectedKey === key && classes[`lv${level}ItemSelected`], openKeys.includes(key) && classes[`lv${level}ItemExpanded`]),
      component: subMenus ? 'div' : undefined,
      toggle: !!subMenus,
      toggleSeparated,
      onToggle: () => subMenus ? onToggle(key) : {},
      onMenuClick: () => {
        onClick(_extends({}, params, {
          active,
          selected
        }));

        if (!subMenus || toggleSeparated) {
          return setSelectedKey(key);
        }

        if (subMenus) {
          return onToggle(key);
        }

        return {};
      },
      expanded: openKeys.includes(key),
      selected: subMenus ? toggleSeparated && selected : selected
    };
  };

  const injectParentProps = ({
    classes,
    level,
    key,
    keyMap
  }) => {
    const {
      active
    } = getState({
      key,
      keyMap
    });
    return {
      key,
      className: cx(classes[`lv${level}Parent`], openKeys.includes(key) && classes[`lv${level}ParentExpanded`], active && classes[`lv${level}ParentActive`])
    };
  };

  const injectListProps = ({
    classes,
    level
  }) => ({
    className: cx(classes.list, classes[`lv${level}List`])
  });

  return {
    injectParentProps,
    injectItemProps,
    injectListProps
  };
});