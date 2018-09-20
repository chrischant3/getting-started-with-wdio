### Getting started with WebdriverIO and Cucumber

WebdriverIO (WDIO) is a highly compatible tool and doesn’t dictate which test framework to use. That said, we tend to favour BDD style frameworks, specifically  Cucumber as the Gherkin Syntax used is familiar and used on many TAB projects.

#### Setup
A cucumber project will contain a feature folder, step_definitions folder and support folder.

You’ll need to specify the file paths in the WDIO config once we’ve created one.

It’s easy to get started, and WDIO has a helpful setup tool. Begin by installing WebdriverIO

`yarn add webdriverio`

Once installed run `./node_modules/.bin/wdio config`

Answer the following questions when prompted (You can change your answers at a later date, this is just used to generate the wdio.config.js file):
```text
Q: Where do you want to execute your tests?
A: On my local machine


Q: Which framework do you want to use?
A: cucumber


Q: Shall I install the framework adapter for you?
A: Yes (just press enter)


Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)


Q: Which reporter do you want to use?
A: spec (just press space and enter)


Q: Shall I install the reporter library for you?
A: Yes (just press enter)


Q: Do you want to add a service to your test setup?
A: none (just press enter, let’s skip this for simplicity)


Q: Level of logging verbosity:
A: silent (just press enter)


Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)


Q: What is the base url?
A: http://localhost (just press enter)
```

Once you’ve answered each of the questions, you should have a wdio.config,.js file.

Within wdio.config.js you’ll need to specify to paths to the .feature files and step definition files.
```javascript
Exports.config = {
  specs: './uitest/features/**/*.feature',
  cucumberOpts: {
    require: [
      './uitest/step_definitions/**/*.js'
    ],
    ignoreUndefinedDefinitions: false,
    timeout: 120000,
    backtrace: true,
    tagExpression: 'not @norun',
    format: ['pretty'],
    strict: true
  }
}

```

You can create multiple config files to use different configurations.

#### ES6 
If you want to include new JS like import statements, you'll need to add the following to the top of you wdio.conf.js file.
```javascript
require('babel-register')
```

You'll also need to specify the compiler under cucumberOpts
```javascript
Exports.config = {
  cucumberOpts: {
    compilers: ['js:babel-register']
  }
}

```

#### Example Project

The uitest folder contains a simple example of a feature, steps, and page object file. To see these in action, first, install the dependencies
`yarn install`

then run the test
`yarn test`

 