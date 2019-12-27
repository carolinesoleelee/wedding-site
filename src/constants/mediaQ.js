export const breakpoints = {
  phone: 500, // normal spec
  tablet: 768, // normal spec
  desktop: 1050,
};

export const greaterThan = {
  phone: `@media (min-width: ${breakpoints.phone + 1}px)`, // 501px and up
  tablet: `@media (min-width: ${breakpoints.tablet + 1}px)`, // 769px and up
  desktop: `@media (min-width: ${breakpoints.desktop + 1}px)`, // 1001px and up
};

export const lessThan = {
  phone: `@media (max-width: ${breakpoints.phone}px)`, // 500px and down
  tablet: `@media (max-width: ${breakpoints.tablet}px)`, // 768px and down
  desktop: `@media (max-width: ${breakpoints.desktop}px)`, // 1000px and down
};
