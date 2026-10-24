/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let torneos = [];
let indiceEdicion = -1;
let torneosFiltrados = [];

/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {
    // 13. Obtener los valores de todos los campos con document.getElementById()
    let nombre = document.getElementById("txtNombre").value;
    let categoria = document.getElementById("categoria").value;
    let participantes = parseInt(document.getElementById("numParticipantes").value);
    let valorInscripcion = parseFloat(document.getElementById("numValor").value);
    let email = document.getElementById("txtEmail").value;

    const lblError = document.getElementById("mensajeError");
    const lblExito = document.getElementById("mensajeExito");

    lblError.textContent = '';
    lblExito.textContent = '';
    // 14. Validar que el nombre tenga al menos 4 caracteres
    if (nombre.length <= 4) {
        lblError.textContent = 'Error, el nombre debe tener al menos 4 caracteres';
        return;
    }

    // 15. Validar que se haya seleccionado una categoría
    if (categoria == '') {
        lblError.textContent = "Error, debe seleccionar una categoria para continuar";
        return;
    }

    // 16. Validar que los participantes sean un entero entre 1 y 100
    if (participantes < 1 || participantes > 100 || isNaN(participantes)) {
        lblError.textContent = "Error, numero de participantes debe ser entero de entre 1 y 100";
        return;
    }

    // 17. Validar que el valor de inscripción sea mayor que 0
    if (valorInscripcion <= 0 || isNaN(valorInscripcion)) {
        lblError.textContent = "Error, la inscripcion debe tener un valor mayor a 0";
        return;
    }

    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    if (email === '') {
        lblError.textContent = "Error, debe ingresar un correo obligatorio";
        return;
    }

    // Si alguna validación falla, mostrar mensajes de error y detener la ejecución

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    let recaudacion = (parseFloat(participantes) * valorInscripcion);

    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
    const nuevoTorneo = {
        nombre: nombre,
        categoria: categoria,
        participantes: participantes,
        valorInscripcion: valorInscripcion,
        email: email,
        recaudacion: recaudacion
    };

    torneos.push(nuevoTorneo);
    mostrarTorneos();
    limpiarFormulario();
    lblExito.textContent = "Registro de torneo EXITOSO!!!";
    generarTarjetas();

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
    const cuerpo = document.getElementById("cuerpoTabla")
    let contenido = '';


    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for
    for (let i = 0; i < torneos.length; i++) {
        let torneoActual = torneos[i];
        contenido += `
        <tr>
            <td>${torneoActual.nombre}</td>
            <td>${torneoActual.categoria}</td>
            <td>${torneoActual.participantes}</td>
            <td>${torneoActual.valorInscripcion.toFixed(2)}</td>
            <td>${torneoActual.email}</td>
            <td>${torneoActual.recaudacion.toFixed(2)}</td>
            <td><input type='button' value='ELIMINAR' onclick='eliminarTorneo(${i});' /><br>
            <input type='button' value='EDITAR' onclick='editarTorneo(${i});' />
            </td>
        </tr>
        `;
    }
    cuerpo.innerHTML = contenido;

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
    document.getElementById("formularioTorneos").reset();
}


//revisar
function editarTorneo(indice) {
    if (indice >= 0 && indice < torneos.length) {
        let torneo = torneos[indice];
        document.getElementById("txtNombre").value = torneo.nombre;
        document.getElementById("categoria").value = torneo.categoria;
        document.getElementById("numParticipantes").value = torneo.participantes;
        document.getElementById("numValor").value = torneo.valorInscripcion;
        document.getElementById("txtEmail").value = torneo.email;

        indiceEdicion = indice;
        document.getElementById("btnRegistrar").value = "ACTUALIZAR TORNEO";
        document.getElementById("btnRegistrar").onclick = function () {
            editarTorneo(indiceEdicion);
        };

        document.getElementById("mensajeError").textContent = '';
        document.getElementById("mensajeExito").textContent = '';

        /*  torneos[indiceEdicion].nombre = document.getElementById("txtNombre").value;
          torneos[indiceEdicion].categoria = document.getElementById("categoria").value;
          torneos[indiceEdicion].participantes = parseInt(document.getElementById("numParticipantes").value);
          torneos[indiceEdicion].valorInscripcion = parseFloat(document.getElementById("numValor").value);
          torneos[indiceEdicion].email = document.getElementById("txtEmail").value;
          torneos[indiceEdicion].recaudacion = torneos[indiceEdicion].participantes * torneos[indiceEdicion].valorInscripcion;
          mostrarTorneos();
          limpiarFormulario();
  
          
  */
        if (indiceEdicion === -1) {

            const nuevoTorneo = {
                nombre: nombre,
                categoria: categoria,
                participantes: participantes,
                valorInscripcion: valorInscripcion,
                email: email,
                recaudacion: recaudacion
            };
            torneos.push(nuevoTorneo);
        } else {

            torneos[indiceEdicion].nombre = nombre;
            torneos[indiceEdicion].categoria = categoria;
            torneos[indiceEdicion].participantes = participantes;
            torneos[indiceEdicion].valorInscripcion = valorInscripcion;
            torneos[indiceEdicion].email = email;
            torneos[indiceEdicion].recaudacion = recaudacion;


            indiceEdicion = -1;
            document.getElementById("btnRegistrar").value = "REGISTRAR TORNEO";
        }
        mostrarTorneos();
        limpiarFormulario();

    }
}



