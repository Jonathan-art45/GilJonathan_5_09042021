let fname = document.querySelector('#firstName');
fname.addEventListener('change', function (){
    validName(this);
});

let validName = function (inputName) {
    let regName = /^[A-Z][a-z]+$/ ;

    let small = inputEmail.nextElementSibling;

    if (inputName){
        small.innerHTML = "Prenom valide";
    }else{
        small.innerHTML = "Prenom invalide";
    }
}

document.querySelector('#lastName');

document.querySelector('#domicile');

document.querySelector('#CP');

document.querySelector('#ville');

document.querySelector('#phoneNumber');

document.querySelector('#mail');

document.querySelector('#namecard');

document.querySelector('#numbercard');

document.querySelector('#dateMois');

document.querySelector('#dateAnnee');

document.querySelector('#key');

/*

const emailRegexp = '';
let valueEmail = 'contact@gilles.com';
if(emailRegexp.test(valueEmail)) {
    // regexp ok -> email ok
} else {
    // regexp pas ok -> email pas ok
 */
