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

/*var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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
document.write("<h1> Odd is:  {" + Odd+"}</h1>");*/


// ***************************chapter 17 to 20*************************
                // Question:01
// var row = 3;
// var col = 3;
// var emp_arr =[];
// for (var i=0; i<row;i++){
//     emp_arr[i]=[]
//     for(var j=0;j<col;j++){
//         //emp_arr[i][j]=prompt("Enter Value at index  " +i + j+ ":");
//                         //OR
//         emp_arr[i][j]=[];
//     }
// }
// document.write(emp_arr)
                // Question:02
    // Method:01
// document.write("<h1>"+"Simple Method"+"</h1>")
// var row = +prompt("Enter Rows: ");
// var col = +prompt("Enter Columns: ");
// var emp_arr =[];
// for (var i=0; i<row;i++){
//     emp_arr[i]=[]
//     for(var j=0;j<col;j++){
//         emp_arr[i][j]=prompt("Enter Value at index  " +i + j+ ":");
//     }
// }        
// for(var i=0;i<row;i++){
//     for(var j=0;j<col;j++){
//         document.write(emp_arr[i][j]+" ");
//     }
//     document.write("<br>");
// }
//     // Method:02 in JSON format
//     document.write("<h1>"+"Json Format"+"</h1>")
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         document.write(arr[i][j]+" ")
//     }
//     document.write("<br>")
// }

                // Question:03
// for(var i=1;i<=10;i++){
//     document.write(i)
//     document.write("<br>")
// }
            //OR
// var start = +prompt("Enter Starting Point: ");
// var Ending = +prompt("Enter Ending Point: ");
// for(var i=start;i<=Ending;i++){
//     document.write(i)
//     document.write("<br>")
// }
               
            // Question:04
// var table = +prompt("Enter Which Table You Want: ");
// var start = +prompt("Enter Starting Point: ");
// var end = +prompt("Enter Ending Point: ");
// for(var i=start; i<=end;i++){
//     document.write(table + " x " + i + " = " + i*table);
//     document.write("<br>")
// }

            // Question:05
// var arr =["apple", "banana" ,"mango", "orange","starwberry"];
// document.write(arr[0]+"<br>");
// document.write(arr[1]+"<br>");
// document.write(arr[2]+"<br>");
// document.write(arr[3]+"<br>");
// document.write(arr[4]+"<br>");
// document.write("<br>")
// for(var i=0;i<arr.length;i++){
//     document.write("Element at index of "+ i + " : "+ arr[i]);
//     document.write("<br>")
// }

            // Question:06
// document.write("<h2>(a) Counting:</h2>");
// for (var i=1;i<=15;i++){
//     document.write(i,",");
// }
// document.write("<h2>(b)Reverse Counting:</h2>");
// for (var i=10;i>=1;i--){
//     document.write(i,",");
// }
// document.write("<h2>(c)Even:</h2>");
// for (var i=0;i<=20;i=i+2){
//     document.write(i,",");
// }
// document.write("<h2>(d)Odd:</h2>");
// for (var i=1;i<=20;i=i+2){
//     document.write(i,",");
// }
// document.write("<h2>(e)Series:</h2>");
//     for (var i = 1; i <= 10; i++) {
//     document.write(2*i + "k, ");
//     }

            // Question:07
// var A = ["cake" , "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome To ABC Bakery.What do you want to order Sir/Ma'am?: ");
// var flag = false;
// for(var i=0;i<A.length;i++){
//     if(A[i] === search){
//         flag =true;
//         break;
//     }
// }
// if(flag == true){
//     document.write(search +" is <b> Available </b> at index "+ A.indexOf(search)+ " in our bakery");
// }
// else{
//     document.write("We are Sorry."+ search +" is <b> not available </b>in out bakery");
// }

            // Question:08
// var arr =[99,24,53,78,91,12,98];
// document.write("Array Items: "+arr);
// document.write("<br>");
// document.write("Sorted Array: "+arr.sort()+"<br>");
// document.write("The Largest Number is: "+arr[arr.length-1]+"<br>");

            // Question:09
// var arr =[99,24,53,78,91,12,98];
// document.write("Array Items: "+arr);
// document.write("<br>");
// document.write("Sorted Array: "+arr.sort()+"<br>");
// document.write("The Smallest Number is: "+arr[arr.length-arr.length]+"<br>");

            // Question:10
//  for (var i = 1; i <= 20; i++) {
//         document.write(5*i+",");
//     }

                    

//    ****************************chapter 21 to 25*****************************
//                      Question:01                    
// var firstName = prompt("Enter First Name: ");
// var lastName = prompt("Enter Last Name: ");
// var fullName = firstName +" "+ lastName;
// alert("Welcome Mr. "+fullName);

