$(function(){
    $(".typer").each(function(index){
        let texto = $(this).text();
        $(this).text("");
        maquina(this, texto, 100, 0);
    });
});
   
function maquina(elemento, texto, intervalo, n){
    let i = 0;
    let $el = $(elemento);
    let timer = setInterval(function(){
        if(i < texto.length){
            $el.html(texto.substr(0, i++) + "_");
        } else {
            clearInterval(timer);
            $el.html(texto);
            if (--n != 0){
                setTimeout(function(){
                    maquina(elemento, texto, intervalo, n);
                }, 8000);
            }
        }
    }, intervalo);
}