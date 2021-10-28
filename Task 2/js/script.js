function createTable() {
    row = window.prompt("Rows: ");
    col = window.prompt("Columns: ");

    for (let r = 0; r < Number(row); r++) {
        let a = document.getElementById('myTable').insertRow(r);
        for (let c = 0; c < Number(col); c++) {
            let b = a.insertCell(c);
            b.innerHTML = "Row-" + r + " Column-" + c;
        }
    }
}