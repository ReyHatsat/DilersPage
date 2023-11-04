// Ejemplo de uso
var miArray = ['diler', 'matinga', 'rule34', 'naranja'];

//var valorInput = document.getElementById('codes').value; // Obtén el valor del input text


$(document).ready(function () {
    $('#codes').on('input', function () {
        var valorInput = $(this).val();
        if (buscarCoincidencia(miArray, valorInput)) { screamers(valorInput)} //Compara los valores si son iguales al del arreglo da true y ejecuta la función
    });
});



function buscarCoincidencia(array, valor) {//Busca la coinxidencia entre 
    return array.some(item => item === valor);
}


function screamers(valorInput) {
    switch (valorInput) {
        case "diler":
            diler();
            break;
        case "matinga":
            matinga();
            break;
        case "rule34":
            ruletrescuatro();
            break;
    }
    clearInput();
}
/*-----------------Lista de easter eggs que va a tener en función con las palabras-----------------*/
function clearInput() { $("#codes").val("");}

function diler() {
    $(document).ready(function () {
        var nuevoHTML = '<img id="imgScrea" style="position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 9999;" src="/Assets/Img/Jeff_the_killer_jumpscare.jpg">';
        $('#screContainer').append(nuevoHTML);
    });
    setTimeout(() => {
        $('#screContainer').remove();
    }, "2000");
}

function matinga() { window.close(); }

function ruletrescuatro() {
    let bar = confirm('¿Es usted mayor a 18 años verdad?');
    if (bar) {
        alert("No no no, aquí todos somos masitas seiso")
    }
    else {
        alert("vuelva por donde vino entonces");
    }
}
/*--------------------------------------------------------------------------------------------------*/