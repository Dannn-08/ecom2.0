export default function NewArrivals() {
  return (
    <>
      <div className="loader" id="loader" aria-hidden="true">
        <div className="loader-mark">LUMA</div>
        <div className="loader-bar"><span></span></div>
      </div>

      <div className="bg" aria-hidden="true">
        <span className="blob blob-a"></span>
        <span className="blob blob-b"></span>
        <span className="blob blob-c"></span>
        <div className="bg-grain"></div>
      </div>

      <a className="skip-link" href="#main">Skip to content</a>

      <header className="navbar" id="navbar">
        <div className="nav-inner glass">
          <button className="nav-logo" id="logoBtn" aria-label="LUMA home">LUMA</button>

          <nav className="nav-links" aria-label="Primary">
            <a href="#home" className="nav-link active" data-nav="home">Home</a>
            <a href="#shop" className="nav-link" data-nav="shop">Shop</a>
            <a href="#collection" className="nav-link" data-nav="collection">Collections</a>
            <a href="#new" className="nav-link" data-nav="new">New Arrivals</a>
            <a href="#about" className="nav-link" data-nav="about">About</a>
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" id="searchBtn" aria-label="Search products">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <button className="icon-btn" id="wishlistBtn" aria-label="Open wishlist">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7.5-4.6-10.1-9.3C.3 8.4 1.9 5 5.3 5c2 0 3.4 1.1 4.1 2.3.4.6.6 1 .6 1s.2-.4.6-1C11.3 6.1 12.7 5 14.7 5c3.4 0 5 3.4 3.4 6.7C19.5 16.4 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              <span className="badge" id="wishlistCount" hidden>0</span>
            </button>
            <button className="icon-btn" id="cartBtn" aria-label="Open cart">
              <svg viewBox="0 0 24 24" fill="none"><path d="M3 6h2l1.6 10.6A2 2 0 0 0 8.6 18.4h8.8a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="21" r="1.4" fill="currentColor"/><circle cx="18" cy="21" r="1.4" fill="currentColor"/></svg>
              <span className="badge" id="cartCount" hidden>0</span>
            </button>
            <button className="icon-btn" id="accountBtn" aria-label="Account">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="2"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <button className="icon-btn" id="themeBtn" aria-label="Toggle theme">
              <svg viewBox="0 0 24 24" fill="none" id="themeIcon"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
            </button>
            <button className="icon-btn mobile-only" id="menuBtn" aria-label="Open menu">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu glass" id="mobileMenu">
        <a href="#home" data-nav="home">Home</a>
        <a href="#shop" data-nav="shop">Shop</a>
        <a href="#collection" data-nav="collection">Collections</a>
        <a href="#new" data-nav="new">New Arrivals</a>
        <a href="#about" data-nav="about">About</a>
      </div>

      <main id="main">
        <section className="new-arrivals" id="new">
          <div className="section-head">
            <div>
              <p className="eyebrow">Fresh designs. Just landed.</p>
              <h2>New Arrivals</h2>
            </div>
            <button className="btn btn-glass" id="viewAllNew">View All</button>
          </div>
          <div className="product-grid horizontal" id="newGrid"></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">LUMA</p>
            <p>Everything you want. Beautifully simplified.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#new">New Arrivals</a>
            <a href="#shop">Best Sellers</a>
            <a href="#collection">Collections</a>
            <a href="#shop">Sale</a>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <a href="#" data-static="contact">Contact</a>
            <a href="#" data-static="shipping">Shipping</a>
            <a href="#" data-static="returns">Returns</a>
            <a href="#" data-static="faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#" data-static="careers">Careers</a>
            <a href="#" data-static="privacy">Privacy</a>
            <a href="#" data-static="terms">Terms</a>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
            <a href="#" data-static="social">Instagram</a>
            <a href="#" data-static="social">Facebook</a>
            <a href="#" data-static="social">TikTok</a>
            <a href="#" data-static="social">X</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 LUMA. All rights reserved.</p>
        </div>
      </footer>

      <button className="back-top glass" id="backTop" aria-label="Back to top" hidden>
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className="search-overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Search products">
        <div className="search-panel glass">
          <div className="search-input-row">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <input type="text" id="searchInput" placeholder="Search products..." autoComplete="off" />
            <button className="icon-btn" id="searchClose" aria-label="Close search">
              <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <p className="search-meta" id="searchMeta"></p>
          <div className="search-results" id="searchResults"></div>
        </div>
      </div>

      <div className="modal-overlay" id="productModal" role="dialog" aria-modal="true" aria-label="Product details">
        <div className="modal-panel glass" id="productModalPanel"></div>
      </div>

      <div className="drawer-overlay" id="cartOverlay"></div>
      <aside className="drawer glass" id="cartDrawer" aria-label="Shopping cart">
        <div className="drawer-head">
          <h2>Your Cart</h2>
          <button className="icon-btn" id="cartClose" aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="drawer-body" id="cartBody"></div>
        <div className="drawer-footer" id="cartFooter"></div>
      </aside>

      <div className="drawer-overlay" id="wishlistOverlay"></div>
      <aside className="drawer glass" id="wishlistDrawer" aria-label="Wishlist">
        <div className="drawer-head">
          <h2>Your Wishlist</h2>
          <button className="icon-btn" id="wishlistClose" aria-label="Close wishlist">
            <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="drawer-body" id="wishlistBody"></div>
      </aside>

      <div className="modal-overlay" id="checkoutModal" role="dialog" aria-modal="true" aria-label="Checkout">
        <div className="modal-panel checkout-panel glass" id="checkoutPanel"></div>
      </div>

      <div className="modal-overlay" id="accountModal" role="dialog" aria-modal="true" aria-label="Account">
        <div className="modal-panel account-panel glass" id="accountPanel"></div>
      </div>

      <div className="compare-bar glass" id="compareBar" hidden>
        <span id="compareText">0 products selected</span>
        <div className="compare-bar-actions">
          <button className="btn btn-primary" id="compareOpen">Compare</button>
          <button className="btn btn-ghost" id="compareClear">Clear</button>
        </div>
      </div>
      <div className="modal-overlay" id="compareModal" role="dialog" aria-modal="true" aria-label="Compare products">
        <div className="modal-panel compare-panel glass" id="comparePanel"></div>
      </div>

      <div className="toast-container" id="toastContainer" aria-live="polite"></div>
    </>
  );
}