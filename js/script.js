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