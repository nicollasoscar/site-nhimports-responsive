const CONFIG = {
    whatsappNumber: "5582993905604",
    storeName: "NhImports"
};

/* ============================================================
    (aceita .jpg, .jpeg, .png, .webp)
   ============================================================ */
const products = [
    // ---- BELEZA ----
    { id: 1, name: "Lip Balm Hidratante", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/hidralab.png", catClass: "cat-beleza" },
    { id: 2, name: "Iluminador LA BELLE", desc: "Unidade", price: 14.99, category: "beleza", image: "images/beleza/iluminador.png", catClass: "cat-beleza" },
    { id: 3, name: "Lápis Preto com Apontador", desc: "Unidade", price: 4.99, category: "beleza", image: "images/beleza/lapisolho.jpg", catClass: "cat-beleza" },
    { id: 4, name: "Cream Tint Olhos e Boca", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/creamtint.jpg", catClass: "cat-beleza" },
    { id: 5, name: "Batom Balm Tinted Ruby Rose", desc: "Unidade", price: 14.99, category: "beleza", image: "images/beleza/batom.png", catClass: "cat-beleza" },
    { id: 6, name: "Blush Cremoso", desc: "Unidade", price: 11.99, category: "beleza", image: "images/beleza/blush.jpg", catClass: "cat-beleza" },
    { id: 7, name: "Gloss SWEET BOW", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/gloss.jpg", catClass: "cat-beleza" },
    { id: 8, name: "Lip Gloss Honey de Mel", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/honeymel.jpg", catClass: "cat-beleza" },
    { id: 9, name: "Brow Fixador de Sobrancelhas", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/fixador.jpg", catClass: "cat-beleza" },
    { id: 10, name: "Lápis Labial Lebranche", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/lapislab2.jpg", catClass: "cat-beleza" },
    { id: 11, name: "Máscara de Cílios PURE SKIN", desc: "Unidade", price: 14.99, category: "beleza", image: "images/beleza/maskci.jpg", catClass: "cat-beleza" },
    { id: 12, name: "Modelador de Sobrancelhas", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/modelador.jpg", catClass: "cat-beleza" },
    { id: 13, name: "Brincos", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/brincos.jpg", catClass: "cat-beleza" },
    { id: 14, name: "Bracelete", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/bracelete.jpg", catClass: "cat-beleza" },
    { id: 15, name: "Cojunto de Piranhas de Cabelo", desc: "", price: 9.99, category: "beleza", image: "images/beleza/conj_piranhas.jpg", catClass: "cat-beleza" },
    { id: 16, name: "Piranha de Cabelo Vinho", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/piranha_vinho.jpg", catClass: "cat-beleza" },
    { id: 17, name: "Piranha de Cabelo Branca", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/piranha_branca.jpg", catClass: "cat-beleza" },
    { id: 18, name: "Presilha", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/presilha1.jpg", catClass: "cat-beleza" },
    { id: 19, name: "Bracelete", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/bracelete2.jpg", catClass: "cat-beleza" },
    { id: 20, name: "Lápis de Sobrancelha", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/lapis_sobr.jpg", catClass: "cat-beleza" },
    { id: 21, name: "Contorno em Bastão", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/contorno.jpg", catClass: "cat-beleza" },
    { id: 22, name: "Lip Tint", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/liptint.jpg", catClass: "cat-beleza" },
    { id: 23, name: "Lip Sugar Scrub", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/lipsugar.jpg", catClass: "cat-beleza" },
    { id: 24, name: "Lip Bubble", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/lipbubble.jpg", catClass: "cat-beleza" },
    { id: 25, name: "Água Micelar", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/micelar.jpg", catClass: "cat-beleza" },
    { id: 26, name: "Batom líquido Mood", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/batom_liquido.jpg", catClass: "cat-beleza" },
    { id: 27, name: "Iluminador em Bastão", desc: "Unidade", price: 9.99, category: "beleza", image: "images/beleza/iluminador.jpg", catClass: "cat-beleza" },


    // ---- CROCHÊ ----
    { id: 28, name: "Bag Serena", desc: "Sob encomenda", price: 119.99, category: "croche", image: "images/croche/croche.jpg", catClass: "cat-croche" },
    { id: 29, name: "Bolsa/Ecobag Boho", desc: "Sob encomenda", price: 109.99, category: "croche", image: "images/croche/croche2.JPG", catClass: "cat-croche" },
    { id: 30, name: "Cropped Maat", desc: "Sob encomenda", price: 129.99, category: "croche", image: "images/croche/cropped.jpg", catClass: "cat-croche" },

    // ---- TECH ----
    { id: 31, name: "Carregador Turbo para Iphone", desc: "20W", price: 34.99, category: "tech", image: "images/tech/carregador.jpg", catClass: "cat-tech" }
];

let cart = {}; // { productId: quantity }
let activeCat = "todos";

const grid = document.getElementById('grid');
const cartCount = document.getElementById('cartCount');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const drawerItems = document.getElementById('drawerItems');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');

function formatBRL(v) {
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderGrid() {
    const list = products.filter(p => activeCat === "todos" || p.category === activeCat);
    grid.innerHTML = "";
    if (list.length === 0) {
        grid.innerHTML = `<div class="empty-msg">Nenhum produto nessa categoria ainda.</div>`;
        return;
    }
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <div class="thumb ${p.catClass}">
        <span class="cat-chip">${labelFor(p.category)}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="img-fallback">
          <span class="icon">📷</span>
          <small>imagem pendente<br>${p.image}</small>
        </div>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="price-row">
          <span class="price-tag">${formatBRL(p.price)}</span>
          <button class="add-btn" data-id="${p.id}">+ Adicionar</button>
        </div>
      </div>
    `;
        grid.appendChild(card);
    });

    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            cart[id] = (cart[id] || 0) + 1;
            btn.textContent = "Adicionado ✓";
            setTimeout(() => btn.textContent = "+ Adicionar", 700);
            renderCart();
        });
    });
}

function labelFor(cat) {
    return { beleza: "Beleza", croche: "Crochê", tech: "Tech" }[cat] || cat;
}

function renderCart() {
    const ids = Object.keys(cart).filter(id => cart[id] > 0);
    cartCount.textContent = ids.reduce((sum, id) => sum + cart[id], 0);

    if (ids.length === 0) {
        drawerItems.innerHTML = `<p class="empty-msg">Seu carrinho está vazio.<br>Adicione produtos para continuar 🛍️</p>`;
        checkoutBtn.disabled = true;
        totalAmount.textContent = formatBRL(0);
        return;
    }

    drawerItems.innerHTML = "";
    let total = 0;

    ids.forEach(id => {
        const p = products.find(pr => pr.id === Number(id));
        const qty = cart[id];
        total += p.price * qty;

        const row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML = `
      <div class="mini-thumb ${p.catClass}">
        <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';">
      </div>
      <div class="info">
        <h4>${p.name}</h4>
        <div class="unit">${formatBRL(p.price)} un.</div>
        <button class="remove-btn" data-id="${p.id}">remover</button>
      </div>
      <div class="qty-ctrl">
        <button data-action="dec" data-id="${p.id}">–</button>
        <span>${qty}</span>
        <button data-action="inc" data-id="${p.id}">+</button>
      </div>
    `;
        drawerItems.appendChild(row);
    });

    totalAmount.textContent = formatBRL(total);
    checkoutBtn.disabled = false;

    drawerItems.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            if (btn.dataset.action === 'inc') cart[id] = (cart[id] || 0) + 1;
            if (btn.dataset.action === 'dec') cart[id] = Math.max(0, (cart[id] || 0) - 1);
            renderCart();
        });
    });
    drawerItems.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            delete cart[btn.dataset.id];
            renderCart();
        });
    });
}

function buildWhatsappMessage() {
    const ids = Object.keys(cart).filter(id => cart[id] > 0);
    let lines = [];
    lines.push(`Olá, ${CONFIG.storeName}! Quero fazer o seguinte pedido:`);
    lines.push("");
    let total = 0;
    ids.forEach(id => {
        const p = products.find(pr => pr.id === Number(id));
        const qty = cart[id];
        const subtotal = p.price * qty;
        total += subtotal;
        lines.push(`• ${qty}x ${p.name} — ${formatBRL(subtotal)}`);
    });
    lines.push("");
    lines.push(`Total: ${formatBRL(total)}`);
    return lines.join("\n");
}

/* Filters */
document.getElementById('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    renderGrid();
});

/* Drawer open/close */
function openDrawer() { drawer.classList.add('open'); overlay.classList.add('open'); }
function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('open'); }
document.getElementById('openCart').addEventListener('click', openDrawer);
document.getElementById('closeCart').addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

/* Checkout */
checkoutBtn.addEventListener('click', () => {
    const msg = buildWhatsappMessage();
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
});

renderGrid();
renderCart();