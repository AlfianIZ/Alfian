const nama = "Alfian" ;
let umur = 18 ;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (umur >= 3 && umur < 12 ) {
        generasi = "generasi anak kecil";
    } 
    else if (umur >= 12 && umur <18 ) {
        generasi = "generasi remaja"; 
    } 
    else if (umur >= 18 && umur <=50) {
        generasi = "generasi dewasa";
    } 
    else if (umur > 50) {
        generasi = "generasi tua";
    } 
    else {
        generasi = "generasi bayi";
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(umur);

generateBiodata();