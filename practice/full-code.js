<!DOCTYPE html>
<html lang="en">
<!-- testing git push from Linux Minjaro -->
<!-- saad -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="shortcut icon" type="image/x-icon" href="./Shehzad-logo.png" /> -->
    <title>Matrix Addition</title>
</head>

<body>
    <h1>Matrix Addition</h1>
    <p>Enter matrix table size</p>
    <form class="form1" onsubmit="start(); return false">
        <label for="">Rows: </label>
        <input type="number" id="matrix_row_size" required>
        <label for="">Column: </label>
        <input type="number" id="matrix_column_size" required>
        <button type="submit">Start</button>
    </form>
    <br><br><BR></BR>
    <form onsubmit="value_function(); return false" class="form2">
        <div id="value_input_div1"></div>
        <select name="" id="opration_dropdown">
            <option value="sum">+</option>
            <option value="minus">-</option>
            <option value="multiply">x</option>
        </select>
        <div id="value_input_div2"></div>
        <button type="submit">SUM</button><br><br>
    </form>

    <br><br>
    <div id="result_div"></div>
    <br><br><BR></BR>

    <script>
        let row = "";
        let column = "";
        let target_result_div = document.querySelector("#result_div");
        // let matrix1 = [], matrix2 = [];
        let result = [];
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
        // input se mili hue values ko 2d array ma store karne ka function
        function value_function() {
            let matrix1 = [], matrix2 = [];
            for (let i = 0; i < row; i++) {
                matrix1[i] = [];
                matrix2[i] = [];
                result[i] = [];
                for (let j = 0; j < column; j++) {
                    if (matrix1[i] === undefined) { matrix1[i] = [] };
                    if (matrix2[i] === undefined) { matrix2[i] = [] };
                    matrix1[i][j] = Number(document.querySelector(`#matrix_value_${i}${j}`).value);
                    matrix2[i][j] = Number(document.querySelector(`#matrix_value2_${i}${j}`).value);
                    result[i][j]= 0;
                }
            }
            // if (opration_dropdown == "sum") {
 let result = matrix_sum(matrix1, matrix2);
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

            // sir ne i < matrix1.length aur j < matrix1[i].length kiya tha
            // for (let i = 0; i < row; i++) {
            //     for (let j = 0; j < column; j++) {
            //         document.querySelector(`#Result_values_${i}${j}`).value = result[i][j];
            //     }
            // }
        }

        function matrix_sum(matrix1, matrix2) {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    result[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }
            return result;
        }

//  function matrix_minus(matrix1, matrix2) {
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

    </script>
</body>

</html>