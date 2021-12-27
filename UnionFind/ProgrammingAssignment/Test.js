import { Percolation } from "./Percolation.js";

const p = new Percolation(3);

console.log(p.isOpen(1, 1) === false);
console.log(p.percolates() === false);
p.open(1, 1);

p.open(3, 1);
console.log(p.percolates() === false);
console.log(p.isFull(2, 1) === false);
