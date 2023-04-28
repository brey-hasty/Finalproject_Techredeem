class ItemsController {
    constructor() {
      this.items = [];
     this.latestItemId = 0; // initialize the latest item id
    }
 
    addItem(name, description, img) {
      const newItem = {
        id: this.latestItemId + 1, // increment the latest item id
        name,
        description,
        img,
        createdAt: new Date().toISOString(),
      };
      this.items.push(newItem);
      this.latestItemId = newItem.id; // update the latest item id
    }
  }
 
  const itemsController = new ItemsController();
  itemsController.addItem("Airpod", "White airpod", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-airpods.png");
  itemsController.addItem("Dell Coirei7", "Dell laptop", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-dell-laptop.png");
  itemsController.addItem("Iphone max", "White iphone", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-iphone.png");
  itemsController.addItem("Ipad pro", "large ipad", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-ipadpro.png");
  itemsController.addItem("Apple Smart Watch", "Black watch", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-apple-watch.png");
  itemsController.addItem("Ipad pro 2", "Small ipad", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-ipadpro2.png");
  itemsController.addItem("Samsung galaxy", " Gray Samsung phone", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-galaxy-phone.png");
  itemsController.addItem("Smart Watch", "Black and red watch", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-smart-watch.png");
  itemsController.addItem("Gaming Laptop", "Gray gaming laptop", "C:\\Users\\Mike\\dev\\Finalproject_Techredeem\\photos\\img-gaming-laptop-1.png");
  // id 1 is airpod, id 2 is Dell, id 3 is iphone max, id 4 is ipad pro, id 5 is apple smart watch, id 6 is ipad pro2, id 7 is samsung galaxy, id 8 is smart watch, and id 9 is gaming laptop
  console.log(itemsController.items);

