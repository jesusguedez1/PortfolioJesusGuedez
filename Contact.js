let slider_container = document.querySelectorAll(".transformSlider");
let botunLigth = document.querySelectorAll(".pointSliderContet-Information_44445 button");

let index = 1;
function updateSlider(newIndex) {
    index = newIndex;
    let porcentaje = index * -100;

    slider_container.forEach(element => {
        element.style.transform = "translateX(" + porcentaje + "%)";
    });

    botunLigth.forEach((button, i) => {
        if (i === index) {
            button.style.backgroundColor = "#ff0000"; 
        } else {
            button.style.backgroundColor = "#727272"; 
        }
    });
}
setInterval(() => {
    index++;
    if (index >= slider_container.length) {
        index = 0;
    }
    updateSlider(index);
}, 20000);

botunLigth.forEach((button, i) => {
    button.addEventListener("click", () => {
        updateSlider(i); 
    });
});

const buttonSubmit = document.querySelector(".Submit");
const myNumber = "51973948044";

buttonSubmit.addEventListener("click", ()=>{
    const nameUser = document.querySelector("#NamePeople_856777").value.trim();
    const nameCompany = document.querySelector("#companyNameInput_4584448").value.trim();
    const numberPhone = document.querySelector("#numberPhone-input_554848").value.trim();
    const typeCompany = document.querySelector("#Selectheading").value.trim();
    const messageWhatsApp = document.querySelector("#textAreaInput_123123123").value.trim();

    const text = `Nombre: ${nameUser},
        Empresa: ${nameCompany},
        Tipo de empresa: ${typeCompany}
        ${messageWhatsApp}.
        Mi numero de contacto es: ${numberPhone}`;
        
        const linkWhatsApp = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;
        window.open(linkWhatsApp, "_blank");
        console.log("Enlace generado:", linkWhatsApp);
})

let menuBurguer = document.querySelector(".closepOpenButton_dropdonw_545848");
let dropdonwBurguer = document.querySelector("#DropDonw-burguer_896776").addEventListener("click", ()=>{
    menuBurguer.style.zIndex = "3";
});
let closepDropdonw = document.querySelector("#dropdonw-closep_008213").addEventListener("click", ()=>{
    menuBurguer.style.zIndex = "0";
})



