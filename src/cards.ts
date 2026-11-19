enum CardNumber {
    A='Ace',
    TWO='2',
    THREE='3',
    FOUR='4',
    FIVE='5',
    JACK='JACK',
    QUEEN='Queen',
    KING='King'
}
enum Suits{
    CLUBS='Clubs',
    HEARTS='Hearts',
    SPADES='Spades',
    DIAMONDS='Diamonds'
}
type Card ={
    number:CardNumber,
    suit:Suits
}
const printCard=(card:Card)=>{
    console.log(`The${card.number}of ${card.suit}`)
}

const card={
    number:CardNumber.FIVE,
    suit:Suits.CLUBS
}
printCard(card);