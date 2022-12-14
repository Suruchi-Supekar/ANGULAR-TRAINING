class Item{
    itemId:number;
     itemName:string; 
     itemPrice:number;
     category:string;
     constructor(itemid:number,itemname:string,itemprice:number,Category:string)
     {
     this.itemId=itemid;
     this.itemName=itemname;
     this.itemPrice=itemprice;
     this.category=Category;
     }
}
let item1=new Item(1,"Bournville",100,"Dark Chocolate");
let item2=new Item(2,"Milkybar",50,"Milk Chocolate");
let func2=(obj:Item)=>{
    console.log(obj);
}
func2(item1);
func2(item2);