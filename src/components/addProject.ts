 
import { IProject } from "../models/project.js";
import state from "../state/singeltonState.js";
import { BinderDecorator } from "../decorator/bindDecorator.js"; 
import { projects } from "./projects.js";


export class addProjects{ 

    template:HTMLTemplateElement;
    host:HTMLDivElement;
    elememtForm:HTMLFormElement;
    title:HTMLInputElement;
    people:HTMLInputElement;
    description:HTMLInputElement;
    
     
    
    constructor(){ 
    this.template=document.getElementById('project-input')! as HTMLTemplateElement;
    this.host=<HTMLDivElement>document.getElementById('app')!;
    const importedNodes=document.importNode(this.template.content,true)
    this.elememtForm=importedNodes.firstElementChild as HTMLFormElement;
    this.elememtForm.id='user-input';
    this.title=  this.elememtForm.querySelector('#title')! as HTMLInputElement;    
    this.description=this.elememtForm.querySelector('#description') as HTMLInputElement;
    this.people=this.elememtForm.querySelector('#people') as HTMLInputElement;
    this.attach();
    this.Configure();
    }
    
    private attach=()=>{
        this.host.insertAdjacentElement('afterbegin',this.elememtForm);    
    }
    
    private gatherInput():IProject| void{
    
    const titleInput=this.title.value;
    const descriptionInput=this.description.value;
    const pplNumberInput=this.people.value.toString();
     
    
    if(titleInput.trim().length===0 || descriptionInput.trim().length===0 || pplNumberInput.trim().length===0){
        alert('invalid input');
        return;
    } else{
    
        return {Title:titleInput,Description:descriptionInput,People:+pplNumberInput}; 
    }     
    }
    
    private ClearInput():void{
        this.title.value='';
    this.description.value='';
    this.people.value='';
    }
    
    
    
    @BinderDecorator
    private SubmitHandler(e:Event){
    e.preventDefault();
    console.log(this.title.value);
    const inputVals=this.gatherInput();
    if(Array.isArray(inputVals)){
        const [titleInput,descriptionInput,pplNumberInput]=[...inputVals];
        console.log(inputVals);
    }
    this.ClearInput(); 
    if(inputVals !=null){
        state.addProjectToList=inputVals;
    //console.log('projects list--'+singletonState.getProjects()[0]);
    }
    }
    
    private Configure(){
    this.elememtForm.addEventListener('submit',this.SubmitHandler)
    }
    
    }
     




