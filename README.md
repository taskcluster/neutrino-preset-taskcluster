# TaskCluster Neutrino Node.js Preset

This [neutrino](https://github.com/mozilla-neutrino/neutrino) preset enables building Node.js
projects with a TaskCluster configuration for Webpack, ESLint, Babel, and Mocha.

<sup>This preset extends the [neutrino-preset-node preset](https://github.com/mozilla-neutrino/neutrino-preset-node) by enhancing it with TaskCluster-specific configuration.</sup>

# Getting started

Install neutrino and neutrino-preset-taskcluster as development dependencies in your project:

```sh
# npm
npm install --save-dev neutrino neutrino-preset-taskcluster

# yarn
yarn add neutrino neutrino-preset-taskcluster --dev
```

Modify your package.json scripts to use the TaskCluster preset to build your project. Remember to also
configure your project's main and files to include the built files, not the source files, e.g.:

```json
{
  "main": "build/index.bundle.js",
  "files": [
    "build"
  ],
  "config": {
    "preset": "neutrino-preset-taskcluster"
  },
  "scripts": {
    "build": "neutrino build",
    "test": "neutrino test"
  }
}
```

Add your source code to `src/`, which is compiled using Babel's es2015 preset.

If you would like to use testing in your project, create a `test/` directory, and write tests in
JS files with file names ending in `_test.js`, e.g. `test/homepage_test.js` or
`test/users/admin_test.js`. Run tests with `npm test` or `yarn test`, which will output results to the console, and
also creates test coverage to a `.coverage/` directory.

# Overriding the preset

There may be times where this preset works well for you, but you need to change some of the defaults
it provides. Maybe you don't like the opinion of the ESLint rules, or want to add more types of file
loading. Whatever the reason for needing changes, you can either create a custom preset based on
this one, or change the values on a project-by-project basis.

To override in your project, create a new file to use as a preset which will modify the existing
one, e.g. `custom-preset.js`:

```js
// bring in the existing preset
const preset = require('neutrino-preset-taskcluster');

// modify the preset

// re-export the preset
module.exports = preset;
```

Now you can pass this file to neutrino to use as the new preset:

```json
{
  "config": {
    "preset": "custom-preset.js"
  }
}
```

You can also choose to load different presets for different targets if you so wish:

```json
{
  "config": {
    "preset": "custom-preset.js"
  },
  "scripts": {
    "start": "neutrino start",
    "test": "neutrino test --preset some-other-preset",
    "build": "neutrino build --preset neutrino-preset-taskcluster"
  }
}
```
