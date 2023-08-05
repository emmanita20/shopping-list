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

// Event Listener
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  //create list item

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  //   console.log(button);
  li.appendChild(button);

  itemList.appendChild(li)
//   console.log(li);

itemInput.value = '';
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
itemForm.addEventListener("submit", addItem);
