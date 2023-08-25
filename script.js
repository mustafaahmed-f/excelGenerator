

let table = document.getElementsByClassName("sheet-body")[0],
rows = document.getElementsByClassName("rows")[0],
columns = document.getElementsByClassName("columns")[0]
tableExists = false

const generateTable = () => {
    let rowsNumber = parseInt(rows.value), columnsNumber = parseInt(columns.value)
    table.innerHTML = ""
    for(let i=0; i<rowsNumber; i++){
        var tableRow = ""
        for(let j=0; j<columnsNumber; j++){
            tableRow += `<td contenteditable></td>`
        }
        table.innerHTML += `<tr>${tableRow}</tr>`
    }
    if(rowsNumber>0 && columnsNumber>0){
        tableExists = true
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must enter number of rows and columns!',
            footer: '<a href="">Why do I have this issue?</a>'
          })

          tableExists=false;
    }
}

const ExportToExcel = (type, fn, dl) => {
    if(!tableExists){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "You can't export excel  without creating table !",
            footer: '<a href="">Why do I have this issue?</a>'
          })
        return
    }

    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("table"));

    // var elt = table
    // var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" })
    // return dl ? XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' })
    //     : XLSX.writeFile(wb, fn || ('MyNewSheet.' + (type || 'xlsx')))
}