
/* 3. Modifique o formulário de "Estou Interessado" em https://testes.autoforce.com.br/autoforce-ford/novos/territory */
let formulario = document.querySelector("#conversion-from-new-model .form-conversion__body fieldset");
let arrayModelos = [
    {
        "value":"SUV"
    },
    {
        "value":"Senda"
    },
    {
        "value":"Hatch"
    },
    {
        "value":"Pickup"
    }
];

let formGroupSelect = document.createElement("div");
formGroupSelect.classList.add("form-group");

let modelos = document.createElement("div");
modelos.classList.add("modelos");
setAttributes(modelos, {"style":"height:50px"});

let selectModelo = document.createElement("select");
selectModelo.classList.add("select-modelo");
selectModelo.style.display = "none";
setAttributes(selectModelo, {"name":"Modelos"});     

for(var i = 0; i < arrayModelos.length; i++){
    let optionModelo = document.createElement("option");
    optionModelo.innerHTML = arrayModelos[i].value;
    /*if(i == 0){
        optionModelo.setAttribute("selected", "selected");
    }*/
    setAttributes(optionModelo, {"value":arrayModelos[i].value});
    selectModelo.appendChild(optionModelo)
}

selectValueShow = document.createElement("div");
selectValueShow.classList.add("form-control", "choices__input");
setAttributes(selectValueShow, {"style":"margin:0;padding-left:.75rem;padding-right:.75rem;border-radius: .25rem;"});

selectvalueLink = document.createElement("button");
setAttributes(selectvalueLink, {"style":"display: flex;height: 100%;align-items: center;justify-content: space-between;background: none;border: none;width: 100%;"});

spanValue = document.createElement("span");
spanValue.classList.add("title-modelo");
spanValue.innerHTML = selectModelo.value;

iconToggle = document.createElement("i");

iconToggle.innerHTML = "<svg width='14px' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' class='svg-inline--fa fa-chevron-down fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path></svg>";

dropdown = document.createElement("div");
dropdown.classList.add("dropdown-marcas");
setAttributes(dropdown, {"style":"margin-top: 5px;width: 282.48px;background: white;position: absolute;z-index:99;border-radius: 0 0 .25rem .25rem"});
dropdown.style.display = 'none';

inputDorpdown = document.createElement("input");
setAttributes(inputDorpdown, {"type":"name", "style":"width: 100%;height: 50px;border: none;border-bottom: 1px solid #efefef;padding:13px;font-size:17px", 'onkeyup':'listenModelos(true);'});

listDropdown = document.createElement("ul");
setAttributes(listDropdown, {"id":"itemsMarcas", "style":"list-style:none;padding-left:25px;margin-bottom:5px;max-height: 85px;overflow: auto"});

/* Eventos */
selectModelo.addEventListener('click', function(e){
    e.preventDefault();
    alert("alou")
});

selectvalueLink.addEventListener("click", function(e){
    e.preventDefault();
    toggle(dropdown);
});

/* Funções 
/* Funções */
function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

function createSelect(){
    dropdown.appendChild(inputDorpdown);
    dropdown.appendChild(listDropdown);
    selectvalueLink.appendChild(spanValue);
    selectvalueLink.appendChild(iconToggle);
    selectValueShow.appendChild(selectvalueLink);
    modelos.appendChild(selectModelo);
    modelos.appendChild(selectValueShow);
    modelos.appendChild(dropdown);
    formGroupSelect.appendChild(modelos);
    formulario.appendChild(formGroupSelect);
    listenModelos();
}

function toggle(element){
    let display = element.style.display;

    if(display == 'none'){
        element.style.display = 'block';
        iconToggle.setAttribute('style', 'transform:rotate(180deg);transition:.3s')

    }else{
        element.style.display = 'none';
        iconToggle.setAttribute('style', 'transform:rotate(0deg);transition:.3s')
    }
}

function listenModelos(search = false){
    $("#itemsMarcas").html('');

    for(var i = 0; i < arrayModelos.length; i++ ){
        let item = arrayModelos[i].value;
        let inputValue = document.querySelector('.dropdown-marcas input').value;

        if(search == true){
            let resultado = in_str(item,inputValue);

            if(resultado == true){
                montarLista(i)
            }
        }else{
            montarLista(i)
        }
    } 

    if($("#itemsMarcas li").length == 0){
        $("#itemsMarcas").html("<p style='font-size:19px;margin-bottom:0'>Nenhum resultado encontrado</p>")
    }
}

function montarLista(i){
    let itemMarca = document.createElement("li");
    let itemMarcaLink = document.createElement("a");
        
    if(i == 0){
        itemMarcaLink.classList.add("value-selected");
        var display = 'block';
    }else{
        var display = 'none'
    }

    if(i != arrayModelos.length - 1){
        setAttributes(itemMarca, {"style":"border-bottom:1px solid #efefef"});
    }

    itemMarcaLink.innerHTML = '<svg width="20px" style="margin-right: 10px;display:'+display+'"aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="green" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>' + arrayModelos[i].value;
    
    itemMarca.appendChild(itemMarcaLink);
    
    setAttributes(itemMarcaLink, {"data-value":arrayModelos[i].value, "href":"javascript:void(0)", "style":"color: black; display: flex; height: 45px; align-items: center;transition:.5s", "onmouseover":"effectOnOver($(this))", "onmouseout":"effectOnOut($(this))", "onclick":"updateValue(this, $(this))"});
    
    listDropdown.appendChild(itemMarca);
}

function effectOnOver(element){
    $(".value-selected").children('svg').css('display', 'none');

    element.css('padding-left', '20px').css('text-decoration', 'none');
    element.children('svg').css('display', 'block')
}

function effectOnOut(element){
    $(".value-selected").children('svg').css('display', 'block');

    if(element.attr('class') != "value-selected"){
        element.css('padding-left', '0')
        element.children('svg').css('display', 'none')
    }
}

function updateValue(value, valueJquery){
    $('.value-selected').removeClass('value-selected');

    selectModelo.value = value.getAttribute('data-value');
    spanValue.innerHTML = value.getAttribute('data-value');
    svg = value.children;

    valueJquery.children('svg').css('display', 'block');

    valueJquery.addClass('value-selected');

}

function in_str(string, value) {
    string = string.toLowerCase();
    value = value.toLowerCase();

    if (string.indexOf(value) != -1)
        return true;
    else
        return false;
}

/* Construindo Select */
createSelect();

/* Adicionando Textarea de Mensagem */
let formGroup = document.createElement("div");
formGroup.classList.add("form-group");

let textarea = document.createElement("textarea");
setAttributes(textarea, {"class":"form-control", "name":"message", "required":"required", "type":"text", "data-bouncer-target":"#invalid-message", "placeholder":"Mensagem"});

let textareaValidator = document.createElement("div");
setAttributes(textareaValidator, {"id":"invalid-message", "class":"invalid-feedback"});

formGroup.appendChild(textarea);
formGroup.appendChild(textareaValidator);

formulario.appendChild(formGroup)
