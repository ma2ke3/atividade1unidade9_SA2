let menu = document.getElementById("menu");
function mostrarMenu(){
    if(menu.style.display !="flex"){
    menu.style.display = "flex"
    }else{
    menu.style.display = "none"
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