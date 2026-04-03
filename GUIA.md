# Latinbien App - Guía de Configuración

## 📁 Estructura del Proyecto

```
latinbien-app/
├── index.html          # Página principal
├── styles.css         # Estilos CSS
├── app.js             # Lógica de la aplicación
├── odoo-sync.js       # Sincronización con Odoo
├── sw.js              # Service Worker (PWA)
├── manifest.json      # Configuración PWA
└── data/
    └── products.json  # Catálogo de productos (alternativa)
```

## 🖼️ Modificar Imágenes de Productos

Edita `app.js` y busca el array `products`:

```javascript
const products = {
    telefonos: [
        { 
            id: 1, 
            name: "Samsung Galaxy S24", 
            price: 899, 
            image: "https://tu-servidor.com/imagenes/samsung-s24.jpg"  // ← URL de imagen
        },
        // ... más productos
    ]
};
```

**Opciones para las imágenes:**
1. **URL absoluta**: `https://example.com/imagen.jpg`
2. **Carpeta local**: `/images/producto.jpg` (requiere servidor web)
3. **Base64**: `data:image/png;base64,...` (no recomendado por peso)
4. **Placeholder**: `https://via.placeholder.com/150/1a365d/ffffff?text=S24`

## ➕ Agregar Nuevos Productos

En `app.js`, agrega productos al array correspondiente:

```javascript
consolas: [
    // productos existentes...
    { 
        id: 21, 
        name: "Nintendo Switch 2", 
        price: 449, 
        image: "URL_DE_IMAGEN" 
    }
]
```

**No olvides:**
- Usar un `id` único
- Agregar la categoría en `categoryNames` si es nueva:
```javascript
const categoryNames = {
    telefonos: "Teléfonos",
    // ... otras categorías
    nueva_categoria: "Nombre Visible"
};
```

## 🔄 Sincronización con Odoo

### Opción A: API de Odoo (Requiere acceso de administrador)

1. **Crear usuario API en Odoo:**
   - Ve a: `https://www.latinbien.com/web#odoo=apps`
   - Ajustes > Usuarios > Tu Usuario > Preferencias
   - En "Token de API", genera uno nuevo

2. **Configurar `odoo-sync.js`:**
```javascript
const ODOO_CONFIG = {
    url: 'https://www.latinbien.com/xmlrpc/2/common',
    db: 'latinbien',
    username: 'tu@email.com',
    api_key: 'tu_token_aqui'
};
```

3. **Método Odoo XML-RPC:**
```javascript
async getProducts() {
    const uid = await this.xmlrpcLogin();
    const products = await this.xmlrpcExecute('product.product', 'search_read', [[
        ['sale_ok', '=', true]
    ]], {
        fields: ['id', 'name', 'list_price', 'image_1920', 'categ_id'],
        limit: 100
    });
    return products;
}
```

### Opción B: Archivo JSON (Recomendado)

1. **Crea/actualiza `data/products.json`:**
```json
{
    "lastUpdate": "2026-04-03",
    "products": {
        "telefonos": [
            {
                "id": 1,
                "name": "Samsung Galaxy S24",
                "price": 899,
                "image": "URL_IMAGEN"
            }
        ]
    }
}
```

2. **Carga automática:**
```javascript
async function loadProducts() {
    const response = await fetch('data/products.json');
    const data = await response.json();
    Object.assign(products, data.products);
}
loadProducts();
```

## 📱 Publicar la App

### Opción 1: Hospedar en el mismo servidor de Latinbien
Si tienes acceso al hosting de Latinbien, sube los archivos a `/latinbien-app/`

### Opción 2: GitHub Pages
1. Sube el proyecto a un repositorio GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y la carpeta raíz

### Opción 3: Hospedaje propio
Sube los archivos a cualquier hosting web (Hostinger, Bluehost, etc.)

## ⚙️ Actualizar Precios Automáticamente

### Sincronización cada 30 minutos:
```javascript
setInterval(() => {
    api.syncAll().then(products => {
        updateProductDisplay(products);
    });
}, 30 * 60 * 1000); // 30 minutos
```

### Verificación manual:
```javascript
async function manualSync() {
    const lastSync = api.getLastSync();
    if (lastSync) {
        console.log(`Última sincronización: ${lastSync}`);
    }
    await api.syncAll();
    location.reload();
}
```

## 📞 Soporte

- **WhatsApp:** +58 (414) 7348785
- **Email:** info@latinbien.com
- **Web:** https://www.latinbien.com
