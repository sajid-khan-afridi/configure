#! /usr/bin/env node
import gradient from "gradient-string";
import figlet from "figlet";
// Creates ASCII Art from text
function winner() {
    console.clear();
    const msg = `
          text style`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}
winner();
