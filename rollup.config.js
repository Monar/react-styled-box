import babel from 'rollup-plugin-babel';

const share = {
  input: 'src/index.js',
  external: ['react', 'immutable'],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
  ],
  external: ['styled-components', 'prop-types'],
}

export default [
  {
    ...share,
    output: {
      file: 'lib/react-styled-box.cjs.js',
      format: 'cjs',
      exports: 'named',
      globals: {
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
      },
    },
  },
  {
    ...share,
    output: {
      file: 'lib/react-styled-box.es.js',
      format: 'es',
      globals: {
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
      },
    },
  }
];
