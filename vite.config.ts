import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5's own SCSS still uses syntax Dart Sass is deprecating;
        // quietDeps hides warnings from node_modules, and 'import' covers our
        // own use of @import, which Bootstrap's variable-override pattern requires.
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
})
