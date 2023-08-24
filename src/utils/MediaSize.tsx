interface BreakpointsInterface {
  xs: String;
  sm: String;
  md: String;
  lg: String;
  xl: String;
  "2xl": String;
}

const breakpoints: BreakpointsInterface = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1023px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};
