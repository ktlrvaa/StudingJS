// Функция: создаёт новый параграф и добавляет его вниз тела HTML.

function createParagraph() {
    var para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

function showList(){
    var ulElement = document.createElement("ul");
    for(var i = 0; i<10; i++){
        var liElement = document.createElement("li");
        liElement.className = "li-class";
        liElement.textContent = i + " элемент";
        ulElement.appendChild(liElement);
    }
    document.body.appendChild(ulElement);
}

/*
  1. Получаем ссылки на все кнопки на странице в виде массива.
  2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.
 
  При нажатии любой кнопки, будет выполняться функция createParagraph().
*/

// var buttons = document.querySelectorAll("button");

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", createParagraph);
// }

var btn1 = document.getElementById("ClickMeBtn");
btn1.addEventListener("click", createParagraph);
var btn2 = document.getElementById("ShowListBtn");
btn2.addEventListener("click", showList);

