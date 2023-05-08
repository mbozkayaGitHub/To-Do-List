const inputBox = document.getElementById("input-box"); // Step1
const listContainer = document.getElementById("list-container"); // Step 2

function addTask(){
    if(inputBox.value === ""){
        alert("You must enter a value");
    }
       else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; 
        li.appendChild(span)
       
    }
    inputBox.value =""; // inputbox yazı yazıldıktan sonra boşaltır 
    saveData(); // yazılan taskleri sayfa yenilense dahi liste de tutar
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
      else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
    saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}  
function showTask(){
listContainer.innerHTML=localStorage.getItem("data")
}
showTask();