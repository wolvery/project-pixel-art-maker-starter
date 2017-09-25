// Select color input
let colorInput = null;
// Select size input
let rows, columns;
function draw() {
    console.log(this);
    colorInput = colorInput === null ? $("#colorPicker").val() : colorInput;
    $(this).css('background-color', colorInput);
}
$("#colorPicker").change(function () {
    colorInput = $(this).val();
});
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(event) {
    var new_tbody = document.createElement('tbody');
    var tr, td;
    rows = $("#input_height").val();
    columns = $("#input_width").val();

    //we need to avoid big numbers!
    rows = rows > 200 ? 200 : rows;
    columns = columns > 200 ? 200 : columns;
    console.log(rows, columns);
    //loop through rows and columns to create the elements
    for (var i = 0; i < rows; i++) {
        tr = document.createElement('tr');
        for (var j = 0; j < columns; j++) {
            td = document.createElement('td');
            td.addEventListener("click", draw );
            tr.appendChild(td);
        }
        new_tbody.appendChild(tr);
    }
    //add new table
    $("#pixel_canvas").html(new_tbody);
    event.preventDefault();
});


