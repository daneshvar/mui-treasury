export default (() => ({
  root: ({
    bgColor = 'rgba(0, 0, 0, 0.08)'
  }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: bgColor
  })
}));