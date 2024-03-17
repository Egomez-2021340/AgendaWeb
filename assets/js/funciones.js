const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location = './paginaPrincipal.html'
}

const cargarDatos = () => {
    let claves = Object.keys(db)

    for (clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(listadoTareas, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h2')
    let telefonoContacto = document.createElement('h2')
    let direccionContacto = document.createElement('h2')
    let imgDelete = document.createElement('img')

    nombreContacto.innerHTML = contacto.nombre
    telefonoContacto.innerHTML = contacto.telefono
    direccionContacto.innerHTML = contacto.direccion
    
    divContacto.classList.add('tarea')
    
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(direccionContacto)
    
    parentNode.appendChild(divContacto)
}
