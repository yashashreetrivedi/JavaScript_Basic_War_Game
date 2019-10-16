
let cardHolder = document.getElementsByClassName("cardHolder");
let wonCardsHolder = document.getElementsByClassName("wonCardsHolder");
let warCardsHolder = document.getElementsByClassName("warCardsHolder");

//play.onclick = function(){
   // PlayGame(Player1, Player2);
//}
document.getElementById("play").addEventListener("click", () => {
    document.getElementById("player1CurrentCard").innerHTML=player;
    document.getElementById("player2CurrentCard").innerHTML=player;
});


function player(name, currentDeck, wonDeck){
    this.name = name;
    this.currentDeck = currentDeck;
    this.wonDeck = wonDeck;
}
 function GetCurrentCard(){
    this.currentCard = this.currentDeck.shift();
}
//Player.prototype.isReshuffling = false;
//Player.prototype.isAtWar = false;
Deck = {
    //suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    suits: ["Spades", "Clubs", "Diamonds","Hearts"],
    cards: ["2","3","4", "5","6","7", "8","9", "10", "A","J","Q","k" ],
    deck: [],
    shuffledDeck: [],
    
     function BuildDeck(){
        for(var suit = 0; suit < this.suits.length; suit++){
            for(var card = 0; card < this.cards.length; card++){
                this.deck.push([this.cards[card], this.suits[suit]]);
            }
        }
    }

    ShuffleDeck: function(){
        while(this.deck.length){
            var index = Math.floor(Math.random() * this.deck.length); 
            this.shuffledDeck.push(this.deck.splice(index, 1)[0]);    
        }
    },
    DistributeCards: function(player1Deck, player2Deck){
        for(var i = 0; i < this.shuffledDeck.length / 2; i++){
            player1Deck.push(this.shuffledDeck[i]);
            player2Deck.push(this.shuffledDeck[this.shuffledDeck.length - i - 1]);
        }
    },
    ReshuffleDeck: function(player){
        while(player.wonDeck.length){
            var index = Math.floor(Math.random() * player.wonDeck.length);
            player.currentDeck.push(player.wonDeck.splice(index, 1)[0]);
        }
        player.wonDeck = [];
    }
}
PlayGame = function(player1, player2){
    if(player1.currentDeck.length == 0){
        player1.isReshuffling = true;
    }
    if(player2.currentDeck.length == 0){
        player2.isReshuffling = true;
    }
    GoToWar = function(){
        console.log("War");
        var player1WarDeck = [];
        var player2WarDeck = [];
        player1WarDeck.push(player1.currentCard);
        player1.GetCurrentCard();
        player1WarDeck.push(player1.currentCard);
        player1.GetCurrentCard();
        player1WarDeck.push(player1.currentCard);

        player2WarDeck.push(player2.currentCard);
        player2.GetCurrentCard();
        player2WarDeck.push(player2.currentCard);
        player2.GetCurrentCard();
        player2WarDeck.push(player2.currentCard);

        if(player1WarDeck[player1WarDeck.length - 1][0] == player2WarDeck[player2WarDeck.length - 1][0]){
            console.log("Tie");
            player1.GetCurrentCard();
            player1WarDeck.push(player1.currentCard);
            player1.GetCurrentCard();
            player1WarDeck.push(player1.currentCard);

            player2.GetCurrentCard();
            player2WarDeck.push(player2.currentCard);
            player2.GetCurrentCard();
            player2WarDeck.push(player2.currentCard);
        }
        if(player1WarDeck[player1WarDeck.length - 1][0] > player2WarDeck[player2WarDeck.length - 1][0]){
            player1.wonDeck = player1.wonDeck.concat(player1WarDeck, player2WarDeck);
            console.log("Player 1 wins");
        }
        else{
            player2.wonDeck = player2.wonDeck.concat(player1WarDeck, player2WarDeck);
            console.log("Player 2 wins");
        }
        console.log(player1WarDeck, player2WarDeck)
        warCardsHolder[0].textContent = player1WarDeck[player1WarDeck.length - 1][0] +" of " +player1WarDeck[player1WarDeck.length - 1][1];
        warCardsHolder[1].textContent = player2WarDeck[player2WarDeck.length - 1][0] +" of " +player2WarDeck[player2WarDeck.length - 1][1];
        cardHolder[0].textContent = player1WarDeck[0][0] +" of " +player1WarDeck[0][1];
        cardHolder[1].textContent = player2WarDeck[0][0] +" of " +player2WarDeck[0][1];
    }
    if(!player1.isReshuffling && !player2.isReshuffling){
        player1.GetCurrentCard();
        player2.GetCurrentCard();
        if(player1.currentCard[0] == player2.currentCard[0]){
            player1.isAtWar = true;
            player2.isAtWar = true;
        }
        else if(player1.currentCard[0] > player2.currentCard[0]){
            player1.wonDeck.push(player1.currentCard);
            player1.wonDeck.push(player2.currentCard);
            player1.isAtWar = false;
        }
        else{
            player2.wonDeck.push(player2.currentCard);
            player2.wonDeck.push(player1.currentCard);
            player2.isAtWar = false;
        }
        if(player1.isAtWar && player2.isAtWar){
            GoToWar();
        }
        else{
            cardHolder[0].textContent = player1.currentCard[0] +" of " +player1.currentCard[1];
            cardHolder[1].textContent = player2.currentCard[0] +" of " +player2.currentCard[1];
            warCardsHolder[0].textContent = "";
            warCardsHolder[1].textContent = "";
        }
        wonCardsHolder[0].textContent = player1.wonDeck.length;
        wonCardsHolder[1].textContent = player2.wonDeck.length;
    }
    if(player1.isReshuffling){
        ReshuffleDeck(player1);
        player1.isReshuffling = false;
    }
    if(player2.isReshuffling){
        ReshuffleDeck(player2);
        player2.isReshuffling = false;
    }
    if(player1.currentDeck.length == 26){
        GameOver(player1);
    }
    if(player2.currentDeck.length == 26){
        GameOver(player2);
    }
}
ReshuffleDeck = function(player){
    Deck.ReshuffleDeck(player)
}
GameOver = function(player){
    console.log(player.name +" wins!");
}
Player1 = new Player("Player 1", [], []);
Player2 = new Player("Player 2", [], []);
Deck.BuildDeck();
Deck.ShuffleDeck();
Deck.DistributeCards(Player1.currentDeck, Player2.currentDeck);