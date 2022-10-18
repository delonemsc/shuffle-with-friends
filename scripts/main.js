//change image block

var bodyImage = document.querySelector('img');

bodyImage.onclick = function() {
	var imageSource = bodyImage.getAttribute('src');

	if (imageSource === 'images/party-img-1.jpg') {
		bodyImage.setAttribute ('src', 'images/party-img-2.jpg')
	} else {
		bodyImage.setAttribute ('src', 'images/party-img-1.jpg')
	}
}


//auth block

var authButton = document.querySelector('button');
var userHeader = document.querySelector('h1');

function setUserName() {
	var userName = prompt('Please enter your name');
	
	localStorage.setItem('name', userName);
	userHeader.textContent = 'Sup ' + userName + '! Be part of your party!'
}

if(localStorage.getItem('name') !== null) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	userHeader.textContent = 'Sup ' + storedName + '! Be part of your party!';
}

authButton.onclick = function() {
	setUserName();
}