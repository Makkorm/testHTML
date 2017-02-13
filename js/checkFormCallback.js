(function(){

    var form = document.forms["callbackForm"],
        name = form.elements["name"],
        phone = form.elements["phone"],
        sendInfo = form.elements["sendInfo"],
        newP =  document.createElement("p"),
        formData = {};

    sendInfo.addEventListener("click", checkForm, false);

    function checkForm(){
        var regPhone = /[+]\d{3}\s\d{2}\s\d{7}/;

        if ( name.value === ""){
            name.style.border = "1px solid red";
        }
        else if (name.value != ""){
            name.style.border = "1px solid green";
            formData.name = ""+name.value+"";
            name.value = "";
        }
        if ( phone.value === ""){
            phone.style.border = "1px solid red";
        }
        if ( phone.value !== ""){
            if (!regPhone.test(phone.value)){
                newP.innerHTML = "Телефон в формате +... .. ....... !";
                newP.style.color ="red";
                phone.parentNode.appendChild(newP);
            }
            else if (regPhone.test(phone.value)){
                phone.style.border = "1px solid green";
                newP.style.display = "none";
                formData.phone = ""+phone.value+"";
                phone.value = "";
            }
        }

    }

})();