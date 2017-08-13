# DrawMyLife-Website
A static website showcasing the Draw My Life initiative, partnerships and team

## Development Setup
This website lives and is rendered on the client side. To get up and running with the development of this project there are a few prerequisites, i.e. you need to have node and Ruby installed on your local machine.

### Why do I need Node and Ruby installed?
Ruby is required for Jekyll and Node will help you massively with all the javascript (see Tech Stack for more details).

### Tech Stack
| React         | Jekyll        |   
| :-----------: |:-------------:|
| Webpack       | Yarn          |

##### Please note that all Javascript is written in ECMAScript2015 (ES6).

### How to install the Stack and all the dependencies
As mentioned in the Development setup intro there are some prerequisites required before you can begin work on the project.

#### Yarn
Yarn is a javascript package management for all dependencies. It will be used to add and remove all javascript dependencies from this project.

- You'll need to have [Yarn](https://yarnpkg.com/en/docs/install) installed globally on your local machine. This can be installed via [homebrew](http://brew.sh/)
- To install all the dependencies for this project you will need to `yarn install` on the command line
- To add a dependency `yarn add {dependency}` on the command line.
- If it's a development dependency add the flag `--dev`. Example `yarn add {dependency} --dev` to save to the `package.json`
- If it's a production dependency add the flag `--save`. Example `yarn add {dependency} --save` to save to the `package.json`


##### React and Webpack are dependencies and will be installed during the installation of all javascript dependencies, i.e. `yarn install`


#### Jekyll

Jekyll is a popular Ruby library for creating a static blog and deploying static sites to GitHub Pages.

- Jekyll is included in this project as part of the GitHub Pages gem. You'll need to install the package manager [Bundler](http://bundler.io/) once to be able to install / update all gems specified in the Gemfile.

  gem install bundler

Then any time the Gemfile changes, cd into the root of the project and run:

  bundle install


### Building the project
It's probably best to have two terminal tabs open, as you will need to build and transpile your React components and compile assets; and then Jekyll will serve it to your local host.

#### Building the React Components and Asset Compilation
To build and transpile the React Components and compile assets (CSS & images) from the webpack folder to the Jekyll docs folder, you will need to run the command `yarn run build` in your command line. To build these whenever any files are edited, run the command `yarn run watch`. Note: any CSS or images you add to the project should be added in the webpack folder, which will then be built to the docs folder.

#### Serving the project to your local host
To build and serve the entire project so you can see local changes you will need to run the command `jekyll serve` in the command line and visit `http://localhost:4000` to see the changes.

### Linting
To ensure we have less error prone code we are using two linting dependencies to highlight any errors as we code: `eslint` and `sass-lint`. It is recommended that you also get a local linters for your IDE or text editor.

*Example of Linters*

|            | Atom                                                          |  Sublime                |
| :--------- |:--------------------------------------------------------------| :---------------------- |
| ESLint     | [Atom ESLint](https://atom.io/packages/eslint)                | {I need to find one 😂} |
| SASS-Lint  | [linter-sass-lint](https://atom.io/packages/linter-sass-lint) | {See above}             |

## Contribution

To contribute, clone the repository and check out a feature branch. Submit a pull request for the team and other volunteers to code review your changes before we merge them into the master branch. Thank you in advance for your time and help!

## Deployment

This site is hosted on GitHub Pages, the live site will build anything within the `docs` folder in the `master` branch. Anything merged to the master branch will be visible on the live website.
