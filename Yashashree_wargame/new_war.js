//create a deck 
function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function creatDack() {
    const cardnum=['2','3','4','5','6','7','8','9','10','A','J','Q','K' ];
    const suits=["Hearts","Spades","Clubs"," Diamonds," ];
    let cards=[];
    //let ShuffleDeck=[];
    {
    for(let i=0; i<suits.length; i++)
    {
        for(let j=0; j < cardnum.length; j++)
        {
            cards.push(new card(n+1),cardnum[j],suits[i]);
        }
    }
    return cards;
}
function getRandomcards(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleDeck(shuffleCnt) {
    for(var i = 0; i < shuffleCnt; i++) {
        let rndNo = getRandomcards(1, 52);
        let card = cards[i];
        cards[i] = cards[rndNo];
        cards[rndNo] = card;
    }
}
}