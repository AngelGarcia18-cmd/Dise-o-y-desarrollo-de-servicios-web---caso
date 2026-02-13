**API de autenticación - Node.js + MongoDB**

**Descripción del proyecto**
Este proyecto es una API REST de autenticación desarrollada con Node.js, Express y MongoDB Atlas que permite el registro y autenticación de usuarios mediante JSON Web Tokens (JWT). Incluye rutas protegidas y buenas prácticas de seguridad.

Permite a los usuarios:

• Registrarse
• Iniciar sesión
• Acceder a rutas protegidas mediante JWT

Incluye buenas prácticas de seguridaad como encriptación de contraseñas, uso de tokens y manejo de errores.
___________________________________________________________________________________________________________

**Tecnologías usadas**

• Node.js
• Express
• MongoDB Atlas
• Moongose
• bcrypt
• jsonwebtoken
• dotenv
____________________________________________________________________________________________________________

**Variables de entorno**

Crear un archivo `.env` en la raíz del proyecto:

`PORT=3000
MONGO_URI=mongodb+srv://angel_db_user:Angel200718@cluster0.tzjjbg4.mongodb.net/?appName=Cluster0
JWT_SECRET=super_clave_ultra_secreta_123`

**Cómo ejecutar el proyecto**

1. Instalar dependencia:

`npm install`

2. Ejecutar el servidor:

`npm run dev`

3. El servidor correrá en:

`http://localhost:3000`

**Endpoints**

• Registro

POST `/api/auth/register`

Body:

`{
    "nombre": "Ales",
    "email": "ales@gmail.com",
    "password": "67890"
}`

• Login

POST `/api/auth/login`

Body:

`{
    "email": "ales@gmail.com,
    "password": "67890"
}`

Respuesta:

`{
    "ok": true,
    "token": "JWT_TOKEN"
}`

• Ruta protegida

GET `/api/auth/perfil`

Header:

`Authorization: Bearer TOKEN`

**Seguridad implementada**

• Contraseñas hasheadas con bcrypt
• Validación de datos
• Uso de JWT
• Middleware de autenticación
• Manejo de errores HTTP
• Protección de variables de entorno
• No exposición de datos sensibles

**Pruebas realizadas**

Se realizaron pruebas con Postman:

• Registro exitoso
• Registro duplicado
• Login correcto
• Login incorrecto
• Acceso sin token
• Token inválido
• Token válido

**Autor**

Desarrollado por Ángel David García Jiménez
