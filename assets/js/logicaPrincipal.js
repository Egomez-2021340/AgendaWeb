const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')
const listadoTareas = document.querySelector('.listado-tareas')
const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
    }

    guardarContacto(db, contacto)
}

cargarDatos()