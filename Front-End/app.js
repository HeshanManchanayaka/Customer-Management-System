
loadSideBar();

function loadSideBar(){
  fetch("sidebar.html")
  .then(response => response.text())
  .then(data => document.getElementById("sidebar-menu").innerHTML = data)
}