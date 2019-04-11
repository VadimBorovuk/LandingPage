var button = document.querySelector('#nav__toggle');
var navList = document.querySelector('.nav-list');
var allLink = document.querySelectorAll('.nav__link');

button.addEventListener('click', function (e) {
    e.preventDefault();

    button.classList.toggle('active')
    navList.classList.toggle('active')
});


allLink.forEach(function (elem) {
    elem.addEventListener('click', function () {
        button.classList.remove('active')
        navList.classList.remove('active')
    })
});


//Validation

var btn = document.querySelector('#btn');



btn.addEventListener('click',function (e){

    var name = document.getElementById('name')
    var email = document.querySelector('#email');
    var pass = document.querySelector('#pass');

    if(name.value.length < 3){
        name.style.border = '3px solid red'
    }else{
        name.style.border = "1px solid #fff"
    }

    if(pass.value.length < 8){
        pass.style.border = '3px solid red'
    }else{
        pass.style.border = "1px solid #fff"
    }

})


//For Ajax
var subBtn = document.querySelector('.subscribe__btn');

subBtn.addEventListener('click', function (e) {
    e.preventDefault()
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText)
        }
    };

    xhr.open('GET', 'index.json');
    xhr.send();
})


