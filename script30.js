function insert_Row() {
    var table = document.getElementById("sampleTable");

    var rowCount = table.rows.length;
    var newRowIndex = rowCount + 1;

    // Chèn 1 dòng mới vào cuối bảng
    var newRow = table.insertRow(rowCount);

    // Chèn 2 ô mới vào dòng vừa tạo
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Gán dữ liệu cho 2 ô
    cell1.innerHTML = "Row" + newRowIndex + " cell1";
    cell2.innerHTML = "Row" + newRowIndex + " cell2";
}