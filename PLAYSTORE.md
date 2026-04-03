# Publicar en Google Play Store

## Requisitos Previos

1. **Cuenta de Google Play Developer** - $25 una vez (pago único)
   - https://play.google.com/console/u/0/developers
   
2. **Logo e iconos** - Requisitos:
   - Icono: 512x512 px (PNG)
   - Capturas de pantalla: Mínimo 2 (teléfono, tablet)
   - Video o imágenes promocionales (opcional)

3. **Política de privacidad** - URL pública (necesaria)

---

## Opción 1: PWABuilder (Recomendado - Gratis)

1. **Sube tu app a un hosting** (GitHub Pages, Netlify, etc.)
2. **Ve a https://www.pwabuilder.com/**
3. **Ingresa la URL de tu PWA**
4. **Descarga el paquete Android**
5. **Firma el APK** (necesitas keystore)
6. **Sube a Play Store**

### Firmar APK (necesario):
```bash
# Generar keystore (solo una vez)
keytool -genkey -v -keystore latinbien-release.keystore -alias latinbien -keyalg RSA -keysize 2048 -validity 10000

# Firmar APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore latinbien-release.keystore app-release.apk latinbien
```

---

## Opción 2: Ionic/Capacitor (Más control)

```bash
# Instalar Ionic CLI
npm install -g @ionic/cli

# Crear proyecto desde cero
ionic start latinbien-app blank

# Copiar tu código HTML/CSS/JS a /src
# Agregar plataforma Android
npx cap add android

# Sincronizar
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

---

## Opción 3: Flutter (Nativo, más trabajo)

Si quieres app 100% nativa, crear con Flutter:
- https://flutter.dev/docs/get-started/install
- Requiere aprender Dart

---

## Pasos para Publicar en Play Store

### 1. Crear app en Play Console
```
1. Ve a https://play.google.com/console/developers
2. Click "Crear app"
3. Selecciona idioma "Español"
4. Completa información básica
```

### 2. Configurar Ficha de Play Store

**Datos principales:**
- Nombre: Latinbien
- Descripción corta: "Compra tecnología a crédito"
- Descripción completa: (4000 caracteres máx)

**Categoría:**
- Aplicaciones > Compras

**Edad:** Todos (+3)

### 3. Subir Capturas y Recursos

```
📱 Teléfono:
   - screenshot_1.png (1080x1920)
   - screenshot_2.png
   
📱 Tablet (7"):
   - tablet_screenshot_1.png
   
🎨 Gráfico:
   - icon.png (512x512)
   - feature_graphic.png (1024x500)
```

### 4. Subir APK/AAB

```
1. Ve a "Producción" > "Crear versión"
2. Sube tu archivo .apk o .aab
3. Completa datos de clasificación (cuestionario)
4. Revisa contenido
5. Enviar a revisión
```

### 5. Esperar Aprobación

- Google revisa en 1-7 días
- Si hay problemas, te indican qué corregir

---

## Archivo de Política de Privacidad

Crea `privacidad.html` en tu hosting:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Política de Privacidad - Latinbien</title>
</head>
<body>
    <h1>Política de Privacidad</h1>
    <p>Latinbien App recopila:</p>
    <ul>
        <li>Datos de navegación para mejorar la experiencia</li>
        <li>Información del carrito de compras</li>
        <li>Contacto vía WhatsApp para consultas</li>
    </ul>
    <p>No compartimos datos con terceros.</p>
    <p>Contacto: info@latinbien.com</p>
</body>
</html>
```

---

## Costos

| Concepto | Costo |
|----------|-------|
| Cuenta Developer | $25 (una vez) |
| Dominio/Hosting | $5-15/mes |
| SSL (https) | Gratis (Let's Encrypt) |

---

## Alternativa: Play Store sin cuenta ($0)

Si no quieres pagar los $25, puedes:

1. **Amazon Appstore** - Gratis
2. **APK Pure / Aptoide** - Gratis (menor alcance)
3. **Distribuir APK directamente** - Solo confianza
4. **Progressive Web App** - Instalar desde el navegador (sin Store)

---

## Tiempo estimado

| Tarea | Tiempo |
|--------|--------|
| Preparar recursos | 1-2 días |
| Cuenta Developer + pago | 1 día |
| Configurar Play Console | 2-3 horas |
| Revisión de Google | 1-7 días |
| **Total** | **5-10 días aprox** |