//ya
function eliminarTorneo(indice) {
    if (confirm("¿Está seguro de que desea eliminar este torneo?")) {
        torneos.splice(indice, 1);
        mostrarTorneos();
        generarTarjetas();
        actualizarEstadisticas();
        document.getElementById("mensajeExito").textContent = "Torneo eliminado exitosamente.";
    }
}
//ya
function generarTarjetas() {
    let contenedor = document.getElementById("contenedorTarjetas");
    if (!contenedor) {
        const seccionTabla = document.querySelector("body > div:last-of-type");
        contenedor = document.createElement("div");
        contenedor.id = "contenedorTarjetas";
        contenedor.style.display = "grid";
        contenedor.style.gridTemplateColumns = "repeat(auto-fill, minmax(240px, 1fr))";
        contenedor.style.gap = "1rem";
        contenedor.style.marginBottom = "1.5rem";
        seccionTabla.parentNode.insertBefore(contenedor, seccionTabla);
    }

    let contenidoCards = '';
    for (let i = 0; i < torneos.length; i++) {
        let t = torneos[i];
        contenidoCards += `
        <div class="tarjeta-torneo" style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.5)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <h4 style="margin-top: 0; color: var(--accent);">${t.nombre}</h4>
            <p style="margin: 0.25rem 0; font-size: 0.85rem;"><strong>Categoría:</strong> ${t.categoria}</p>
            <p style="margin: 0.25rem 0; font-size: 0.85rem;"><strong>Participantes:</strong> ${t.participantes}</p>
            <p style="margin: 0.25rem 0; font-size: 0.85rem;"><strong>Inscripción:</strong> $${t.valorInscripcion.toFixed(2)}</p>
            <p style="margin: 0.25rem 0; font-size: 0.85rem;"><strong>Recaudación:</strong> $${t.recaudacion.toFixed(2)}</p>
        </div>
        `;
    }
    contenedor.innerHTML = contenidoCards;
}






function actualizarEstadisticas() {
    let seccionEstadisticas = document.getElementById("seccionEstadisticas");
    if (!seccionEstadisticas) {
        const seccionTabla = document.querySelector("body > div:last-of-type");
        seccionEstadisticas = document.createElement("div");
        seccionEstadisticas.id = "seccionEstadisticas";
        seccionEstadisticas.style.marginBottom = "1.5rem";
        seccionEstadisticas.style.padding = "1.25rem";
        seccionEstadisticas.style.backgroundColor = "var(--bg-card)";
        seccionEstadisticas.style.borderRadius = "8px";
        seccionEstadisticas.style.border = "1px solid var(--border-color)";
        seccionTabla.parentNode.insertBefore(seccionEstadisticas, seccionTabla);
    }

    let totalTorneos = torneos.length;
    let totalParticipantes = 0;
    let recaudacionTotal = 0;

    for (let i = 0; i < torneos.length; i++) {
        totalParticipantes += torneos[i].participantes;
        recaudacionTotal += torneos[i].recaudacion;
    }

    seccionEstadisticas.innerHTML = `
        <h3 style="margin-top:0; color: var(--accent); font-size: 1.1rem;">📊 Estadísticas Generales</h3>
        <p style="margin: 0.25rem 0;"><strong>Total de Torneos:</strong> ${totalTorneos}</p>
        <p style="margin: 0.25rem 0;"><strong>Total de Participantes:</strong> ${totalParticipantes}</p>
        <p style="margin: 0.25rem 0;"><strong>Recaudación Total Estimada:</strong> $${recaudacionTotal.toFixed(2)}</p>
    `;
}




