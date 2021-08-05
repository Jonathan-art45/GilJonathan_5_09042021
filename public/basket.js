let articles = JSON.parse(localStorage.getItem("articles"));
console.log(articles);

if (articles === null || articles == 0){
    document.getElementById("basketNull").innerHTML = `<p>Votre panier est vide.</p>`;
    let supp = document.getElementById("tableau");
    supp.style.display = "none";

}else {
    document.getElementById("basketNull").style.display = "none";
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
            id.innerHTML = `<td>${teddie.name}</td><td>${teddie.price / 100}€</td><td>${article.quantity}</td><td>${priceT / 100}€</td><td class="center"><button class="removeArticle" type="button"><i class="fas fa-times "></i></button></td>`;
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

    const removeArt = () => {

        let removeArticle = document.getElementsByClassName("removeArticle");
        console.log(removeArticle);
        for (let i = 0; i < removeArticle.length; i++) {
            removeArticle[i].addEventListener("click", (e) => {
                let removeId = articles[i].id;
                console.log(removeId);
                articles = articles.filter(function (article){
                    if (article.id !== removeId)
                    return true
                    console.log(articles)
                });
                fetchingTeddies();
                console.log(articles);
                localStorage.setItem("articles", JSON.stringify(articles));
            })
        }
    }

    initBasket();
    fetchingTeddies();
    setTimeout(function(){
        removeArt()
    },1000);
}


//let articlesFilters = articles.filter(function (){})

