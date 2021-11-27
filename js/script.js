const txtElement = ['aya Adalah Mahasiswa Universitas Sriwijaya'];
let count = 0;
let txtindex = 0;
let currentTxt = '';
let word = '';

(function ketik() {
    if(count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement [count];

    word = currentTxt.slice(0, ++txtindex);
    document.querySelector('.efek').textContent = word;

    setTimeout(ketik,500);

})()