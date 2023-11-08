var wyslij = document.getElementById("wyslij");

wyslij.addEventListener("click", function (e){
    e.preventDefault();
    var imie = document.getElementById("imie").value;
    console.log(imie);
});
