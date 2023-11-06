// import circle, square, and triangle classes from shapes.js
const { Circle, Square, Triangle } = require("./shapes")

// testing suite to check if circle, square, and triangle object can be rendered by calling render and comparing to expected SVG string

// Circle 
describe('Circle', () => {
    it('Renders', () => {
        const shape = new Circle();
        var color = ('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});
// Square 
describe('Square', () => {
    it('Renders', () => {
        const shape = new Square();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});
// Triangle
describe('Triangle', () => {
    it('Renders', () => {
        const shape = new Triangle();
        var color = ('purple')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});