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
    totalTime() {
        let totalTime = 0;
        this.cards.forEach((card) => {
            totalTime += card.cardTime;
        });
        return totalTime;
    }
    totalTimeOfTaskCompleted() {
        let totalTime = 0;
        this.cards.forEach((card) => {
            if (card.taskCompleted) {
                totalTime += card.cardTime;
            }
        });
        return totalTime;
    }
}
//# sourceMappingURL=cards.js.map