//alert("Hello JS");

//alert(nn);

/*function guess() {
    var nn = prompt("Введите число");
    if (nn > 5) {
        alert("Число должно быть меньше");
        return guess();
    } else if (nn == 5) {
        return alert("Угадали");
        
    } else {
        alert("Число должно быть больше");
        return guess();
    }
}

guess(); */

function timer() {
    alert("Ты здесь слишком долго");
}
setTimeout(timer, 3000);

function valid(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-z0-9]{5, 100}/i;
    
    if (reg_name.test(name) == false){
        alert ("Ошибка в поле ФИО");
    }
    if (reg_password.test(password) == false){
        alert ("Ошибка в поле пароль");
    }
}

document.querySelector(".button").addEventListener("click", valid);


