let table = document.getElementsByClassName('table')[0]
let rowCount = 10;
let colCount = 10;
let num = 1;

for(let i = 0; i < rowCount; i++){
    let row = table.insertRow();
    for (let j = 0; j < colCount; j++) {
        let cell = row.insertCell();
        cell.textContent = num++;
        if (num > 100) {
            break;
        }
    }
    if (num > 100) {
        break;
    }
}