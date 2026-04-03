const ODOO_CONFIG = {
    url: 'https://www.latinbien.com/xmlrpc/2/object',
    db: 'latinbien',
    username: 'tu_usuario@email.com',
    api_key: 'tu_api_key_de_odoo'
};

class LatinbienSync {
    constructor() {
        this.products = [];
    }

    async authenticate() {
        try {
            const response = await fetch('https://www.latinbien.com/api/auth/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    db: ODOO_CONFIG.db,
                    login: ODOO_CONFIG.username,
                    password: ODOO_CONFIG.api_key
                })
            });
            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error('Error de autenticación:', error);
            return null;
        }
    }

    async getProducts() {
        try {
            const token = await this.authenticate();
            if (!token) return this.products;

            const response = await fetch('https://www.latinbien.com/api/v1/products', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            
            if (data.products) {
                this.products = data.products.map(p => ({
                    id: p.id,
                    name: p.name,
                    price: p.list_price,
                    image: p.image_128 || p.image_1920 || '',
                    category: p.categ_id?.[1] || 'General'
                }));
                localStorage.setItem('latinbien_products', JSON.stringify(this.products));
                localStorage.setItem('latinbien_sync', Date.now().toString());
            }
            return this.products;
        } catch (error) {
            console.error('Error sincronizando productos:', error);
            return this.loadCachedProducts();
        }
    }

    loadCachedProducts() {
        const cached = localStorage.getItem('latinbien_products');
        return cached ? JSON.parse(cached) : [];
    }

    getLastSync() {
        const timestamp = localStorage.getItem('latinbien_sync');
        return timestamp ? new Date(parseInt(timestamp)) : null;
    }

    async syncAll() {
        console.log('Sincronizando con Latinbien...');
        await this.getProducts();
        console.log(`Última sincronización: ${this.getLastSync()}`);
        return this.products;
    }
}

const api = new LatinbienSync();

api.syncAll().then(products => {
    if (products.length > 0) {
        Object.assign(productsData, { telefonos: products.filter(p => p.category === 'Teléfonos') });
    }
});

setInterval(() => api.syncAll(), 30 * 60 * 1000);
