const insertTableau = document.getElementById('tableau');
const articles = JSON.parse(localStorage.getItem("articles"));
console.log(articles);
let priceT ;
const fetchingTeddies = () =>{
    articles.forEach(async article =>{
        const response = (await fetch("http://localhost:3000/api/teddies/" + article.id));
        const teddie = await response.json();
        priceT = teddie.price * article.quantity;
        const id = document.createElement("tr");
        id.innerHTML = `<td>${teddie.name}</td><td>${teddie.price/100}€</td><td>${article.quantity}</td><td>${priceT/100}€</td>`;
        insertTableau.appendChild(id);
    });
}
const initBasket = () =>{
    const title = document.createElement("caption");
    title.innerHTML = "Récapitulatif de votre commande :" ;
    insertTableau.appendChild(title);
}

const footBasket = () =>{
    const foot = document.createElement("tfoot");
    for (let i = 0; i < articles.length ; i++) {
    let quantite =+ articles.quantity;
    return quantite;
    }
    console.log(quantitee);
    foot.innerHTML = '' ;
    insertTableau.appendChild(foot);
};

initBasket();
fetchingTeddies();
footBasket();
