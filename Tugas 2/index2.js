// Soal 1

const nama = ["Ken","Fen","Dip","Shir","Mai","Ky"]

for (let i = 0; i < nama.length; i++) {
    console.log(nama[i]);
}

const mobil = ["BMW","Audi","Mercedez"];
let a = 0;
for (let a in mobil) {
    console.log(mobil[a]);
}

const nickname = ["Multibox","krickZ","JhangkrickZ"];
for (let x of nickname) {
    console.log(x);
}

// Soal 2 

function () {
    
}

//Soal 3

function spread(num1, ...args){
    console.log(num1, ...args)
}

spread(1,2,3,"Ken",true)

// Soal 4 5

let hasil = (a, b) => {
    perkalian = a * b;
};

hasil(23, 11)
console.log(perkalian);







