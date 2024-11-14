let galeleryShow = document.querySelector(".containerShowGallery");
const openGalleryShow = document.querySelectorAll(".photoContent");
const photoDisplay = document.querySelector(".PhotoOfContainerShowGallery");
const NameRestaurantApi1 = document.querySelector("#NameRestaurant_8988");
const subTitleRestaurantApi2 = document.querySelector("#subTitleDescription_8733125");
const paragraphDescription = document.querySelector("#paragraphDescrioption_445845");

let currentIndex = 0; 

const showImage = (index) => {
    const images = Array.from(openGalleryShow); 
    const src = images[index].getAttribute("src");
    photoDisplay.setAttribute("src", src);
};

openGalleryShow.forEach((EventShow, index) => {
    EventShow.addEventListener("click", () => {
        currentIndex = index; 
        galeleryShow.style.display = "flex";
        showImage(currentIndex); 
        document.body.classList.add("showGalleryAdd");
        
        const key = jsonDataKey[currentIndex];  
        if (DataGallery[key]) {
            const selectedData = DataGallery[key][0]; 
            NameRestaurantApi1.textContent = selectedData.NameRestaurant;
            subTitleRestaurantApi2.textContent = selectedData.Subtitle;
            paragraphDescription.textContent = selectedData.Description;
        } else {
            console.warn('Datos no encontrados para la clave:', key);
        }
    });
});

document.querySelector(".containerButtonClosepShow").addEventListener("click", () => {
    galeleryShow.style.display = "none";
    document.body.classList.remove("showGalleryAdd");
});

document.querySelector(".buttonBack").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + openGalleryShow.length) % openGalleryShow.length; 
    showImage(currentIndex);
    const key = jsonDataKey[currentIndex];
    if (DataGallery[key]) {
        const selectedData = DataGallery[key][0];
        NameRestaurantApi1.textContent = selectedData.NameRestaurant;
        subTitleRestaurantApi2.textContent = selectedData.Subtitle;
        paragraphDescription.textContent = selectedData.Description;
    }
});

document.querySelector(".buttonForward").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % openGalleryShow.length; 
    showImage(currentIndex);
    const key = jsonDataKey[currentIndex];  
    if (DataGallery[key]) {
        const selectedData = DataGallery[key][0];
        NameRestaurantApi1.textContent = selectedData.NameRestaurant;
        subTitleRestaurantApi2.textContent = selectedData.Subtitle;
        paragraphDescription.textContent = selectedData.Description;
    }
});  

let jsonDataKey = [
    "FotoCorvina",
    "SpaguettiConLomo",
    "LomoConChampiñones",
    "TartarAcevichado",
    "FotoArrozGracias",
    "ArrisotadoYpulpo",
    "Raviolis",
    "CarpaccioLomo",
    "TeamHanaq",
    "ArrozConPato",
    "BPM1",
    "BPM2",
    "TeamAndiamo",
    "Tiramisu",
    "CroncateDeManzana",
    "TeamHanaq2",
    "Gnocchi",
    "FetucciniYLomo"
];

let DataGallery = {}; 

fetch('./JSON/Context.json')
    .then(answerData => answerData.json())  
    .then(data => {
        DataGallery = data;  
    })
    .catch(error => console.error('Error al cargar los datos:', error));
