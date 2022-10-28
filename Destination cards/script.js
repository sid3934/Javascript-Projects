var detailsForm = document.querySelector("#destination_details_form");
detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    var destName = event.target.elements['name'].value;
    var destLocat = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;

    //using the for loop below we will be resetting all the fields of the HTML form to blank for new submission
    for(var i=0; i<detailsForm.length; i++){
        detailsForm.elements[i].value = "";    
    }

    var destCard = createDestinationCard(destName, destLocat, destPhoto, destDesc);
    
    
    var wishListContainer = document.getElementById('destinations_container');
    if(wishListContainer.children.length==0){
        document.getElementById('title').innerHTML = "My Wishlist"
    }
    //add the card
    document.querySelector('#destinations_container').appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, desc){
    var card = document.createElement('div');
    card.className = 'card';

    var img = document.createElement('img');
    img.setAttribute('alt', name); //the alt attribut of the image element is set to the name parameter of this function
    var constantPhotoURL = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201110/mannat_100911111405.jpg' ;
    if(photoURL.length===0){
        img.setAttribute('src', constantPhotoURL);
    }else{
        img.setAttribute('src', photoURL);
    }
    card.appendChild(img)
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        var cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.innerText = desc;
        cardBody.appendChild(cardText); 
    }

    var cardDeletebtn = document.createElement("button");
    cardDeletebtn.innerText = "Remove";
    
    cardDeletebtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeletebtn);

    card.appendChild(cardBody);
    return card;
}
 
function removeDestination(event){
    var card = event.target.parentElement.parentElement ;
    card.remove();
}