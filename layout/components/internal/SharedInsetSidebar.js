function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import cx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useHeightAdjustment, useInsetBreakpoint, useWindow } from '../../hooks';
import createInsetSidebar from '../../models/insetSidebar';
import * as styles from '../../styles';
const useTransitionStyles = makeStyles(styles.transitionStyles);
const useInsetSidebarStyles = makeStyles(styles.insetSidebarStyles);

const SharedInsetSidebar = (_ref) => {
  let {
    className,
    style,
    children,
    useSidebarConfig,
    BodyProps = {},
    PaperProps = {},
    ModalProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style", "children", "useSidebarConfig", "BodyProps", "PaperProps", "ModalProps"]);

  const {
    iBody
  } = useWindow();
  const parsedCtx = useSidebarConfig();
  const {
    opened,
    setOpened
  } = parsedCtx;
  const {
    getWidth,
    getBodyStyle,
    getDrawerAnchor
  } = createInsetSidebar(parsedCtx);
  const {
    displayedBelowBreakpoint
  } = useInsetBreakpoint(parsedCtx);
  const height = useHeightAdjustment(parsedCtx);
  const transition = useTransitionStyles();
  const insetStyles = useInsetSidebarStyles();
  const {
    position: insetPosition
  } = get(parsedCtx, 'sidebar.insetProps', {});

  if (displayedBelowBreakpoint) {
    return React.createElement(Drawer, _extends({}, props, {
      open: opened,
      onClose: () => {
        setOpened(false);
      },
      variant: 'temporary',
      anchor: getDrawerAnchor(),
      PaperProps: PaperProps,
      ModalProps: _extends({
        container: () => iBody
      }, ModalProps)
    }), children);
  }

  return React.createElement("div", _extends({
    className: cx('InsetSidebar-root', insetStyles.root, className),
    style: _extends({}, style, {
      width: getWidth()
    })
  }, props), React.createElement("div", _extends({}, BodyProps, {
    style: _extends({}, getBodyStyle(), {}, BodyProps.style),
    className: cx('InsetSidebar-body', insetPosition === 'sticky' && insetStyles.paperSticky, BodyProps.className)
  }), React.createElement("div", {
    className: cx('HeaderMagnet', transition.smooth),
    style: {
      height,
      flexShrink: 0
    }
  }), children));
};

SharedInsetSidebar.propTypes = {
  useSidebarConfig: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
  BodyProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.shape({})
  }),
  PaperProps: PropTypes.shape({}),
  ModalProps: PropTypes.shape({})
};
SharedInsetSidebar.defaultProps = {
  className: undefined,
  style: undefined,
  children: null,
  BodyProps: undefined,
  PaperProps: undefined,
  ModalProps: undefined
};
export default SharedInsetSidebar;