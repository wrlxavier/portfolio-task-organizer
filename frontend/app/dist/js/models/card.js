export class Card {
    constructor(textContent, timeInMinutes) {
        this.textContent = textContent;
        this.timeInMinutes = timeInMinutes;
        this.isChecked = false;
    }
    get content() {
        return this.textContent;
    }
    get associatedList() {
        return this.associatedListName;
    }
    get cardPosition() {
        return this.positionInTheList;
    }
    get cardTime() {
        return this.timeInMinutes;
    }
    get taskCompleted() {
        return this.isChecked;
    }
    set content(textContent) {
        this.textContent = textContent;
    }
    set associatedList(listName) {
        this.associatedListName = listName;
    }
    set cardPosition(position) {
        this.positionInTheList = position;
    }
    set taskCompleted(checkState) {
        this.isChecked = checkState;
    }
}
//# sourceMappingURL=card.js.map