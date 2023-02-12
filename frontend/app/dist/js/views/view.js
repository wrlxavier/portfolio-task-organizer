export class View {
    constructor(selector) {
        const element = document.querySelector(`#${selector}`);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector #${selector} not found.`);
        }
    }
}
//# sourceMappingURL=view.js.map