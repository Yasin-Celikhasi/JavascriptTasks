let yourName = prompt("Lütfen Adinizi Girin:")

let myName = document.querySelector("#myName")
myName.innerHTML = `${yourName}`

function tarihSaat() {
    let zaman = new Date();
    const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"] 
    document.getElementById("myClock").innerHTML = `${zaman.getHours()}:${zaman.getMinutes()}:${zaman.getSeconds()} ${days[zaman.getDay()]}`
    //console.log(typeof(zaman))
    //console.log(zaman.length)   
}
setInterval(tarihSaat,1000)
