
$(document).ready(function(){

    var index = 1;
    var i;
    var sliderBox = $("#slider"),
        img = $(".slider li"),
        controls = $(".control"),
        time = 10000;

// запускаем автоматическую прокрутку
    var start = setInterval(autoNext,time);

    sliderBox.find("li").hide().eq(0).show();
    controls.eq(0).addClass("active");

    function next(){
        img.fadeOut(500).eq(index).fadeIn(500);
        controls.removeClass("active").eq(index).addClass("active");
    }

    function autoNext(){
        if ( index == img.length ){
            index = 0;
        }
        next();
        index++;
    }
// инициализируем смену слайда по клику
    controls.click(function(e){
        for ( i=0; i < controls.length; i++){
            if (e.target == controls[i]){
                index = i;
            }
        }
        clearTimeout(start);
        autoNext();
        start = setInterval (autoNext, time);
    });

});
