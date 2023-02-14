export class Card {
    private textContent: string;
    private timeInMinutes: number;
    private associatedListName: string;
    private positionInTheList: number;
    private isChecked: boolean;


    constructor(textContent: string, timeInMinutes: number){
        this.textContent = textContent;
        this.timeInMinutes = timeInMinutes;
        this.isChecked = false;
    }

    public get content() : string {
        return this.textContent;
    }

    public get associatedList() : string {
        return this.associatedListName;
    }
    
    public get cardPosition() : number {
        return this.positionInTheList;
    }

    public get cardTime() : number {
        return this.timeInMinutes;
    }

    public get taskCompleted() : boolean {
        return this.isChecked;
    }

    public set content(textContent: string) {
        this.textContent = textContent;
    }

    public set associatedList(listName: string) {
        this.associatedListName = listName;
    }

    public set cardPosition(position: number) {
        this.positionInTheList = position;
    }

    public set taskCompleted(checkState: boolean) {
        this.isChecked = checkState;
    }
    
}