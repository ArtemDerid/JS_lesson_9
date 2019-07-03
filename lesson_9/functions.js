function sendDataByGetMethod() {
	var userData = {
		userFirstName : document.getElementById('userFirstName').value,
		userSecondName : document.getElementById('userSecondName').value,
		userAge : document.getElementById('userAge').value,
		userAddress : document.getElementById('userAddress').value
	};

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?userFirstName=" + userData.userFirstName
			+ "&userSecondName=" + userData.userSecondName + "&userAge="
			+ userData.userAge + "&userAddress=" + userData.userAddress);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();
}

function sendDataByPostMethod() {
	var userData = {
			userFirstName : document.getElementById('userFirstName').value,
			userSecondName : document.getElementById('userSecondName').value,
			userAge : document.getElementById('userAge').value,
			userAddress : document.getElementById('userAddress').value
	};

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/userPost");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(userData));
}

userAge.onblur = function() {
	if(isNaN(this.value)||this.value<1||this.value>100){
		this.value = "Enter a number from 1 to 100";
		userAge.focus();
	}else{
		userAddress.focus();
	}
}