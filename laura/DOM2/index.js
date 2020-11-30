let newItem = document.getElementById("headerMenu");
newItem.innerHTML += "<li>Item 5<li>"

let stronger = document.getElementById("strong");
stronger.style.fontWeight = "bold"

let interval = setInterval(intervalo, 5000);

function intervalo(){
    let image1 = document.getElementById("image1");
    image1.src = "https://www.40defiebre.com/wp-content/uploads/2015/10/imagenes.png";
}


let changePosition = document.getElementById("imageRight");
changePosition.style.order = 0
