console.log

var modal = document.getElementById("myModal");
var openModalBtn = document.querySelector(".btn-ingresar");
var closeModalBtn = document.getElementById("closeModalBtn");
var acceptBtn = document.getElementById("acceptBtn");


openModalBtn.onclick = function() {
    modal.style.display = "flex"; 
}


closeModalBtn.onclick = function() {
    modal.style.display = "none"; 
}

// cambiar para dirigir al registro
acceptBtn.onclick = function() {
    window.location.href = "registro.html"; // cambiar esto!!
}



window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}
