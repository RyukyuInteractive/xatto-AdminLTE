import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/xatto-admin-lte.js',
    format: 'umd',
    name: 'xatto-admin-lte',
    sourceMap: true,
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
