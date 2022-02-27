//o problema do menu sumir persiste
let menu = document.getElementById("menu");
function mostrarMenu(){
    if(menu.style.display !="flex"){
    menu.style.display = "flex"
    }else{
    menu.style.display = "none"
    }}

//tentativa de codar a <div class="botao-search"> como toggle de campo de buscar
//quando apliquei essa máscara de CSS não consegui resolver graficamente: https://www.w3schools.com/howto/howto_css_search_button.asp
let example = document.getElementById("example");
function mostrarCampoBusca(){
        if(example.style.display !="flex"){
        example.style.display = "flex"
        }else{
        example.style.display = "none"
        }}

let listaNoticias = [
    {
        titulo:"abc",
        descricao:"a1b1c1",
    },
    {
        titulo: "cde",
        descricao: "c1d1e1",

    },
]
function renderizarNoticias (){
    let espaco = document.getElementById("highlightPrincipal")
    let template = "";
    for (let index = 0; index < array.length; index++) {
        const noticias = listaNoticias[index];
        
        template += ` <div class="banner1">
        <img src="Imagens/image-1.png" style="width: 600px; height: 300px;">
        <h3>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>
    </div>`
    }
    espaco.innerHTML = template;
}