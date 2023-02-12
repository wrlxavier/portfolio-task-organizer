export abstract class View<T> {
    
    private element: HTMLElement;
    
    constructor(selector: string) {
        const element = document.querySelector(`#${selector}`);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Selector #${selector} not found.`);
        }
    }
}