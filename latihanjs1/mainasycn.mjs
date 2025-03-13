


export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

export default function multiply(a, b) {
    return a * b;
}

export function sayhello(name) {
    return `hello, ${name}`;
}

export function saygoodbye(name) {
    return `goodbye, ${name}`;
}

import { add, PI} from "./terserah.js";

console.log(`penjumlahan 2 + 2 = ${add(2, 2)}`);
console.log(`perkalian 2 * 5 = ${multiply(2, 5)} `);
console.log(`niali PI = ${PI}`);


import { sayhello, saygoodbye } from "./terserah.js";

console.log(sayhello("jaka"));
console.log(saygoodbye("bapak hitam"));

