const products = {
    telefonos: [
        { id: 1, name: "Samsung Galaxy S24", price: 899, image: "https://via.placeholder.com/150/1a365d/ffffff?text=S24" },
        { id: 2, name: "iPhone 15 Pro", price: 999, image: "https://via.placeholder.com/150/1a365d/ffffff?text=iPhone15" },
        { id: 3, name: "Xiaomi Redmi Note 13", price: 299, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Redmi" },
        { id: 4, name: "Motorola Edge 40", price: 449, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Edge40" },
        { id: 5, name: "Samsung Galaxy A54", price: 349, image: "https://via.placeholder.com/150/1a365d/ffffff?text=A54" },
        { id: 6, name: "iPhone 14", price: 799, image: "https://via.placeholder.com/150/1a365d/ffffff?text=iPhone14" },
    ],
    televisores: [
        { id: 7, name: "Samsung 55\" Smart TV 4K", price: 549, image: "https://via.placeholder.com/150/1a365d/ffffff?text=TV+55" },
        { id: 8, name: "LG 50\" 4K UHD", price: 479, image: "https://via.placeholder.com/150/1a365d/ffffff?text=LG+50" },
        { id: 9, name: "Hisense 43\" FHD", price: 299, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Hisense" },
        { id: 10, name: "Samsung 65\" Neo QLED", price: 1299, image: "https://via.placeholder.com/150/1a365d/ffffff?text=65+QLED" },
    ],
    computacion: [
        { id: 11, name: "Laptop HP 15 Core i5", price: 599, image: "https://via.placeholder.com/150/1a365d/ffffff?text=HP+15" },
        { id: 12, name: "Lenovo IdeaPad 3", price: 449, image: "https://via.placeholder.com/150/1a365d/ffffff?text=IdeaPad" },
        { id: 13, name: "MacBook Air M2", price: 1099, image: "https://via.placeholder.com/150/1a365d/ffffff?text=MacAir" },
        { id: 14, name: "Dell Inspiron 14", price: 549, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Dell+14" },
        { id: 15, name: "ASUS VivoBook 15", price: 499, image: "https://via.placeholder.com/150/1a365d/ffffff?text=VivoBook" },
        { id: 16, name: "Tablet Samsung Tab S9", price: 699, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Tab+S9" },
    ],
    consolas: [
        { id: 17, name: "PlayStation 5", price: 499, image: "https://via.placeholder.com/150/1a365d/ffffff?text=PS5" },
        { id: 18, name: "Xbox Series X", price: 499, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Xbox" },
        { id: 19, name: "Nintendo Switch OLED", price: 349, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Switch" },
        { id: 20, name: "PlayStation 4 Pro", price: 399, image: "https://via.placeholder.com/150/1a365d/ffffff?text=PS4" },
    ],
    hogar: [
        { id: 21, name: "Aire Acondicionado 12000 BTU", price: 399, image: "https://via.placeholder.com/150/1a365d/ffffff?text=AC+12K" },
        { id: 22, name: "Refrigeradora 360L", price: 699, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Fridge" },
        { id: 23, name: "Lavadora 8kg", price: 449, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Washer" },
        { id: 24, name: "Microondas 20L", price: 129, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Micro" },
        { id: 25, name: "Ventilador de Torre", price: 89, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Fan" },
    ],
    oficina: [
        { id: 26, name: "Impresora HP LaserJet", price: 199, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Laser" },
        { id: 27, name: "Escritorio Ejecuto", price: 249, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Desk" },
        { id: 28, name: "Silla Ergonómica", price: 179, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Chair" },
        { id: 29, name: "Router WiFi 6", price: 79, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Router" },
        { id: 30, name: "Monitor 24\" Full HD", price: 149, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Monitor" },
    ],
    automotriz: [
        { id: 31, name: "Dash Cam 4K", price: 89, image: "https://via.placeholder.com/150/1a365d/ffffff?text=DashCam" },
        { id: 32, name: "Cargador Inalámbrico Auto", price: 39, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Wireless" },
        { id: 33, name: "Sistema GPS Portátil", price: 129, image: "https://via.placeholder.com/150/1a365d/ffffff?text=GPS" },
        { id: 34, name: "Parlantes Car Audio", price: 149, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Speakers" },
    ],
    industrial: [
        { id: 35, name: "Generador 5000W", price: 899, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Generator" },
        { id: 36, name: "Compresor de Aire", price: 349, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Compressor" },
        { id: 37, name: "Taladro Industrial", price: 199, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Drill" },
        { id: 38, name: "Soldadora MIG", price: 449, image: "https://via.placeholder.com/150/1a365d/ffffff?text=Welder" },
    ]
};

const categoryNames = {
    telefonos: "Teléfonos",
    televisores: "Televisores",
    computacion: "Computación",
    consolas: "Consolas",
    hogar: "Hogar",
    oficina: "Oficina",
    automotriz: "Automotriz",
    industrial: "Línea Industrial"
};

let cart = [];
let currentCategory = null;

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

function showCategories() {
    document.getElementById('categories').style.display = 'block';
    document.getElementById('products-section').style.display = 'none';
}

function showProducts(category) {
    currentCategory = category;
    document.getElementById('categories').style.display = 'none';
    document.getElementById('products-section').style.display = 'block';
    document.getElementById('category-title').textContent = categoryNames[category];
    
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    const categoryProducts = products[category] || [];
    
    if (categoryProducts.length === 0) {
        grid.innerHTML = '<p style="text-align:center;grid-column:span 2;color:#718096;padding:40px 0;">Próximamente más productos en esta categoría</p>';
        return;
    }
    
    categoryProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-box\\'></i>'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    $${product.price}
                    <small>o desde $${Math.round(product.price * 0.2)} inicial</small>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id}, '${category}')">
                    <i class="fas fa-cart-plus"></i> Agregar al carrito
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1, category });
    }
    
    updateCart();
    showToast('Producto agregado al carrito');
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartFooter.style.display = 'none';
        return;
    }
    
    cartFooter.style.display = 'block';
    cartItems.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-box\\'></i>'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(div);
    });
    
    cartTotal.textContent = '$' + total.toFixed(2);
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function checkout() {
    if (cart.length === 0) return;
    
    let message = '¡Hola! Me interesa comprar los siguientes productos:%0A%0A';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `• ${item.name}%0A  Cantidad: ${item.quantity} - $${itemTotal.toFixed(2)}%0A%0A`;
    });
    
    message += `Total: $${total.toFixed(2)}%0A%0APor favor, necesito información sobre las opciones de pago a crédito.`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=584147348785&text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function calculateCredit() {
    const price = parseFloat(document.getElementById('sim-price').value);
    const initialPercent = parseInt(document.getElementById('sim-plan').value);
    const quotas = parseInt(document.getElementById('sim-quotas').value);
    
    if (!price || price <= 0) {
        showToast('Ingresa un precio válido');
        return;
    }
    
    const initial = price * (initialPercent / 100);
    const financed = price - initial;
    const quota = financed / quotas;
    const total = price;
    
    document.getElementById('res-price').textContent = '$' + price.toFixed(2);
    document.getElementById('res-initial').textContent = '$' + initial.toFixed(2) + ' (' + initialPercent + '%)';
    document.getElementById('res-financed').textContent = '$' + financed.toFixed(2);
    document.getElementById('res-quota').textContent = '$' + quota.toFixed(2) + ' x ' + quotas + ' cuotas';
    document.getElementById('res-total').textContent = '$' + total.toFixed(2);
    
    document.getElementById('sim-result').style.display = 'block';
}

function navigateTo(page) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    if (page === 'home') {
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    } else if (page === 'categories') {
        scrollToCategories();
    } else if (page === 'simulator') {
        document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' });
    } else if (page === 'contact') {
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
    }
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        showProducts(category);
    });
});

document.querySelectorAll('.credit-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.credit-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const plan = card.dataset.plan;
        const planValues = { clasico: 50, mas: 40, pro: 30, premium: 20 };
        if (planValues[plan]) {
            document.getElementById('sim-plan').value = planValues[plan];
        }
        document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}
