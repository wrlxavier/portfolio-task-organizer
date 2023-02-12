export class Cards {
    constructor() {
        this.cards = [];
    }
    addCards(cards) {
        this.cards = this.cards.concat(cards);
    }
    addCard(card) {
        this.cards.push(card);
    }
    printCards() {
        this.cards.forEach((card) => {
            console.log(card.content);
        });
    }
}
//# sourceMappingURL=cards.js.map