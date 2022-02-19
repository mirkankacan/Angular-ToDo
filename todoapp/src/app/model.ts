import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items: TodoItem[];

    constructor(){
        this.name="Mirkan";
        this.items =[ 
          {description:"Kahvaltı",action:false},
          {description:"Temizlik",action:false},
          {description:"Uyku",action:true},
          {description:"Tamir",action:true},
          {description:"İş",action:false},
        ]
    }
}
