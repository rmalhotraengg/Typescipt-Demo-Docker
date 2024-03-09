import { IProject } from "../models/project.js";
class singletonState{
private projects: IProject[]=[];
static instance :singletonState;
private listeners:any[]=[];
private constructor(){}
static getInstance()
{
    if(this.instance==null){
        return  new singletonState();
    }
    else{
        return this.instance;
    }

}
set  addProjectToList(val:IProject){
if(val!=null){
const newProj={id:Math.random().toString(),...val};//add unique id 
this.projects.push(newProj);
for (const lstn of this.listeners){
    lstn(this.projects.slice());
}
}
}

get getprojectsList():IProject[]{
    return this.projects;
}

addListeners(lstnr:Function){
    this.listeners.push(lstnr);
}
 

}
let state=singletonState.getInstance();
export default state;