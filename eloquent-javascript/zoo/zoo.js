function hide(id) {
    document.getElementById(id).setAttribute('style', 'display: none')
}
function show(id) {
    document.getElementById(id).setAttribute('style', 'display: block')
}

function dark(id, box) {
    if (document.getElementById(box).checked) {
        document.getElementById(id).setAttribute('href', 'color2.css')
    } else {
        document.getElementById(id).setAttribute('href', 'color1.css')
    }
    console.log(document.getElementById(box).checked)
}