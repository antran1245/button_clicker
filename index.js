//login button
function changeText(element) {
    if(element.innerHTML == "Login") {
        element.innerHTML = "Logout";
    } else {
        element.innerHTML = "Login"
    }
}

//add definition
function removeElement(element) {
    element.remove();
}

//likes buttons
function sendAlert() {
    alert('Ninja was liked');
}