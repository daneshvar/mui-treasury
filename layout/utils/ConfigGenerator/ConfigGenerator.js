function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import AddOnsGenerator from './AddOnsGenerator';
import ContentGenerator from './ContentGenerator';
import ContainerGenerator from './ContainerGenerator';
import FooterGenerator from './FooterGenerator';
import HeaderGenerator from './HeaderGenerator';
import SidebarGenerator from './SidebarGenerator';
export default (({
  addOnsIncluded
} = {}) => {
  const addOns = AddOnsGenerator();
  const primarySidebar = SidebarGenerator();
  const secondarySidebar = SidebarGenerator().initSecondary();
  const content = ContentGenerator();
  const container = ContainerGenerator();
  const header = HeaderGenerator();
  const footer = FooterGenerator();
  return {
    debug(props) {
      // eslint-disable-next-line no-console
      console.log(this.get(props));
    },

    get: () => _extends({}, addOnsIncluded && addOns.get(), {
      sidebar: primarySidebar.get(),
      secondarySidebar: secondarySidebar.get(),
      container: container.get(),
      content: content.get(),
      header: header.get(),
      footer: footer.get()
    }),

    setPrimarySidebarToInset() {
      primarySidebar.setInset(true);
      return this;
    },

    setPrimarySidebarToNonInset() {
      primarySidebar.setInset(false);
      return this;
    },

    setSecondarySidebarToInset() {
      secondarySidebar.setInset(true);
      return this;
    },

    setSecondarySidebarToNonInset() {
      secondarySidebar.setInset(false);
      return this;
    },

    setAllSidebarsToInset() {
      primarySidebar.setInset(true);
      secondarySidebar.setInset(true);
      return this;
    },

    switchPrimarySidebarAnchor() {
      const pval = primarySidebar.get();
      primarySidebar.setAnchor(pval.anchor === 'left' ? 'right' : 'left');
      return this;
    },

    switchSecondarySidebarAnchor() {
      const sval = secondarySidebar.get();
      secondarySidebar.setAnchor(sval.anchor === 'left' ? 'right' : 'left');
      return this;
    },

    switchAllSidebarAnchors() {
      this.switchPrimarySidebarAnchor();
      this.switchSecondarySidebarAnchor();
      return this;
    },

    addOns,
    primarySidebar,
    secondarySidebar,
    content,
    container,
    header,
    footer
  };
});