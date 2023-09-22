import styles from "./scss/abstracts/_export.module.scss";

const { xs, sm, md, lg, xl, xxl } = styles;

export const myBreakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
};

const theme = {
  breakpoints: myBreakpoints,
  themeColors: {},
};

export default theme;
