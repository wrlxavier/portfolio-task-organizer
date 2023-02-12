import { Card } from "./card.js";

export class Cards {

    private cards: Card[] = [];

    constructor(){}

    public addCards(cards: Card[]) : void {
        this.cards = this.cards.concat(cards);
    }

    public addCard(card: Card) : void {
        this.cards.push(card);
    }

    public printCards() : void {
        this.cards.forEach((card) => {
            console.log(card.content);
        });
    }


}