import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'static/dist/bundle.js',
    format: 'iife',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    // We need to convert the CommonJS modules used by Node to ES6
    commonjs(),
    // Resolve Node modules
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    typescript()
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
