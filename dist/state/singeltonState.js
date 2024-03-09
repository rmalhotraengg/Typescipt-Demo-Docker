class singletonState {
    constructor() {
        this.projects = [];
        this.listeners = [];
    }
    static getInstance() {
        if (this.instance == null) {
            return new singletonState();
        }
        else {
            return this.instance;
        }
    }
    set addProjectToList(val) {
        if (val != null) {
            const newProj = Object.assign({ id: Math.random().toString() }, val); //add unique id 
            this.projects.push(newProj);
            for (const lstn of this.listeners) {
                lstn(this.projects.slice());
            }
        }
    }
    get getprojectsList() {
        return this.projects;
    }
    addListeners(lstnr) {
        this.listeners.push(lstnr);
    }
}
let state = singletonState.getInstance();
export default state;
//# sourceMappingURL=singeltonState.js.map