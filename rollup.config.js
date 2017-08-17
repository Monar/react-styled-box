import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'window',
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
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
