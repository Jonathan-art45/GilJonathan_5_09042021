let parsedUrl = new URL(window.location.href);
const id = parsedUrl.searchParams.get("id");
console.log(window.location.href);
console.log(parsedUrl);
console.log(parsedUrl.searchParams.get("id"));
let price = '';
let addbasket = '';
let name = '';
let json = '';
let object = '';
let contentobject = '';


fetch("http://localhost:3000/api/teddies/" + id)
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
        console.log(value);
        let section = document.getElementById("sectioncards");
        let product = `
        <article>
            <figure class="placeFigure">
                <img class="imgCustom" src="${value.imageUrl}" alt="Ours Teddy en peluche"/>
                <figcaption class="figcaptionCustomProduct">
                    <h2>Nom:</h2>
                    <p id="name">${value.name}</p>
                    <h2>Description :</h2>
                    <p>${value.description}</p>
                    <p id="price">Prix : ${value.price / 100}€</p>
                    <form method="POST">
                        <h2>Couleur</h2>
                        <label for="color">
                            <select name="color" id="color">
                            `;
        value.colors.forEach(color => {
            console.log(color);
            product += `<option value="color">${color}</option>`;
        });
        product += `    </select>
                        </label><br>
                        <button id="addbasket">Ajouter au panier</button>
                    </form>
                </figcaption>
            </figure>
        </article>
        `;
        section.innerHTML = product;
        price = value.price / 100;
    })
    .then(function (e) {
        console.log(e);
        addbasket = document.querySelector('#sectioncards button');
        addbasket.addEventListener('click', (e) => {
            e.preventDefault();


            contentobject = localStorage.getItem("articles");
            console.log(contentobject);
            if (contentobject !== "") {
                contentobject = JSON.parse(localStorage.getItem(("articles")));
                if (contentobject === null) {
                    contentobject = [];
                }
            }

            if (contentobject.some(articles => articles.id === id)) {

                // id correspondant dans le panier
                contentobject = contentobject.map(article => {
                    if (article.id === id) {
                        article.quantity += 1;
                    }
                    return article;
                });

            } else {
                object = {
                    id: id,
                    quantity: 1
                };
                contentobject.push(object);
            }
            localStorage.setItem("articles", JSON.stringify(contentobject));
        })

    })