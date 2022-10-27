

 let amtDepoimento = $('.depoimento-single p').length;
 let curIndex = 0;

 iniciarDepoimentos();
 navegarDepoimentos();

 function iniciarDepoimentos(){
     $('.depoimento-single p').hide();
     $('.depoimento-single p').eq(0).show();
 }

 function navegarDepoimentos(){
     $('[next]').click(function(){
          curIndex++;
          if(curIndex >= amtDepoimento)
             curIndex = 0;
         $('.depoimento-single p').hide();
         $('.depoimento-single p').eq(curIndex).show();
         
     })

     $('[prev]').click(function(){
         curIndex--;
          if(curIndex < 0)
             curIndex = amtDepoimento-1;
         $('.depoimento-single p').hide();
         $('.depoimento-single p').eq(curIndex).show();
     })
 }