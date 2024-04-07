> [!IMPORTANT]
> Se creó este CRUD básico para que los estudiantes de Ingeniería de Software tengan una noción de cómo enviar un correo electrónico con un reporte utilizando Resend.

## CRUD con envio de reportes por correo electrónico 

#### Dependencias que se utilizaron

- [Dotenv](https://www.npmjs.com/package/dotenv#-documentation): Para cargar variables de entorno desde un archivo .env a process.env.
- [Express](https://expressjs.com/): Es un framework de Node.js que nos permite crear aplicaciones web.
- [Mongoose](https://mongoosejs.com/): Mongoose es una biblioteca de modelo de objetos MongoDB para Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): Es un middleware de registro de solicitudes HTTP para Node.js.
- [Nodemon](https://www.npmjs.com/package/nodemon): Es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación cuando se detectan cambios en el directorio.
- [Resend](https://resend.com/home): Es una plataforma de envío de correos electrónicos.

#### Cosas a tener en cuenta 💡

- El envio de correos electrónicos se realiza en el archivo email.js ubicado en la carpeta utils.
- Al crear un nuevo reporte en mi controlador, este llama a la función enviarCorreo() que se encuentra en el archivo email.js y le pasa por parametro la información del reporte.
- Esta función la pueden reutilizar las veces que quieran.