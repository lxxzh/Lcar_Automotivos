

let currentValue = 0;
let isDrag = false;
let preco_maximo = 90000000;
let preco_atual = 0;

$('.pointer-barra').mousedown(function(){
    isDrag = true;
})

$(document).mouseup(function(){
    isDrag = false;
    enableTextSelection();
})

$('.barra-preco').mousemove(function(e){
    if(isDrag){
        disableTextSelection();
        let elBase = $(this);
        let mouseX = e.pageX - elBase.offset().left;
        if(mouseX < 0)
            mouseX = 0;
        if(mouseX > elBase.width())
            mouseX = elBase.width();

        $('.pointer-barra').css('left',(mouseX-13)+'px');
        currentValue = (mouseX / elBase.width()) * 100;
        $('.barra-preco-fill').css('width',currentValue+'%');

        //TODO: Ajustar o formato do preço!
        preco_atual = (currentValue/100) * preco_maximo;
        preco_atual = formatarPreco(preco_atual);
        $('.preco_pesquisa').html('R$'+preco_atual);
    }
})

function formatarPreco(preco_atual){
    preco_atual = preco_atual.toFixed(2);
    preco_arr = preco_atual.split('.');

    let novo_preco = formatarTotal(preco_arr);

    return novo_preco;

}

function formatarTotal(preco_arr){

    if(preco_arr[0] < 1000){
        return preco_arr[0]+','+preco_arr[1];
    }else if(preco_arr[0] < 10000){
        return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+
        ','+preco_arr[1];
    }else{
        return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+
        ','+preco_arr[1];
    }

}

function disableTextSelection(){
      $("body").css("user-select","none");
}

function enableTextSelection(){
     $("body").css("user-select","auto");
}



$(function() {


    let imgShow = 3;
    let maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
    let curIndex = 0;
    
    initSlider();
    navigateSlider();
    clickSlider();
    
        function initSlider() {
            let amt = $('.mini-img-wraper').length * 100;
            let elScroll = $('.nav-galeria-wraper');
            let elSingle = $('.mini-img-wraper');
            elScroll.css('width',amt+'%');
            elSingle.css('width', 25.5%(4000/amt)+'%');
        }
    
        function navigateSlider() {
            $('.arrow-right-nav').click(function(){
                if (curIndex < maxIndex) {
                    curIndex++;
                    let ellOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                    $('.nav-galeria').animate({'scrollLeft':ellOff+'px'});
                }else{
                    /*alert("Voce está no final");*/
                }
            })
    
            $('.arrow-left-nav').click(function(){
                if (curIndex > 0) {
                    curIndex--;
                    let ellOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                    $('.nav-galeria').animate({'scrollLeft':ellOff+'px'});
                }else{
                    /*alert("Você está no começo")*/
                }
            })
        }
        function clickSlider() {
            $('.mini-img-wraper').click(function() {
                $('.mini-img-wraper').css({"border":"2px solid white"});
                $(this).css({"border":"7px solid #808080"});

                let img = $(this).children().css('background-image');
                $('.foto-destaque').css('background-image',img);
            })
        }

            
    
                
    })
