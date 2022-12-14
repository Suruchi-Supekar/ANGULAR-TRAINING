var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, Category) {
        this.itemId = itemid;
        this.itemName = itemname;
        this.itemPrice = itemprice;
        this.category = Category;
    }
    return Item;
}());
var item1 = new Item(1, "Bournville", 100, "Dark Chocolate");
var item2 = new Item(2, "Milkybar", 50, "Milk Chocolate");
var func2 = function (obj) {
    console.log(obj);
};
func2(item1);
func2(item2);
