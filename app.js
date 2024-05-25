// var inputBox = document.getElementById('inputBox')
// var listContainer  = document.getElementById('list-container')

// function AddTask(){
//     if(inputBox.value === ""){
//         alert('you must write something')
//     }
//     else{
//         let li = document.createElement('li')
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData()
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVMP9yJ36SFjr6a212_pMyDSSszNeAXRE",
    authDomain: "test-de7c8.firebaseapp.com",
    databaseURL: "https://test-de7c8-default-rtdb.firebaseio.com",
    projectId: "test-de7c8",
    storageBucket: "test-de7c8.appspot.com",
    messagingSenderId: "213323543846",
    appId: "1:213323543846:web:3cbf0128250cc36836fde7"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  var db = firebase.database()


var inputBox = document.getElementById('inputBox')

var listContainer  = document.getElementById('list-container')

firebase.database().ref("todos").on("child_added",function(data){
    // EDIT BUTTON
    // var editbtn = document.createElement("button");
    // var editbtnText = document.createTextNode("Edit");
    // editbtn.appendChild(editbtnText);
    // LiElement.appendChild(editbtn);
    // editbtn.setAttribute("onclick","editItem(this)");
    // editbtn.setAttribute("class","edit");
    // editbtn.setAttribute("id",data.val().key);
// EDIT BUTTON END


    if(inputBox.value === ""){
        alert('you must write something')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
})
function AddTask(){
var inputBox = document.getElementById('inputBox')
    var key = Date.now().toString(26);
    var todos = {
        value:inputBox.value,
        key,
    };
    firebase.database().ref("todos/"+ key).set(todos);

   
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Edit
// function editItem(e){
//     var update = prompt("Edit the task",e.parentNode.firstChild.nodeVlue)
//     firebase.database().ref(`todos/${e.id}`).set({
//         key:e.id,
//         value:update,

//     });
//     e.parentNode.firstChild.nodeVlue = update
// }

// delete
// function deleteItem(e){
//     firebase.database().ref(`todos/${e.id}`).remove()
//     e.parentNode.remove()
// }