//                      Question:02
// var favMobile = prompt("Enter Your Favourite Mobile: ");
// document.write("My Favourite Phone is: "+ favMobile +"<br>" );
// document.write("Length Of String is: "+favMobile.length)

//                      Question:03
// var city= "Pakistani";
// document.write("String: "+city+"<br>");
// document.write("Index Of 'n' is : "+ city.indexOf("n"))

//                      Question:04
// var string= "Hello World";
// document.write("String: "+ string+"<br>");
// document.write("Last Index of 'l' is : "+ string.lastIndexOf("l"))

//                      Question:05
// var string= "Pakistani";
// document.write("String: "+ string+"<br>");
// document.write("Character at index '3' is : "+ string[3])

//                      Question:06
// var firstName = prompt("Enter First Name: ");
// var lastName = prompt("Enter Last Name: ");
// alert("Welcome Mr. "+firstName.concat(lastName));

//                      Question:07
// var city = "Hyderabad";
// var currentCity = "Hyder";
// var replace = "Islam";
// for(var i=0;i< city.length;i++){
//     if(city.slice(0,currentCity.length) === currentCity){
//         city = replace + city.slice(currentCity.length,city.length);
//     }
// }
// console.log(city)

//                      Question:08
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var currentmess = "and";
// var replacemess = "&";
// document.write("<h1>Orignal Message is: </h1>" + message+"<br>")
// for(var i=0; i< message.length; i++){
//     if(message.slice(i,i+currentmess.length) === currentmess)
//     {
//         message = message.slice(0,i) + replacemess +message.slice(i+currentmess.length)
//     }
// }
// document.write("<h1>Updated Message is: </h1>" +message)

                                    // OR
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var currentmess = "and";
// var replacemess = "&";
// console.log(message.replaceAll(currentmess,replacemess))

//                      Question:09
// var value = ("472");
// document.write("value: "+value+"<br>")
// document.write("Type: "+typeof value+"<br>")
// document.write("value: "+value+"<br>")
// value = parseInt("472");
// value = Number("472");
// value = +("472");
// document.write("Type: "+typeof value)

//                      Question:10
// var userInput = prompt("Enter String: ");
// document.write("User Input: "+userInput+"<br>");
// document.write("Upper Case: "+userInput.toUpperCase());

//                      Question:11
// var userInput = prompt("Enter String: ");
// document.write("User Input: "+userInput+"<br>");
// document.write("Upper Case: "+userInput[0].toUpperCase()+userInput.slice(1));

//                      Question:12
// var num = 35.36;
// var update = num.toString().replace(".","");
// document.write("Number: " +num+"<br>")
// document.write("Result: " +update+"<br>")
// document.write("Type: "+typeof update)


//    ****************************chapter 26 to 30*****************************

//                      Question:1
// var num = +prompt("Enter Any Positive Number: ");
// document.write("Number : "+num+"<br>");
// document.write("Round Off Value : "+Math.round(num)+"<br>");
// document.write("Floor Value : "+Math.floor(num)+"<br>");
// document.write("Ceil Value : "+Math.ceil(num)+"<br>");

//                      Question:2
// var num = +prompt("Enter Any Negative Number: ");
// document.write("Number : "+num+"<br>");
// document.write("Round Off Value : "+Math.round(num)+"<br>");
// document.write("Floor Value : "+Math.floor(num)+"<br>");
// document.write("Ceil Value : "+Math.ceil(num)+"<br>");

//                      Question:3
// var num= +prompt("Enter Num: ");
// document.write("The Absolute value of "+ num +" is: "+Math.abs(num));

//                      Question:4
// for(var i=1; i<=4;i++){
//     document.write("Player "+i+ " Dice Value: " +Math.round(Math.random()*5+1)+"<br>");
// }
//                      Question:5
// for(var i=1;i<=2;i++){
//         //document.write("Player"+i+"coin value : "+Math.round(Math.random()*1+1)+"<br>");
//         if(Math.round(Math.random()*1+1) === 2){
//             document.write("Player "+ i +"Coin Toss Value is: Heads"+"<br>")
//         }
//         else{
//             document.write("Player "+ i +"Coin Toss Value is: Tails"+"<br>")
//         }    
// }
                //****OR****
    // if(Math.round(Math.random()*1+1) === 2){
    //     document.write("Heads");
    // }
    // else{
    //             document.write("Tails");
    // }
//                      Question:6
//    document.write("Random Number Between 1 to 100 : " +Math.round(Math.random()*99+1)+"<br>");

//                      Question:8
var secretNumber = Math.round(Math.random() * 9 + 1);
var userGuess = +prompt("Guess the secret number between 1 and 10:");
if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert(`Sorry, the correct number was ${secretNumber}. Better luck next time!`);
}







