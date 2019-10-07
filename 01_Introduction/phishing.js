function getMessage() {
    var amount = Math.round(Math.random() * 100000);
    var message = "You won " + amount + " EUR!\n" +
        "To collect your winnings, send your credit card\n" +
        "and bank details to michaela.bacikova@tuke.sk";
    return message;
}

function showWinningsAlert() {
    showWinningsInDocument();
    alert(getMessage());
}

function showWinningsInDocument() {
    var hw = document.getElementBy('win-message');
    hw.innerHTML = hw.innerHTML + "<br><h1><blink>" + getMessage() + "</blink></h1>";
}