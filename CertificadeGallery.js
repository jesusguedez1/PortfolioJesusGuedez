let popUpBackground_4848 = document.querySelector(".popup-imageClass_2222");
let workCertificade_45848 = document.querySelectorAll(".divCertificadeWork_45465454");
let iconClosepX_4545441 = document.querySelector("#iconX_45465454");
let concontalH2_h2 = document.querySelector(".contalH2");
let concontal_H3_h3 = document.querySelector(".contalH3");
let concontal_P_p = document.querySelector(".contalP");
let identifier11 = document.querySelector("#IdwithTextContent_1");
let identifier22 = document.querySelector("#IdwithTextContent_2");
let identifier33 = document.querySelector("#IdwithTextContent_3");
let identifier44 = document.querySelector("#IdwithTextContent_4");


function displayCertificateData(company, certName, description) {
    concontalH2_h2.textContent = company;
    concontal_H3_h3.textContent = certName;
    concontal_P_p.textContent = description;
}
    workCertificade_45848.forEach((e) => {
        e.addEventListener('click', () => {
            popUpBackground_4848.style.display = "flex";
            
            let traer = e.querySelector(".imageShowEventClick_55").getAttribute("src");
            document.querySelector(".imageShowEventClick img").setAttribute("src", traer);
            document.body.classList.add('no-scroll');
        });
    }); 

identifier11.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(resp => resp.json())
        .then(data => {
            
            displayCertificateData(
                data.certificateGril[0].companyName,
                data.certificateGril[0].certificateName,
                data.certificateGril[0].description
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});

identifier22.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(resp => resp.json())
        .then(data => {
            displayCertificateData(
                data.certificateArrozGracias[0].companyName,
                data.certificateArrozGracias[0].certificateName,
                data.certificateArrozGracias[0].description
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
identifier33.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(resp => resp.json())
        .then(data => {
            displayCertificateData(
                data.certificateAndiamo[0].companyName,
                data.certificateAndiamo[0].certificateName,
                data.certificateAndiamo[0].description
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
identifier44.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(resp => resp.json())
        .then(data => {
            displayCertificateData(
                data.certificateParada860[0].companyName,
                data.certificateParada860[0].certificateName,
                data.certificateParada860[0].description
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});

iconClosepX_4545441.addEventListener('click', () => {
    popUpBackground_4848.style.display = "none";
    document.body.classList.remove('no-scroll');
    displayCertificateData("", "", "");
});

let studyCertificate_88095 = document.querySelectorAll(".divCertificadeStudies_45465454");
let popUpBackground_4848_2 = document.querySelector(".popup-imageClass_Tow2222_333");
let iconClosepX_4545441_2 = document.querySelector("#iconX_45465454_Tow2");
let concontalH2_h2_2 = document.querySelector(".contalH2_Tow2");
let concontal_H3_h3_2 = document.querySelector(".contalH3_Tow2");
let concontal_P_p_2 = document.querySelector(".contalP_Tow2"); 
let identifier22_1 = document.querySelector("#IdwithTextContent2_1");
let identifier22_2 = document.querySelector("#IdwithTextContent2_2");
let identifier22_3 = document.querySelector("#IdwithTextContent2_3");
let identifier22_4 = document.querySelector("#IdwithTextContent2_4");
let identiferAttributHref = document.querySelector(".attributeHrefForFetch");

function displayCertificateData_2(company2, certName2, description2,) {
    concontalH2_h2_2.textContent = company2;
    concontal_H3_h3_2.textContent = certName2;
    concontal_P_p_2.textContent = description2;
    
}

    studyCertificate_88095.forEach((e) => {
        e.addEventListener('click', () => {
            popUpBackground_4848_2.style.display = "flex";
        
            let traer = e.querySelector(".imageShowEventClick_22").getAttribute("src");
            document.querySelector(".imageShowEventClick_Tow2 img").setAttribute("src", traer);
            document.body.classList.add('no-scroll_Tow2');
    });
}); 
identifier22_1.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(res => res.json())
        .then(data2 => {
            
            displayCertificateData_2(
                data2.certificateHTML[0].companyName,
                data2.certificateHTML[0].certificateName,
                data2.certificateHTML[0].description,
                identiferAttributHref.setAttribute("href", 
                    data2.certificateHTML[0].url
                )
                
            );
            
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});

identifier22_2.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(res => res.json())
        .then(data2 => {
            displayCertificateData_2(
                data2.certificateCSS[0].companyName,
                data2.certificateCSS[0].certificateName,
                data2.certificateCSS[0].description,
                identiferAttributHref.setAttribute("href", 
                    data2.certificateCSS[0].url
                )
                
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
identifier22_3.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(res => res.json())
        .then(data2 => {
            displayCertificateData_2(
                data2.certificateJS[0].companyName,
                data2.certificateJS[0].certificateName,
                data2.certificateJS[0].description,
                identiferAttributHref.setAttribute("href", 
                    data2.certificateJS[0].url
                )
                
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
identifier22_4.addEventListener("click", () => {
    fetch('./JSON/certificate.json')
        .then(res => res.json())
        .then(data2 => {
            displayCertificateData_2(
                data2.certificateReact[0].companyName,
                data2.certificateReact[0].certificateName,
                data2.certificateReact[0].description,
                identiferAttributHref.setAttribute("href", 
                    data2.certificateReact[0].url
                )
                
            );
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});

iconClosepX_4545441_2.addEventListener('click', () => {
    popUpBackground_4848_2.style.display = "none";
    document.body.classList.remove('no-scroll_Tow2');
    displayCertificateData_2("", "", "");
});


    

