Gloo Demo
=========

This is a demo site using the Gloo frontend component builder. Check out the Gloo project at https://github.com/shukriadams/gloo for a detailed explanation of Gloo and components.

Requirements
------------
- NodeJs and Npm
- Bower


Get Started
-----------
- Clone this project
- In its root, run "npm install"
- then run "grunt"
- Open "http://localhost:8001" in a browser

Project folders
---------------
/assemble                : Assemble files go here
/dev                     : webroot when running in "dev" mode
/dev/__components        : All components must be nested anwhere underneath this folder
/dev/__components/first  : This is the component "first"
/dev/__components/second : This is the component "second"
/dev/__/js               : All JS files in here will be turned into self-contained bundles
/release                 : Webroot when running in "release" mode


Additionally

/dev/js                  : Compiled js bundles are put here. Gloo controls this folder
/dev/css                 : Compiled CSS is put here. Gloo controls this folder.
/dev/lib                 : Gloo copies 3rd party (vendor) libraries like RequireJS here. You can too.