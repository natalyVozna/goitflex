export const theme = {
  colors: {
    white: '#ffffff',
    praimeryText: '#2c2c2c',
    text: '#212121',
    accent: 'rgb(33, 148, 242)',
    red: '#f74402',
    gray: '#afb1b8',
    primaryBg: '#f5f5f5',
    secondaryBg: '#f5f4fa',
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  // spacing: value => `${4 * value}px`,
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Times New Roman, sans-serif',
    monospace: 'monospace',
  },
  fontSize: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
