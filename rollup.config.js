import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'window',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  globals: {
    'styled-components': 'styled',
    'prop-types': 'PropTypes',
  },
  external: ['styled-components', 'prop-types'],
  dest: 'lib/react-styled-box.js',
};
