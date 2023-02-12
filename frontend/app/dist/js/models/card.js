export class Card {
    constructor(textContent, deadline) {
        this.textContent = textContent;
        if (deadline) {
            this.deadline = deadline;
        }
    }
    get content() {
        return this.textContent;
    }
    get deadlineTask() {
        return this.deadline;
    }
    get associatedList() {
        return this.associatedListName;
    }
    get cardPosition() {
        return this.positionInTheList;
    }
    set content(textContent) {
        this.textContent = textContent;
    }
    set deadlineTask(deadline) {
        this.deadline = deadline;
    }
    set associatedList(listName) {
        this.associatedListName = listName;
    }
    set cardPosition(position) {
        this.positionInTheList = position;
    }
}
//# sourceMappingURL=card.js.map