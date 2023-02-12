export class Card {
    private textContent: string;
    private deadline: Date;
    private associatedListName: string;
    private positionInTheList: number;


    constructor(textContent: string, deadline?: Date){
        this.textContent = textContent;
        if (deadline){
            this.deadline = deadline;
        }
    }

    public get content() : string {
        return this.textContent;
    }

    
    public get deadlineTask() : Date {
        return this.deadline;
    }

    public get associatedList() : string {
        return this.associatedListName;
    }
    
    public get cardPosition() : number {
        return this.positionInTheList;
    }

    public set content(textContent: string) {
        this.textContent = textContent;
    }

    public set deadlineTask(deadline: Date) {
        this.deadline = deadline;
    }

    public set associatedList(listName: string) {
        this.associatedListName = listName;
    }

    public set cardPosition(position: number) {
        this.positionInTheList = position;
    }
    
}