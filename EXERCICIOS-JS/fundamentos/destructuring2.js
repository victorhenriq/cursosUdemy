const [a] = [10];
console.log(a);

const [n1, n2, n3, n4, n5 = 0, n6] = [10, 7, 8, 9];
console.log(n1, n2, n3, n4, n5, n6);

const [, [, nota]] = [[, 8, 8], [9,6, 8]];
console.log(nota);