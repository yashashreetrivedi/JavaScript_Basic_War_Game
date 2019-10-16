let reshuffle = document.getElementById("reshuffle");
let cardHolder = document.getElementsByClassName("cardHolder");
let wonCardsHolder = document.getElementsByClassName("wonCardsHolder");
let warCardsHolder = document.getElementsByClassName("warCardsHolder");

function player(name, currentDeck,wonDeck)
{
    this.name=name;
    this.currentDeck=currentDeck;
    this.wonDeck=wonDeck;
}
function GetCurrentCard () {
    currentCard=currentDeck.shift();
}


function creatDack() {
const cardnum=['2','3','4','5','6','7','8','9','10','A','J','Q','K' ];
const suits=["Hearts","Spades","Clubs"," Diamonds," ];
let cards=[];
//let ShuffleDeck=[];
{
for(let i=0; i<suits.length; i++)
{
    for(let j=0; j<cardnum.length; j++)
    {
        cards.push(new card(n+1),cardnum[j],suits[i]);
    }
}
}
}
function  ShuffleDeck() {
    let ShuffleDeck=[];
    for(let k=0; k<cards.length; k++){
        let index = Math.floor(Math.random() * cards.length);
        ShuffleDeck.push(cards.splice(index,1)[0]);
    }

    function distribute() {
        let dealt=Math.floor(math.ramdom()* cardds.length);
        cards.splice(dealt[1],0);
 
    }

    function compare(player1,player2)
    {
        for(let n=0; n<cards.length; i++)
        {
        if(player1.cardnum < player2.cardnum)
        {
            player2.push;
            if(player1.suits <player2.suits)
            {
                 player2.push;
            }
        }
    }
        

        

    }

}
