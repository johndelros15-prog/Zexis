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
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
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
