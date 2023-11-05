// Import file system, fs, and shape modules

const fs = require('fs')
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

// SVG class constructor w/ 3 methods to render and set text in SVG string

class SVG {
    constructor() {
        this.elementShape = ''
        this.elementText = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width ="300" height="200">${this.elementShape}${this.elementText}</svg>`
    }
    setElementText(text, color) {
        this.elementText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    } 
    setElementShape(shape) {
        this.elementShape = shape.render()
    }
}