/*
$(document).ready(function () {
    //selector 'boton' para la aparicion del MODAL BOX
    $('#btnBox').click(function () {
        $('#formResponse').css('display', 'block');
    });

    //selector 'boton' para ocultar el MODAL BOX
    $('#btnYes').click(function () {
        $('#formResponse').css('display', 'none');
    });
    $('#btnNo').click(function () {
        $('#formResponse').css('display', 'none');
    });
});
*/
const formResponse = document.getElementById('formResponse');
function showBox() {
    formResponse.style.display = 'block';
}
function hideBox() {
    formResponse.style.display = 'none';
}

document.getElementById('btnBox').addEventListener('click', showBox);
document.getElementById('btnYes').addEventListener('click', () => {
    formResponse.style.display = 'none';
});
document.getElementById('btnNo').addEventListener('click', hideBox);