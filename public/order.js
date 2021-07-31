let articles = JSON.parse(localStorage.getItem('articles'));
console.log(articles);

let quantity = '';
let cost = '';
for (let i = 0; i < articles.length ; i++) {
    quantity = articles[i].quantite;
    cost = articles[i].prix;
    let fullcost = cost * quantity;
}

let idfullcost = document.querySelector('div #fullcost');
idfullcost.innerHTML = "Prix total : " + fullcost + " €" ;