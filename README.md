# Guideline for all the typescript-node-projects
 
 ## Step#1 Install Node.js from https://nodejs.org/
 
 ## Step#2 Install TypeScript 4.9+ using Node Package Manager command (https://www.typescriptlang.org/download):
 ```npm install -g typescript```
 
 ## Step#3: create a file ".gitignore"
 write **node_modules** in .gitignore file

 ## Step#4: command: ```tsc --init```
 "tsconfig.json" file will be created
 
 Make the following changes in "tsconfig.json"  
    **"target": "ES2022"**    
    **"module": "NodeNext"**  
    **"moduleResolution": "NodeNext"**  

## Step#5: command: ```npm init -y```
 "package.json" file will be created
   
Make the following changes in "package.json"   
    1)  **"name": "packageName"**   
    2)  **"type": "module"**         
    3)  **"bin": "./index.js"**     
1) when publish then you will use "npx packageName"
2) tells Node.js to interpret .js files within that package as using ES module syntax
3) this file is used when published

## Step#6: Install dependencies
    npm i inquirer chalk chalk-animation figlet gradient-string
    
node_modules folder will be created

## Step#7:  Install "devDependencies" means developer dependencies
    npm i @types/chalk @types/chalk-animation @types/figlet @types/gradient-string @types/inquirer @types/node -D

## Step#8: Create index.ts file
write ```#! /usr/bin/env node ```in index.ts file

## Step#9: Import the libraries in index.ts
**import inquirer from "inquirer";**      
**import chalk from "chalk";**  
**import gradient from "gradient-string";**  
**import figlet from "figlet";**  
**import chalkAnimation from 'chalk-animation';**

## Step#10: Transpile and run the program
commands:   
```tsc  ```  
```node index.js```

## Step#11: Publish to npm
commands:  
``` npm publish  ```  
```npx packageName  ```
