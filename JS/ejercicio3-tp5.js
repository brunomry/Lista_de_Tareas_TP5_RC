const form = document.querySelector('form');
const btnAgregarTarea = document.getElementById('btnAgregarTarea');
const tabla = document.getElementById('table')
const cuerpoTabla = tabla.querySelector('tbody');

class Tarea{
  constructor(id, tarea, descripcion){
    this.id = id;
    this.tarea = tarea;
    this.descripcion = descripcion;
  }
}

objetoTarea = {
  id: "",
  nombreTarea: "",
  descripcion: ""
}

let contador = 0;

const cargarDatos = () => {
  contador++;
  objetoTarea.id = contador; 
  objetoTarea.nombreTarea = document.getElementById('tarea').value;
  objetoTarea.descripcion = document.getElementById('descripcion').value;
}

const validarDatos = () => {
  const {id,nombreTarea,descripcion} = objetoTarea;
  if(isNaN(nombreTarea) && isNaN(descripcion)){
    return new Tarea(id,nombreTarea,descripcion);
  }else{
    alert(`Uno o más datos no son válidos`);
  }
}

const insertarFila = (nuevaTarea) => {
  const nuevaFila = cuerpoTabla.insertRow();
  
  const celdaID = nuevaFila.insertCell(0);
  const celdaTarea = nuevaFila.insertCell(1);
  const celdaDescripcion = nuevaFila.insertCell(2);
  const celdaBtnEliminar = nuevaFila.insertCell(3);

  celdaID.textContent = nuevaTarea.id;
  celdaTarea.textContent = nuevaTarea.tarea;
  celdaDescripcion.textContent = nuevaTarea.descripcion;
  celdaBtnEliminar.innerHTML = `<button class="btn btn-danger rounded-3 fw-bold">Eliminar</button>`
}

const agregarTarea = (e) =>{
  e.preventDefault();
  cargarDatos();
  const nuevaTarea = validarDatos();

  if(nuevaTarea){
    insertarFila(nuevaTarea);
  }
  form.reset();
}

form.addEventListener('submit', agregarTarea);