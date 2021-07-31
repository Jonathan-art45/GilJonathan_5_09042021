const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeM = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeM.addEventListener("click", close);

function show() {
    mainMenu.style.display = 'flex';
    openMenu.style.display = 'none';
    closeM.style.display = 'block';
    closeM.style.right = "0";
}

function close() {
    closeM.style.display = 'none';
    mainMenu.style.display = 'none';
    openMenu.style.display = 'flex';
}

/*
Faire un appel vers l'api
    fetch

   Avec les données récupéré, faire une boucle
   construire la carte en remplacant les valeurs
   injecter la carte dans le html de accueil
*/

