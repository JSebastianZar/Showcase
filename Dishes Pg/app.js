const modal = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const menu = document.querySelectorAll(".menu-grid--item");


//recorre cada nodo con la clase menu-grid--item [para que?]
//No entiendo muy bien el código de abajo
menu.forEach(dish =>{
    dish.onclick = ()=>{
        for (let i = 0; i < menu.length; i++) {
            const element = menu[i];
            console.log(element);
            console.log("hi");

            if (element.ATTRIBUTE_NODE = "menu-grid--item") {
                //mostsrar la ventana modal
                modal.classList.add("show-modal");
            }

            
        }
        
    }
})


closeModal.addEventListener("click", ()=>{
    //cerrar la ventan modal
    modal.classList.remove("show-modal");
});

// console.log(menu);