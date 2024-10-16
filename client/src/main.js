import './style.css';

const $app = document.querySelector('#app');

// Contenedor principal para centrar el formulario
const $container = document.createElement('div');
$container.className =
  'flex items-center justify-center min-h-screen bg-gray-100';

// Carta que contiene el formulario
const $card = document.createElement('div');
$card.className = 'bg-white p-6 rounded-lg shadow-lg w-full max-w-md';

// Formulario
const $form = document.createElement('form');
$form.className = 'space-y-4';

// Campo para el nombre del producto
const $nameInput = document.createElement('input');
$nameInput.name = 'name';
$nameInput.type = 'text';
$nameInput.placeholder = 'Nombre del producto';
$nameInput.className = 'w-full p-2 border border-gray-300 rounded-md';

// Campo para la descripción del producto
const $descriptionInput = document.createElement('textarea');
$descriptionInput.name = 'description';
$descriptionInput.placeholder = 'Descripción del producto';
$descriptionInput.className = 'w-full p-2 border border-gray-300 rounded-md';

// Campo para el precio del producto
const $priceInput = document.createElement('input');
$priceInput.name = 'price';
$priceInput.type = 'number';
$priceInput.placeholder = 'Precio del producto';
$priceInput.className = 'w-full p-2 border border-gray-300 rounded-md';

// Campo para la imagen del producto
const $input = document.createElement('input');
$input.name = 'productImage';
$input.type = 'file';
$input.accept = 'image/*';
$input.className = 'w-full p-2 border border-gray-300 rounded-md';

// Mostrar preview de la imagen (Opcional)
$input.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (readerEvent) => {
    let $img = document.querySelector('img');

    if (!$img) {
      $img = document.createElement('img');
      $img.className = 'w-64 h-auto mt-4';
    }

    $img.src = readerEvent.target.result;
    $container.appendChild($img);
  };

  reader.readAsDataURL(file);
});

const $button = document.createElement('button');
$button.textContent = 'Aceptar';
$button.className =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

// Elemento para mostrar mensajes
const $message = document.createElement('div');
$message.className = 'mt-4 text-center';

// Añadir campos al formulario
$form.appendChild($nameInput);
$form.appendChild($descriptionInput);
$form.appendChild($priceInput);
$form.appendChild($input);
$form.appendChild($button);

// Añadir formulario y mensaje a la carta
$card.appendChild($form);
$card.appendChild($message);

// Añadir carta al contenedor
$container.appendChild($card);

// Añadir contenedor a la aplicación
$app.appendChild($container);

$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData();

  const price = parseFloat($priceInput.value);
  $priceInput.value = price;

  // Convertir el campo price a número antes de agregarlo a FormData
  formData.append('name', $nameInput.value);
  formData.append('description', $descriptionInput.value);
  formData.append('price', $priceInput.value);
  formData.append('productImage', $input.files[0]);
  // console.log(typeof parseFloat($priceInput.value));

  try {
    const response = await fetch('http://localhost:8080/api/products/', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      $message.textContent = 'Producto creado exitosamente';
      $message.className = 'mt-4 text-center text-green-500';
    } else {
      const errorData = await response.json();
      $message.textContent = `Error: ${errorData.errors
        .map((err) => err.message)
        .join(', ')}`;
      $message.className = 'mt-4 text-center text-red-500';
    }
  } catch (error) {
    $message.textContent = 'Error interno del servidor';
    $message.className = 'mt-4 text-center text-red-500';
    console.error('Error:', error);
  }
});
