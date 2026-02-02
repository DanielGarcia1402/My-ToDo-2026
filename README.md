📝 To Do Ionic - Angular
Una aplicación de gestión de tareas moderna, rápida y funcional construida con Ionic Framework, Angular y Capacitor. La app permite organizar deberes por categorías, filtrar tareas y mantiene los datos guardados localmente.

🚀 Características Principales
Persistencia de Datos: Uso de localStorage para que tus tareas no se borren al cerrar la app.

Interfaz Táctil Optimizada: Tarjetas grandes (ion-card) diseñadas para ser fáciles de tocar en dispositivos móviles.

Categorización Inteligente: Clasificación por Trabajo, Personal y Urgente con códigos de color dinámicos.

Filtros en Tiempo Real: Pipe personalizado para filtrar tareas por categoría.

Multiplataforma: Lista para ejecutarse en la Web y en Android.

🛠️ Tecnologías y Dependencias
Para construir este proyecto se utilizaron las siguientes herramientas:

Core Frameworks
Ionic CLI: Interfaz de línea de comandos para el desarrollo.

Angular: Framework base para la lógica y estructuración.

Capacitor: Para convertir la aplicación web en una app nativa de Android.

# Evidencias funcionamiento del aplicativo (Enlace a videos de evidencia)
Evidencia 1: https://drive.google.com/file/d/17qohVeLUCHiI3PwpNvHtrSQlqLqT3oz6/view?usp=sharing
Evidencia 2: https://drive.google.com/file/d/1XRwJ8x1dVMXlhQQJ7Aw_23IngPrBZ4zy/view?usp=sharing

# Comandos de Instalación (Dependencias)
Si vas a clonar este proyecto, ejecuta estos comandos para instalar todo lo necesario:
# Instalar dependencias de Node
npm install

# Instalar Ionic CLI de forma global (si no lo tienes)
npm install -g @ionic/cli

# Instalar Capacitor para Android
npm install @capacitor/core @capacitor/cli @capacitor/android

📱 Guía de Ejecución
1. Ejecución en el Navegador
Para probar la app rápidamente en tu computadora:

ionic serve

Comandos de Instalación (Dependencias)
Si vas a clonar este proyecto, ejecuta estos comandos para instalar todo lo necesario:

Bash

# Instalar dependencias de Node
npm install

# Instalar Ionic CLI de forma global (si no lo tienes)
npm install -g @ionic/cli

# Instalar Capacitor para Android
npm install @capacitor/core @capacitor/cli @capacitor/android
📱 Guía de Ejecución
1. Ejecución en el Navegador
Para probar la app rápidamente en tu computadora:

ionic serve

2. Ejecución en Android (Android Studio)
Para llevar la app a un emulador o celular real:

# 1. Compilar el proyecto web

ionic build

# 2. Sincronizar con la plataforma nativa
npx cap sync android

# 3. Abrir en Android Studio
npx cap open android

Dentro de Android Studio, espera a que Gradle termine de cargar y presiona el botón Run (Triángulo verde).
📁 Estructura del Proyecto
src/app/home: Contiene la lógica principal (home.page.ts), el diseño mejorado (home.page.html) y los estilos táctiles (home.page.scss).

src/app/features: Definición del modelo de datos Task.

src/app/pipes: Lógica del filtro de categorías.

android/: Carpeta nativa generada por Capacitor para el despliegue en móviles.

💡 Detalles Técnicos Implementados
UX: Implementación de stopPropagation() en botones de acción para evitar conflictos táctiles.

Rendimiento: Uso de trackByFn en los bucles *ngFor para una renderización de listas ultra rápida.

Iconografía: Uso de símbolos universales para garantizar compatibilidad visual en todas las versiones de Android.
