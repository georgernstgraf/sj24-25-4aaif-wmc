const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function isGerade(num: number): boolean {
    return num % 2 === 0;
}

function nurGerade(arr: number[]): number[] {
    return arr.filter(isGerade);
}

function quadrate(arr: number[]): number[] {
    return arr.map((num) => num * num).filter(isGerade);
}

function forEachDemo(arr: number[]): void {
    arr.forEach((num) => {
        console.log(`number: ${num} ist gerade: ${isGerade(num)}`);
    });
}
// console.log(quadrate(a));
forEachDemo(a);
