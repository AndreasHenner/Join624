const JOIN_TOKEN = "70GV5W9B4NZ1VPZ59PLLC3EMQFF9KJPKXOADX7OT";
const JOIN_URL = "https://remote-storage.developerakademie.org/item";
let start = [{
    "name": "Anton Mayer",
    "email": "antom@gmail.com",
    "pass": "anton",
    "tel": "+49 1111 111 11 1"
}]
let users;
let user = "Guest";
let userInitial = "G";  

async function setElement(key, value) {
    const payload = {key, value, token: JOIN_TOKEN};
    return await fetch(JOIN_URL, {method: 'POST', body: JSON.stringify(payload)});
}

async function getElement(key) {
    const url = `${JOIN_URL}?key=${key}&token=${JOIN_TOKEN}`;
    return await fetch(url).then(res => res.json()).then(res => {
        // Verbesserter code
        if (res.data) { 
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });;
}


function docID (id){
    return document.getElementById(id);
}

function activeUser() {
    if(localStorage.getItem('activshort') === null) {
        if(sessionStorage.getItem('activshort') === null) {
          user = "Guest";
          userInitial = "G";
        }
        else {
          userInitial = sessionStorage.getItem('activshort');
          user = sessionStorage.getItem('activeuser');
        }
      }else {
        userInitial = localStorage.getItem('activshort');
        user = localStorage.getItem('activeuser');
      }
}

function summaryInit() {
    activeUser();
    headerRender();
    navRender();
    activeSite("menu-summary");
    SummaryRender();
    greetingNameRender();
    sumBigBtn();
    squareButtonRender();
    sumOverviewRender();
    
}

function taskInit() {
    headerRender();
    navRender();
    
}

async function addTaskInit(){
    activeUser();
    headerRender();
    navRender();
    activeSite("menu-add");
    getdata = await getElement('tasks');
    tasks = JSON.parse(getdata);
    addTaskRender();
}

async function addBoardInit(){
    activeUser();
    headerRender();
    navRender();
    activeSite("menu-board");
    getdata = await getElement('tasks'); //diese beiden Zeilen sind hinderlich um addTask im Board zu öffnen
    tasks = JSON.parse(getdata);  //diese beiden Zeilen sind hinderlich um addTask im Board zu öffnen
    addBoardRender();
    renderAddTaskToBoard();
}

function legalNotesInit(){
    headerRender();
    navRender();
    hideElements();
}

async function contactsInit(){
    activeUser();
    headerRender();
    navRender();
    activeSite("menu-contacts");
    getdataContacts = await getElement('contacts');
    contacts = JSON.parse(getdataContacts);  
    renderContacts();
}

// save the active user in local storage
function localUsersave(name) {
    let initials = name.match(/[A-Z]/g).join('').slice(0,2)
    localStorage.setItem('activeuser', name);
    localStorage.setItem('activshort', initials)
}

// load the active user in local storage
function localUserload() {
    user = localStorage.getItem('activeuser');
    userInitial = localStorage.getItem('activeshort');
}

function sessionUsersave(name) {
    let initials = name.match(/[A-Z]/g).join('').slice(0,2)
    sessionStorage.setItem('activeuser', name);
    sessionStorage.setItem('activshort', initials)
}

function localUserload() {
    user = sessionStorage.getItem('activeuser');
    userInitial = sessionStorage.getItem('activeshort');
}