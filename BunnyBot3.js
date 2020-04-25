var userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
var botChat = document.querySelector("#botChat");
var user = document.querySelector("#user");

submit.addEventListener("click", response);

greetingList = ["Hello", "Hi", "Hey there", "Yo"];

greeting = Math.floor(Math.random() * greetingList.length);

function response() {
    while(botChat.textContent == "What is your name?") {
        user.style.color = "red";
        botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
        user.innerHTML = userInput.value;
        setTimeout(() => {botChat.innerHTML = "Do you like chocolate? Y or N" }, 2000);;
        userInput.value = null;
    } 
    
    while(botChat.textContent == "Do you like chocolate? Y or N") {
        user.style.color = "blue";
        if (userInput.value == "Y") {
            botChat.innerHTML = "Excellent!";
        }
        else if (userInput.value == "N") {
            botChat.textContent = "Pity";
        }
        else {
            botChat.textContent = "Please type Y or N.";
            setTimeout(() => {botChat.innerHTML = "Do you like chocolate? Y or N" }, 2000);;
        }
    }
}




