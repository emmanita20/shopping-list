// function replaceFirstItem() {
//   const firstItem = document.querySelector("li:first-child");

//   const li = document.createElement("li");
//   li.textContent = "Replaced First";
//   firstItem.replaceWith(li);
// }

// function replaceSecondItem() {
//   const secondItem = document.querySelector("li:nth-child(2)");

//   secondItem.outerHTML = "<li>Replaced Second</li>";
// }

// function replaceAllItem(){
//     const lis = document.querySelectorAll('li');
//     lis.forEach((item, index)=>{
//         item.innerHTML=`Replaced All`;
//     })
// }

// replaceAllItem();
// replaceSecondItem();
// replaceFirstItem();

// function removeClearButton(){
//     const removeBtn= document.querySelector('#clear');
//     removeBtn.remove();
// }

// function removeFirstItem(){
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:first-child');

//     ul.removeChild(li);
// }

// function removeItem(itemNumber){
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemNumber})`);

//     ul.removeChild(li)

// }

// removeItem(4);

//event listener
// const clearBtn = document.querySelector("#clear");

// function onClear() {
//   const itemList = document.querySelector("ul");
//   const items = itemList.querySelectorAll("li");
//   //   itemList.innerHTML = "";

//   items.forEach((item) => item.remove());
// }

// clearBtn.addEventListener("click", onClear);

// clearBtn.addEventListener("click",  ()=>alert("clear Item"));

// setTimeout(()=>clearBtn.removeEventListener('click', onClear), 5000);

// // removeFirstItem();
// removeClearButton();

// const logo = document.querySelector('img');
// const clearBtn = document.querySelector("#clear");

// function onClick(e) {
//     e.target.style.backgroundColor = 'black';
// }

// clearBtn.addEventListener('click', onClick);

// const onClick =()=>alert("clicked")

// logo.addEventListener('click', onClick)

// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.getElementById('h1');

// function onInput(e){
//     console.log('Input');
// }

// itemInput.addEventListener('input', onInput);
// itemInput.addEventListener('input', onInput);

// const form = document.getElementById("item-form");

// function onSubmit(e) {
//   e.preventDefault();

//   const item = document.getElementById("item-input").value;
//   const priority = document.getElementById("priority-input").value;

//   if (item === "" || priority === "0") {
//     alert("Please fill in all fields");
//     return;
//   }

//   console.log(item, priority);
// }
// form.addEventListener("submit", onSubmit);

// const listItem = document.querySelectorAll('li');

// listItem.forEach((item)=>{
//     item.addEventListener('click', (e)=>{
//         e.target.remove();
//     })
// })

// working with the shopping List

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = document.querySelector("button");
let isEditMode = false;

// Event Listener
function displayItems() {
  const itemFromStorage = getItemsFromStorage();
  itemFromStorage.forEach((item) => addItemToDOM(item));
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  //create list item

  addItemToDOM(newItem);
  //   console.log(li);

  //Add item to local storage
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = "";
}

function addItemToDOM(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");
  //   console.log(button);
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function addItemToStorage(item) {
  const itemFromStorage = getItemsFromStorage();

  itemFromStorage.push(item);

  //convert to JSON String and set to local storage
  localStorage.setItem("item", JSON.stringify(itemFromStorage));
}

function getItemsFromStorage() {
  let itemFromStorage;
  if (localStorage.getItem("items") === null) {
    itemFromStorage = [];
  } else {
    itemFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemFromStorage;
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function setItemToEdit(item) {
  isEditMode = true;
  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class ="fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}

function removeItemFromStorage(item) {
  let itemFromStorage = getItemsFromStorage();

  //Filter out item to be removed
  itemFromStorage = itemFromStorage.filter((i) => i !== item);

  //Re-set to localstorage
  localStorage.setItem("item", JSON.stringify(itemFromStorage));
}

function removeItem(item) {
  if (confirm("Are you sure?")) {
    item.remove();

    //Remove item from storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  //clear from localStorage
  localStorage.removeItem("items");

  checkUI();
}

//filter List
function filterItems(e) {
  const items = itemList.querySelectorAll("li");
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != "-1") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

//Initialize app
function init() {
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);
  checkUI();
}

init();
