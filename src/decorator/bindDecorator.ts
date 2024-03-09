export function BinderDecorator(_:any,_2:string,descriptor:PropertyDescriptor)
{
const method=descriptor.value;
const adjDesriptor:PropertyDescriptor={
    configurable:true,
    get(){
    const boundMethod=method.bind(this);
    return boundMethod;}
}

return adjDesriptor;
}
