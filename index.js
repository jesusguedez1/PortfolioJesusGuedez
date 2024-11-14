const widthHeader = window.matchMedia("(max-width: 1050px)");

const widthMatches = (e) => {
    const menuBurguer = document.querySelector('#DropDonw-burguer_896776');
    const closepMenuBurguer = document.querySelector('#dropdonw-closep_008213');
    const DropDonwMenu = document.querySelector('.ItemsContainerGlobal_371306');

    const deploy = () => {
        DropDonwMenu.style.display = 'flex';
        closepMenuBurguer.style.display = 'flex';
        menuBurguer.style.display = 'none';
    };

    const closep = () => {
        DropDonwMenu.style.display = 'none';
        closepMenuBurguer.style.display = 'none';
        menuBurguer.style.display = 'flex';
    };

    if (e.matches) {
        menuBurguer.addEventListener("click", deploy);
        closepMenuBurguer.addEventListener("click", closep);
        menuBurguer.style.display = 'flex';
        closepMenuBurguer.style.display = 'none';
        DropDonwMenu.style.display = 'none';
    } else {
        DropDonwMenu.style.display = ''; 
        closepMenuBurguer.style.display = 'none';
        menuBurguer.style.display = 'none'; 
        menuBurguer.removeEventListener("click", deploy);
        closepMenuBurguer.removeEventListener("click", closep);
    }
};

widthHeader.addEventListener("change", widthMatches);
widthMatches(widthHeader);



