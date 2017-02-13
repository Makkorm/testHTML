(function(){

    var tabs = $("nav.kitchen_catalog ul li"),
        box = $(".materials");

    // ставим значения по умолчанию
    box.css("display","none");
    box.eq(0).css("display","block");
    box.eq(0).attr("id","selected"); // что бы потом по этому id в catalog.js обработать смену блоков
    tabs.eq(0).addClass("active");

    // вешаем обработчики
   for ( i=0; i < tabs.length; i++){
       tabs[i].addEventListener("click", showTab, false);
   }

    function showTab(e){
        var index;

        tabs.removeClass("active");
        e.preventDefault();
        $(this).addClass("active");
        for ( i=0; i < tabs.length; i++){
            if ( tabs[i].className == "active"){
                index = i;
            }
        }
        box.removeAttr("id");
        box.css("display","none");
        box.eq(index).attr("id","selected");
        box.eq(index).fadeIn();
    }


})();