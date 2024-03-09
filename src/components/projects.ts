import state  from "../state/singeltonState.js";
import { IProject } from "../models/project.js";

export class projects{
    template:HTMLTemplateElement;
    host:HTMLDivElement;
    element:HTMLElement;
    type:string;
    assignedProjects:any[]=[];      
    constructor(type:'active'|'finished'){
        this.type=type;
        this.template=document.getElementById('project-list')! as HTMLTemplateElement;
        this.host=<HTMLDivElement>document.getElementById('app')!;
        const importedNodes=document.importNode(this.template.content,true)
        this.element=importedNodes.firstElementChild as HTMLElement;
        this.element.id=`${type}-projects`; 
        state.addListeners((projects:any)=>{
            this.assignedProjects=projects;
            this.renderProjects();
        });

        this.attach();
        this.render();
        }
        
        private attach=()=>{
            this.host.insertAdjacentElement('beforeend',this.element);    
        }

        private render(){
            let listId=`${this.type}---project-list`;
            this.element.querySelector('ul')!.id=listId;
            this.element.querySelector('h2')!.textContent=this.type.toUpperCase()+' PROJECTS'; 
        }

        private renderProjects(){
            let listId=`${this.type}---project-list` ;    
            let lstElemnt=document.getElementById(listId) as HTMLElement  ;        
            for(const proj  of this.assignedProjects){
                let lstItems=document.createElement("li");
                lstItems.textContent=proj.Title;
                lstElemnt.appendChild(lstItems);
            } 

        }
}

 