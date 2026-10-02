let carrinho = [];
let count_carrinho = 0;

const bt_comprar_ps5 = document.querySelector("#bt-comprar-ps5");
const bt_comprar_xbox = document.querySelector("#bt-comprar-xbox");
const bt_comprar_wii = document.querySelector("#bt-comprar-wii");
const bt_pesquisar = document.querySelector(".botao-pesquisar");

const form_pesquisar = document.querySelector("#form-pesquisa");

const texto_bt_carrinho = document.querySelector("#bt-carrinho");

const mensagem_carrinho = document.querySelector("#mensagem-carrinho");

bt_comprar_ps5.addEventListener("click", function() {
    
    if (bt_comprar_ps5.classList.contains("prod-adicionado") === true){
        count_carrinho = count_carrinho - 1;
        
        bt_comprar_ps5.textContent = "Comprar";
        bt_comprar_ps5.classList.remove("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-remove");
        mensagem_carrinho.classList.remove("mensagem-carrinho-add");
        mensagem_carrinho.innerHTML = "Produto <strong>PlayStation 5</strong> removido do carrinho.";
    } else {
        // carrinho[count_carrinho] = "#ps5";
        count_carrinho = count_carrinho + 1;
        
        bt_comprar_ps5.textContent = "Remover";
        bt_comprar_ps5.classList.add("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-add");
        mensagem_carrinho.classList.remove("mensagem-carrinho-remove");
        mensagem_carrinho.innerHTML = "Produto <strong>PlayStation 5</strong> adicionado ao carrinho!";
    }

    texto_bt_carrinho.textContent = "Carrinho (" + count_carrinho + ")";
    mensagem_carrinho.classList.remove("esconde");
})

bt_comprar_xbox.addEventListener("click", function() {
    
    if (bt_comprar_xbox.classList.contains("prod-adicionado") === true){
        count_carrinho = count_carrinho - 1;
        
        bt_comprar_xbox.textContent = "Comprar";
        bt_comprar_xbox.classList.remove("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-remove");
        mensagem_carrinho.classList.remove("mensagem-carrinho-add");
        mensagem_carrinho.innerHTML = "Produto <strong>Xbox Series X</strong> removido do carrinho.";
    } else {
        // carrinho[count_carrinho] = "#xbox";
        count_carrinho = count_carrinho + 1;
        
        bt_comprar_xbox.textContent = "Remover";
        bt_comprar_xbox.classList.add("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-add");
        mensagem_carrinho.classList.remove("mensagem-carrinho-remove");
        mensagem_carrinho.innerHTML = "Produto <strong>Xbox Series X</strong> adicionado ao carrinho!";
    }

    texto_bt_carrinho.textContent = "Carrinho (" + count_carrinho + ")";
    mensagem_carrinho.classList.remove("esconde");
})
bt_comprar_wii.addEventListener("click", function() {
    
    if (bt_comprar_wii.classList.contains("prod-adicionado") === true){
        count_carrinho = count_carrinho - 1;
        
        bt_comprar_wii.textContent = "Comprar";
        bt_comprar_wii.classList.remove("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-remove");
        mensagem_carrinho.classList.remove("mensagem-carrinho-add");
        mensagem_carrinho.innerHTML = "Produto <strong>Nintendo Wii</strong> removido do carrinho.";
    } else {
        // carrinho[count_carrinho] = "#wii";
        count_carrinho = count_carrinho + 1;
        
        bt_comprar_wii.textContent = "Remover";
        bt_comprar_wii.classList.add("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-add");
        mensagem_carrinho.classList.remove("mensagem-carrinho-remove");
        mensagem_carrinho.innerHTML = "Produto <strong>Nintendo Wii</strong> adicionado ao carrinho!";
    }

    texto_bt_carrinho.textContent = "Carrinho (" + count_carrinho + ")";
    mensagem_carrinho.classList.remove("esconde");
})

form_pesquisar.addEventListener("submit", function(event) {
    event.preventDefault();
});

