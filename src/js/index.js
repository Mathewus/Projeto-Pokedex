

const itemsPokemon = document.querySelectorAll(".pokemon-item")

itemsPokemon.forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth < 460) {

            window.scrollTo({ top: 0, behavior: "smooth" });

        }
        const itemAtivo = document.querySelector(".selecionado");
        itemAtivo.classList.remove("selecionado");

        const cartaoAtivo = document.querySelector(".ativo");
        cartaoAtivo.classList.remove("ativo");

        const idItem = item.attributes.id.value
        const idCartao = `cartao-${idItem}`
        const cartaoPokemon = document.getElementById(idCartao);

        item.classList.add("selecionado");
        cartaoPokemon.classList.add("ativo");

    })

})
