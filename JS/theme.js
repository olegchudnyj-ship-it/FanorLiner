// получение элементов из html и сохраннение их в переменные
const themebutton = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-link");

let savedTheme = localStorage.getItem("theme");
// если в памяти нет сохранненной темы (первый раз на сайте) - то по умолчанию поставить светлую тему   
if(savedTheme === null){
    savedTheme = "white";
}

function applyTheme(theme){
    if(theme === "dark"){

    
        // что произойдет в случае есл переключаемся на тему темную
    // меняем содержимое и параметры элементов html и <button> и <link>
    themeLink.setAttribute("href", "css/main-white.css");
    themeButton.textContent = "☀️";
}else{
    themeLink.setAttribute("href", "css/main-dark.css");
    themeButton.textContent = "🌙";
}
}
// Вызов функции для того чтобы применить тему сайта из сохранненной темы выбранной пользоваптелем 

applyTheme(savedTheme)

// тригер при нажатии наи кнопку 
themebutton.addEventListener("click",function(){
    let currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){
    localStorage.setItem("theme", "white");
    applyTheme("white");
}else{
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
}


}
 );
















