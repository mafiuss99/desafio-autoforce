/* 1. Adicione um ícone para Youtube no header apontando para https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ */
let icons = document.querySelector(".header__networks-list");
let iconYouTube = document.createElement("i");
let linkYoutube = document.createElement("a");

iconYouTube.classList.add("icon", "icon-youtube-header", "icon--small", "icon--hover-youtube");
linkYoutube.setAttribute("href", "https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ");
linkYoutube.setAttribute("target", "_blank");

linkYoutube.appendChild(iconYouTube);

icons.appendChild(linkYoutube)