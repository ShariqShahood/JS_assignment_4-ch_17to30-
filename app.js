var username = prompt("Enter Username: ");
var Phone = prompt("Enter Phone Number: ");
var Email = prompt("Enter Email: ");
var Password = prompt("Enter Password: ");
var Confirm_password = prompt("Confirm Password: ");

if (username && Phone && Email && Password && Confirm_password)
{
    if(Password == Confirm_password)
    {
        alert("You are successfully registered!");
    }
    else{
        alert("Error: Passwords do not match. Please try again.");
    }
}
else
{
    alert("Error: Please fill in all the input fields.");
}
