// Import file system, fs, and shape modules

const fs = require('fs')
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

// SVG class constructor w/ 3 methods to render and set text in SVG string

class SVG {
    constructor() {
        this.elementShape = ''
        this.elementText = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width ="300" height="200">${this.elementShape}${this.elementText}</svg>`
    }
    setElementText(text, color) {
        this.elementText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setElementShape(shape) {
        this.elementShape = shape.render()
    }
}

// Array of terminal prompts to create desired shape, color, and text
const inputs = [
    {
        type: "input",
        name: "text",
        message: "Desired image text: Choose up to 3 characters"
    },
    {
        type: "input",
        name: "text-color",
        message: "Choose your font color by entering a color keyword or a hexadecimal"
    },
    {
        type: "input",
        name: "shape-color",
        message: "Choose your shapes color by entering a color keyword or a hexadecimal"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose your shape",
        Choices: ["Circle", "Square", "Triangle"]
    }
];
// write to file system
function writeFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo has been generated!")
    });
}

// init function
async function init() {
    console.log("Intializing");
    var svgString = ""
    var svg_file = "logo.svg";

    // prompt user input
    const answers = await inquirer.createPromptModule(questions);

    // user input
    var userInput = "";
    if (answers.length > 0 && answers.text.length < 4) {
        userInput = answers.text;
    } else {
        console.log("Your input must be 1-3 characters")
        return;
    }
    console.log("Logo Text: [" + userInput + "]");
    const fontColor = answers["text-color"];
    console.log("Font color: [" + fontColor + "]");
    const shapeColor = answers["shape-color"];
    console.log("Shape Color: [" + shapeColor + "]");
    const shape = answers["shape"];
    console.log("Shape: [" + shape + "]");
}