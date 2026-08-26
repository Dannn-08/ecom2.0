/* ==========================================================================
   LUMA — script.js
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* PRODUCT DATA                                                            */
/* ---------------------------------------------------------------------- */

const PRODUCTS = [
  { id: 1, name: "Aura Wireless Headphones", category: "Electronics", price: 129, oldPrice: 159, rating: 4.9, reviews: 214, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "Immersive over-ear sound with adaptive noise cancellation, 40-hour battery life, and a featherweight aluminum frame built for all-day listening.", colors: ["#111214", "#E5E5E0", "#8B5CF6"], sizes: [], new: false, stock: true },
  { id: 2, name: "Nova Smartwatch", category: "Electronics", price: 249, oldPrice: null, rating: 4.7, reviews: 132, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", badge: "New", description: "A refined wearable with a always-on micro-LED display, precision health tracking, and five-day battery life in a titanium shell.", colors: ["#111214", "#38BDF8"], sizes: [], new: true, stock: true },
  { id: 3, name: "Orbit Speaker", category: "Electronics", price: 89, oldPrice: 110, rating: 4.6, reviews: 98, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "A compact 360° speaker with room-filling sound, 12-hour battery, and a soft-touch woven shell designed to sit anywhere in your home.", colors: ["#111214", "#F472B6"], sizes: [], new: false, stock: true },
  { id: 4, name: "Luma Airbuds", category: "Electronics", price: 99, oldPrice: null, rating: 4.8, reviews: 301, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop", badge: "New", description: "True wireless earbuds with spatial audio, sweat resistance, and a pocketable glass-finish charging case.", colors: ["#111214", "#E5E5E0"], sizes: [], new: true, stock: true },

  { id: 5, name: "Essential Oversized Tee", category: "Fashion", price: 39, oldPrice: 49, rating: 4.5, reviews: 87, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "A heavyweight cotton tee with a relaxed drop-shoulder cut, garment-dyed for a soft lived-in feel from the first wear.", colors: ["#111214", "#F7F8FA", "#8B5CF6"], sizes: ["XS","S","M","L","XL"], new: false, stock: true },
  { id: 6, name: "Minimal Runner", category: "Fashion", price: 119, oldPrice: null, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", badge: "New", description: "A low-profile running silhouette with responsive foam cushioning and a knit upper that moves with your stride.", colors: ["#111214", "#F7F8FA"], sizes: ["7","8","9","10","11"], new: true, stock: true },
  { id: 7, name: "Cloud Hoodie", category: "Fashion", price: 79, oldPrice: 99, rating: 4.8, reviews: 203, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "Brushed-fleece hoodie with a relaxed fit, ribbed cuffs, and a kangaroo pocket built for cool mornings.", colors: ["#111214", "#38BDF8", "#F7F8FA"], sizes: ["S","M","L","XL"], new: false, stock: true },
  { id: 8, name: "Studio Jacket", category: "Fashion", price: 189, oldPrice: null, rating: 4.6, reviews: 64, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop", badge: "", description: "A structured lightweight jacket in water-resistant twill, cut for a clean silhouette in transitional weather.", colors: ["#111214", "#8B5CF6"], sizes: ["S","M","L","XL"], new: false, stock: false },

  { id: 9, name: "Arc Leather Wallet", category: "Accessories", price: 59, oldPrice: null, rating: 4.9, reviews: 145, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop", badge: "New", description: "Full-grain leather wallet with a slim six-card layout and a hand-burnished edge that deepens with age.", colors: ["#111214", "#7C4A2D"], sizes: [], new: true, stock: true },
  { id: 10, name: "Halo Sunglasses", category: "Accessories", price: 129, oldPrice: 149, rating: 4.7, reviews: 92, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "Polarized acetate sunglasses with a soft cat-eye curve and UV400 protection, finished with gold-tone hardware.", colors: ["#111214", "#F472B6"], sizes: [], new: false, stock: true },
  { id: 11, name: "Mono Backpack", category: "Accessories", price: 149, oldPrice: null, rating: 4.8, reviews: 178, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop", badge: "", description: "A minimalist 18L backpack in coated canvas with a padded laptop sleeve and magnetic roll-top closure.", colors: ["#111214", "#E5E5E0"], sizes: [], new: false, stock: true },
  { id: 12, name: "Edge Watch", category: "Accessories", price: 219, oldPrice: 259, rating: 4.6, reviews: 71, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "A slim analog watch with a sapphire crystal face and a brushed stainless case built to last generations.", colors: ["#111214", "#38BDF8"], sizes: [], new: false, stock: true },

  { id: 13, name: "Ambient Lamp", category: "Home", price: 69, oldPrice: null, rating: 4.7, reviews: 118, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop", badge: "New", description: "A dimmable ceramic table lamp that casts a warm, diffused glow — a quiet centerpiece for any room.", colors: ["#F7F8FA", "#7C4A2D"], sizes: [], new: true, stock: true },
  { id: 14, name: "Stone Diffuser", category: "Home", price: 45, oldPrice: 55, rating: 4.5, reviews: 63, image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "An ultrasonic diffuser cast in matte stone-look resin, with a whisper-quiet motor and auto shut-off.", colors: ["#F7F8FA", "#111214"], sizes: [], new: false, stock: true },
  { id: 15, name: "Glass Vase", category: "Home", price: 55, oldPrice: null, rating: 4.8, reviews: 84, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop", badge: "", description: "Hand-blown borosilicate vase with a soft amber tint and gently irregular silhouette — no two are alike.", colors: ["#8B5CF6", "#F7F8FA"], sizes: [], new: false, stock: true },
  { id: 16, name: "Cloud Desk Organizer", category: "Home", price: 35, oldPrice: 42, rating: 4.6, reviews: 57, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "A modular desk tray in soft-touch resin that keeps small essentials sorted without cluttering your space.", colors: ["#F7F8FA", "#111214"], sizes: [], new: false, stock: true },

  { id: 17, name: "Drift Yoga Mat", category: "Lifestyle", price: 65, oldPrice: null, rating: 4.7, reviews: 109, image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=800&auto=format&fit=crop", badge: "New", description: "A textured, non-slip mat made from natural tree rubber, offering superior grip and cushioning for any practice.", colors: ["#8B5CF6", "#111214"], sizes: [], new: true, stock: true },
  { id: 18, name: "Trail Water Bottle", category: "Lifestyle", price: 32, oldPrice: 38, rating: 4.8, reviews: 221, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "Double-walled insulated bottle that keeps drinks cold for 24 hours, wrapped in a matte powder-coat finish.", colors: ["#38BDF8", "#111214", "#F472B6"], sizes: [], new: false, stock: true },
  { id: 19, name: "Velvet Glow Serum", category: "Beauty", price: 48, oldPrice: null, rating: 4.9, reviews: 176, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop", badge: "New", description: "A lightweight vitamin-C serum that brightens and smooths, absorbing instantly with no sticky residue.", colors: [], sizes: [], new: true, stock: true },
  { id: 20, name: "Soft Clay Mask", category: "Beauty", price: 29, oldPrice: 36, rating: 4.6, reviews: 94, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop", badge: "Sale", description: "A mineral-rich clay mask that gently draws out impurities while leaving skin soft, never tight or dry.", colors: [], sizes: [], new: false, stock: true }
];

const REVIEW_POOL = [
  { name: "Sarah M.", text: "Beautiful product and excellent quality. Exceeded my expectations completely.", verified: true },
  { name: "James K.", text: "Fast shipping, gorgeous packaging, and it feels even better in person.", verified: true },
  { name: "Priya R.", text: "This has genuinely become part of my daily routine. Worth every peso.", verified: true },
  { name: "Daniel O.", text: "Solid build quality and the design is exactly as pictured.", verified: false },
  { name: "Mei L.", text: "Customer service was great when I had a sizing question. Love it.", verified: true }
];

const TESTIMONIALS = [
  { text: "LUMA completely changed how I shop online. Every detail feels considered.", name: "Sarah M.", role: "Verified Customer" },
  { text: "The quality is consistently better than brands twice the price.", name: "Andre P.", role: "Verified Customer" },
  { text: "Checkout took less than a minute and my order arrived early.", name: "Kim T.", role: "Verified Customer" },
  { text: "I've never returned a single item — everything just fits and feels right.", name: "Luna G.", role: "Verified Customer" }
];

/* ---------------------------------------------------------------------- */
/* STATE                                                                   */
/* ---------------------------------------------------------------------- */

const state = {
  category: "all",
  search: "",
  sort: "featured",
  filters: { categories: [], price: "", rating: "", inStock: false },
  cart: [],
  wishlist: [],
  recentlyViewed: [],
  compare: [],
  theme: "dark",
  user: null,
  currentProduct: null,
  modalColor: null,
  modalSize: null,
  modalQty: 1,
  testimonialIndex: 0
};

/* ---------------------------------------------------------------------- */
/* LOCAL STORAGE                                                           */
/* ---------------------------------------------------------------------- */

const STORAGE_KEYS = {
  cart: "luma_cart",
  wishlist: "luma_wishlist",
  theme: "luma_theme",
  recentlyViewed: "luma_recently_viewed",
  user: "luma_user"
};

function saveState(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (e) { console.warn("Could not save state", e); }
}

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}

function loadAllState() {
  state.cart = loadState(STORAGE_KEYS.cart, []);
  state.wishlist = loadState(STORAGE_KEYS.wishlist, []);
  state.recentlyViewed = loadState(STORAGE_KEYS.recentlyViewed, []);
  state.user = loadState(STORAGE_KEYS.user, null);
  state.theme = loadState(STORAGE_KEYS.theme, "dark");
}

/* ---------------------------------------------------------------------- */
/* HELPERS                                                                  */
/* ---------------------------------------------------------------------- */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const money = (n) => `$${n.toFixed(2).replace(/\.00$/, "")}`;
const findProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));
const starString = (rating) => {
  const full = Math.round(rating);
  return "★★★★★☆☆☆☆☆".slice(5 - full, 10 - full);
};

/* ---------------------------------------------------------------------- */
/* TOASTS                                                                   */
/* ---------------------------------------------------------------------- */

function showToast(message, icon = "✓") {
  const container = $("#toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast glass";
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/* ---------------------------------------------------------------------- */
/* PRODUCT RENDERING                                                        */
/* ---------------------------------------------------------------------- */

function productCardHTML(p) {
  const wished = state.wishlist.includes(p.id);
  const compared = state.compare.includes(p.id);
  const badge = p.badge ? `<span class="pc-badge ${p.badge === "Sale" ? "sale" : ""}">${p.badge}</span>` : "";
  return `
  <article class="product-card" data-id="${p.id}" tabindex="0" aria-label="${p.name}">
    <div class="pc-media">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      ${badge}
      <label class="pc-compare">
        <input type="checkbox" class="pc-compare-check" data-id="${p.id}" ${compared ? "checked" : ""} aria-label="Add ${p.name} to compare">
      </label>
      <button class="pc-wish ${wished ? "active" : ""}" data-id="${p.id}" aria-label="Toggle wishlist for ${p.name}">
        <svg viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}"><path d="M12 21s-7.5-4.6-10.1-9.3C.3 8.4 1.9 5 5.3 5c2 0 3.4 1.1 4.1 2.3.4.6.6 1 .6 1s.2-.4.6-1C11.3 6.1 12.7 5 14.7 5c3.4 0 5 3.4 3.4 6.7C19.5 16.4 12 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
      </button>
      <button class="pc-quick" data-id="${p.id}">Quick View</button>
    </div>
    <div class="pc-body">
      <span class="pc-cat">${p.category}</span>
      <h3 class="pc-name">${p.name}</h3>
      <span class="pc-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating}</span>
      <div class="pc-price-row">
        <span class="pc-price">${money(p.price)}</span>
        ${p.oldPrice ? `<span class="pc-old">${money(p.oldPrice)}</span>` : ""}
      </div>
      <button class="pc-add" data-id="${p.id}">${p.stock ? "Add to Cart" : "Out of Stock"}</button>
    </div>
  </article>`;
}

function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.category !== "all") list = list.filter((p) => p.category === state.category);

  if (state.filters.categories.length) {
    list = list.filter((p) => state.filters.categories.includes(p.category));
  }

  if (state.filters.price) {
    const [min, max] = state.filters.price.split("-").map(Number);
    list = list.filter((p) => p.price >= min && p.price <= max);
  }

  if (state.filters.rating) {
    list = list.filter((p) => p.rating >= Number(state.filters.rating));
  }

  if (state.filters.inStock) list = list.filter((p) => p.stock);

  if (state.search.trim()) {
    const q = state.search.trim().toLowerCase();
    list = list.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case "newest": list.sort((a, b) => (b.new === a.new ? 0 : b.new ? 1 : -1)); break;
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "rating": list.sort((a, b) => b.rating - a.rating); break;
    default: break;
  }

  return list;
}

function renderProducts() {
  const list = getFilteredProducts();
  const grid = $("#productGrid");
  const empty = $("#noResults");
  const count = $("#resultCount");

  count.textContent = `${list.length} product${list.length === 1 ? "" : "s"} found`;

  if (!list.length) {
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = list.map(productCardHTML).join("");
  }
}

function renderFlashSale() {
  const flash = PRODUCTS.filter((p) => p.oldPrice).slice(0, 4);
  $("#flashGrid").innerHTML = flash.map(productCardHTML).join("");
}

function renderNewArrivals() {
  const arrivals = PRODUCTS.filter((p) => p.new).slice(0, 6);
  $("#newGrid").innerHTML = arrivals.map(productCardHTML).join("");
}

function renderRecentlyViewed() {
  const section = $("#recentlySection");
  if (!state.recentlyViewed.length) { section.hidden = true; return; }
  const items = state.recentlyViewed.map(findProduct).filter(Boolean);
  if (!items.length) { section.hidden = true; return; }
  section.hidden = false;
  $("#recentGrid").innerHTML = items.map(productCardHTML).join("");
}

function refreshAllProductGrids() {
  renderProducts();
  renderFlashSale();
  renderNewArrivals();
  renderRecentlyViewed();
}

/* ---------------------------------------------------------------------- */
/* CATEGORY / FILTER / SORT / SEARCH EVENTS                                 */
/* ---------------------------------------------------------------------- */

function initCategoryBar() {
  $("#categoryBar").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    $$(".pill").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    state.category = btn.dataset.category;
    renderProducts();
  });
}

function initFilters() {
  const panel = $("#filterPanel");

  $("#filterToggle").addEventListener("click", () => {
    panel.classList.toggle("show-mobile");
    panel.style.display = panel.style.display === "flex" ? "" : "flex";
  });

  panel.addEventListener("change", (e) => {
    if (e.target.classList.contains("f-category")) {
      const checked = $$(".f-category:checked", panel).map((i) => i.value);
      state.filters.categories = checked;
    }
    if (e.target.classList.contains("f-price")) state.filters.price = e.target.value;
    if (e.target.classList.contains("f-rating")) state.filters.rating = e.target.value;
    if (e.target.id === "f-instock") state.filters.inStock = e.target.checked;
    renderProducts();
  });

  $("#clearFilters").addEventListener("click", () => {
    state.filters = { categories: [], price: "", rating: "", inStock: false };
    $$(".f-category", panel).forEach((i) => (i.checked = false));
    $("#f-instock").checked = false;
    $('input[name="price"][value=""]').checked = true;
    $('input[name="rating"][value=""]').checked = true;
    renderProducts();
    showToast("Filters cleared");
  });

  $("#sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });
}

function initSearch() {
  const overlay = $("#searchOverlay");
  const input = $("#searchInput");
  const results = $("#searchResults");
  const meta = $("#searchMeta");

  function openSearch() {
    overlay.classList.add("open");
    setTimeout(() => input.focus(), 250);
    renderSearchResults("");
  }
  function closeSearch() {
    overlay.classList.remove("open");
    input.value = "";
  }

  function renderSearchResults(q) {
    if (!q.trim()) {
      results.innerHTML = "";
      meta.textContent = "Start typing to search LUMA's catalog.";
      return;
    }
    const query = q.trim().toLowerCase();
    const matches = PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
    meta.textContent = matches.length ? `${matches.length} product${matches.length === 1 ? "" : "s"} found` : "";
    if (!matches.length) {
      results.innerHTML = `<div class="empty-state"><p class="empty-title">No products found.</p><p class="empty-sub">Try another search.</p></div>`;
      return;
    }
    results.innerHTML = matches.map((p) => `
      <div class="search-result-item" data-id="${p.id}" role="button" tabindex="0">
        <img src="${p.image}" alt="${p.name}">
        <div><div class="sri-name">${p.name}</div><div class="sri-cat">${p.category}</div></div>
        <span class="sri-price">${money(p.price)}</span>
      </div>`).join("");
  }

  $("#searchBtn").addEventListener("click", openSearch);
  $("#searchClose").addEventListener("click", closeSearch);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });
  input.addEventListener("input", (e) => renderSearchResults(e.target.value));
  results.addEventListener("click", (e) => {
    const item = e.target.closest(".search-result-item");
    if (!item) return;
    closeSearch();
    openProductModal(item.dataset.id);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeSearch();
  });
}

/* ---------------------------------------------------------------------- */
/* CART                                                                     */
/* ---------------------------------------------------------------------- */

function addToCart(id, options = {}) {
  const product = findProduct(id);
  if (!product || !product.stock) { showToast("This item is out of stock", "✕"); return; }
  const variantKey = `${options.color || ""}-${options.size || ""}`;
  const qty = options.qty || 1;
  const existing = state.cart.find((i) => i.id === product.id && i.variant === variantKey);
  if (existing) existing.qty += qty;
  else state.cart.push({ id: product.id, variant: variantKey, color: options.color || null, size: options.size || null, qty });
  saveState(STORAGE_KEYS.cart, state.cart);
  updateCounters();
  renderCart();
  showToast("Added to cart");
}

function removeFromCart(id, variant) {
  state.cart = state.cart.filter((i) => !(i.id === Number(id) && i.variant === variant));
  saveState(STORAGE_KEYS.cart, state.cart);
  updateCounters();
  renderCart();
}

function updateCartQty(id, variant, delta) {
  const item = state.cart.find((i) => i.id === Number(id) && i.variant === variant);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState(STORAGE_KEYS.cart, state.cart);
  updateCounters();
  renderCart();
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, i) => {
    const p = findProduct(i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
  const shipping = subtotal === 0 ? 0 : subtotal > 150 ? 0 : 8;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total };
}

function renderCart() {
  const body = $("#cartBody");
  const footer = $("#cartFooter");

  if (!state.cart.length) {
    body.innerHTML = `
      <div class="empty-state">
        <p class="empty-title">Your cart feels a little empty.</p>
        <p class="empty-sub">Discover something you'll love.</p>
        <button class="btn btn-primary" style="margin-top:18px" id="emptyCartShop">Start Shopping</button>
      </div>`;
    footer.innerHTML = "";
    const btn = $("#emptyCartShop");
    if (btn) btn.addEventListener("click", () => { closeCart(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); });
    return;
  }

  body.innerHTML = state.cart.map((item) => {
    const p = findProduct(item.id);
    if (!p) return "";
    const variantLabel = [item.color, item.size].filter(Boolean).join(" / ");
    return `
    <div class="cart-item" data-id="${p.id}" data-variant="${item.variant}">
      <img src="${p.image}" alt="${p.name}">
      <div class="ci-info">
        <span class="ci-name">${p.name}</span>
        ${variantLabel ? `<span class="ci-variant">${variantLabel}</span>` : ""}
        <div class="ci-row">
          <div class="ci-qty">
            <button class="ci-dec" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button class="ci-inc" aria-label="Increase quantity">+</button>
          </div>
          <span class="ci-price">${money(p.price * item.qty)}</span>
        </div>
        <button class="ci-remove">Remove</button>
      </div>
    </div>`;
  }).join("");

  const t = cartTotals();
  footer.innerHTML = `
    <div class="sum-row"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
    <div class="sum-row"><span>Shipping</span><span>${t.shipping === 0 ? "Free" : money(t.shipping)}</span></div>
    <div class="sum-row"><span>Estimated Tax</span><span>${money(t.tax)}</span></div>
    <div class="sum-row total"><span>Total</span><span>${money(t.total)}</span></div>
    <button class="btn btn-primary btn-full" id="checkoutBtn">Checkout</button>
    <button class="btn btn-ghost btn-full" id="viewCartBtn">View Cart</button>
  `;

  $("#checkoutBtn").addEventListener("click", () => { closeCart(); openCheckout(); });
  $("#viewCartBtn").addEventListener("click", () => document.getElementById("shop").scrollIntoView({ behavior: "smooth" }));
}

function initCartEvents() {
  $("#cartBody").addEventListener("click", (e) => {
    const itemEl = e.target.closest(".cart-item");
    if (!itemEl) return;
    const id = itemEl.dataset.id, variant = itemEl.dataset.variant;
    if (e.target.classList.contains("ci-inc")) updateCartQty(id, variant, 1);
    if (e.target.classList.contains("ci-dec")) updateCartQty(id, variant, -1);
    if (e.target.classList.contains("ci-remove")) removeFromCart(id, variant);
  });
}

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#cartOverlay").classList.add("open");
  renderCart();
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartOverlay").classList.remove("open");
}

/* ---------------------------------------------------------------------- */
/* WISHLIST                                                                 */
/* ---------------------------------------------------------------------- */

function toggleWishlist(id, sourceEl) {
  id = Number(id);
  const idx = state.wishlist.indexOf(id);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast("Removed from wishlist", "♡");
  } else {
    state.wishlist.push(id);
    showToast("Added to wishlist", "♡");
  }
  saveState(STORAGE_KEYS.wishlist, state.wishlist);
  updateCounters();

  $$(`.pc-wish[data-id="${id}"]`).forEach((btn) => {
    const active = state.wishlist.includes(id);
    btn.classList.toggle("active", active);
    btn.querySelector("svg").setAttribute("fill", active ? "currentColor" : "none");
    btn.classList.add("pulse");
    setTimeout(() => btn.classList.remove("pulse"), 400);
  });

  renderWishlist();
}

function renderWishlist() {
  const body = $("#wishlistBody");
  if (!state.wishlist.length) {
    body.innerHTML = `
      <div class="empty-state">
        <p class="empty-title">Nothing saved yet.</p>
        <p class="empty-sub">Tap ♡ on products you love.</p>
      </div>`;
    return;
  }
  const items = state.wishlist.map(findProduct).filter(Boolean);
  body.innerHTML = items.map((p) => `
    <div class="wish-item" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <div class="wi-info">
        <div class="wi-name">${p.name}</div>
        <div class="wi-rating">${starString(p.rating)} ${p.rating}</div>
        <div class="wi-price">${money(p.price)}</div>
      </div>
      <div class="wi-actions">
        <button class="wi-add" data-id="${p.id}">Add to Cart</button>
        <button class="wi-remove" data-id="${p.id}">Remove</button>
      </div>
    </div>`).join("");
}

function initWishlistEvents() {
  $("#wishlistBody").addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (!id) return;
    if (e.target.classList.contains("wi-add")) addToCart(id);
    if (e.target.classList.contains("wi-remove")) toggleWishlist(id);
  });
}

function openWishlist() {
  $("#wishlistDrawer").classList.add("open");
  $("#wishlistOverlay").classList.add("open");
  renderWishlist();
}
function closeWishlist() {
  $("#wishlistDrawer").classList.remove("open");
  $("#wishlistOverlay").classList.remove("open");
}

/* ---------------------------------------------------------------------- */
/* COUNTERS                                                                  */
/* ---------------------------------------------------------------------- */

function updateCounters() {
  const cartCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const wishCount = state.wishlist.length;
  const cartBadge = $("#cartCount");
  const wishBadge = $("#wishlistCount");
  cartBadge.textContent = cartCount;
  cartBadge.hidden = cartCount === 0;
  wishBadge.textContent = wishCount;
  wishBadge.hidden = wishCount === 0;
}

/* ---------------------------------------------------------------------- */
/* RECENTLY VIEWED                                                          */
/* ---------------------------------------------------------------------- */

function addRecentlyViewed(id) {
  id = Number(id);
  state.recentlyViewed = [id, ...state.recentlyViewed.filter((i) => i !== id)].slice(0, 6);
  saveState(STORAGE_KEYS.recentlyViewed, state.recentlyViewed);
  renderRecentlyViewed();
}

/* ---------------------------------------------------------------------- */
/* PRODUCT QUICK VIEW MODAL                                                  */
/* ---------------------------------------------------------------------- */

function reviewsFor(p) {
  return REVIEW_POOL.slice(0, 3 + (p.id % 3)).map((r, i) => ({
    ...r,
    date: ["2 days ago", "1 week ago", "3 weeks ago", "1 month ago", "2 months ago"][i % 5]
  }));
}

function ratingBars(p) {
  const dist = [72, 18, 6, 3, 1];
  return dist.map((pct, i) => `
    <div class="review-bar-row">
      <span>${5 - i}★</span>
      <div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div>
      <span>${pct}%</span>
    </div>`).join("");
}

function relatedProducts(p) {
  return PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
}

function productModalHTML(p) {
  state.modalColor = p.colors[0] || null;
  state.modalSize = p.sizes[0] || null;
  state.modalQty = 1;

  const swatches = p.colors.length ? `
    <div class="option-group">
      <span class="option-label">Color</span>
      <div class="swatches">
        ${p.colors.map((c, i) => `<button class="swatch ${i === 0 ? "active" : ""}" style="background:${c}" data-color="${c}" aria-label="Color option ${i + 1}"></button>`).join("")}
      </div>
    </div>` : "";

  const sizes = p.sizes.length ? `
    <div class="option-group">
      <span class="option-label">Size</span>
      <div class="swatches">
        ${p.sizes.map((s, i) => `<button class="size-opt ${i === 0 ? "active" : ""}" data-size="${s}">${s}</button>`).join("")}
      </div>
    </div>` : "";

  const related = relatedProducts(p);

  return `
  <div class="pm-grid">
    <div class="pm-media"><img src="${p.image}" alt="${p.name}"></div>
    <div class="pm-info">
      <button class="pm-close" id="pmClose" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <span class="pm-cat">${p.category}</span>
      <h2>${p.name}</h2>
      <div class="pm-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} · ${p.reviews} reviews</div>
      <div class="pm-price-row">
        <span class="pm-price">${money(p.price)}</span>
        ${p.oldPrice ? `<span class="pm-old">${money(p.oldPrice)}</span>` : ""}
      </div>
      <p class="pm-desc">${p.description}</p>
      ${swatches}
      ${sizes}
      <div class="option-group">
        <span class="option-label">Quantity</span>
        <div class="qty-control">
          <button id="pmQtyDec" aria-label="Decrease quantity">−</button>
          <span id="pmQtyVal">1</span>
          <button id="pmQtyInc" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div class="pm-actions">
        <button class="btn btn-glass" id="pmAddCart" ${p.stock ? "" : "disabled"}>${p.stock ? "Add to Cart" : "Out of Stock"}</button>
        <button class="btn btn-primary" id="pmBuyNow" ${p.stock ? "" : "disabled"}>Buy Now</button>
      </div>

      <div class="pm-tabs">
        <button class="pm-tab active" data-tab="specs">Specifications</button>
        <button class="pm-tab" data-tab="reviews">Reviews</button>
      </div>
      <div class="pm-tab-panel active" data-panel="specs">
        <div class="spec-row"><span>Category</span><span>${p.category}</span></div>
        <div class="spec-row"><span>Availability</span><span>${p.stock ? "In Stock" : "Out of Stock"}</span></div>
        <div class="spec-row"><span>Rating</span><span>${p.rating} / 5</span></div>
        <div class="spec-row"><span>SKU</span><span>LUMA-${String(p.id).padStart(4, "0")}</span></div>
      </div>
      <div class="pm-tab-panel" data-panel="reviews">
        <div class="review-summary">
          <span class="review-score">${p.rating}</span>
          <div style="flex:1">
            <span class="stars">${starString(p.rating)}</span>
            <div style="font-size:.78rem;color:var(--text-faint)">${p.reviews} Reviews</div>
          </div>
        </div>
        ${ratingBars(p)}
        <div style="margin-top:16px">
          ${reviewsFor(p).map((r) => `
            <div class="review-item">
              <div class="review-item-head">
                <span class="review-name">${r.name} ${r.verified ? '<span class="verified-badge">Verified Purchase</span>' : ""}</span>
                <span class="review-date">${r.date}</span>
              </div>
              <span class="stars" style="font-size:.8rem">${starString(p.rating)}</span>
              <p class="review-text">${r.text}</p>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </div>
  ${related.length ? `
  <div class="related-section">
    <h3>You may also like</h3>
    <div class="related-grid">${related.map(productCardHTML).join("")}</div>
  </div>` : ""}
  `;
}

function openProductModal(id) {
  const p = findProduct(id);
  if (!p) return;
  state.currentProduct = p;
  addRecentlyViewed(p.id);
  const panel = $("#productModalPanel");
  panel.innerHTML = productModalHTML(p);
  $("#productModal").classList.add("open");
  document.body.style.overflow = "hidden";
  bindProductModalEvents(p);
}

function closeProductModal() {
  $("#productModal").classList.remove("open");
  document.body.style.overflow = "";
}

function bindProductModalEvents(p) {
  const panel = $("#productModalPanel");
  $("#pmClose", panel).addEventListener("click", closeProductModal);

  $$(".swatch", panel).forEach((sw) => sw.addEventListener("click", () => {
    $$(".swatch", panel).forEach((s) => s.classList.remove("active"));
    sw.classList.add("active");
    state.modalColor = sw.dataset.color;
  }));

  $$(".size-opt", panel).forEach((so) => so.addEventListener("click", () => {
    $$(".size-opt", panel).forEach((s) => s.classList.remove("active"));
    so.classList.add("active");
    state.modalSize = so.dataset.size;
  }));

  const qtyVal = $("#pmQtyVal", panel);
  $("#pmQtyInc", panel).addEventListener("click", () => { state.modalQty++; qtyVal.textContent = state.modalQty; });
  $("#pmQtyDec", panel).addEventListener("click", () => { state.modalQty = Math.max(1, state.modalQty - 1); qtyVal.textContent = state.modalQty; });

  const addBtn = $("#pmAddCart", panel);
  if (addBtn) addBtn.addEventListener("click", () => {
    addToCart(p.id, { color: state.modalColor, size: state.modalSize, qty: state.modalQty });
  });
  const buyBtn = $("#pmBuyNow", panel);
  if (buyBtn) buyBtn.addEventListener("click", () => {
    addToCart(p.id, { color: state.modalColor, size: state.modalSize, qty: state.modalQty });
    closeProductModal();
    openCheckout();
  });

  $$(".pm-tab", panel).forEach((tab) => tab.addEventListener("click", () => {
    $$(".pm-tab", panel).forEach((t) => t.classList.remove("active"));
    $$(".pm-tab-panel", panel).forEach((pnl) => pnl.classList.remove("active"));
    tab.classList.add("active");
    $(`[data-panel="${tab.dataset.tab}"]`, panel).classList.add("active");
  }));

  const relatedGrid = $(".related-grid", panel);
  if (relatedGrid) bindProductGridEvents(relatedGrid);
}

/* ---------------------------------------------------------------------- */
/* PRODUCT GRID DELEGATED EVENTS (shared across grids)                      */
/* ---------------------------------------------------------------------- */

function bindProductGridEvents(container) {
  container.addEventListener("click", (e) => {
    const wishBtn = e.target.closest(".pc-wish");
    const quickBtn = e.target.closest(".pc-quick");
    const addBtn = e.target.closest(".pc-add");
    const compareCheck = e.target.closest(".pc-compare-check");
    const card = e.target.closest(".product-card");

    if (wishBtn) { e.stopPropagation(); toggleWishlist(wishBtn.dataset.id); return; }
    if (compareCheck) { e.stopPropagation(); toggleCompare(compareCheck.dataset.id, compareCheck.checked); return; }
    if (quickBtn) { e.stopPropagation(); openProductModal(quickBtn.dataset.id); return; }
    if (addBtn) { e.stopPropagation(); addToCart(addBtn.dataset.id); return; }
    if (card) openProductModal(card.dataset.id);
  });

  container.addEventListener("keydown", (e) => {
    const card = e.target.closest(".product-card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openProductModal(card.dataset.id);
    }
  });
}

function initGlobalProductEvents() {
  ["productGrid", "flashGrid", "newGrid", "recentGrid"].forEach((id) => {
    bindProductGridEvents(document.getElementById(id));
  });
}

/* ---------------------------------------------------------------------- */
/* PRODUCT COMPARISON                                                        */
/* ---------------------------------------------------------------------- */

function toggleCompare(id, checked) {
  id = Number(id);
  if (checked) {
    if (state.compare.length >= 3) {
      showToast("You can compare up to 3 products", "✕");
      $$(`.pc-compare-check[data-id="${id}"]`).forEach((c) => (c.checked = false));
      return;
    }
    state.compare.push(id);
  } else {
    state.compare = state.compare.filter((i) => i !== id);
  }
  $$(`.pc-compare-check[data-id="${id}"]`).forEach((c) => (c.checked = checked));
  updateCompareBar();
}

function updateCompareBar() {
  const bar = $("#compareBar");
  const text = $("#compareText");
  if (state.compare.length === 0) { bar.classList.remove("show"); bar.hidden = true; return; }
  bar.hidden = false;
  requestAnimationFrame(() => bar.classList.add("show"));
  text.textContent = `${state.compare.length} product${state.compare.length > 1 ? "s" : ""} selected`;
}

function renderCompareModal() {
  const items = state.compare.map(findProduct).filter(Boolean);
  const panel = $("#comparePanel");
  if (!items.length) { panel.innerHTML = "<p>No products selected.</p>"; return; }
  panel.innerHTML = `
    <h2>Compare Products</h2>
    <table class="compare-table">
      <tr><th></th>${items.map((p) => `<td><img src="${p.image}" alt="${p.name}"><div>${p.name}</div></td>`).join("")}</tr>
      <tr><th>Price</th>${items.map((p) => `<td>${money(p.price)}</td>`).join("")}</tr>
      <tr><th>Rating</th>${items.map((p) => `<td>${p.rating} / 5</td>`).join("")}</tr>
      <tr><th>Category</th>${items.map((p) => `<td>${p.category}</td>`).join("")}</tr>
      <tr><th>Availability</th>${items.map((p) => `<td>${p.stock ? "In Stock" : "Out of Stock"}</td>`).join("")}</tr>
      <tr><th>Reviews</th>${items.map((p) => `<td>${p.reviews}</td>`).join("")}</tr>
    </table>
    <button class="btn btn-ghost" id="compareCloseBtn" style="margin-top:20px">Close</button>
  `;
  $("#compareCloseBtn").addEventListener("click", () => $("#compareModal").classList.remove("open"));
}

function initCompare() {
  $("#compareOpen").addEventListener("click", () => {
    renderCompareModal();
    $("#compareModal").classList.add("open");
  });
  $("#compareClear").addEventListener("click", () => {
    state.compare = [];
    $$(".pc-compare-check").forEach((c) => (c.checked = false));
    updateCompareBar();
  });
  $("#compareModal").addEventListener("click", (e) => { if (e.target.id === "compareModal") e.currentTarget.classList.remove("open"); });
}

/* ---------------------------------------------------------------------- */
/* CHECKOUT                                                                  */
/* ---------------------------------------------------------------------- */

const checkoutState = { step: 1, delivery: "standard", payment: "card", contact: {}, shipping: {} };

function checkoutStepHTML(step) {
  const t = cartTotals();
  if (step === 1) {
    return `
      <p class="co-step-title">Contact</p>
      <div class="form-grid">
        <div class="form-field full"><label for="coName">Full Name</label><input id="coName" required></div>
        <div class="form-field"><label for="coEmail">Email</label><input id="coEmail" type="email" required></div>
        <div class="form-field"><label for="coPhone">Phone</label><input id="coPhone" type="tel" required></div>
      </div>`;
  }
  if (step === 2) {
    return `
      <p class="co-step-title">Shipping</p>
      <div class="form-grid">
        <div class="form-field full"><label for="coAddress">Address</label><input id="coAddress" required></div>
        <div class="form-field"><label for="coCity">City</label><input id="coCity" required></div>
        <div class="form-field"><label for="coState">Province / State</label><input id="coState" required></div>
        <div class="form-field"><label for="coZip">Postal Code</label><input id="coZip" required></div>
        <div class="form-field"><label for="coCountry">Country</label><input id="coCountry" required></div>
      </div>`;
  }
  if (step === 3) {
    return `
      <p class="co-step-title">Delivery</p>
      <div class="option-card ${checkoutState.delivery === "standard" ? "active" : ""}" data-delivery="standard">
        <div><div class="oc-name">Standard Delivery</div><div class="oc-desc">4–6 business days</div></div>
        <span class="oc-price">Free</span>
      </div>
      <div class="option-card ${checkoutState.delivery === "express" ? "active" : ""}" data-delivery="express">
        <div><div class="oc-name">Express Delivery</div><div class="oc-desc">1–2 business days</div></div>
        <span class="oc-price">$18.00</span>
      </div>`;
  }
  if (step === 4) {
    return `
      <p class="co-step-title">Payment</p>
      <div class="option-card ${checkoutState.payment === "card" ? "active" : ""}" data-payment="card">
        <div><div class="oc-name">Credit / Debit Card</div><div class="oc-desc">Visa, Mastercard, Amex</div></div>
      </div>
      <div class="option-card ${checkoutState.payment === "cod" ? "active" : ""}" data-payment="cod">
        <div><div class="oc-name">Cash on Delivery</div><div class="oc-desc">Pay when your order arrives</div></div>
      </div>
      <div class="option-card ${checkoutState.payment === "ewallet" ? "active" : ""}" data-payment="ewallet">
        <div><div class="oc-name">E-Wallet</div><div class="oc-desc">GCash, Maya, and more</div></div>
      </div>
      <div class="co-summary">
        <div class="sum-row"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
        <div class="sum-row"><span>Delivery</span><span>${checkoutState.delivery === "express" ? "$18.00" : "Free"}</span></div>
        <div class="sum-row"><span>Estimated Tax</span><span>${money(t.tax)}</span></div>
        <div class="sum-row total"><span>Total</span><span>${money(t.total + (checkoutState.delivery === "express" ? 18 : 0))}</span></div>
      </div>`;
  }
  return "";
}

function renderCheckout() {
  if (!state.cart.length) {
    $("#checkoutPanel").innerHTML = `
      <div class="success-screen">
        <p class="empty-title">Your cart is empty.</p>
        <p class="empty-sub">Add something you love before checking out.</p>
        <button class="btn btn-primary" id="coEmptyClose" style="margin-top:20px">Continue Shopping</button>
      </div>`;
    $("#coEmptyClose").addEventListener("click", closeCheckout);
    return;
  }

  const panel = $("#checkoutPanel");
  panel.innerHTML = `
    <div class="co-head">
      <h2>Checkout</h2>
      <button class="co-close" id="coClose" aria-label="Close checkout">
        <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="co-steps">
      ${[1, 2, 3, 4].map((s) => `<div class="co-step ${checkoutState.step >= s ? "done" : ""}"></div>`).join("")}
    </div>
    <div class="co-body" id="coBody">${checkoutStepHTML(checkoutState.step)}</div>
    <div class="co-body" style="padding-top:0">
      <div class="co-footer">
        ${checkoutState.step > 1 ? `<button class="btn btn-ghost" id="coBack">Back</button>` : "<span></span>"}
        <button class="btn btn-primary" id="coNext">${checkoutState.step === 4 ? "Place Order" : "Continue"}</button>
      </div>
    </div>`;

  $("#coClose").addEventListener("click", closeCheckout);
  $("#coNext").addEventListener("click", handleCheckoutNext);
  const backBtn = $("#coBack");
  if (backBtn) backBtn.addEventListener("click", () => { checkoutState.step--; renderCheckout(); });

  $$(".option-card[data-delivery]", panel).forEach((c) => c.addEventListener("click", () => {
    checkoutState.delivery = c.dataset.delivery;
    renderCheckout();
  }));
  $$(".option-card[data-payment]", panel).forEach((c) => c.addEventListener("click", () => {
    checkoutState.payment = c.dataset.payment;
    renderCheckout();
  }));
}

function validateStep1() {
  const name = $("#coName"), email = $("#coEmail"), phone = $("#coPhone");
  let valid = true;
  [name, email, phone].forEach((f) => {
    if (!f.value.trim() || (f.type === "email" && !f.value.includes("@"))) { f.classList.add("error"); valid = false; }
    else f.classList.remove("error");
  });
  if (valid) checkoutState.contact = { name: name.value, email: email.value, phone: phone.value };
  return valid;
}
function validateStep2() {
  const ids = ["coAddress", "coCity", "coState", "coZip", "coCountry"];
  let valid = true;
  const data = {};
  ids.forEach((id) => {
    const f = $("#" + id);
    if (!f.value.trim()) { f.classList.add("error"); valid = false; }
    else { f.classList.remove("error"); data[id] = f.value; }
  });
  if (valid) checkoutState.shipping = data;
  return valid;
}

function handleCheckoutNext() {
  if (checkoutState.step === 1 && !validateStep1()) { showToast("Please complete all fields", "✕"); return; }
  if (checkoutState.step === 2 && !validateStep2()) { showToast("Please complete all fields", "✕"); return; }

  if (checkoutState.step < 4) {
    checkoutState.step++;
    renderCheckout();
  } else {
    placeOrder();
  }
}

function placeOrder() {
  const orderNum = "LUMA-" + Math.floor(10000 + Math.random() * 89999);
  $("#checkoutPanel").innerHTML = `
    <div class="success-screen">
      <div class="success-check">✓</div>
      <h2>Order Confirmed</h2>
      <p>Thank you for shopping with LUMA.</p>
      <p class="order-num">Order #${orderNum}</p>
      <p>Your order has been successfully placed.</p>
      <button class="btn btn-primary" id="continueShopping" style="margin-top:14px">Continue Shopping</button>
    </div>`;
  state.cart = [];
  saveState(STORAGE_KEYS.cart, state.cart);
  updateCounters();
  checkoutState.step = 1;
  $("#continueShopping").addEventListener("click", closeCheckout);
  showToast("Order successfully placed");
}

function openCheckout() {
  checkoutState.step = 1;
  renderCheckout();
  $("#checkoutModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCheckout() {
  $("#checkoutModal").classList.remove("open");
  document.body.style.overflow = "";
  refreshAllProductGrids();
}

/* ---------------------------------------------------------------------- */
/* ACCOUNT                                                                   */
/* ---------------------------------------------------------------------- */

function renderAccount() {
  const panel = $("#accountPanel");
  if (state.user) {
    panel.innerHTML = `
      <button class="pm-close" id="accClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
      <h2>Welcome back, ${state.user.name.split(" ")[0]}</h2>
      <p class="sub">${state.user.email}</p>
      <button class="btn btn-ghost btn-full" id="signOutBtn">Sign Out</button>`;
    $("#signOutBtn").addEventListener("click", () => {
      state.user = null;
      saveState(STORAGE_KEYS.user, null);
      renderAccount();
      showToast("Signed out");
    });
  } else {
    panel.innerHTML = `
      <button class="pm-close" id="accClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
      <h2>Sign in to LUMA</h2>
      <p class="sub">Demo account — no password required.</p>
      <form class="account-form" id="accountForm">
        <div class="form-field"><label for="accName">Name</label><input id="accName" required></div>
        <div class="form-field"><label for="accEmail">Email</label><input id="accEmail" type="email" required></div>
        <button class="btn btn-primary btn-full" type="submit">Continue</button>
      </form>`;
    $("#accountForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#accName").value.trim();
      const email = $("#accEmail").value.trim();
      if (!name || !email.includes("@")) { showToast("Please enter valid details", "✕"); return; }
      state.user = { name, email };
      saveState(STORAGE_KEYS.user, state.user);
      renderAccount();
      showToast(`Welcome, ${name.split(" ")[0]}`);
    });
  }
  $("#accClose").addEventListener("click", () => $("#accountModal").classList.remove("open"));
}

function initAccount() {
  $("#accountBtn").addEventListener("click", () => {
    renderAccount();
    $("#accountModal").classList.add("open");
  });
  $("#accountModal").addEventListener("click", (e) => { if (e.target.id === "accountModal") e.currentTarget.classList.remove("open"); });
}

/* ---------------------------------------------------------------------- */
/* THEME                                                                     */
/* ---------------------------------------------------------------------- */

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  saveState(STORAGE_KEYS.theme, state.theme);
}

function initTheme() {
  applyTheme();
  $("#themeBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });
}

/* ---------------------------------------------------------------------- */
/* COUNTDOWN                                                                  */
/* ---------------------------------------------------------------------- */

function initCountdown() {
  const target = Date.now() + (2 * 86400 + 14 * 3600 + 37 * 60 + 22) * 1000;
  function tick() {
    let diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000); diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000); diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);
    $("#cd-days").textContent = String(days).padStart(2, "0");
    $("#cd-hours").textContent = String(hours).padStart(2, "0");
    $("#cd-mins").textContent = String(mins).padStart(2, "0");
    $("#cd-secs").textContent = String(secs).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------------------------------------------------------------------- */
/* TESTIMONIALS CAROUSEL                                                      */
/* ---------------------------------------------------------------------- */

function renderTestimonials() {
  const track = $("#testimonialTrack");
  const dots = $("#testimonialDots");
  track.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testimonial-slide">
      <span class="stars">★★★★★</span>
      <p class="quote">"${t.text}"</p>
      <p class="who">${t.name}<span>${t.role}</span></p>
    </div>`).join("");
  dots.innerHTML = TESTIMONIALS.map((_, i) => `<button data-i="${i}" class="${i === 0 ? "active" : ""}" aria-label="Go to testimonial ${i + 1}"></button>`).join("");
  updateTestimonialPosition();
}

