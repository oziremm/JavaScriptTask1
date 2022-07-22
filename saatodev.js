
let userName = prompt("Kullanıcı Adinizi Giriniz:") //Kullanıcıdan bilgi istedik.
let title = document.querySelector("#title")// Verilen bilgileri çağırdık.
title.innerHTML = userName

//Aşağıda saat, dakika, saniye, gün cinsinden verileri ekledik ve ekrana yazılmasını sağladık.
function dates () {
    let anlik = new Date();
    let hour = anlik.getHours();
    let minute = anlik.getMinutes();
    let second = anlik.getSeconds();
    var day = new Date();
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let importto = document.querySelector("#myClock")
    importto.innerHTML = hour + ":" + minute + ":" + second + " " + days [day.getDay()];
}
let final = setInterval(dates,10); 