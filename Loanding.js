
window.onload = () =>{
    let taketimetoarrive = setTimeout(()=>{
        let spin = document.querySelector(".spinnerLoading-principalContainer");
        let body = document.querySelector(".container-Global_11111");
        if (spin && body) {
            spin.style.opacity = "0"; 
            setTimeout(() => {
                spin.style.display = "none"; 
                body.classList.add("show"); 
                
            }, 100); 
        } else {
            alert("No se encontraron datos");
        }
    },300)
};