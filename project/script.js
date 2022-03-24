//alert("Hello JS");

//alert(nn);

function guess() {
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


guess();