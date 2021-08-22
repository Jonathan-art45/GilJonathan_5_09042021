function teddies() {
    fetch("http://localhost:3000/api/teddies")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            console.log(value);
            const section = document.getElementById("sectionPaper");
            for (let i = 0; i < value.length; i++) {
                section.innerHTML += `
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
        })
}

teddies();