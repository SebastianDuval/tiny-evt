export default {
  entryPoints: ['main/main.ts', 'main/preload.ts'],
  outdir: 'build/',
  minify: true,
  bundle: true,
  external: ['electron', 'path']
}