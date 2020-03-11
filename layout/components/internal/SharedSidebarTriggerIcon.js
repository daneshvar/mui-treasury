function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';

const SharedSidebarTriggerIcon = (_ref) => {
  let {
    useSidebarConfig
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["useSidebarConfig"]);

  const {
    opened,
    sidebar
  } = useSidebarConfig();

  const getArrow = () => {
    if (sidebar.anchor === 'left') {
      return React.createElement(ArrowLeft, props);
    }

    if (sidebar.anchor === 'right') {
      return React.createElement(ArrowRight, props);
    }

    return null;
  };

  return opened ? getArrow() : React.createElement(MenuRounded, props);
};

SharedSidebarTriggerIcon.propTypes = {
  useSidebarConfig: PropTypes.func.isRequired
};
SharedSidebarTriggerIcon.defaultProps = {};
export default SharedSidebarTriggerIcon;