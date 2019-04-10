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


//For Ajax
// var subBtn = document.querySelector('#btn');
//
// subBtn.addEventListener('click', function (e) {
//     e.preventDefault()
//     var xhr = new XMLHttpRequest();
//
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             alert(xhr.responseText)
//         }
//     };
//
//     xhr.open('GET', 'index.json');
//     xhr.send();
// })
//

