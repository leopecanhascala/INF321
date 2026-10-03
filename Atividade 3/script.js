var carrinho = new Map();
let count_carrinho = 0;

const bt_comprar_ps5 = document.querySelector("#bt-comprar-ps5");
const bt_comprar_xbox = document.querySelector("#bt-comprar-xbox");
const bt_comprar_wii = document.querySelector("#bt-comprar-wii");
const bt_pesquisar = document.querySelector(".botao-pesquisar");

const div_produtos = document.querySelector(".produtos");
const div_ps5 = document.querySelector("#ps5");
const div_xbox = document.querySelector("#xbox");
const div_wii = document.querySelector("#wii");
const div_mensagem_carrinho_vazio = document.querySelector("#mensagem-carrinho-vazio");

const form_pesquisar = document.querySelector("#form-pesquisa");
const campo_pesquisa = document.querySelector("#campo-pesquisa");

const texto_bt_carrinho = document.querySelector("#bt-carrinho");

const mensagem_carrinho = document.querySelector("#mensagem-carrinho");

const form_contato = document.querySelector("#form-contato");

const nome_contato = document.querySelector("#nome");
const email_contato = document.querySelector("#email");
const mensagem_contato = document.querySelector("#mensagem");
const div_erro_contato = document.querySelector("#div-erro");

// Funções para adicionar itens ao carrinho

bt_comprar_ps5.addEventListener("click", function() {
    
    if (bt_comprar_ps5.classList.contains("prod-adicionado") === true){
        count_carrinho = count_carrinho - 1;
        
        bt_comprar_ps5.textContent = "Comprar";
        bt_comprar_ps5.classList.remove("prod-adicionado");

        mensagem_carrinho.classList.add("mensagem-carrinho-remove");
        mensagem_carrinho.classList.remove("mensagem-carrinho-add");
        mensagem_carrinho.innerHTML = "Produto <strong>PlayStation 5</strong> removido do carrinho.";
    } else {
        carrinho.set("ps5", div_ps5);
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
        carrinho.set("xbox", div_xbox);
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
        carrinho.set("wii", div_wii);
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


// Realizar a pesquisa

form_pesquisar.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const valor_pesquisa = campo_pesquisa.value.toLowerCase().trim();
    
    if (valor_pesquisa === "playstation 5") {
        div_ps5.classList.remove("esconde");
        div_xbox.classList.add("esconde");
        div_wii.classList.add("esconde");
        div_mensagem_carrinho_vazio.classList.add("esconde");
    } else if (valor_pesquisa === "xbox series x") {
        div_xbox.classList.remove("esconde");
        div_ps5.classList.add("esconde");
        div_wii.classList.add("esconde");
        div_mensagem_carrinho_vazio.classList.add("esconde");
    } else if (valor_pesquisa === "nintendo wii") {
        div_wii.classList.remove("esconde");
        div_ps5.classList.add("esconde");
        div_xbox.classList.add("esconde");
        div_mensagem_carrinho_vazio.classList.add("esconde");
    } else if (valor_pesquisa === "") {
        div_mensagem_carrinho_vazio.classList.add("esconde");
        div_ps5.classList.remove("esconde");
        div_xbox.classList.remove("esconde");
        div_wii.classList.remove("esconde");
        div_mensagem_carrinho_vazio.classList.add("esconde");
    } else {
        div_ps5.classList.add("esconde");
        div_xbox.classList.add("esconde");
        div_wii.classList.add("esconde");
        div_mensagem_carrinho_vazio.classList.remove("esconde");
    }
});


// Verificar campos do formulário de contato

form_contato.addEventListener("submit", function(event) {

    nome_contato.classList.remove("campo-obrigatorio");
    email_contato.classList.remove("campo-obrigatorio");
    mensagem_contato.classList.remove("campo-obrigatorio");
    div_erro_contato.classList.add("esconde");

    if (nome_contato.value === "") {
        event.preventDefault();
        nome_contato.classList.add("campo-obrigatorio");
        div_erro_contato.classList.remove("esconde");
    }
    if (email_contato.value === "") {
        event.preventDefault();
        email_contato.classList.add("campo-obrigatorio");
        div_erro_contato.classList.remove("esconde");
    }
    if (mensagem_contato.value === "") {
        event.preventDefault();
        mensagem_contato.classList.add("campo-obrigatorio");
        div_erro_contato.classList.remove("esconde");
    }

});


// Parte de exibição do carrinho

carrinho.forEach(function (prod) { 
    carrinho.append(carrinho.values());
})