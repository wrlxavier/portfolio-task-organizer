import { Card } from "../models/card.js";
import { Cards } from "../models/cards.js";

export class CardController {


    private cards = new Cards();


    constructor(){

        const card1 = new Card('Card 1');
        const card2 = new Card('Card 2 é o segundo cartão');
        const card3 = new Card('Card 3');

        this.cards.addCard(card1);
        this.cards.addCard(card2);
        this.cards.addCard(card3);


        this.cards.printCards();

    }



}