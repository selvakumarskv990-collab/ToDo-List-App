const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");



function addTask(){
    if(inputBox.value === ''){
        alert("You Must Add Some Task !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    } else if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){ 
    listContainer.innerHTML = (localStorage.getItem("data"));

}
showTask();