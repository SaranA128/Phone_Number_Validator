function validateMobileNumber() {
    var mobileNumber = document.getElementById("mobile-number").value;
    var errorMessage = document.getElementById("error-message");

    // Check if mobile number is 10 digits long
    if (mobileNumber.length !== 10) {
        errorMessage.innerText = "Please enter a 10-digit mobile number";
        return;
    }

    // Check if mobile number starts with a valid Indian mobile number prefix
    if (!mobileNumber.startsWith("6") && !mobileNumber.startsWith("7") && !mobileNumber.startsWith("8") && !mobileNumber.startsWith("9")) {
        errorMessage.innerText = "Invalid mobile number prefix. Please enter a number starting with 6, 7, 8, or 9";
        return;
    }

    // Check if mobile number contains only digits
    if (!/^\d+$/.test(mobileNumber)) {
        errorMessage.innerText = "Please enter a valid mobile number containing only digits";
        return;
    }

    // If all checks pass, display a success message
    errorMessage.innerText = "Mobile number is valid";
    errorMessage.style.color = "#0f0";
}