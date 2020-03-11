function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useAutoCollapse, useHeightAdjustment, useWindow } from '../../hooks';
import { transitionStyles, sidebarStyles } from '../../styles';
import createEdgeSidebar from '../../models/edgeSidebar';
const useSidebarStyles = makeStyles(sidebarStyles);
const useTransitionStyles = makeStyles(transitionStyles);

const SharedSidebar = (_ref) => {
  let {
    children,
    PaperProps,
    SlideProps,
    ModalProps,
    useSidebarConfig
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "PaperProps", "SlideProps", "ModalProps", "useSidebarConfig"]);

  const {
    iBody
  } = useWindow();
  const theme = useTheme();
  const parsedCtx = useSidebarConfig();
  const height = useHeightAdjustment(parsedCtx);
  useAutoCollapse(parsedCtx);
  const [entered, setEntered] = React.useState(false);
  const styles = useSidebarStyles();
  const transition = useTransitionStyles();
  const {
    sidebar = {},
    opened,
    setOpened,
    getSidebarZIndex
  } = parsedCtx;
  const {
    getWidth
  } = createEdgeSidebar(parsedCtx);
  const isPermanent = sidebar.variant === 'permanent';
  return React.createElement(Drawer, _extends({}, props, {
    open: opened,
    onClose: () => {
      setOpened(false);
    },
    variant: sidebar.variant,
    anchor: sidebar.anchor || 'left',
    PaperProps: _extends({}, PaperProps, {
      classes: _extends({}, get(PaperProps, 'classes'), {
        root: cx(styles.paper, isPermanent && transition.root, entered && transition.all, get(PaperProps, 'classes.root'))
      }),
      style: _extends({}, get(PaperProps, 'style'), {}, getSidebarZIndex(theme), {
        width: getWidth()
      })
    }),
    ModalProps: _extends({
      container: iBody
    }, ModalProps),
    SlideProps: _extends({}, SlideProps, {
      onEntered: () => setEntered(true),
      onExit: () => setEntered(false)
    })
  }), React.createElement("div", {
    className: cx('HeaderMagnet', transition.smooth),
    style: {
      height,
      flexShrink: 0
    }
  }), typeof children === 'function' ? children(parsedCtx) : children);
};

SharedSidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  ModalProps: PropTypes.shape({}),
  useSidebarConfig: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};
SharedSidebar.defaultProps = {
  PaperProps: undefined,
  SlideProps: undefined,
  ModalProps: undefined,
  children: null
};
export default SharedSidebar;