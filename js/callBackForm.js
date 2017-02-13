(function(){

    var form = $(".callBack_form"),
        button = $(".callBack"),
        clos = $("#clos");


    button.bind("click", showForm);
    clos.bind("click", hideForm);

    function showForm(){
        form.show();
    }
    function hideForm(){
        form.fadeOut(200);
    }

})();