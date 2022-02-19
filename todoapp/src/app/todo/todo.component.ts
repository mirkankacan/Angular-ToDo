import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  

  constructor() { 
    this.model.items=this.getItemsFromLocal();
  }

  displayAll:boolean=false;
   model = new Model();

  getName(){
    return this.model.name;
  }

  getItems(){
    if(this.displayAll==true){

       return this.model.items;
    }
    else{ 
      //lambda
        return this.model.items.filter(x=>x.action===false);
    }
  }

  onActionChanged(item:TodoItem){
    let items=this.getItemsFromLocal();
    localStorage.clear();
    items.forEach(i=>{
      if(i.description == item.description){
        i.action=item.action;
      }
    });
    localStorage.setItem("items",JSON.stringify(items))
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

  addItem(value:string){
    if(value!=""){
      let data={description:value,action:false};
    this.model.items.push(data);

     let items = this.getItemsFromLocal();
    items.push(data);
    localStorage.setItem("items",JSON.stringify(items))
    }
    else{
      alert("Bilgi Giriniz!");
    }
  }

  getItemsFromLocal(){
    let items:TodoItem[]=[];
    let cek = localStorage.getItem("items");
    if(cek!=null){
      items=JSON.parse(cek);
    }
    
    return items;
  }
//class olarak tanımladığımızda ->
//   items:TodoItem[]=[
//     new TodoItem("Kahvaltı","Yes"),
//     new TodoItem("Temizlik","Yes"),
//     new TodoItem("İş","Yes"),
//     new TodoItem("Uyku","Yes"),
//     new TodoItem("Spor","No"),
//     new TodoItem("Tamir","Yes"),

//   ];

//interface olarak tanımaldığımızda ->
// items:TodoItem[]=[
//   {description:"Kahvaltı",action:"Yes"},
//   {description:"Temizlik",action:"Yes"},
//   {description:"Uyku",action:"Yes"},
//   {description:"Tamir",action:"Yes"},
// ]



}
