// let user_input_number = +prompt();

// document.write("Result:", "<br />")
// document.write("The Value of a is:" + user_input_number + "<br />");

// let pre_inc_value = ++user_input_number;
// document.write("Result:", "<br />")
// document.write("The Value of ++a is:" + pre_inc_value + "<br />");
// document.write("Now the value of a is" + user_input_number + "<br />");

// let post_inc_value = user_input_number++;
// document.write("Result:", "<br />")
// document.write("The Value of a++ is:" + pre_inc_value + "<br />");
// document.write("The Value of a++ is:" + user_input_number + "<br />");


// let pre_decc_value = --user_input_number;
// document.write("Result:", "<br />")
// document.write("The Value of --a is:" + user_input_number + "<br />");
// document.write("The Value of --a is:" + user_input_number + "<br />");


// let post_decc_value = user_input_number--;
// document.write("Result:", "<br />")
// document.write("The Value of a-- is:" + pre_inc_value + "<br />");
// document.write("The Value of a-- is:" + user_input_number + "<br />");

// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// 1 - 0
// 1 - 0 + 1
// 1 - 0 + 1 + 0
// 2

// let userName = prompt("Please Enter Your Username");

// alert("Greetings" + " Mr/Ms " + userName);

// let userNumber = +prompt("Enter any Number");

// document.write(userNumber + " × " + " 1 " + " = " + userNumber*1 + "<br />");
// document.write(userNumber + " × " + " 2 " + " = " + userNumber*2 + "<br />");
// document.write(userNumber + " × " + " 3 " + " = " + userNumber*3 + "<br />");
// document.write(userNumber + " × " + " 4 " + " = " + userNumber*4 + "<br />");
// document.write(userNumber + " × " + " 5 " + " = " + userNumber*5 + "<br />");
// document.write(userNumber + " × " + " 6 " + " = " + userNumber*6 + "<br />");
// document.write(userNumber + " × " + " 7 " + " = " + userNumber*7 + "<br />");
// document.write(userNumber + " × " + " 8 " + " = " + userNumber*8 + "<br />");
// document.write(userNumber + " × " + " 9 " + " = " + userNumber*9 + "<br />");
// document.write(userNumber + " × " + " 10 " + " = " + userNumber*10 + "<br />");

let subject1 = prompt("Enter Subject No 1");
let subject2 = prompt("Enter Subject No 2");
let subject3 = prompt("Enter Subject No 3");

let totalMarks = 100;
let obtainedMarks_1 = prompt("Obtained Marks of Subject 1 " + subject1);
let obtainedMarks_2 = prompt("Obtained Marks of Subject 2 " + subject2);
let obtainedMarks_3 = prompt("Obtained Marks of Subject 3 " + subject3);

// document.write("<table>
// <tr>
//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
// </tr>
// <tr>
//     <td>English</td>
//     <td></td>
//     <td></td>
//     <td></td>
// </tr>
// <tr>
//     <td>Maths</td>
//     <td></td>
//     <td></td>
//     <td></td>
// </tr>
// <tr>
//     <td>Urdu</td>
//     <td></td>
//     <td></td>
//     <td></td>
// </tr>
// </table>")

// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>" + "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks_1 + "</td>" + "<td>" + (obtainedMarks_1 / totalMarks) * 100  + "</td></tr>" + "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks_2 + "</td>" + "<td>" + (obtainedMarks_2 / totalMarks) * 100  + "</td></tr>" + "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks_3 + "</td>" + "<td>" + (obtainedMarks_3 / totalMarks) * 100  + "</td></tr>" + "</table>");