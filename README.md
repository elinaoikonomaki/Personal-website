## To Do's
- Add a card layout to support projects that are blogs with images instead of video. 
- Add more projects from design and architecture. 

## Local Development
### Dependecies
Developer dependecies:
- [node](https://nodejs.org/)
- [vite](https://vitejs.dev/)
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Node.js command line tool to publish files to a gh-pages branch on GitHub.

Project depedencies:
- [three](https://threejs.org/) - For rendering 3d models in the landing page.


### Install Dependecies 
```npm install```

### Run a local server 
```npm run dev```

## Deployment
### Deploying to github pages from the /dist folder. 
Because we are building using the npm build command, this outputs the bundled website in the /dist folder. 
Github doesn't allow to deploy from a custom folder other than /root or /docs. For this reason, we use gh-pages library. 

We add the scripts in the `package.json`:
```
scripts": {
    "dev": "vite",
    "build": "vite build && cp public/CNAME dist/CNAME",
    "deploy": "gh-pages -d dist",
    "preview": "vite preview"
  }

```

> [!IMPORTANT] 
> The build command not only builds but also copies the `CNAME` which contains the urls for the custom domains from the `/public` folder to the `/dist` folder. With the `CNAME` file github pages deploy to the custom domains included in that file. This is important, otherwise the deployment won't work. 

To deploy first build the website:
```npm run build```

and then deploy using
```npm run deploy ```

### Vite Configuration
added `vite.config.js` file to include all html paths for /work and /about and set path to build from as root `/`. This is because I am deploying to a custom domain. If I was deploying to my `elinaoikonomaki.github.io/<repo name>` I would need to change the base path in `vite.config.js` to `base: /<repo name>/`. 

```
export default defineConfig({
  base: '/', // Set this to the root since using a custom domain
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // path for the main entry
        about: path.resolve(__dirname, 'about/index.html'), // path for the about page
        work: path.resolve(__dirname, 'work/index.html') // path for the work page
      }
    }
  }
})
```

If you change the base: to your repo name, you should also ensure that the urls in your html files and in the classes.js are correct. You would need to add the `</repo_name/>` similarly to how you add it in the `vite.config.js`.

### Domain Configuration
The domain is managed in Squarespace and it's setup from the DNS Settings:

- It has an “A” record with host “@” for each GitHub Pages IP address. 
- Use the dig <user>.github.io command to get this list. 
- For example: 185.199.108.153, 185.199.110.153, 185.199.111.153, and 185.199.109.153.
- It has also a “CNAME” record with host “www” to point your subdomain to <user>.github.io.





