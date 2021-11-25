let icerik = document.querySelector('#task')
let yeniicerik = document.querySelector('#list')
const todoList = ['3 Litre Su İç', 'Ödevleri Yap', 'En Az 3 Saat Kodlama Yap', 'Bisiklete bin', '50 Sayfa Kitap Oku']      // Sayfa ilk yüklendiğinde arrayden liste çektik..

todoList.forEach(element => {
    listItemGenerator(element);
});


 // Alert için dinamik yapı oluşturuldu.
function toastAlert(status) {
    var myAlert = document.querySelector(status);//select id of toast      
    var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
    bsAlert.show();//show it
}

function listItemGenerator(itemValue) {
    let liDom = document.createElement('li')

    liDom.innerHTML = itemValue
    yeniicerik.appendChild(liDom)

    let span = document.createElement('span')
    let text = document.createTextNode('x')
    span.className = 'close'
    span.appendChild(text)
    liDom.appendChild(span)
    icerik.value = ""

    span.onclick = function () {
        let liDom = this.parentElement
        liDom.style.display = 'none'
    }
}

//Toastlive Bildirimleri, input boş geliyorsa .error, ekleme yapılırsa .succces classı çalışacak
function newElement() {
    if (icerik.value == '') {
        toastAlert(".error");
    }
    else {
        listItemGenerator(icerik.value);
        toastAlert(".success");
    }
}

// İtem'ler yapıldıysa üstü çizilsin
yeniicerik.addEventListener('click', function (check) {
    if (check.target.tagName = 'li') {
        check.target.classList.toggle('checked')
    }
})

