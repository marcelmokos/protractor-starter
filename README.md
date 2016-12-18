This protractor starter will help you test non angular applications using ES6 - ES2015 syntax. 

- No configuration required
- One command for setup and run
- Linting and automatic code style fixing using Eslint build in



## Run tests
```
yarn run test
```
### Output
```
[17:23:21] I/direct - Using ChromeDriver directly...
[17:23:21] I/launcher - Running 1 instances of WebDriver
 
Spec started
 
  1 homepage
  
    1.1 when on homepage
      ✓ then page should be displayed (0.048 sec)
 
      1.1.1 navigation
        ✓ should have 5 links (0.07 sec)
         

      1.1.2 sub navigation
        ✓ should have 5 links (0.076 sec)
        

Executed 3 of 3 specs SUCCESS in 4 secs.
 
[17:23:26] I/launcher - 0 instance(s) of WebDriver still running
[17:23:26] I/launcher - chrome #01 passed
✨  Done in 6.60s.

```


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
- eslint-plugin-protractor :https://github.com/alecxe/eslint-plugin-protractor
