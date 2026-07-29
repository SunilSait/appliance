// ============================================================
//  ApplianceHub — Home Appliance Store & Service Center
//  Shared Components: Navbar + Footer
// ============================================================

(function () {
  'use strict';

  const BRAND_NAME    = 'ApplianceHub';
  const BRAND_TAGLINE = 'Your Trusted Appliance Partner';
  const CURRENT_YEAR  = new Date().getFullYear();
  const PHONE         = '+91 98400 56789';
  const EMAIL         = 'support@appliancehub.in';
  const ADDRESS       = '42 Tech Avenue, Anna Salai, Chennai — 600002';

  const NAV_LINKS = [
    { label: 'Home',     href: 'index.html' },
    { label: 'Home 2',   href: 'home2.html' },
    { label: 'About',    href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Pricing',  href: 'pricing.html' },
    { label: 'Contact',  href: 'contact.html' },
  ];

  const SOCIAL_LINKS = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram',  href: '#', label: 'Instagram' },
    { icon: 'fab fa-youtube',    href: '#', label: 'YouTube' },
    { icon: 'fab fa-x-twitter',  href: '#', label: 'X' },
  ];

  // Plug/Power Logo SVG — professional appliance theme
  const LOGO_SVG = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ahGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--logo-primary)"/>
        <stop offset="100%" stop-color="var(--logo-secondary)"/>
      </linearGradient>
    </defs>
    <!-- Rounded square body -->
    <rect x="18" y="10" width="64" height="72" rx="12" fill="url(#ahGrad)" fill-opacity="0.12" stroke="url(#ahGrad)" stroke-width="3"/>
    <!-- Power button circle -->
    <circle cx="50" cy="42" r="14" stroke="url(#ahGrad)" stroke-width="3" fill="none"/>
    <!-- Power icon -->
    <path d="M50 30 L50 38" stroke="url(#ahGrad)" stroke-width="4" stroke-linecap="round"/>
    <path d="M42 36 A12 12 0 1 0 58 36" stroke="url(#ahGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Dots at bottom (plug prongs) -->
    <circle cx="38" cy="70" r="4" fill="url(#ahGrad)"/>
    <circle cx="50" cy="70" r="4" fill="url(#ahGrad)"/>
    <circle cx="62" cy="70" r="4" fill="url(#ahGrad)"/>
  </svg>`;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // ─── Render Navbar ───────────────────────────────────────
  function renderNavbar() {
    const desktopLinks = NAV_LINKS.map(link => {
      const isActive = link.href === currentPage ||
        (currentPage === '' && link.href === 'index.html');
      return `<li><a href="${link.href}" class="nav-link${isActive ? ' active' : ''}" aria-current="${isActive ? 'page' : 'false'}">${link.label}</a></li>`;
    }).join('');

    const mobileLinks = NAV_LINKS.map(link => {
      const isActive = link.href === currentPage || (currentPage === '' && link.href === 'index.html');
      return `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
    }).join('');

    const navHTML = `
    <nav id="navbar" role="navigation" aria-label="Main navigation">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo" id="nav-logo" aria-label="${BRAND_NAME} - Home">
            ${LOGO_SVG}
            <span class="nav-logo-text">Appliance<span>Hub</span></span>
          </a>
          <ul class="nav-links" role="list">${desktopLinks}</ul>
          <div class="nav-actions">
            <button class="icon-btn dark-toggle" id="nav-dark-toggle" title="Toggle Dark Mode" aria-label="Toggle dark mode">
              <i class="fas fa-moon"></i>
            </button>
            <button class="icon-btn rtl-toggle" id="nav-rtl-toggle" title="Toggle RTL" aria-label="Toggle RTL direction">
              <i class="fas fa-exchange-alt"></i>
            </button>
            <a href="login.html" class="btn btn-secondary btn-sm" id="nav-signin">Sign In</a>
            <a href="contact.html#booking" class="btn btn-orange btn-sm btn-shine" id="nav-book">Book Service</a>
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="nav-mobile" id="nav-mobile" role="navigation" aria-label="Mobile navigation">
      ${mobileLinks}
      <div class="nav-mobile-actions">
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <button class="icon-btn dark-toggle" style="flex:1;height:42px;border-radius:var(--radius-sm);font-size:0.82rem;font-weight:600;display:flex;gap:8px;" aria-label="Toggle dark mode">
            <i class="fas fa-moon"></i> Theme
          </button>
          <button class="icon-btn rtl-toggle" style="flex:1;height:42px;border-radius:var(--radius-sm);font-size:0.82rem;font-weight:600;display:flex;gap:8px;" aria-label="Toggle RTL direction">
            <i class="fas fa-exchange-alt"></i> RTL
          </button>
        </div>
        <a href="login.html" class="btn btn-secondary btn-full" id="mobile-signin" style="margin-bottom:8px;">Sign In</a>
        <a href="contact.html#booking" class="btn btn-orange btn-full btn-shine" id="mobile-book">Book Service</a>
      </div>
    </div>`;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
      placeholder.outerHTML = navHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
  }

  // ─── Render Footer ────────────────────────────────────────
  function renderFooter() {
    const socialHTML = SOCIAL_LINKS.map(s =>
      `<a href="${s.href}" aria-label="${s.label}"><i class="${s.icon}"></i></a>`
    ).join('');

    const footerHTML = `
    <footer id="footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="footer-brand-logo" aria-label="${BRAND_NAME}">
              ${LOGO_SVG}
              <span class="footer-brand-name">Appliance<span>Hub</span></span>
            </a>
            <p class="footer-desc">${BRAND_TAGLINE} — Premium home appliances, expert repair services, and genuine warranty support delivered to your doorstep across India.</p>
            <div class="footer-social">${socialHTML}</div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <nav class="footer-links" aria-label="Quick links">
              <a href="index.html">Home</a>
              <a href="home2.html">Home 2 — Premium</a>
              <a href="about.html">About Us</a>
              <a href="services.html">Services</a>
              <a href="pricing.html">Pricing</a>
            </nav>
          </div>

          <div class="footer-col">
            <h4>Resources</h4>
            <nav class="footer-links" aria-label="Resources">
              <a href="contact.html">Contact Us</a>
              <a href="login.html">Sign In</a>
              <a href="signup.html">Sign Up</a>
              <a href="coming-soon.html">Coming Soon</a>
              <a href="404.html">404 Page</a>
            </nav>
          </div>

          <div class="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe for exclusive deals, product launches, and expert appliance tips delivered to your inbox.</p>
            <form id="newsletter-form" onsubmit="event.preventDefault();document.getElementById('newsletter-success').style.display='block';this.style.display='none';">
              <input type="email" required placeholder="your@email.com" class="form-input"/>
              <button type="submit" class="btn btn-orange btn-full btn-shine" style="margin-top:10px;">Subscribe</button>
            </form>
            <p id="newsletter-success" style="display:none;color:var(--success);font-size:0.78rem;margin-top:8px;font-weight:600;">
              <i class="fas fa-check-circle"></i> Thank you for subscribing!
            </p>
          </div>
        </div>

        <div style="padding:24px 0 16px;border-top:1px solid rgba(255,255,255,0.08);margin-top:0;">
          <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:center;margin-bottom:14px;">
            <span style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.5);font-size:0.82rem;">
              <i class="fas fa-phone" style="color:var(--secondary);"></i>${PHONE}
            </span>
            <span style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.5);font-size:0.82rem;">
              <i class="fas fa-envelope" style="color:var(--secondary);"></i>${EMAIL}
            </span>
            <span style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.5);font-size:0.82rem;">
              <i class="fas fa-map-marker-alt" style="color:var(--secondary);"></i>${ADDRESS}
            </span>
          </div>
        </div>

        <div class="footer-bottom">
          <p style="margin:0;">&copy; ${CURRENT_YEAR} ${BRAND_NAME}. All Rights Reserved.</p>
          <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Warranty Policy</a>
          </div>
        </div>
      </div>
    </footer>`;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.outerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  }

  // ─── Init ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    renderNavbar();
    renderFooter();
  });

})();
