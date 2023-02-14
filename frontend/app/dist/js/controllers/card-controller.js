import { Card } from "../models/card.js";
import { Cards } from "../models/cards.js";
export class CardController {
    constructor() {
        this.cards = new Cards();
        const card1 = new Card('Card 1', 90);
        const card2 = new Card('Card 2 é o segundo cartão', 30);
        const card3 = new Card('Card 3', 60);
        card1.taskCompleted = true;
        card2.taskCompleted = true;
        this.cards.addCard(card1);
        this.cards.addCard(card2);
        this.cards.addCard(card3);
        this.cards.printCards();
        console.log(this.cards.totalTimeOfTaskCompleted() * 100 / this.cards.totalTime());
    }
}
//# sourceMappingURL=card-controller.js.map