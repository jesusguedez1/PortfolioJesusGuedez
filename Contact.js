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
