(function(){

    // находим кнпоки
    var buttons = $(".certificates_box .corus_button"),
        certBox = $(".cert_wrapper"),
        certItem = $(".cert_item"),
        position = 0, // позиция блока
        width, // ширина блока
        maxWidth = certItem.width() * certItem.length,
        maxPosition,
        counter = 1;

    buttons.bind("click", changeSert);

    // описываем функцию
    function changeSert(){
        width = certItem.outerWidth(true);
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
            if ( counter <= certItem.length){position += width;}
            else if ( counter >= certItem.length ){
                position += 0;
                counter = certItem.length;
            }
            next();
        }
    }

    function next(){
        certBox.animate({left : "-" + position + "px"}, 200);
    }
    function back(){
        certBox.animate({left : "-" + position + "px"}, 200);
    }

})();