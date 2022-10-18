
window.addEventListener("load", function () {
    const productNameField = document.querySelector("[name= name]");
    const descriptionNameField = document.querySelector("[name= descriptions]");
    const imageNameField = document.querySelector("[name= image]");
    const sizeNameField = document.querySelector("[name= size]");
    const priceNameField = document.querySelector("[name= price]");
    const stockNameField = document.querySelector("[name= stock]");
    
    

    const expresiones ={
        precio:/^\d{1,14}$/  //1 a 14 numeros.
    }
    
    const validateEmptyField = (message,event) => { 
        const field = event.target; //field es la etiqueta input
        const fieldValue = event.target.value
        if(fieldValue.trim().length === 0){ 
            field.classList.add("is-invalid");
            field.nextElementSibling.classList.add("text-danger");
            field.nextElementSibling.innerText = message; 
        } else if(fieldValue.trim().length <= 4){
            field.classList.add("is-invalid");
    
            field.nextElementSibling.classList.remove("text-danger");
            field.nextElementSibling.innerText = "";
        }
    }
    
    
    const validateLong = (number,message,event) => {
        const field = event.target;
        const fieldValue = event.target.value; 
        if(fieldValue.trim().length < number){ 
            field.classList.add("is-invalid");
            field.nextElementSibling.classList.add("text-danger");
            field.nextElementSibling.innerText = message; 
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
    
            field.nextElementSibling.classList.remove("text-danger");
            field.nextElementSibling.innerText = "";
        }
    }

    const extPermitidas = (message,event) => { 
        const field = event.target; //field es la etiqueta input
        const fieldValue = event.target.value
        if(!expresiones.precio.test(fieldValue)){ 
            field.nextElementSibling.classList.add("text-danger");
            field.nextElementSibling.innerText = message; 
        } else{
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
    
            field.nextElementSibling.classList.remove("text-danger");
            field.nextElementSibling.innerText = "";
        }
    }
    
    
    productNameField.addEventListener("blur", (event) => validateEmptyField("El nombre no puede estar vacio", event));
    descriptionNameField.addEventListener("blur", (event) => validateEmptyField("La descripción no puede estar vacia", event));
    sizeNameField.addEventListener("blur", (event) => validateEmptyField("El tamaño no puede estar vacio", event));
    priceNameField.addEventListener("blur", (event) => validateEmptyField("El precio no puede estar vacio", event));

    
    productNameField.addEventListener("input",(event) => validateLong(5,"El nombre debe tener al menos cinco caracteres", event));
    descriptionNameField.addEventListener("input",(event) => validateLong(20,"La descripción debe tener al menos veinte caracteres", event));


    priceNameField.addEventListener("input", (event) => extPermitidas("Debes introducir un valor numérico", event));
    stockNameField.addEventListener("input", (event) => extPermitidas("Debes introducir un valor numérico", event));
    
    imageNameField.addEventListener("change", (event) => {
        const field = event.target;
        const fileExt = event.target.files[0].name.split(".").pop().toLowerCase() ;  //toma el campo name y dividirlo cuanto encuentre un punto, con pop() saco la extension de la imagen y utilizo el toLowerCase() porque no sabemos si la extension venga en mayus o minus
        const aceptExt = ["jpg", "png", "gif", "jpeg"];
    
        if(!aceptExt.includes(fileExt)) {
            field.classList.add("is-invalid");
            field.nextElementSibling.classList.add("text-danger");
            field.nextElementSibling.innerText = "Las extensiones permitidas son .jpg, .png, .gif,.jpeg.";  
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
    
            field.nextElementSibling.classList.remove("text-danger");
            field.nextElementSibling.innerText = "";
        }
    
    });

    
    
});




    