function updateTestimonialPosition() {
  $("#testimonialTrack").style.transform = `translateX(-${state.testimonialIndex * 100}%)`;
  $$("#testimonialDots button").forEach((d, i) => d.classList.toggle("active", i === state.testimonialIndex));
}

function initTestimonials() {
  renderTestimonials();
  $("#testNext").addEventListener("click", () => { state.testimonialIndex = (state.testimonialIndex + 1) % TESTIMONIALS.length; updateTestimonialPosition(); });
  $("#testPrev").addEventListener("click", () => { state.testimonialIndex = (state.testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length; updateTestimonialPosition(); });
  $("#testimonialDots").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") { state.testimonialIndex = Number(e.target.dataset.i); updateTestimonialPosition(); }
  });
  setInterval(() => {
    state.testimonialIndex = (state.testimonialIndex + 1) % TESTIMONIALS.length;
    updateTestimonialPosition();
  }, 6000);
}

/* ---------------------------------------------------------------------- */
/* NEWSLETTER                                                                 */
/* ---------------------------------------------------------------------- */

function initNewsletter() {
  $("#newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("#newsletterEmail");
    if (!input.value.includes("@")) { showToast("Enter a valid email", "✕"); return; }
    input.value = "";
    showToast("Subscribed successfully");
  });
}

