export class Card {
    private textContent: string;
    //private date: Date;

    constructor(textContent: string){
        this.textContent = textContent;
    }

    public get content() : string {
        return this.textContent;
    }
    
}