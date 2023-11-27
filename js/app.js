const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function mostrarReloj() {
    const fecha = new Date();
    const fechaActual = document.querySelector('h3');
    const horario = document.querySelector('h2');
    const dia = fecha.getDay();
    const mes = fecha.getMonth();
    const nroDia = fecha.getDate();

    fechaActual.innerHTML = `${dias[dia]} ${nroDia} de ${meses[mes]} del ${fecha.getFullYear()}`

    if (fecha.getHours() >= 12) {
        if (fecha.getMinutes() < 10 && fecha.getSeconds() < 10) {
            horario.innerHTML = `${fecha.getHours()} : 0${fecha.getMinutes()} : 0${fecha.getSeconds()} PM`;
        } else if (fecha.getMinutes() < 10) {
            horario.innerHTML = `${fecha.getHours()} : 0${fecha.getMinutes()} : ${fecha.getSeconds()} PM`;
        } else if (fecha.getSeconds() < 10) {
            horario.innerHTML = `${fecha.getHours()} : ${fecha.getMinutes()} : 0${fecha.getSeconds()} PM`;
        } else {
            horario.innerHTML = `${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()} PM`;
        }
    } else {
        if (fecha.getMinutes() < 10 && fecha.getSeconds() < 10) {
            horario.innerHTML = `${fecha.getHours()} : 0${fecha.getMinutes()} : 0${fecha.getSeconds()} AM`;
        } else if (fecha.getMinutes() < 10) {
            horario.innerHTML = `${fecha.getHours()} : 0${fecha.getMinutes()} : ${fecha.getSeconds()} AM`;
        } else if (fecha.getSeconds() < 10) {
            horario.innerHTML = `${fecha.getHours()} : ${fecha.getMinutes()} : 0${fecha.getSeconds()} AM`;
        } else {
            horario.innerHTML = `${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()} AM`;
        }
    }
}

mostrarReloj();
setInterval(mostrarReloj, 1000)