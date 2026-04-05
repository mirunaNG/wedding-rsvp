# Wedding RSVP App

Aplicación de RSVP para la boda de Ioana y Fran.

## Configuración

1. Instala las dependencias: `npm install`

2. Configura Firebase:
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Firestore Database
   - Obtén las claves de configuración
   - Crea un archivo `.env.local` en la raíz del proyecto con:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Ejecuta el servidor de desarrollo: `npm run dev`

4. Para desplegar, usa Vercel: conecta tu repo a Vercel y despliega automáticamente.

## Funcionalidades

- Página de inicio con enlace a RSVP
- Formulario de RSVP que guarda en Firestore
- Página de confirmación
