// Obtener las referencias a los elementos del formulario y la lista
var categoryForm = document.getElementById('categoryForm');
var nombreInput = document.getElementById('nombre');
var categoriaList = document.getElementById('categoriaList');

// Obtener los datos del LocalStorage (si existen)
var categorias = JSON.parse(localStorage.getItem('categorias')) || [];

// Función para mostrar las categorías en la lista
function mostrarCategorias() {
  categoriaList.innerHTML = '';

  // Recorrer las categorías y crear los elementos de la lista
  categorias.forEach(function(categoria, index) {
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = categoria;

    var deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.addEventListener('click', function() {
      eliminarCategoria(index);
    });

    li.appendChild(deleteBtn);
    categoriaList.appendChild(li);
  });
}

// Función para agregar una categoría
function agregarCategoria() {
  var nombre = nombreInput.value;

  // Agregar la categoría al arreglo
  categorias.push(nombre);

  // Limpiar el campo del formulario
  nombreInput.value = '';

  // Mostrar las categorías actualizadas
  mostrarCategorias();

  // Guardar los datos en el LocalStorage
  guardarEnLocalStorage();
}

// Función para eliminar una categoría
function eliminarCategoria(index) {
  // Remover la categoría del arreglo
  categorias.splice(index, 1);

  // Mostrar las categorías actualizadas
  mostrarCategorias();

  // Guardar los datos en el LocalStorage
  guardarEnLocalStorage();
}

// Función para guardar los datos en el LocalStorage
function guardarEnLocalStorage() {
  localStorage.setItem('categorias', JSON.stringify(categorias));
}

// Manejar el evento de envío del formulario
categoryForm.addEventListener('submit', function(event) {
  event.preventDefault();
  agregarCategoria();
});

// Mostrar las categorías al cargar la página
mostrarCategorias();
