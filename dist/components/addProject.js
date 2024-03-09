var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import state from "../state/singeltonState.js";
import { BinderDecorator } from "../decorator/bindDecorator.js";
export class addProjects {
    constructor() {
        this.attach = () => {
            this.host.insertAdjacentElement('afterbegin', this.elememtForm);
        };
        this.template = document.getElementById('project-input');
        this.host = document.getElementById('app');
        const importedNodes = document.importNode(this.template.content, true);
        this.elememtForm = importedNodes.firstElementChild;
        this.elememtForm.id = 'user-input';
        this.title = this.elememtForm.querySelector('#title');
        this.description = this.elememtForm.querySelector('#description');
        this.people = this.elememtForm.querySelector('#people');
        this.attach();
        this.Configure();
    }
    gatherInput() {
        const titleInput = this.title.value;
        const descriptionInput = this.description.value;
        const pplNumberInput = this.people.value.toString();
        if (titleInput.trim().length === 0 || descriptionInput.trim().length === 0 || pplNumberInput.trim().length === 0) {
            alert('invalid input');
            return;
        }
        else {
            return { Title: titleInput, Description: descriptionInput, People: +pplNumberInput };
        }
    }
    ClearInput() {
        this.title.value = '';
        this.description.value = '';
        this.people.value = '';
    }
    SubmitHandler(e) {
        e.preventDefault();
        console.log(this.title.value);
        const inputVals = this.gatherInput();
        if (Array.isArray(inputVals)) {
            const [titleInput, descriptionInput, pplNumberInput] = [...inputVals];
            console.log(inputVals);
        }
        this.ClearInput();
        if (inputVals != null) {
            state.addProjectToList = inputVals;
            //console.log('projects list--'+singletonState.getProjects()[0]);
        }
    }
    Configure() {
        this.elememtForm.addEventListener('submit', this.SubmitHandler);
    }
}
__decorate([
    BinderDecorator
], addProjects.prototype, "SubmitHandler", null);
//# sourceMappingURL=addProject.js.map