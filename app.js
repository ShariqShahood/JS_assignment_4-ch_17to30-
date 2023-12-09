// var username = prompt("Enter Username: ");
// var Phone = prompt("Enter Phone Number: ");
// var Email = prompt("Enter Email: ");
// var Password = prompt("Enter Password: ");
// var Confirm_password = prompt("Confirm Password: ");

// if (username && Phone && Email && Password && Confirm_password)
// {
//     if(Password == Confirm_password)
//     {
//         alert("You are successfully registered!");
//     }
//     else{
//         alert("Error: Passwords do not match. Please try again.");
//     }
// }
// else
// {
//     alert("Error: Please fill in all the input fields.");
// }
                        


                    ///Pallingdrome
//  var input = prompt("Enter Any String: ");
//  var data = '';  
//  for (var i = input.length - 1; i >= 0; i--) {
//         data += input[i];
// }
// if (data === input) {
//     alert(input + " is a Palindrome");
// }
// else {
//     alert(input + " is Not a Palindrome");
//     }

                        // EVEN/ODD method :01

// var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var evenArray = [];
// var oddArray = [];
// for (var i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] % 2 === 0) {
//         evenArray.push(numberArray[i]);
//     } else {
//         oddArray.push(numberArray[i]);
//     }
// }
// console.log("Even Numbers: " + evenArray);
// console.log("Odd Numbers: " + oddArray);

                        // EVEN/ODD method :02

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var Even = [];
var Odd = [];
for (var i=0; i<input.length; i++){
if (input[i] % 2 === 0){
    Even.push(input[i]);
}
else{
    Odd.push(input[i]);
}

}
document.write("<h1> Even is:  {" + Even +"}</h1><br>");
document.write("<h1> Odd is:  {" + Odd+"}</h1>");