
function openMenu(menu){
    const abrirMenu = document.getElementById(menu)
    const button = document.getElementById('bt_'+menu)
    abrirMenu.classList.toggle("open");
    button.classList.toggle("open");
}