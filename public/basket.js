const insertTableau = document.getElementById('tableau');
const articles = JSON.parse(localStorage.getItem("articles"));
console.log(articles);
let priceT ;
var quantite = 0;
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
const footBasket = () => {
    articles.forEach(async article => {
        const response = (await fetch("http://localhost:3000/api/teddies/" + article.id));
        const teddie = await response.json();
        priceT = teddie.price * article.quantity;
        quantite += priceT;
        console.log(quantite);
    });
    const foot = document.createElement("tfoot");
    foot.innerHTML = `<td>Prix total : ${quantite/100}</td>` ;
    insertTableau.appendChild(foot);
}

initBasket();
footBasket();
fetchingTeddies();
