// Sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function sortAlphabetical() {
  if (
    container.childElementCount === 0 ||
    !notice === "Enter a note to get started"
  ) {
    alert("Nada");
  }
  tasks.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  render(tasks);
}

function sortReverseAlphabetical() {
  tasks.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    } else if (a.title < b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  render(tasks);
}

function sortPriority() {
  tasks.sort(function (a) {
    if (a.color === "red") {
      return -1;
    } else if (a.color === "yellow") {
      return 1;
    } else {
      return 0;
    }
  });
}
