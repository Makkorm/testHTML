(function(){

    var wrap = $(".des_description"),
        item = $(".des_description .form"),
        photo = $(".designers .des_item"),
        windowSize = $(window).width(),
        close = $(".des_description .close_form"),
        index;

   for (i=0; i<photo.length; i++){
       photo.bind("click", showItem);
   }
    close.bind("click", closeItem);

    function showItem(){
        if ( windowSize >= "768" ){
            $(this).addClass("active");
            wrap.fadeIn();
            item.hide();
            for (i=0; i<photo.length; i++){
                if (photo.eq(i).hasClass("active")){
                    index = i;
                }
            }
            item.eq(index).show();
        } else{
          return false;
        }
    }
    function closeItem(){
        wrap.fadeOut();
    }

})();