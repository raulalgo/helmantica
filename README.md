scales-react
============

The purpose of this project is creating a simple tool that generates a 10 color scale between two given colors.

It is based on the [React Rocket Bolierplate](https://github.com/jakemmarsh/react-rocket-boilerplate)

---

### Getting up and running

This is as specified for [React Rocket](https://github.com/jakemmarsh/react-rocket-boilerplate)
1. Clone this repo from `https://github.com/raulalgo/scales-react.git`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the browser-sync server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

This boilerplate uses the latest versions of the following libraries:

For mor information on the boilerplate, please check the original [React Rocket repository](https://github.com/jakemmarsh/react-rocket-boilerplate)

### Using it

I'm working on making it available online. Meanwhile you can install it locally as specified above. There you will see two big colors with RGB sliders. Use the sliders to define the start and end points of your scale and see how the full scale updates. Magic!