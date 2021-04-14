
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
    if(i == 0){
        optionModelo.setAttribute("selected", "selected");
    }
    setAttributes(optionModelo, {"value":arrayModelos[i].value});
    selectModelo.appendChild(optionModelo)
}

selectValueShow = document.createElement("div");
selectValueShow.classList.add("form-control", "choices__input");
setAttributes(selectValueShow, {"style":"margin:0;padding-left:.75rem;padding-right:.75rem;border-radius: .25rem;"});

selectvalueLink = document.createElement("button");
setAttributes(selectvalueLink, {"style":"display: flex;height: 100%;align-items: center;justify-content: space-between;background: none;border: none;width: 100%;"});

spanValue = document.createElement("span");
spanValue.innerHTML = selectModelo.value;

iconToggle = document.createElement("i");

iconToggle.innerHTML = "<svg width='14px' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' class='svg-inline--fa fa-chevron-down fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path></svg>";

dropdown = document.createElement("div");
dropdown.classList.add("dropdown-marcas");
setAttributes(dropdown, {"style":"margin-top: 5px;width: 282.48px;background: white;position: absolute;z-index:99;border-radius: 0 0 .25rem .25rem"});
dropdown.style.display = 'none';

inputDorpdown = document.createElement("input");
setAttributes(inputDorpdown, {"type":"name", "style":"width: 100%;height: 50px;border: none;border-bottom: 1px solid;padding:13px;font-size:17px", 'onkeydown':'listenModelos(true);'});

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
    }else{
        element.style.display = 'none'
    }
}

function listenModelos(search=false){
    $("#itemsMarcas").html('');
    console.log('alou');
    
    for(var i = 0; i < arrayModelos.length; i++){
        if(search=true){
            let item = arrayModelos[i].value;
            if( item.indexOf($('.dropdown-marcas').value) != undefined){
                let itemMarca = document.createElement("li");
                let itemMarcaLink = document.createElement("a");
        
                itemMarcaLink.innerHTML = arrayModelos[i].value;
                itemMarca.appendChild(itemMarcaLink);
        
                if(i == 0){
                    itemMarcaLink.classList.add("selected");
                }
        
                if(i != arrayModelos.length - 1){
                    setAttributes(itemMarca, {"style":"border-bottom:1px solid"});
                }

                setAttributes(itemMarcaLink, {"data-value":arrayModelos[i].value, "href":"javscript:void(0)", "style":"color:black;display:flex;height: 45px;align-items: center"});
                listDropdown.appendChild(itemMarca);
            }
        }

        
    }

    
   
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