/* ---------------------------------------------------------------------- */
/* NAVIGATION / SCROLL / MOBILE MENU / BACK TO TOP                            */
/* ---------------------------------------------------------------------- */

function initNav() {
  const navbar = $("#navbar");
  const mobileMenu = $("#mobileMenu");
  const backTop = $("#backTop");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
    backTop.hidden = window.scrollY < 500;
  }, { passive: true });

  $("#logoBtn").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  $("#menuBtn").addEventListener("click", () => mobileMenu.classList.toggle("open"));
  $$(".mobile-menu a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

  const sections = $$("section[id], .hero[id]");
  const navLinks = $$(".nav-link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.toggle("active", l.dataset.nav === entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => observer.observe(s));

  $$('.footer-col a[data-static]').forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("This page is coming soon");
  }));
}

/* ---------------------------------------------------------------------- */
/* DRAWER / MODAL GLOBAL CLOSE EVENTS                                         */
/* ---------------------------------------------------------------------- */

function initDrawersAndModals() {
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);

  $("#wishlistBtn").addEventListener("click", openWishlist);
  $("#wishlistClose").addEventListener("click", closeWishlist);
  $("#wishlistOverlay").addEventListener("click", closeWishlist);

  $("#productModal").addEventListener("click", (e) => { if (e.target.id === "productModal") closeProductModal(); });
  $("#checkoutModal").addEventListener("click", (e) => { if (e.target.id === "checkoutModal") closeCheckout(); });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeProductModal();
    closeCart();
    closeWishlist();
    closeCheckout();
    $("#accountModal").classList.remove("open");
    $("#compareModal").classList.remove("open");
  });
}

/* ---------------------------------------------------------------------- */
/* LOADER                                                                     */
/* ---------------------------------------------------------------------- */

function hideLoader() {
  const loader = $("#loader");
  setTimeout(() => loader.classList.add("hide"), 550);
}

/* ---------------------------------------------------------------------- */
/* INITIALIZATION                                                            */
/* ---------------------------------------------------------------------- */

function init() {
  loadAllState();
  applyTheme();

  refreshAllProductGrids();
  initGlobalProductEvents();

  initCategoryBar();
  initFilters();
  initSearch();
  initCartEvents();
  initWishlistEvents();
  initCompare();
  initAccount();
  initTheme();
  initCountdown();
  initTestimonials();
  initNewsletter();
  initNav();
  initDrawersAndModals();

  updateCounters();
  hideLoader();
}

document.addEventListener("DOMContentLoaded", init);