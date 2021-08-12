let articles = JSON.parse(localStorage.getItem("articles"));
const insertTableau = document.getElementById('tableau');
const foot = document.createElement("tfoot");
console.log(articles);
const handleCart = () => {
    initBasket();
    if (articles === null || articles == 0) {
        document.getElementById("basketNull").innerHTML = `<p>Votre panier est vide.</p>`;
        let supp1 = document.getElementById("tableau");
        supp1.style.display = "none";
        let supp2 = document.querySelector("form .formIdentity");
        supp2.style.display = "none";

    } else {
        document.getElementById("basketNull").style.display = "none";
        fetchingTeddies();
        validInp();
    }
    insertTableau.appendChild(foot);
}


const fetchingTeddies = () => {
    var quantitePriceTotal = 0;
    let priceT;
    let priceTotalFinal = 0;
    localStorage.removeItem("total");
    articles.forEach(async article => {
        const response = (await fetch("http://localhost:3000/api/teddies/" + article.id));
        const teddie = await response.json();
        priceT = teddie.price * article.quantity;
        const id = document.createElement("tr");
        id.innerHTML = `<td>${teddie.name}</td><td>${teddie.price / 100}€</td><td>${article.quantity}</td><td>${priceT / 100}€</td><td class="center"><button id="${teddie._id}" class="removeArticle" type="button"><i class="fas fa-times "></i></button></td>`;
        insertTableau.appendChild(id);
        priceTotalFinal += priceT / 100;
        foot.innerHTML = `<td>Prix total : ${priceTotalFinal} €</td>`;
        localStorage.setItem("total", JSON.stringify(priceTotalFinal));
        document.getElementById(teddie._id).addEventListener("click", (e) => {
            articles = articles.filter((article) => article.id !== teddie._id);
            console.log(articles);
            localStorage.setItem("articles", JSON.stringify(articles));
            location.reload();
        })
    });
}

const initBasket = () => {
    const title = document.createElement("caption");
    title.innerHTML = "Récapitulatif de votre commande :";
    title.style.marginBottom = "1rem";
    insertTableau.appendChild(title);
}

const validInp = () => {
    const button = document.getElementById('buttonValid');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        let firstname = document.getElementById('firstName').value;
        let lastname = document.getElementById('lastName').value;
        let address = document.getElementById('domicile').value;
        let city = document.getElementById('ville').value;
        let email = document.getElementById('email').value;
        const products = Object.values(articles).map(item => {
            return item.id
        })
        const order = {                                         //Objet contact
            contact: {
                firstName: firstname,
                lastName: lastname,
                address: address,
                city: city,
                email: email
            },
            products: products                                 //array product_id
        };
        console.log(order);

//configuration méthode POST
        const myInit = {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        }

//Envoi de la commande au serveur
        fetch("http://localhost:3000/api/teddies/order", myInit)
            .catch(() => {
                alert(error)
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                localStorage.setItem("order", JSON.stringify(json));
                localStorage.removeItem('articles');
                window.location.href = 'order.html';
            });
    })
};
handleCart();
