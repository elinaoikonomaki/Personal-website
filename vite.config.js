import { defineConfig } from 'vite';
import path from 'path'; // Import path module from Node.js

export default defineConfig({
  base: '/Personal-website/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // path for the main entry
        about: path.resolve(__dirname, 'about/index.html'), // path for the about page
        work: path.resolve(__dirname, 'work/index.html') // path for the work page
      }
    }
  }
});
