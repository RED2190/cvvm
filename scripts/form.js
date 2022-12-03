var t_but = document.getElementById("t");
var w_but = document.getElementById("w");
var v_but = document.getElementById("v");
var vk_but = document.getElementById("vk");
var i_but = document.getElementById("i");
var N = document.getElementById("name_in");
var enter = document.getElementById("enter");
var enter2 = document.getElementsByClassName("enter");


var nic = document.getElementById("nickname");
var nick = document.getElementsByClassName("nickname");

var leftButton = document.getElementById("icon");
var RightButton = document.getElementById("icon2");
var sl = document.getElementsByClassName("sl");

sl[0].style.position = "relative";
sl[0].style.left = "0px";
var check = 0;


t_but.onclick = function(){
    nick[0].style.display = "block";
    nick[0].placeholder = "@CVVM_tg";
}
w_but.onclick = function(){
    nick[0].style.display = "block";
    nick[0].placeholder = "+7 123 456 78 89";
}
v_but.onclick = function(){
    nick[0].style.display = "block";
    nick[0].placeholder = "+7 123 456 78 89";
}
vk_but.onclick = function(){
    nick[0].style.display = "block";
    nick[0].placeholder = "Иван Иванов";
}
i_but.onclick = function(){
    nick[0].style.display = "block";
    nick[0].placeholder = "cvvm_spb";
}

leftButton.onclick = function(){
    if(check == 1)
    {
        sl[0].style.position = "relative";
        sl[0].style.left = "0px";
        sl[0].style.transition = "ease .6s";
        check--
    }
    else if(check == 2){
        sl[0].style.position = "relative";
        sl[0].style.left = "-200px";
        sl[0].style.transition = "ease .6s";
        check--
    }
}
RightButton.onclick = function(){

    if(check == 0)
    {
        sl[0].style.position = "relative";
        sl[0].style.left = "-200px";
        sl[0].style.transition = "ease .6s";
        check++
    }
    else if(check == 1){
        sl[0].style.position = "relative";
        sl[0].style.left = "-400px";
        sl[0].style.transition = "ease .6s";
        check++
    }
}


//Бургер меню
var menu = document.getElementsByTagName("nav");
var burger = document.getElementById("burger");
var line1 = document.getElementsByClassName("line1");
var line2 = document.getElementsByClassName("line2");
var line3 = document.getElementsByClassName("line3");
burger_check = 0;
burger.onclick = function(){
    if(burger_check == 0)
    {
        menu[0].style.right = "0";
        burger_check++;

        line1[0].style.transform = "translate(-5px, 10px) rotate(45deg) ";
        line2[0].style.opacity = "0";
        line3[0].style.transform = "translate(-5px, -8px) rotate(-45deg)";

        
    }
    else
    {
        menu[0].style.right = "-100%";
        burger_check--;

        line1[0].style.transform = "translate(0px, 0px) rotate(0deg) ";
        line2[0].style.opacity = "1";
        line3[0].style.transform = "translate(0px, 0px) rotate(0deg)";
    }
}

//Уведомления
var close_button = document.getElementById("close");
var push = document.getElementsByClassName("thanks");
var body = document.getElementsByTagName("main");

enter.onclick = function(){
    if(nic.value == "" || N.value == "")
    {
        alert("Упс! Проверьте, похоже, что вы ввели не все данные!");
    }
    else{
        push[0].style.visibility = "visible";
        push[0].style.top = "1400px";
        body[0].style.opacity = "0.5";
    }
}
close_button.onclick = function(){
    push[0].style.visibility = "hidden";
    push[0].style.top = "100px";
    body[0].style.opacity = "1";
}