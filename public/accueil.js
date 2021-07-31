function teddies() {
    fetch("http://localhost:3000/api/teddies")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            console.log(value);
            let section = document.getElementById("sectionPaper");
            let cards = '';
            for (let i = 0; i < value.length; i++) {
                cards += `
                    <a id="cardsproduct" href="product.html?id=${value[i]._id}">
                        <article>
                            <figure class="hoverindex">
                                <img class="paperCustom" src="${value[i].imageUrl}" alt="Ours Teddy en peluche"/>
                                <figcaption class="figcaptionCustom">
                                    <p class="titlePaper">${value[i].name}</p>
                                </figcaption>
                            </figure>
                        </article>
                    </a>
                `;
            }
            section.innerHTML = cards;
        })
}

teddies();