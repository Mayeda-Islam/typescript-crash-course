const enum Color {
        Red,
        Green,
        Blue
    }
    
    let myColor: Color = Color.Green;
    
    console.log(myColor,Color.Red,Color.Blue); // this is neumerical value of the enum,output is 1
// enum is a special type that allows you to define a set of named constants.
// named constants mean that you can give a name to a value, so that you can refer to it by name instead of by value. 
// enum is a better way to define a set of constants than using string or number literals.
//  It is better to use enum instead of string or number literals when you want to have a fixed set of values.

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
// this is string value of the enum,output is UP,DOWN,LEFT,RIGHT