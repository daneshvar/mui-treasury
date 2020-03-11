function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';

const SharedCollapseIcon = (_ref) => {
  let {
    useSidebarConfig
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["useSidebarConfig"]);

  const {
    collapsed,
    sidebar
  } = useSidebarConfig();

  const getCollapsedArrow = () => {
    if (sidebar.anchor === 'right') {
      return React.createElement(KeyboardArrowLeftRounded, props);
    }

    if (sidebar.anchor === 'left') {
      return React.createElement(KeyboardArrowRightRounded, props);
    }

    return null;
  };

  const getUnCollapsedArrow = () => {
    if (sidebar.anchor === 'left') {
      return React.createElement(KeyboardArrowLeftRounded, props);
    }

    if (sidebar.anchor === 'right') {
      return React.createElement(KeyboardArrowRightRounded, props);
    }

    return null;
  };

  return collapsed ? getCollapsedArrow() : getUnCollapsedArrow();
};

SharedCollapseIcon.propTypes = {
  useSidebarConfig: PropTypes.func.isRequired
};
SharedCollapseIcon.defaultProps = {};
export default SharedCollapseIcon;