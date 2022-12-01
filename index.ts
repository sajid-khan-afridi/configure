#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';

// Creates ASCII Art from text
function winner () {
    console.clear();
    const msg = `
          text style`;

    figlet(msg, (err, data) => {
      console.log(gradient.pastel.multiline(data));
    });
  }
  winner();