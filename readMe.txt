1. Create js_modules folder
2. run npm init at cmd
3. create src folder and create 2 js file index and sum 
4. write sum function and export it with CommonJs Syntax in sum.js
5. import sum function into index.js with commonjs syntax in index.js
6. create webpack.config.js steap by step.
--> create config const
--> add 2 properties in it. entry,output
7. inside package.json write "build" Command
8. Create index.html file and add script tag for build.js file 
9. npm run build command on cmd

-------------------  Babel for transpiling es2015 to es5  -----------------------
10. run babel install command with npm on cmd ( npm install --save-dev babel-loader babel-core babel-preset-env )
11. in webpack.config.js file add module property
12. in module property create array of rules which will load babel loader as object with user and test property.
13. create ".babelrc" file with js object with property "preset":["babel-preset-env"]


