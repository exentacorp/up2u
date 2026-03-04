// UP2U Event Agency - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== Theme Toggle =====
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  // Add click handler to all theme toggle buttons
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
  });
  
  // ===== Mobile Menu =====
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openMobileMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ===== Header Scroll Effect =====
  const header = document.querySelector('.header');
  
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // ===== Hero Slider =====
  const slides = document.querySelectorAll('.hero-slide');
  const titles = document.querySelectorAll('.hero-title');
  const subtitles = document.querySelectorAll('.hero-subtitle');
  const indicators = document.querySelectorAll('.hero-indicator');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Slides
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    // Titles
    titles.forEach((title, i) => {
      title.classList.toggle('active', i === index);
    });
    
    // Subtitles
    subtitles.forEach((subtitle, i) => {
      subtitle.classList.toggle('active', i === index);
    });
    
    // Indicators
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function stopSlider() {
    clearInterval(slideInterval);
  }

  // Initialize slider
  if (slides.length > 0) {
    showSlide(0);
    startSlider();
    
    // Click on indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        stopSlider();
        showSlide(index);
        startSlider();
      });
    });
  }

  // ===== Animate on Scroll =====
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  animateElements.forEach(el => observer.observe(el));

  // ===== Stats Counter Animation =====
  const statValues = document.querySelectorAll('.stat-value[data-count]');
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += stepValue;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + formatNumber(Math.floor(current)) + suffix;
        }, duration / steps);
        
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(el => statsObserver.observe(el));

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  }

  // ===== Scroll to Top =====
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ===== Contact Form =====
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Here you would normally send data to server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
      this.reset();
    });
  }

  // ===== Cases Filter =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      // Filter cards (support multiple categories)
      caseCards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===== Hero Buttons Scroll =====
  const heroContactBtn = document.querySelector('.hero-btn-contact');
  const heroServicesBtn = document.querySelector('.hero-btn-services');
  
  if (heroContactBtn) {
    heroContactBtn.addEventListener('click', () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'contacts.html';
      }
    });
  }
  
  if (heroServicesBtn) {
    heroServicesBtn.addEventListener('click', () => {
      const servicesSection = document.querySelector('#services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'services.html';
      }
    });
  }

});
