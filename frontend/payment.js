document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (!cardName || !cardNumber || !expiry || !cvv) {
        alert("Please fill in all the details.");
        return;
    }

 
    alert("Payment Successful! Thank you for your purchase.");
});
