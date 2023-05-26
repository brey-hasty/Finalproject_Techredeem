import { newItem,itemsController } from "/scripts/itemsController.js";

function createItemCard(item) { 
    const card = document.createElement("div"); 
    card.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4"); 
    card.innerHTML = ` 
      <div class="card"> 
        <img src="${item.img}" class="card-img-top" alt="${item.name}"> 
        <div class="card-body"> 
          <h5 class="card-title">${item.name}</h5> 
          <p class="card-text">${item.description}</p> 
        </div> 
      </div> 
    `; 
    return card; 
  } 
   
   
  // Adding your items cards programmatically 
  function addItemCard(item) { 
    const listItems = document.getElementById("list-items"); 
    const card = createItemCard(item); 
    listItems.appendChild(card); 
  } 
   
   
  // Store and read Items from the LocalStorage 
  const sampleItems = [{'name':'description', 
  'img':'https://www.pexels.com/photo/an-apple-laptop-on-white-table-7004907/',
  'description':'Silver Mac-Book'}];
  localStorage.setItem("items", JSON.stringify(sampleItems));
   

      const storageItems = localStorage.getItem("items")
      if (storageItems) { 
        const items = JSON.parse(storageItems)
        this.items = items; 
        for (const item of items) { 
            localStorage.setItem("items", JSON.stringify(this.items))
            addItemCard(newItem); 
        } 
      } 
    
  
    function loadCardsListFromItemsController(){
        const itemsController = new ItemsController(0); 
        for(var i = 0, size = itemsController.items.length; i < size ; i++){
            const item = itemsController.items[i];
            addItemCard(item);
        }
    }
   

    loadStorageSampleData();
    itemsController.loadCardsListFromItemsController();
    loadItemsFromLocalStorage();