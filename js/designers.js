(function(){

    // находим кнпоки
    var buttons = $(".designers .corus_button"),
        desBox = $(".designers .designer_box"),
        desItem = $(".designers .des_item"),
        position = 0, // позиция блока
        width, // ширина блока
        maxWidth = desItem.width() * desItem.length,
        maxPosition,
        counter = 1;

    buttons.bind("click", changeSert);

    // описываем функцию
    function changeSert(e){
        width = desItem.outerWidth();
        maxPosition = maxWidth - width;
        if ($(this).hasClass("previous")){
            counter--;
            if (counter > 0){position -= width;}
            else if (counter <= 0 ){
                counter = 1;
            }
            back();
        }
        else if ($(this).hasClass("next")){
            counter++;
            if ( counter <= desItem.length){position += width;}
            else if ( counter >= desItem.length ){
                position += 0;
                counter = desItem.length;
            }
            next();
        }
    }

    function next(){
        desBox.animate({left : "-" + position + "px"}, 200);
    }
    function back(){
        desBox.animate({left : "-" + position + "px"}, 200);
    }

})();