var photos = []; //declare an empty array to store image element
var fileNames = ["partner-bustour","partner-cabinrental","partner-campingadv", "partner-collegetours", "partner-rentalbike", "partner-tourgroup"]; //declare an empty element to store image file
var imageList = []; //declare an empty array to store html list that contains an image
var image; // declares an empty variable to store the assemble image list code
var openList = "<li class='partner'>"; // declare a variable to contain open list tag
var closeList = "</li>"; // declare a variable to contain close list tag

// create a loop to create 6 images
for (var i=0; i < fileNames.length; i++){
    photos.push("<img src='partners/"+ fileNames[i] +".png'>");//assemble file name into image element and store in an array
    image = openList + photos[i] + closeList; // Assemble image element from array with list elements and store in a variable
    imageList.push(image); //store(push) the assemble list
}

//display all six image codes stored in the array
var partnerElement = document.getElementsByClassName("partners");
for (var j = 0; j < partnerElement.length;j++){
    partnerElement[j].innerHTML = imageList.join("");
}




