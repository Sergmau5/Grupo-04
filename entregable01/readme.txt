Integrantes:

Julian García
Andres* 
Sergio Lozano

contenido:

1.html5 home
2.html5 registro
3.html5 consulta

Se creo el repositorio https://github.com/Sergmau5/Grupo-04/tree/main/entregable01 para el trabajo en conjunto de esta tarea, nos dividimos por pantallas y linkeamos los diferentes botones y formularios.

-------- home ------------

Este código crea una página de inicio básica para una veterinaria, con una estructura clara y una experiencia de usuario intuitiva.

Título: Se muestra en la pestaña del navegador.
CSS: Enlaza un archivo de estilos externo (stylehome.css) que controla la apariencia de la página.
Cuerpo del Documento (<body>):

Encabezado (<header>):
Contiene el logo, el título y el menú de navegación.

Logo y Título: La sección .logo incluye el logo y un título principal de bienvenida.
Navegación: El menú permite navegar entre diferentes secciones, con enlaces para Inicio, Consulta, e Ingresar. La clase btn-ingresar se usa en el enlace de Ingresar para darle un estilo único en el CSS.
Sección de Bienvenida o Hero (<section class="hero">):
Muestra un mensaje de bienvenida para captar la atención del usuario.

Contiene un título de bienvenida, un breve mensaje descriptivo y un botón con la opción de explorar los servicios.
Sección de Servicios (<section class="features">):
Presenta una lista de servicios ofrecidos.

Incluye un título principal ("Nuestros Servicios") y una lista de elementos (feature-item), cada uno con un nombre de servicio y una breve descripción.
Pie de Página (<footer>):
Contiene información de derechos de autor y enlaces a la política de privacidad y los términos de servicio.

Se incluyen dos enlaces básicos para políticas y términos que suelen ser obligatorios en sitios web.
Modal de Registro (<div id="myModal" class="modal">):
Es una ventana emergente que redirige al usuario a una página de registro.

Incluye una imagen de fondo, un título, y dos botones: uno para aceptar y otro para cerrar el modal.

JavaScript Externo (<script src="../static/js/apphome.js">):
Al final del cuerpo, se carga un archivo JavaScript externo (apphome.js) que probablemente controla las funciones interactivas, como abrir o cerrar el modal al hacer clic en los botones.

----------- Registro --------------

Este código HTML crea una página de registro con un formulario para capturar información tanto del usuario como de su mascota.

Título: Aparece en la pestaña del navegador ("Form").
CSS: Vincula una hoja de estilos externa (styleregistro.css) que define el diseño de la página.
Fuentes de Google: Se cargan fuentes de Google (Poppins) que serán utilizadas en el diseño del formulario.
Cuerpo del Documento (<body>):

Contenedor Principal (<div class="main-container">):

Título:
Incluye un encabezado (Registrate a ti y a tu mascota) que da la bienvenida al formulario de registro.
Un subtítulo adicional invita a los usuarios a "conocer nuestros beneficios".
Formulario (<div class="form-container">):

El formulario se divide en dos columnas, una para los datos del usuario y otra para los datos de la mascota.

Columna 1: Datos del Usuario (<div class="column">):

Incluye tres entradas de datos (input-group):
Nombre: Permite ingresar el nombre del usuario.
Número de documento: Captura el número de identificación del usuario.
Teléfono de contacto: Captura el número de teléfono del usuario.
Cada campo está acompañado de un ícono relevante para facilitar la identificación visual.
Columna 2: Datos de la Mascota (<div class="column">):

Incluye tres entradas de datos (input-group):
Nombre: Permite ingresar el nombre de la mascota.
Edad: Permite especificar la edad de la mascota.
Raza: Permite ingresar la raza de la mascota.
Al igual que en la primera columna, cada campo está acompañado de un ícono específico para facilitar la identificación.
Contenedor de Botones (<div class="button-container">):

Botón Volver: Redirige al usuario a la página principal (home.html).
Botón Registrar: Ejecuta la función register_user() al hacer clic, posiblemente para procesar los datos ingresados en el formulario.

--------- consulta -----------

Este código HTML genera una página de consulta de usuario que permite al usuario ingresar información personal y de su mascota para realizar una consulta.

Encabezado HTML (<head>):

Estilos CSS Internos: Se incluyen estilos directamente en el <head>, los cuales configuran la apariencia de la página.
General:
body: Define la fuente, el color de fondo, y establece márgenes y padding.
.container: Crea un contenedor centrado para el formulario, con un fondo blanco, padding, bordes redondeados y una sombra para destacarlo visualmente.
Título (h1): Centra el encabezado principal.
Grupos de Formulario (.form-group):
Margen inferior para cada campo.
Estilos de Entrada: Se configuran el ancho, padding, borde y bordes redondeados de los campos de entrada de texto y selectores.
Botón de Enviar: Cambia el color de fondo a verde (#4CAF50) y hace que el texto sea blanco. También define un efecto hover que cambia el color de fondo al pasar el mouse.
Cuerpo del Documento (<body>):

Contenedor Principal (<div class="container">):
Título (<h1>Consulta de Usuario): Encabezado de la página para indicar que es una consulta de usuario.
Formulario (<form action="/submit" method="POST">):
Define el formulario con una acción para enviar los datos a una ruta /submit usando el método POST.

Campos del Formulario:

ID (numérico): Campo de entrada para un número identificador (id), obligatorio.
Nombre de la Persona: Campo de texto para el nombre del usuario, obligatorio.
Número de Contacto: Campo de entrada tipo teléfono, con validación de formato de 10 dígitos.
Nombre de la Mascota: Campo de texto para el nombre de la mascota, obligatorio.
Tipo de Mascota: Selector desplegable con opciones de "Perro", "Gato", "Ave", y "Otro", obligatorio.
Fecha de Ingreso de la Mascota: Campo de entrada tipo fecha, para seleccionar la fecha de ingreso de la mascota.
Botón de Enviar: Un botón para enviar los datos con el valor "Consultar".