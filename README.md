HelloFormExpo_AiramCeballo
Una aplicación móvil simple desarrollada con Expo y React Native en TypeScript que saluda al usuario por su nombre. Incluye validaciones, estilos cuidados y una experiencia de usuario pulida.
📱 Descripción
Saludador Expo es una mini aplicación que permite al usuario:

Introducir su nombre en un campo de texto
Pulsar un botón para recibir un saludo personalizado
Ver mensajes de validación si el campo está vacío
Disfrutar de una interfaz moderna y responsive

La app implementa las mejores prácticas de desarrollo en React Native, incluyendo gestión de estado con hooks, estilos con StyleSheet, y componentes de UI optimizados para móviles.
🚀 Características implementadas
Funcionalidades básicas

✅ Captura de texto con TextInput
✅ Gestión de estado con useState
✅ Validación de campos vacíos
✅ Mensajes de saludo personalizados
✅ Estilos organizados con StyleSheet.create()
✅ Integración de SafeAreaView y StatusBar

Características extra (+3 pts)

✅ Botón deshabilitado cuando el campo está vacío
✅ Estilos condicionales para errores (mensaje en rojo + borde del input)
✅ Contador de caracteres (X / 20) con límite máximo
✅ Mejoras visuales con LinearGradient e iconos de @expo/vector-icons
✅ Vibración háptica al pulsar el botón con expo-haptics

🛠️ Tecnologías utilizadas

Expo SDK (~52 o superior)
React Native
TypeScript
expo-linear-gradient - Gradientes en el header
@expo/vector-icons - Iconos de usuario y saludo
expo-haptics - Feedback táctil
expo-status-bar - Barra de estado personalizada

📋 Requisitos previos

Node.js (v16 o superior)
npm o yarn
Expo Go instalado en tu dispositivo móvil (opcional)
Android Studio o Xcode para emuladores (opcional)

⚙️ Instalación y ejecución
1. Clonar el repositorio
bashgit clone https://github.com/Airam-28/HelloFormExpo_AiramCeballo.git
cd HelloFormExpo_AiramCeballo
2. Instalar dependencias
bashnpm install
3. Ejecutar la aplicación
bashnpm start
```

### 4. Opciones de visualización
Después de ejecutar `npm start`, puedes:
- Escanear el código QR con **Expo Go** en tu dispositivo móvil
- Presionar `a` para abrir en **emulador Android**
- Presionar `i` para abrir en **simulador iOS** (solo macOS)
- Presionar `w` para abrir en el **navegador web**

## 📸 Capturas de pantalla

### Estado inicial
_[Insertar captura de la pantalla inicial con el campo vacío]_

### Validación de error
_[Insertar captura mostrando el mensaje de error cuando el campo está vacío]_

### Saludo exitoso
_[Insertar captura con el mensaje de saludo personalizado]_

## 🎨 Estructura del proyecto
```
HelloFormExpo_AiramCeballo/
├── App.tsx                 # Componente principal con toda la lógica
├── app.json               # Configuración de Expo
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── assets/                # Imágenes e iconos
└── README.md              # Este archivo
