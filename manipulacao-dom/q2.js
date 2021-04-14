/* 2. Modifique o comportamento do menu Whatsapp */
let buttonWhatsapp = document.querySelectorAll(".header__card-phones-items .header-mobile__whatsapp-link");
let tamanho = buttonWhatsapp.length;

for(var i = 0; i < tamanho; i++){
    let linkWhatsapp = buttonWhatsapp[i].getAttribute('data-link');
    buttonWhatsapp[i].setAttribute("onclick", "openLink('"+ linkWhatsapp +"')");
}

function openLink(linkWhatsapp){
    $('#header-conversion-form-whatsapp-modal').remove()
    window.open(linkWhatsapp); 
}

