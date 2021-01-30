import {DefaultTheme} from '@nehalist/gatsby-theme-nehalem';

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `rgba(130,240,220,0.9)`,
    linkColor: `#a4cbb8`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `440px`,
      background: `linear-gradient(140deg, #87e09e, #74abe8) repeat scroll 0 0 transparent`,
    },
  },
};

export default Theme;
