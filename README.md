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
[22:50:56] I/direct - Using ChromeDriver directly...
[22:50:56] I/launcher - Running 1 instances of WebDriver
Spec started

  1 Common

    1.1 navigation
      ✓ should have 5 links (0.501 sec)

      1.1.1 link "Work"
        ✓ should contain href '/work' (0.297 sec)
        ✓ should have text 'Work' (0.184 sec)

      1.1.2 link "About"
        ✓ should contain href '/about' (0.305 sec)
        ✓ should have text 'About' (0.155 sec)

      1.1.3 link "Careers"
        ✓ should contain href '/careers' (0.147 sec)
        ✓ should have text 'Careers' (0.103 sec)

      1.1.4 link "Blog"
        ✓ should contain href '/blog' (0.054 sec)
        ✓ should have text 'Blog' (0.096 sec)

      1.1.5 link "Get in Touch"
        ✓ should contain href '/contact' (0.072 sec)
        ✓ should have text 'Get in Touch' (0.118 sec)

    1.2 sub navigation
      ✓ should have 5 links (0.062 sec)

    1.3 footer

      1.3.1 link "hello@thinkcreatix.com"
        ✓ should contain href 'mailto:hello@thinkcreatix.com' (0.09 sec)
        ✓ should have text 'hello@thinkcreatix.com' (0.218 sec)

      1.3.2 link "(630) 404-9413"
        ✓ should contain href 'tel:6304049413' (0.058 sec)
        ✓ should have text '(630) 404-9413' (0.071 sec)

      1.3.3 link "Facebook"
        ✓ should contain href 'https://www.facebook.com/CreatixInc' (0.09 sec)
        ✓ should have text 'Facebook' (0.393 sec)

      1.3.4 link "LinkedIn"
        ✓ should contain href 'https://www.linkedin.com/company/creatix-inc-' (0.218 sec)
        ✓ should have text 'LinkedIn' (0.138 sec)

      1.3.5 copyright
        ✓ should contain 'Creatix Inc.' (0.072 sec)
        ✓ should contain 'All Right Reserved' (0.07 sec)

  2 Feature: Contact Form

    2.1 when on contact page
      ✓ then page should be displayed (0.08 sec)
      ✓ then contact form should be displayed (0.288 sec)

      2.1.1 inputs

        2.1.1.1 name
          ✓ should be able to change text value (0.315 sec)

        2.1.1.2 phone
          ✓ should be able to change text value (0.27 sec)

        2.1.1.3 type of project

          2.1.1.3.1 when page loads 
            ✓ then all project types should not be selected (0.556 sec)

          2.1.1.3.2 when all types selected
            ✓ then all project types should be selected (0.444 sec)

  3 homepage

    3.1 when on homepage
      ✓ then page should be displayed (0.224 sec)

  4 Feature: navigation

    4.1 when 'about' page link is clicked
      ✓ then page 'By(css selector, #page-about)' should be displayed (0.043 sec)
      ✓ then page link should have selected class (0.079 sec)

    4.2 when 'blog' page link is clicked
      ✓ then page 'By(css selector, #page-blog)' should be displayed (0.039 sec)
      ✓ then page link should have selected class (0.051 sec)

    4.3 when 'careers' page link is clicked
      ✓ then page 'By(css selector, #page-careers)' should be displayed (0.064 sec)
      ✓ then page link should have selected class (0.058 sec)

    4.4 when 'contact' page link is clicked
      ✓ then page 'By(css selector, #page-contact)' should be displayed (0.059 sec)
      ✓ then page link should have selected class (0.063 sec)

    4.5 when 'work' page link is clicked
      ✓ then page 'By(css selector, #page-work)' should be displayed (0.042 sec)
      ✓ then page link should have selected class (0.041 sec)

    4.6 responsive menu

      4.6.1 when browser window maximized
        ✓ then menu hamburger should not be visible (0.096 sec)

      4.6.2 when browser window tablet size
        ✓ then menu hamburger should be visible (0.068 sec)

      4.6.3 when browser window iPhone5 size
        ✓ then menu hamburger should be visible (0.034 sec)

Executed 42 of 42 specs SUCCESS in 33 secs.
[22:51:30] I/launcher - 0 instance(s) of WebDriver still running
[22:51:30] I/launcher - chrome #01 passed
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
 
This will allow you to use ```isDisplayed``` and ```waitUntilDisplayed``` functions and you can avoid repeating boilerplate for this functionality which is needed because there is no synchronisation as with angular application.

##### Feature testing
The files structure of the project should wrap around features instead of pages. 

#### ES6
I can not see ES5 syntax anymore, this example is written exclusively in ES6.
 
There is no visible compilation step, you have correct line numbers in errors and logs which is important for developer experience.

#### Strong linting and automatic code style fixing
Set up linting is not easy and set up linting to work with testing frameworks can be even more complicated.
 
This project has linting setup in ```.eslintrc.yml``` config and inherit settings from ```eslint-config-airbnb-base``` and ```eslint-plugin-protractor```.

Automatic fixes for fixable problems like missing semicolons and so. Helps maintain code style. 
Goal is to improve code readability, style and ease code reviews.

There are developers that do not use proper code editor or IDE which will provide linting and suggestions eslint is command tool and will can run everywhere.

#### VCS pre-commit hook linting
Pre-commit hooks are scripts that run before each commit. 
 
Decision of strong linting requires setting up tool to not allow inconsistent code to be committed into a repository.  

```
"pre-commit": [
  "lint:pre-commit"
],
```
Eslint rules that are enforced only in pre-commit hook are 
- "no-console", "no-debuger" allows using console for debugging but will not allow to commit debugging statements
- "protractor/no-browser-pause" allows to use browser.pause() for debugging but will not allow to commit this statement

#### Why 'yarn' instead of 'npm'
This decision was done because 'yarn' is faster. 
 
To make it simple on every run all dependencies are installed. 

All dependencies are in project and no dependencies needs to be installed globally.
 
Only node and yarn are required globally.

#### How to update or reinstall all dependencies
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
- eslint-config-airbnb-base: 
  - github: https://github.com/airbnb/javascript
  - npm: https://www.npmjs.com/package/eslint-config-airbnb-base
- eslint-plugin-protractor: 
  - github: https://github.com/alecxe/eslint-plugin-protractor
  - npm: https://www.npmjs.com/package/eslint-plugin-protractor
