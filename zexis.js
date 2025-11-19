// Product Data
const products = {
    headphones: [
        {
            id: 'h1',
            name: 'ZEXIS Elite Pro',
            description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life',
            price: 8999,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
        },
        {
            id: 'h2',
            name: 'ZEXIS Studio Max',
            description: 'Professional studio headphones with crystal-clear audio and comfortable design',
            price: 7499,
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 'h3',
            name: 'ZEXIS Sport Pulse',
            description: 'Waterproof sports headphones with heart rate monitor and premium sound',
            price: 6499,
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop'
        },
        {
            id: 'h4',
            name: 'ZEXIS Classic Retro',
            description: 'Vintage-style headphones with modern technology and premium leather finish',
            price: 7999,
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop'
        },
        {
            id: 'h5',
            name: 'ZEXIS Minimalist Air',
            description: 'Ultra-lightweight true wireless earbuds with premium sound quality',
            price: 5999,
            image: 'https://images.unsplash.com/photo-1579586337278-3c196eae1755?w=400&h=400&fit=crop'
        }
    ],
    watches: [
        {
            id: 'w1',
            name: 'ZEXIS Executive Gold',
            description: 'Luxury gold-plated watch with Swiss movement and sapphire crystal',
            price: 15999,
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop'
        },
        {
            id: 'w2',
            name: 'ZEXIS Sport Chronograph',
            description: 'Professional sports watch with chronograph and water resistance',
            price: 12999,
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop'
        },
        {
            id: 'w3',
            name: 'ZEXIS Classic Heritage',
            description: 'Timeless design with premium leather strap and automatic movement',
            price: 13999,
            image: 'https://images.unsplash.com/photo-1506796684999-9fa2770af9c3?w=400&h=400&fit=crop'
        },
        {
            id: 'w4',
            name: 'ZEXIS Modern Minimal',
            description: 'Sleek contemporary design with titanium case and smart features',
            price: 11999,
            image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'
        },
        {
            id: 'w5',
            name: 'ZEXIS Diamond Elite',
            description: 'Luxury watch with genuine diamonds and premium stainless steel',
            price: 18999,
            image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=400&fit=crop'
        }
    ],
    perfumes: [
        {
            id: 'p1',
            name: 'ZEXIS Noir Intense',
            description: 'Bold and sophisticated fragrance with notes of oud and amber',
            price: 4499,
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop'
        },
        {
            id: 'p2',
            name: 'ZEXIS Ocean Breeze',
            description: 'Fresh aquatic fragrance perfect for everyday wear',
            price: 3999,
            image: 'https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=400&h=400&fit=crop'
        },
        {
            id: 'p3',
            name: 'ZEXIS Royal Essence',
            description: 'Premium fragrance with rare ingredients and long-lasting scent',
            price: 5499,
            image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'
        },
        {
            id: 'p4',
            name: 'ZEXIS Wood & Spice',
            description: 'Warm and masculine blend of woodsy and spicy notes',
            price: 4299,
            image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop'
        },
        {
            id: 'p5',
            name: 'ZEXIS Midnight Musk',
            description: 'Sensual and mysterious fragrance for special occasions',
            price: 4799,
            image: 'https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&h=400&fit=crop'
        }
    ]
};

// Cart and Orders Data
let cart = [];
let orders = [];
let selectedPaymentMethod = null;

// Initialize the store
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupScrollAnimations();
});

// Render Products
function renderProducts() {
    renderCategory('headphones', 'headphonesGrid');
    renderCategory('watches', 'watchesGrid');
    renderCategory('perfumes', 'perfumesGrid');
}

function renderCategory(category, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = products[category].map(product => `
        <div class="product-card fade-in">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">₱${product.price.toLocaleString()}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${category}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Cart Functions
function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, category });
    }
    
    updateCartCount();
    updateCartDisplay();
    showNotification('Product added to cart!');
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₱${item.price.toLocaleString()} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Payment Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    toggleCart();
    document.getElementById('paymentModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    
    // Update UI
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Show payment form
    document.getElementById('paymentForm').style.display = 'block';
    
    // Show/hide card fields
    const cardFields = document.getElementById('cardFields');
    if (method === 'card') {
        cardFields.style.display = 'block';
    } else {
        cardFields.style.display = 'none';
    }
}

function processPayment() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    
    if (!name || !phone) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    if (!selectedPaymentMethod) {
        showNotification('Please select a payment method!', 'error');
        return;
    }
    
    // Simulate payment processing
    const payBtn = document.querySelector('.pay-btn');
    payBtn.innerHTML = '<span class="loading"></span> Processing...';
    payBtn.disabled = true;
    
    setTimeout(() => {
        // Create order
        const order = {
            id: 'ORD' + Date.now(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            customerName: name,
            customerPhone: phone,
            paymentMethod: selectedPaymentMethod,
            date: new Date().toLocaleString(),
            status: 'pending'
        };
        
        orders.push(order);
        
        // Clear cart
        cart = [];
        updateCartCount();
        
        // Close payment modal and show success
        closePaymentModal();
        document.getElementById('successModal').classList.add('active');
        
        // Reset button
        payBtn.innerHTML = 'Pay Now';
        payBtn.disabled = false;
    }, 2000);
}

// Orders Functions
function openOrdersModal() {
    updateOrdersDisplay();
    document.getElementById('ordersModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function updateOrdersDisplay() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #666;">No orders yet</p>';
        return;
    }
    
    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <div>
                    <strong>Order ${order.id}</strong>
                    <div style="font-size: 0.9rem; color: #666;">${order.date}</div>
                </div>
                <div style="text-align: right;">
                    <span class="order-status ${order.status}">${order.status.toUpperCase()}</span>
                    <div style="font-weight: 600; color: #d4af37;">₱${order.total.toLocaleString()}</div>
                </div>
            </div>
            <div style="margin-bottom: 15px;">
                ${order.items.map(item => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>${item.name} x${item.quantity}</span>
                        <span>₱${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 0.9rem;">
                    <strong>Payment:</strong> ${order.paymentMethod.toUpperCase()}<br>
                    <strong>Customer:</strong> ${order.customerName}
                </div>
                ${order.status === 'pending' ? `
                    <button class="cancel-order-btn" onclick="cancelOrder('${order.id}')">
                        Cancel Order
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'cancelled';
            updateOrdersDisplay();
            showNotification('Order cancelled successfully!');
        }
    }
}

// Modal Functions
function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('paymentForm').style.display = 'none';
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    selectedPaymentMethod = null;
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function closeOrdersModal() {
    document.getElementById('ordersModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function closeAllModals() {
    closePaymentModal();
    closeSuccessModal();
    closeOrdersModal();
    toggleCart();
}

// Utility Functions
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 4000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
