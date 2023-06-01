import ItemsController from './items-controller.js'; 
 
 
const itemsController = new ItemsController(); 
 
 
const newItemForm = document.querySelector('#new-item-form'); 
newItemForm.addEventListener('submit', (event) => { 
  event.preventDefault(); // prevent the default form submission 
 
 
  // get the values from the form inputs using the name attributes 
  const name = document.querySelector('input[item="item"]').value; 
  const description = document.querySelector('input[item="condition"]').value; 
  const price = document.querySelector('input[item="price"]').value; 
  const img = document.querySelector('input[item="productID"]').value; 
 
 
  // call the addItem method of the itemsController with the form values 
  itemsController.addItem(item, condition , price, productID); 
 
 
  // update the items list in local storage 
  localStorage.setItem('items', JSON.stringify(itemsController.items)); 
 
 
  // clear the form inputs 
  document.querySelector('input[item="item"]').value = ''; 
  document.querySelector('input[item="condition"]').value = ''; 
  document.querySelector('input[item="price"]').value = ''; 
  document.querySelector('input[item="productID"]').value = ''; 
}); 
 