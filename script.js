let row = "";
let column = "";
let target_result_div = document.querySelector("#result_div");
let matrix1 = [], matrix2 = [];
let result = [[4,5,4][1,5,4][1,5,4]];
let opration_dropdown = document.querySelector("#opration_dropdown").value;

console.log(opration_dropdown);

function start() {
    row = Number(document.querySelector("#matrix_row_size").value);
    column = Number(document.querySelector("#matrix_column_size").value);

    let target1 = document.querySelector("#value_input_div1");
    let target2 = document.querySelector("#value_input_div2");
    target1.innerHTML = "";
    target2.innerHTML = "";
    target_result_div.innerHTML = "";

    if (row == "" || column == "") {
        alert("Please enter values");
        return;
    }
    if (row != column) {
        alert("Please enter same number  of rows and columns");
        return;
    }
    if (row < 2 || column < 2) {
        alert("Please enter number greater than 1");
        return;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            target1.innerHTML += `<input type="number" class="input_boxes" id="matrix_value_${i}${j}" value="0" style="width: 30px;" >`;
            target2.innerHTML += `<input type="number" class="input_boxes" id="matrix_value2_${i}${j}" value="0" style="width: 30px;" >`;
            target_result_div.innerHTML += `<input type="number" disabled required  id="Result_values_${i}${j}" value="0" style="width: 30px;">`;
        }
        target1.innerHTML += "<br>";
        target2.innerHTML += "<br>";
        target_result_div.innerHTML += "<br>";
    }
}

function values_lane_ka_function() {

    for (let i = 0; i < row; i++) {
        matrix1[i] = [];
        matrix2[i] = [];
        for (let j = 0; j < column; j++) {
            // if (matrix1[i][j] === undefined) {matrix1[i]= []};
            // if (matrix2[i][j] === undefined) {matrix2[i]= []};
            matrix1[i][j] = Number(document.querySelector(`#matrix_value_${i}${j}`).value);
            matrix2[i][j] = Number(document.querySelector(`#matrix_value2_${i}${j}`).value);
        }
    }


    // if (opration_dropdown == "sum") {
    //     let result = matrix_sum(matrix1, matrix2);
    //     // console.log("sum");
    // } else if (opration_dropdown == "minus") {
    //     let result = matrix_minus(matrix1, matrix2);
    //     // console.log("minus");

    // } else if (opration_dropdown == "multiply") {
    //     let result = matrix_multiply(matrix1, matrix2);
    //     // console.log("multiply");

    // } else {
    //     console.log("error")
    // }
    
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            document.querySelector(`#Result_values_${i}${j}`).value = result[i][j];
        }
    }
}
    
// function matrix_sum(matrix1, matrix2) {
//     for (let i = 0; i < matrix1.length; i++) {
//         for (let j = 0; j < matrix1[i].length; j++) {
//             result[i][j] = matrix1[i][j] + matrix2[i][j];
//         }
//     }
//     return [];
// }

// function matrix_minus(matrix1, matrix2) {
//     for (let i = 0; i < matrix1.length; i++) {
//         for (let i = 0; i < matrix1[i].length; j++) {
//             result[i][j] = matrix1[i][j] - matrix2[i][j];
//         }
//     }
//     return
// }
// function matrix_multiply(matrix1, matrix2) {
//     var aNumRows = a.length, aNumCols = a[0].length,
//             bNumRows = b.length, bNumCols = b[0].length,
//             m = new Array(aNumRows);  // initialize array of rows
//         for (var r = 0; r < aNumRows; ++r) {
//             m[r] = new Array(bNumCols); // initialize the current row
//             for (var c = 0; c < bNumCols; ++c) {
//                 m[r][c] = 0;             // initialize the current cell
//                 for (var i = 0; i < aNumCols; ++i) {
//                     m[r][c] += a[r][i] * b[i][c];
//                 }
//             }
//         }
//         return m;
// }
