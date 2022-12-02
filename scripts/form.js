var t_but = document.getElementById("t");
var w_but = document.getElementById("w");
var v_but = document.getElementById("v");
var vk_but = document.getElementById("vk");
var i_but = document.getElementById("i");
var N = document.getElementById("name_in");
var enter = document.getElementById("enter");
var enter2 = document.getElementsByClassName("enter");
var thanks = document.getElementsByClassName("thanks");
var th = document.getElementsByClassName("container2");

var nic = document.getElementById("nickname");
var nick = document.getElementsByClassName("nickname");

var CloseButton = document.getElementById("close");
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
RightButton.onclick = function(){
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
enter.onclick = function(){
    if(nic.value == "" || N.value == "")
    {
        alert("Ошибка! Похоже, что вы ввели не все данные, проверьте правильность введенных данных и повторите попытку!");
    }
    else{
        thanks[0].style.display = "flex";
        th[0].style.top = "1500px";
        th[0].style.transition = ".9s";
    }
}
CloseButton.onclick = function(){
    th[0].style.top = "1000px";
    th[0].style.transition = ".9s";
    thanks[0].style.display = "none";
}
