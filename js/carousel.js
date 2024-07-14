//Captura cada carrossel da página.
document.querySelectorAll(".carrossel").forEach(carrosel => {
    //Captura cada um dos itens de cada carrossel que houver na página.
    const itens = carrosel.querySelectorAll(".carrossel_item");

    //Gera os botões do carrossel no html;
    const botoesHtml = Array.from(itens, () =>{
        return `<span class="carrossel_botao"></span>`;
    });

    //Cria a seção nav do carrossel puxando os botões do array acima.
    carrosel.insertAdjacentHTML("beforeend", `<div class = "carrossel_nav"> ${ botoesHtml.join("")}</div>`);

    //Captura os botões recém criados aqui no JS.
    const botoes = carrosel.querySelectorAll(".carrossel_botao");

    botoes.forEach((botao, i) => {
        //Sempre que o usuário clicar em um botão (...)
        botao.addEventListener("click", () => {
            //(...) Vamos desmarcar todas as imagens do carrossel, e (...)
            itens.forEach(item => item.classList.remove("carrossel_item_selecionado"));
            //(...) Vamos desmarcar todos os botões do carrossel.
            botoes.forEach(botao => botao.classList.remove("carrossel_botao_selecionado"));

            //Marca a imagem e o botão selecionados (adiciona a classe "selecionado" ao item)
            itens[i].classList.add("carrossel_item_selecionado");
            botao.classList.add("carrossel_botao_selecionado");
        });
    });
    //Marca primeira imagem por padrão)
    itens[0].classList.add("carrossel_item_selecionado");
    botoes[0].classList.add("carrossel_botao_selecionado");
});