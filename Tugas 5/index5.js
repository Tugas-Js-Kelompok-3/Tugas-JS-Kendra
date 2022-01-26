//Soal 1
const myObj = [
    { name: 'shark', likes: 'ocean', },
    { name: 'whale', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' },
    { name: 'lion', likes: 'land' },
    { name: 'nemo', likes: 'ocean' },
]
const yes = myObj.map(item => {
    const penyimpanan = {}

    penyimpanan[item.name] = item.likes
    penyimpanan.totalSpecies = item.name.length * Math.floor(Math.random() * 1000)

    return penyimpanan
})
console.log(yes);

// Soal 2
const fill = myObj.filter((per) => {
    return per.likes == "ocean"
})
console.log(fill);

//Soal 3
const name = "Kendra"
const map = Array.prototype.map;

const newName = map.call(name, el => {
    return `${el}en`
})
console.log(newName[0])

//Soal 4
let nomor = [100,25,16,56,87]
let doubles = nomor.map(function(num) {
    return num * 5
})

console.log(doubles);

//Soal 5
let minus = nomor.map(function(num) {
    return num - 100
})

console.log(minus);

//Soal 6
let plus = nomor.map(function(num) {
    return num + 5
})

console.log(plus);

//Soal 7
const angka = [1,2,3,4,5,6,7,8,9,10]
const checknum  = angka.filter(terbesar);

function terbesar(num) {
    return num > 5;
}

console.log(checknum);

//Soal 8
const numCheck  = angka.filter(terkecil);

function terkecil(num) {
    return num < 6;
}

console.log(numCheck);

//Soal 9
const kumpul = [1,2,3,4,5,6,5,4,7,5,5,6,7,8,7,5,5,5,5]
const select = kumpul.filter(lima);

function lima(kumpul) {
    return kumpul == 5
}
console.log(select)

//Soal 10
const luckyfauzi = ['lucky', 'Lucky', 'Lucky', 'fauzi', 'fauzi','Lucky', 'lucky']
const selek = luckyfauzi.filter(lucky);

function lucky(luckyfauzi) {
    return lucky == 'Lucky'
}
console.log(selek)



