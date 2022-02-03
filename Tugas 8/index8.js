// Soal 3
function array(value){
  const result = value.map(el => {
    const newArr = ""
    return el += newArr
  })
  const split = result[3].split(',')
  result.pop()
  console.log(result,split.join(' '));
}
array(['hallo','nama','saya',['lucky','fauzi', ['kelas',['11', ['rpl','2']]]]])


// Soal 4
const obj = {
    nama: "Kendra",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
      nama: "Infinix Hot 10 Play",
      spesifikasiHp: {
          chipset: "Mediatek Helio G25",
          ram: "2 GB",
          rom: "32 GB",
          camera: "18mp"
          }
      }
    }
console.log(obj.Hp);
