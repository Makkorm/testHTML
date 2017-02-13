(function(){

// находим нужыне кнопки
    var button = $(".cat_item_button div.cat_button");
// находим наши блоки в каталоге
    var box = $("#selected").find(".catalog_item");
    var counter = 0;

  //  alert(box.length)
// вешаем обработчики по клику
    button.click(function(){
        box = $("#selected").find(".catalog_item"); // обновляем данные о количестве блоков

        if ($(this).hasClass("next")){
            counter++;
            // делаем проверку на последний элемент
            if ( counter > box.length-1 ){
                counter -= 1; // останавливаем итерацию
            }
            else if (counter <= box.length-1 ){
                //   $(this).css("display","block");
                box.removeClass("show");
                box.css("display","none");
                box.eq(counter).fadeIn();
            }
            else if ( counter < 0){
                counter = 0;
            }
        }

        if ($(this).hasClass("previous")){
            if ( counter < 0){
                counter = 0;
            }
            else if ( counter > 0){
                box.css("display","none");
                counter--;
                box.eq(counter).fadeIn();
            }
            else if ( counter == 0){
                counter = 0;
            }
        }
    });

})();