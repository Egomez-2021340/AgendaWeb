const inputBox = document.getElementById("input-box");
const listaContenedor = document.getElementById("lista-contendor");

function addTask(){
    if(inputBox.value === ''){
        alert("Debes llenar el campo!");
        }else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listaContenedor.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
    }
    inputBox.value = "";
    guardarDatos();
}

listaContenedor.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        guardarDatos();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        guardarDatos();
    }
}, false)

function guardarDatos(){
    localStorage.setItem("data", listaContenedor.innerHTML);
}
function showTask(){
    listaContenedor.innerHTML = localStorage.getItem("data");
}

showTask();