This protractor starter will help you test also non angular applications using ES6 - ES2015 syntax. 

- Modern javascript ES6 - ES2015 syntax
- No configuration required
- One command for setup and run
- Linting and automatic code style fixing using eslint build in, specially for protractor and jasmine
- Test examples using page object pattern

## Run tests

On single browser instance
```
yarn test
```

On multiple browser instances in parallel
```
yarn run test:multiple  // this run will ignore fdescribe and run all test files
```

### Output

![protractor-starter](https://cloud.githubusercontent.com/assets/6388074/21263992/0bd29294-c39a-11e6-8178-359eadeac719.gif)

```
[23:43:53] I/direct - Using ChromeDriver directly...
[23:43:53] I/launcher - Running 1 instances of WebDriver
Spec started

  1 Common
 
    1.1 navigation
      ✓ should have 5 links (0.072 sec)
 
      1.1.1 link "Work"
        ✓ should contain href '/work' (0.139 sec)
        ✓ should have text 'Work' (0.085 sec)
 
      1.1.2 link "About"
        ✓ should contain href '/about' (0.045 sec)
        ✓ should have text 'About' (0.066 sec)
 
      1.1.3 link "Careers"
        ✓ should contain href '/careers' (0.06 sec)
        ✓ should have text 'Careers' (0.044 sec)
 
      1.1.4 link "Blog"
        ✓ should contain href '/blog' (0.027 sec)
        ✓ should have text 'Blog' (0.051 sec)
 
      1.1.5 link "Contact"
        ✓ should contain href '/contact' (0.035 sec)
        ✓ should have text 'Contact' (0.041 sec)
 
    1.2 sub navigation
      ✓ should have 5 links (0.047 sec)
 
    1.3 footer
 
      1.3.1 link "hello@thinkcreatix.com"
        ✓ should contain href 'mailto:hello@thinkcreatix.com' (0.067 sec)
        ✓ should have text 'hello@thinkcreatix.com' (0.052 sec)
 
      1.3.2 link "(630) 404-9413"
        ✓ should contain href 'tel:6304049413' (0.05 sec)
        ✓ should have text '(630) 404-9413' (0.049 sec)
 
      1.3.3 link "Facebook"
        ✓ should contain href 'https://www.facebook.com/CreatixInc' (0.058 sec)
        ✓ should have text 'Facebook' (0.055 sec)
 
      1.3.4 link "LinkedIn"
        ✓ should contain href 'https://www.linkedin.com/company/creatix-inc-' (0.048 sec)
        ✓ should have text 'LinkedIn' (0.05 sec)
 
      1.3.5 copyright
        ✓ should contain 'Creatix Inc.' (0.057 sec)
        ✓ should contain 'All Right Reserved' (0.052 sec)
 
  2 homepage
 
    2.1 when on homepage
      ✓ then page should be displayed (0.04 sec)
 
  3 Feature: navigation
 
    3.1 when 'about' page link is clicked
      ✓ then page 'By(css selector, #page-about)' should be displayed (0.047 sec)
      ✓ then page link should have selected class (0.05 sec)
 
    3.2 when 'blog' page link is clicked
      ✓ then page 'By(css selector, #page-blog)' should be displayed (0.063 sec)
      ✓ then page link should have selected class (0.063 sec)
 
    3.3 when 'careers' page link is clicked
      ✓ then page 'By(css selector, #page-careers)' should be displayed (0.036 sec)
      ✓ then page link should have selected class (0.042 sec)
 
    3.4 when 'contact' page link is clicked
      ✓ then page 'By(css selector, #page-contact)' should be displayed (0.047 sec)
      ✓ then page link should have selected class (0.051 sec)
 
    3.5 when 'work' page link is clicked
      ✓ then page 'By(css selector, #page-work)' should be displayed (0.033 sec)
      ✓ then page link should have selected class (0.06 sec)
 
    3.6 responsive menu
  
       3.6.1 when browser window maximized
         ✓ then menu hamburger should not be visible (0.052 sec)
  
       3.6.2 when browser window tablet size
         ✓ then menu hamburger should be visible (0.031 sec)
  
       3.6.3 when browser window iPhone5 size
         ✓ then menu hamburger should be visible (0.026 sec)
 
Executed 33 of 33 specs SUCCESS in 15 secs.
[23:44:10] I/launcher - 0 instance(s) of WebDriver still running
[23:44:10] I/launcher - chrome #01 passed
✨  Done in 18.76s.
```

### Motivation 
The greatest barrier for starting with end-to-end testing is tooling setup. 
 
This project will give you good starting point for your own E2E testing.
 
#### Page object pattern and feature testing
Another barrier is that there are no good examples of tests with page Object pattern.
 
This project includes examples of testing single page app using Page Object pattern and feature testing.

```
spec
├── creatix
│   ├── Common.spec.js
│   ├── Homepage.spec.js
│   ├── Navigation.spec.js
│   └── pages // page objects
│       ├── About.js
│       ├── Blog.js
│       ├── Careers.js
│       ├── Common.js
│       ├── Contact.js
│       ├── Homepage.js
│       └── Work.js
└── utils
    ├── Page.js
    └── UIComponent.js

```
##### Page object pattern
All selectors and functions should be placed in Page Object Class. Class should holds selectors and actions for given page or component.
 
Page object files should export only one Page Class as default export and extends ```spec/utils/Page.js``` and implement abstract property 'selector'. 
 
This will allow you to use ```isDisplayed``` and ```waitUntilDisplayed``` functions and you can avoid repeating boilerplate for this functionality which is needed because there is no synchronization as with angular application.

##### Feature testing
The files structure of the project should wrap around features instead of pages. 

#### ES6
I can not see ES5 syntax anymore, this example is written exclusively in ES6.
 
There is no visible compilation step, you have correct line numbers in errors and logs which is important for developer experience.

#### Strong linting and automatic code style fixing
Set up linting is not easy and set up linting to work with testing frameworks is even more complicated.
 
This project has linting setup in ```.eslintrc.yml``` setting is opinionated but defaults are close to ```eslint-airbnb-config```.

```eslint-airbnb-config``` was not used because we do not need react in this project.

- npm: https://www.npmjs.com/package/eslint-config-airbnb
- git: https://github.com/airbnb/javascript

Automatic fixes for fixable problems like missing semicolons and so on. 

There are developers that do not use proper IDE which will provide linting and suggestions.
 
Automatic fixes helps maintain code style and this starter have goal to improve code style of inexperienced developer. 

#### VCS pre-commit hook linting
Pre-commit hooks are scripts that run before each commit. 
 
Decision of strong linting requires setting up tool to not allow inconsistent code to be committed into a repository.  

#### Why 'yarn' instead of 'npm'
This decision was done because 'yarn' is faster. 
 
To make it simple on every run all dependencies are installed. 

All dependencies are in project and no dependencies needs to be installed globally.
 
Only node and yarn are required globally.

#### Why all dependencies have version 'latest'
Latest version numbers will be in yarn.lock
 
To update or reinstall all dependencies.

- outdated  ```yarn outdated```
- upgrade  ```yarn [package@version]```
- reinstall ```yarn install --force```

#### Usage with angular
from ```protractor-conf.js``` remove ```browser.ignoreSynchronization = true;``` it will start listening and waiting for angular calls to finish. 

## Dependencies 

- node https://nodejs.org/en/download/
- yarn
https://yarnpkg.com/en/docs/install
- chrome https://www.google.com/chrome/browser/desktop/index.html

## Documentation

### Protractor
- web: http://www.protractortest.org/
- Page Object Pattern: http://www.protractortest.org/#/page-objects

### Jasmine
- docs: https://jasmine.github.io/edge/introduction

### Eslint
- web: http://eslint.org/
- eslint-plugin-protractor: https://github.com/alecxe/eslint-plugin-protractor
