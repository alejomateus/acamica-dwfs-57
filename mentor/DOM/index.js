let arrayContainers = ["1","2","6"];
// for (let i =0;i<arrayContainers.length;i++) {
    let idSelector = document.getElementById("1");
    // let classSelector = document.getElementsByClassName("background_red");
    // let querySelector = document.querySelector(".background_red");
    // let tagSelector = document.getElementsByTagName("div");
    // console.log(idSelector);
    // console.log(classSelector);
    // console.log(querySelector);
    // console.log(tagSelector);
    // console.log(idSelector.innerHTML);
    // idSelector.innerHTML= "<div><strong>Acamica</strong></div>";
    // idSelector.classList.remove("background_yellow");
    // idSelector.classList.add("background_blue");
    idSelector.className = "background_blue";
    console.log(idSelector.firstElementChild);
    console.log(idSelector.lastElementChild);
// }
