import state from "../state/singeltonState.js";
export class projects {
    constructor(type) {
        this.assignedProjects = [];
        this.attach = () => {
            this.host.insertAdjacentElement('beforeend', this.element);
        };
        this.type = type;
        this.template = document.getElementById('project-list');
        this.host = document.getElementById('app');
        const importedNodes = document.importNode(this.template.content, true);
        this.element = importedNodes.firstElementChild;
        this.element.id = `${type}-projects`;
        state.addListeners((projects) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });
        this.attach();
        this.render();
    }
    render() {
        let listId = `${this.type}---project-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }
    renderProjects() {
        let listId = `${this.type}---project-list`;
        let lstElemnt = document.getElementById(listId);
        for (const proj of this.assignedProjects) {
            let lstItems = document.createElement("li");
            lstItems.textContent = proj.Title;
            lstElemnt.appendChild(lstItems);
        }
    }
}
//# sourceMappingURL=projects.js.map