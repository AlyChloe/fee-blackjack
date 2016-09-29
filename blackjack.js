function runGame() {

    function checkResult(standing, hitting) {

        if (totalCards > 21) {
            alert('You Bust.');
        } else if (totalCards === 19 && standing || totalCards === 20 && standing) {
            alert('You win!');
        } else if (totalCards < 16 && standing) {
            alert('Dealer wins!');
        } else if (totalCards === 19 && hitting || totalCards === 20 && hitting || totalCards === 21) {
            alert('You win!');
        } 
    }

    var display = document.getElementById('cards');
    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
    var card = Math.floor(Math.random() * cards.length);
    var secondCard = Math.floor(Math.random() * cards.length);
    var totalCards = Number(card) + Number(secondCard) + 2;

    function hit() {
        var hitCard = Math.floor(Math.random() * cards.length);
        totalCards += hitCard + 1;
        display.innerHTML = cards[hitCard];
        checkResult(false, true);
        console.log(totalCards);
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true);
    });

    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    display.innerHTML = cards[card];
    display.innerHTML = display.innerHTML + ' ' + cards[secondCard];

    checkResult(false, false);
}
runGame();
