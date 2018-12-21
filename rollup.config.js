import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

const banner = `/*
${pkg.name} v${pkg.version}
https://github.com/RyukyuInteractive/xatto-AdminLTE
Released under the ${pkg.license} License.
*/`;

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/xatto-admin-lte.js',
    format: 'umd',
    name: 'xatto-admin-lte',
    sourceMap: true,
    banner,
  },
  plugins: [typescript({
    exclude: [
      '*.d.ts',
      '**/*.d.ts',
      '*.test.ts',
      '**/*.test.ts',
      '*.test.tsx',
      '**/*.test.tsx',
    ]
  })],
  external: [
    'admin-lte',
    'bootstrap',
    'chart.js',
    'jquery',
    'jquery-sparkline',
    'jvectormap',
    'xatto',
  ],
}
