////SET

let a = new Set();
//a.push(2); not correct
a.add(1);
a.add(2);
a.add('Hello');
a.add('1');//===
//a.clear();
//a.delete('Hello');//удаляет
console.log(a);
//console.log(a[0]);//non
console.log(a.length);//non
console.log(a.size);//yes кол-во элементов
//проверка наличия
console.log(a.has(2));//true
console.log(a.has('2'));//false
//работающий цикл

for (let item of a) {
    console.log(item);
}

let arr = [1, 2, 6, 33, 7, 4, 3, "hello", 4, 5];
let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);