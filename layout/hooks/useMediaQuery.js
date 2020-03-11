function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { getThemeProps, useTheme } from '@material-ui/styles';
import useWindow from './useWindow';

function useMediaQuery(queryInput, options = {}) {
  const theme = useTheme();
  const {
    iWindow
  } = useWindow();
  const props = getThemeProps({
    theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (process.env.NODE_ENV !== 'production') {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(['Material-UI: the `query` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
    }
  }

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  const supportMatchMedia = typeof iWindow !== 'undefined' && typeof iWindow.matchMedia !== 'undefined';

  const {
    defaultMatches = false,
    noSsr = false,
    ssrMatchMedia = null
  } = _extends({}, props, {}, options);

  const [match, setMatch] = React.useState(() => {
    if (noSsr && supportMatchMedia) {
      return iWindow.matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  });
  React.useEffect(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = iWindow.matchMedia(query);

    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [iWindow, query, supportMatchMedia]);
  return match;
}

export default useMediaQuery;