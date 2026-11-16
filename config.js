/*
  CONFIGURACIÓN DEL AULA — este es el único archivo que debes editar.
  Mantenlo en la misma carpeta (raíz) que index.html.

  PASO IMPORTANTE: después de implementar el script de Google (ver README.md),
  pega aquí la URL que termina en /exec.
*/
window.AULA_CONFIG = {
  // URL de la aplicación web de Google Apps Script (termina en /exec).
  // Vacía = "modo demostración": el sitio funciona pero no guarda nada en Drive.
  API_URL: "",

  // Carpeta de Drive donde está el APK y la imagen del celular.
  // El botón "Descargar aplicación APK" abre esta carpeta mientras el script no esté conectado;
  // ya conectado, descarga el APK más reciente directamente.
  APK_FOLDER_URL: "https://drive.google.com/drive/folders/1WArxgWQyJphmNd-3fnZG6iUed6OEovuR",

  // Carpeta donde llegan las tareas de los alumnos (acceso rápido en el panel docente).
  SUBMISSIONS_FOLDER_URL: "https://drive.google.com/drive/folders/16pwgFSuTzFqMfNjrVy7oX49egifq5Wki",

  // Carpeta donde se organizan las publicaciones del docente (acceso rápido en el panel docente).
  PUBLISHED_FOLDER_URL: "https://drive.google.com/drive/folders/1jp9SQA9uLIfRYzNqm6Mx-ixHQyDi-ABy",

  // Opcionales:
  // APK_URL: "https://…",          enlace directo al APK (si lo defines, tiene prioridad)
  // APP_IMAGE_URL: "app-screen.jpg", imagen del celular subida junto al sitio (tiene prioridad sobre Drive)
  // APP_IMAGE_DRIVE_ID: "…",       ID de un archivo de Drive como imagen de respaldo

  // Tamaño máximo por archivo, en MB (no superar 8).
  MAX_MB: 8
};
