function sum(a: number, b?: number): number { // b is optional parameter, it can be undefined
    if (b === undefined) {
        return a;
    }
    return  b;
}

console.log(sum(1));

const sum1 = (a: number, b: number=0): number => {
    return a + b;
}

console.log(sum1(1));

function sum2(a: number, b: number): number {
    return a + b;
}

console.log(sum2(1, 2));