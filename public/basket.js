const articles = JSON.parse(localStorage.getItem("articles"));
console.log(articles);
if (articles === null){
    document.getElementById("basketNull").innerHTML = `<p>Votre panier est vide.</p>`;
    let supp = document.getElementById("tableau");
    supp.style.display = "none";
}else {
    const insertTableau = document.getElementById('tableau');
    let priceT;
    let priceTotalFinal = 0;
    const fetchingTeddies = () => {
        var quantitePriceTotal = 0;
        articles.forEach(async article => {
            const response = (await fetch("http://localhost:3000/api/teddies/" + article.id));
            const teddie = await response.json();
            priceT = teddie.price * article.quantity;
            const id = document.createElement("tr");
            id.innerHTML = `<td>${teddie.name}</td><td>${teddie.price / 100}€</td><td>${article.quantity}</td><td>${priceT / 100}€</td><td class="center"><i class="fas fa-times"></i></td>`;
            insertTableau.appendChild(id);
            priceTotalFinal += priceT / 100;
            foot.innerHTML = `<td>Prix total : ${priceTotalFinal} €</td>`;
        });
    }

    const initBasket = () => {
        const title = document.createElement("caption");
        title.innerHTML = "Récapitulatif de votre commande :";
        title.style.marginBottom = "1rem";
        insertTableau.appendChild(title);
    }

    const foot = document.createElement("tfoot");
    insertTableau.appendChild(foot);

    initBasket();
    fetchingTeddies();


    const removeBasket = () => {

    }
    removeBasket();
}
