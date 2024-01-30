let tasks = [];
const addBtn = document.getElementById("add-btn");
const delBtn = document.querySelectorAll("del-btn");
const altBtn = document.querySelectorAll(".alt-btn");
const saveBtn = document.getElementById("save-btn");
const delBtnAll = document.getElementById("del-btn");
let container = document.getElementById("container");
const conteudo = document.querySelectorAll(".content");
console.log(tasks);
const lendsFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
let notice = document.createElement("h2");

console.log(lendsFromLocalStorage);

function render(lista) {
  list = "";
  for (let i = 0; i < lista.length; i++) {
    list += `
    <div class="box">
      <h2> ${lista[i].title} </h2>
      <button class="edit alt-btn">Edit</button>
      <button class="remove del-btn">Delete</button>
      <p> ${lista[i].content} </p>
    </div>
    `;
  }
  container.innerHTML = list;
}

if (lendsFromLocalStorage) {
  tasks = lendsFromLocalStorage;
  render(tasks);
}

if (container.childElementCount === 0) {
  container.appendChild(notice);
  notice.textContent = "Enter a note to get started";
}

saveBtn.addEventListener("click", function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

addBtn.addEventListener("click", function () {
  //-------------------------------------------------------------
  const title = prompt("Type your new title:");
  const content = prompt("Type your new text:");

  if (title && content) {
    const newDiv = document.createElement("div");
    newDiv.className = "box";

    let hDiv = document.createElement("h2");
    hDiv.textContent = title;

    const editBtn = document.createElement("button");
    editBtn.className = "edit alt-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (event) => edit(event));

    const dellBtn = document.createElement("button");
    dellBtn.className = "remove del-btn";
    dellBtn.textContent = "Delete";
    dellBtn.addEventListener("dblclick", () => removeBlock(indice));

    let contentDiv = document.createElement("p");
    contentDiv.textContent = `${tasks.content}`;
    contentDiv.className = "text";
    contentDiv.textContent = content;

    tasks.push({ title: title, content: content });

    console.log(tasks);

    //-------------------------------------------------------------
    container.appendChild(newDiv);
    newDiv.appendChild(hDiv);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(dellBtn);
    newDiv.appendChild(contentDiv);
    notice.textContent = "";
  }
});

//-----------------------------------------------------------------------------------------
function removeBlock(indice) {
  if (confirm("Are you sure?")) {
    const divParaExcluir = document.querySelector(".box");
    tasks.splice(indice, 1);

    localStorage.clear();
    console.log(tasks);
    if (divParaExcluir) {
      // Get the parent of the div so you can remove it
      const container = document.getElementById("container");

      // Remove the div from the HTML
      container.removeChild(divParaExcluir);
    }
  }
  console.log(container);
  if (container.childElementCount === 0) {
    container.appendChild(notice);
    notice.textContent = "Enter a note to get started";
  }
}

saveBtn.addEventListener("click", function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render(tasks);
  console.log(tasks);
  console.log(localStorage);
});

function edit(event) {
  let target = event.target;
  let contentBlock = target.parentElement.querySelector(".text");
  let newBlock = target.parentElement.querySelector("h2");

  const newTitle = prompt("Type your new title:");
  const newText = prompt("Type your new text:");

  newBlock.textContent = newTitle;
  contentBlock.textContent = newText;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(localStorage);
}

delBtnAll.addEventListener("click", function () {
  tasks.splice(0, tasks.length);
  localStorage.clear();
  const divAll = document.querySelectorAll(".box");
  divAll.forEach((div) => {
    const container = document.getElementById("container");
    container.removeChild(div);
  });
  notice.textContent = "Enter a note again";
});
