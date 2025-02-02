/*------- RANDOM CODES -------*/

//Function to generate combination of characters
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; // initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

    // Generate character multiple times using loops
    for (i = 1; i <=8; i++){
        var char = Math.random()*str.length; // Random select a character from the variable
        code += str.charAt(char); //accumulate the generated charcter into a string of 8
    }
    return code; // return the final accumulated string when loop ends
}
// GET HTML elememnt to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
    document.getElementById("submit").disabled =true;
}
//Active function
disableButton();
