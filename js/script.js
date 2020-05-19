window.addEventListener('load', start);

var ranges = null
var box = null
function start () {
    ranges = Array.from(document.querySelectorAll('.range'));
    box = document.querySelector('#box');
    for (var i = 0; i< ranges.length; i++) {
        ranges[i].addEventListener('change', change)
    }

    changeColorBox()

}

function change(event) {
    let selector = event.target.id.replace('range', 'text');
    document.querySelector(`#${selector}`).value = event.target.value
    changeColorBox()
}

function changeColorBox() {
   var values = ranges.map((element) => element.value).join(',')
   box.style.backgroundColor = `rgb(${values})`;
}