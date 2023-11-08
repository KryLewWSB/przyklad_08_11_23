var lista = document.getElementById("lista");
var osoby = ["Anna", "Tomasz", "Antoni", "Monika", "Krzysztof"];

for (var val of osoby){
    lista.innerHTML += "<li>" + val + "</li>";
}
