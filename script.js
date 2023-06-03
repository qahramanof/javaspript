let tbl = document.getElementById('tbl');

let tr = '';

for (let i = 0; i < 8; i++) {
    tr += '<tr>';

    for (let j = 0; j < 8; j++) {

    if (i % 2 === 0) {
        if (j % 2 === 0) {
            tr += '<td></td>';
        } else {
            tr += '<td class="bg-black"></td>';
        }
    } else {
        if (j % 2 === 0) {
            tr += '<td class="bg-black"></td>';
        } else {
            tr += '<td></td>';
        }
    }

        
        

    }

    tr += '<tr/>'
}

tbl.innerHTML = tr;