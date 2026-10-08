// Cambiar de Rol (RF1.1)
function iniciarSesion(e) {
  e.preventDefault();
  var rol = $('#selectRol').val();
  var nombre = rol === 'Padre/Tutor' ? 'Padre de Familia (Matéo García)' : (rol === 'Profesor' ? 'Ing. Roberto M. (Docente)' : 'Administración General');
  $('#activeUser').text(nombre);
  $('#userRoleLabel').text(rol);
  $('#modalLogin').modal('hide');
  alert('Sesión iniciada correctamente con rol de: ' + rol);
}

// Ver Código de Proyecto (RF3.1, RF3.2)
function verCodigo(titulo, codigo) {
  $('#tituloModalCodigo').html('<i class="fas fa-code mr-2"></i> Prototipo: ' + titulo);
  $('#contenidoCodigo').text(codigo);
  $('#modalCodigo').modal('show');
}

// Generación / Descarga Interactiva de Recibos en PDF (RF4.1, RF4.2)
function descargarRecibo(folio, concepto, monto, fecha) {
  var reciboWindow = window.open('', '_blank');
  reciboWindow.document.write(`
    <html>
    <head>
      <title>Recibo ${folio} - Punk Reception</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
      <style>body { padding: 40px; font-family: sans-serif; }</style>
    </head>
    <body>
      <div class="card border-dark">
        <div class="card-header bg-dark text-white d-flex justify-content-between">
          <h4>PUNK RECEPTION - COMPROBANTE DE PAGO</h4>
          <h4>Folio: ${folio}</h4>
        </div>
        <div class="card-body">
          <p><strong>Academia de Robótica Punk Reception</strong></p>
          <p><strong>Alumno:</strong> Mateo García Pérez</p>
          <p><strong>Concepto:</strong> ${concepto}</p>
          <p><strong>Fecha de Pago:</strong> ${fecha}</p>
          <p><strong>Monto Pagado:</strong> ${monto}</p>
          <hr>
          <p class="text-success"><strong>Estatus: PAGADO Y COMPROBADO</strong></p>
          <button class="btn btn-primary no-print" onclick="window.print()">Imprimir o Guardar en PDF</button>
        </div>
      </div>
    </body>
    </html>
  `);
}

// Agregar nuevo evento al calendario (RF5.2)
function agregarEvento() {
  var evento = prompt("Ingresa el título del evento o fecha clave:");
  var hora = prompt("Ingresa el horario/fecha (Ej. 15:00 PM):");
  if (evento && hora) {
    $('#listaEventos').append(`
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${evento}</strong>
          <br><small class="text-muted">Nuevo evento programado</small>
        </div>
        <span class="badge badge-info badge-pill">${hora}</span>
      </li>
    `);
  }
}

// Funciones mock para registro de pagos y reportes
function nuevoReporte() {
  alert("Módulo Profesor (RF2.1): Formulario habilitado para redactar e ingresar calificaciones de lógica, mecánica y conducta.");
}
function subirEvidencia() {
  alert("Módulo Profesor (RF3.1): Permite adjuntar imágenes o código fuente del proyecto a la galería del estudiante.");
}
function registrarPago() {
  alert("Módulo Administrativo (RF4.1): Formulario habilitado para subir comprobantes o folios de colegiatura.");
}
function editarPerfilDocente() {
  alert("Módulo Docente/Admin (RF6.3): Permite actualizar el número telefónico y horarios de atención vinculados a WhatsApp.");
}