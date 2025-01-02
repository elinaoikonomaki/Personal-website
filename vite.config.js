import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/', // Set this to the root since you are using a custom domain
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // path for the main entry
        about: path.resolve(__dirname, 'about/index.html'), // path for the about page
        work: path.resolve(__dirname, 'work/index.html') // path for the work page
      }
    }
  },
  server: {
    hmr: false
  }
});;
