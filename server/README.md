# Backend del Proyecto de Gestión de Productos

Este es el backend de un proyecto de gestión de productos que permite la
creación, validación y almacenamiento de productos con imágenes. Está construido
con Node.js, Express y utiliza Multer para la gestión de archivos.

## Instalación

1. Clona el repositorio:

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del backend:

   ```sh
   cd server
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

## Scripts

- `npm run dev`: Inicia el servidor en modo desarrollo utilizando `nodemon`.

## Configuración

El servidor se configura para escuchar en el puerto definido en la variable de
entorno `PORT` o en el puerto `8080` por defecto.

## Endpoints

### Crear Producto

- **URL**: `/api/products`
- **Método**: `POST`
- **Middleware**:
  - `uploadImage('productImage')`: Maneja la subida de la imagen del producto.
  - `applyValidations(createProductSchema)`: Valida los datos del producto.
- **Controlador**: `createProductController`

### Ejemplo de Solicitud

```sh
curl -X POST http://localhost:8080/api/products \
  -F "name=Nombre del Producto" \
  -F "description=Descripción del Producto" \
  -F "price=100" \
  -F "productImage=@ruta/a/la/imagen.jpg"
```

### Dependencias

- **express**: Framework web para Node.js.
- **cors**: Middleware para habilitar CORS.
- **morgan**: Middleware para el registro de solicitudes HTTP.
- **multer**: Middleware para la gestión de archivos.
- **zod**: Biblioteca para la validación de esquemas.

### Desarrollo

Para inciar el servidor en modo desarrollo, ejecuta:

```bash
  npm run dev
```

Esto iniciará el servidor utilizando nodemon, que reiniciará automáticamente el
servidor cuando se detecten cambios en los archivos.
