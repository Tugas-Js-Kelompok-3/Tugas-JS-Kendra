// Soal 1



// Soal 2
const map = Array.prototype.map;
function seperate(string) {
    const seperated =  map.call(string, el => {
        return `${el}`;
    });
    console.log(seperated.sort());
}
seperate("kendra");


// Soal 3
function age(umur) {
    if (umur < 17) {
        console.log("Adult");
    } else {
        console.log("Not Adult Yet");
    }
}

age(10)

// Soal 4
class namaSaya {
    constructor(nama, kelas, umur) {
        this.Nama =  nama;
        this.Kelas =  kelas;
        this.Umur = umur;
    };
};
const Person1 = new namaSaya("Kendra", "RPL2", 17)
console.log(Person1);

// Soal 5
class Orang {
    constructor(nama, kelas, umur){
        this.Nama = nama;
        this.Kelas = kelas;
        this.Umur = umur;
    };
    greeting (){
        return (
            "Namaku : " + this.Nama + " Aku kelas : " + this.Kelas + " Umurku : " + this.Umur
        )
    }
};

const kendra = new Orang("Kendra", 11, 17)
console.log(kendra.greeting());