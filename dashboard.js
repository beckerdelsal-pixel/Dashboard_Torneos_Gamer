/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let torneos = [];

/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {
    // 13. Obtener los valores de todos los campos con document.getElementById()
    let nombre = document.getElementById("txtNombre").value;
    let categoria= document.getElementById("categoria").value;
    let participantes = parseInt(document.getElementById("numParticipantes").value);
    let valorInscripcion = parseFloat(document.getElementById("numValor").value);
    let emailOrganizador = document.getElementById("txtEmail")

    const lblError = document.getElementById("mensajeError");
    const lblExito = document.getElementById("mensajeExito");

    lblError.textContent ='';
    lblExito.textContent ='';
    // 14. Validar que el nombre tenga al menos 4 caracteres
    if(nombre.length <= 4){
        lblError.textContent = 'Error, el nombre debe tener al menos 4 caracteres';
        return;
    }

    // 15. Validar que se haya seleccionado una categoría
    if(categoria == ''){
        lblError.textContent= "Error, debe seleccionar una categoria para continuar";
        return;
    }

    // 16. Validar que los participantes sean un entero entre 1 y 100
    if(participantes <1 || participantes >100 || isNaN(participantes)){
        lblError.textContent = "Error, numero de participantes debe ser entero de entre 1 y 100";
        return;
    }

    // 17. Validar que el valor de inscripción sea mayor que 0
    if(valorInscripcion <= 0 || isNaN(valorInscripcion)){
        lblError.textContent = "Error, la inscripcion debe tener un valor mayor a 0";
        return;
    }

    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    if(email == ''){
        lblError.textContent = "Error, debe ingresar un correo obligatorio"
        return;
    }

    // Si alguna validación falla, mostrar mensajes de error y detener la ejecución

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    let recaudacion = participantes * valorInscripcion;

    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
    const nuevoTorneo = {
        nombre: nombre,
        categoria: categoria,
        participantes: participantes,
        valorInscripcion: valorInscripcion,
        email: email,
        recaudacionEstimada: recaudacion;
    };

    torneos.push(nuevoTorneo);
    mostrarTorneos();
    limpiarFormulario();
    lblExito.textContent = "Registro de torneo EXITOSO!!!";

    // 21. Agregar el objeto al arreglo con push()

    // 22. Llamar a mostrarTorneos() y limpiarFormulario()

    // 23. Mostrar un mensaje de registro exitoso
}

/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
function mostrarTorneos() {
    // 25. Crear una variable vacía para concatenar el HTML

    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for

    // 27. En cada vuelta, obtener el objeto actual y construir una fila de la tabla (<tr>...</tr>)

    // 28. Mostrar todos los datos y la recaudación calculada

    // 29. Insertar el HTML final en el cuerpo de la tabla sin duplicar filas (usando innerHTML)
}

/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */
function limpiarFormulario() {
    // 31. Vaciar los campos del formulario, restablecer la categoría y limpiar los mensajes de error
}
