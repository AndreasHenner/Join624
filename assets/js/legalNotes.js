function hideElements(){
    document.getElementById('menu-summary').classList.add('d-none');
    document.getElementById('menu-board').classList.add('d-none');
    document.getElementById('menu-add').classList.add('d-none');
    document.getElementById('menu-contacts').classList.add('d-none');
    document.getElementById('header-user-con').classList.add('d-none');
    document.getElementById('header-help').classList.add('d-none');
}
function leavePage(){
    window.location = './summary.html';
    document.getElementById('menu-summary').classList.remove('d-none');
    document.getElementById('menu-board').classList.remove('d-none');
    document.getElementById('menu-add').classList.remove('d-none');
    document.getElementById('menu-contacts').classList.remove('d-none');
    document.getElementById('header-user-con').classList.remove('d-none');
    document.getElementById('header-help').classList.remove('d-none');
}