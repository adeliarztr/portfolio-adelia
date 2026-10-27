/**
 * Archival Portfolio Web Script
 * Adelia Rizki Eka Putri
 * — Smooth animations & micro-interactions upgrade
 */

// ─── Project Data for Modal Dossier Inspection ───────────────────────────────
const projectData = {
  1: {
    title: "Lab IVVS Information System — Enterprise Portal",
    category: "CASE STUDY #01 • UI/UX & SYSTEM ANALYSIS",
    role: "System Analyst & UI/UX Designer",
    timeline: "2025",
    description: "Perancangan komprehensif alur sistem informasi Laboratorium IVV (Image Video and Vision System). Membedah kebutuhan operasional dua peran utama: Admin Lab untuk verifikasi berkas dan Kepala Lab untuk otorisasi akses fasilitas serta pelaporan periodik.",
    keyFeatures: [
      "Multi-Role Permission Matrix: Alur kerja terpisah antara staf operasional dan pengambil kebijakan.",
      "Verification Pipeline: Status pendaftaran real-time dengan tahapan verifikasi transparan bagi mahasiswa.",
      "Audit Trail & Log: Rekapitulasi peminjaman alat dan aktivitas riset dengan ekspor data terstruktur.",
      "High-Fidelity Wireframes: Prototipe interaktif Figma dengan sistem komponen atomik."
    ],
    techStack: ["Figma", "Wireframing", "BPMN Process Modeling", "User Flow Mapping", "SRS Documentation"],
    link: "https://github.com/RyuuShiro30/PBL-IVSS"
  },
  2: {
    title: "MOYA App — Mental Health & Mood Tracker",
    category: "CASE STUDY #02 • MOBILE HEALTHCARE",
    role: "Mobile UI/UX & Flutter Developer",
    timeline: "2026",
    description: "MOYA merupakan aplikasi mobile mindful living untuk pencatatan emosi harian, journaling, serta pemetaan tren kesehatan mental pengguna. Dirancang dengan nuansa warna pastel hangat yang menenangkan pikiran dan interaksi sentuhan yang menyenangkan.",
    keyFeatures: [
      "Daily Emotion Logging: Pilihan avatar ekspresi emosi harian dengan memo refleksi singkat.",
      "Calendar Mood Matrix: Visualisasi kalender bulanan yang menunjukkan fluktuasi suasana hati secara intuitif.",
      "Realtime Cloud Sync: Sinkronisasi data aman menggunakan Firebase Firestore & Authentication.",
      "Calm & Accessible UI: Micro-interactions yang halus, kontras warna yang nyaman untuk penggunaan malam hari."
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Figma", "Provider / BLoC"],
    link: "https://github.com/FinaIsma/moya_pbl2"
  },
  3: {
    title: "PyBeginner — Platform Pembelajaran Python",
    category: "CASE STUDY #03 • WEB & EDUCATION",
    role: "Lead UI/UX & Module Developer",
    timeline: "2026 - Sekarang",
    description: "PyBeginner dirancang untuk mengatasi hambatan belajar mahasiswa dan pemula yang baru pertama kali mengenal sintaks pemrograman Python. Dengan pendekatan gamifikasi dan modul interaktif, pengguna dapat menulis kode langsung di peramban dan memperoleh evaluasi otomatis secara real-time.",
    keyFeatures: [
      "Automated Code Evaluation: Menjalankan validasi input-output skrip Python tanpa perlu setup lokal.",
      "Usability-Tested UI/UX: Mengurangi cognitive load pemula melalui navigasi berbasis milestone & badge.",
      "Interactive Code Sandbox: Editor ramah pengguna dengan sintaks highlighting bergaya terminal arkade.",
      "Structured Backlog & Sprints: Menggunakan metodologi Scrum dengan user story mapping terperinci."
    ],
    techStack: ["Figma", "Python", "Flask", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Fii2X05/Pybeginner"
  },
  4: {
    title: "PLFM Radio Visual Assets & Brand Campaign",
    category: "CASE STUDY #04 • BRAND & CREATIVE MEDIA",
    role: "Staff Creative Media & Brand Director",
    timeline: "2024 - 2025",
    description: "Menghidupkan identitas visual UKM Radio Kampus PLFM Polinema melalui rangkaian kampanye media sosial, materi acara tahunan Dies Natalis & Open Air, serta identitas program siaran podcast orisinal.",
    keyFeatures: [
      "Consistent Brand Styleguide: Standardisasi palet warna retro-modern, tata tipografi, dan elemen visual vinyl.",
      "Instagram Content Strategy: Feed carousel edukatif, kuis musik mingguan, dan template siaran on-air.",
      "Event Collaterals: Desain twibbon interaktif, poster cetak, merchandise, dan banner panggung.",
      "Audience Engagement: Peningkatan interaksi dan follower akun resmi PLFM Polinema secara terukur."
    ],
    techStack: ["Figma", "Canva", "Creative Direction", "Typography"],
    link: null
  }
};

// ─── Scroll Progress Bar Indicator ───────────────────────────────────────────
function initScrollProgressBar() {
  let bar = document.getElementById('scroll-progress-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scroll-progress-bar';
    document.body.appendChild(bar);
  }

  const updateProgress = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTotal > 0 ? (window.pageYOffset / scrollTotal) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ─── Scroll-triggered Reveal (semua section elements) ─────────────────────────
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Add motion-ready class so CSS starts tracking animations
  document.body.classList.add('motion-ready');

  // 1. Project cards — alternating left/right dynamic slide-in
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, i) => {
    card.classList.add('reveal-on-scroll');
    if (i % 2 === 0) {
      card.classList.add('reveal-left');
    } else {
      card.classList.add('reveal-right');
    }
    card.style.setProperty('--reveal-delay', `${(i % 2) * 120}ms`);
  });

  // 2. Section headers (h2, subtitle, section indicator lines)
  const headers = document.querySelectorAll(
    '#about h2, #projects h2, #contact h2, ' +
    '#about .text-tertiary, #projects .text-primary, #contact .text-tertiary, ' +
    '#about p.font-body-sm, #projects p.font-body-sm'
  );
  headers.forEach((el, i) => {
    el.classList.add('reveal-on-scroll');
    el.style.setProperty('--reveal-delay', `${(i % 3) * 60}ms`);
  });

  // 3. About section main binder card & tabs
  const aboutBinder = document.querySelector('#about .relative.bg-primary-container');
  if (aboutBinder) {
    aboutBinder.classList.add('reveal-on-scroll');
    aboutBinder.style.setProperty('--reveal-delay', '80ms');
  }

  // 4. Tech stack columns (when in Tech tab or initially)
  document.querySelectorAll('#about-content-tech .p-4').forEach((el, i) => {
    el.classList.add('reveal-on-scroll');
    el.style.setProperty('--reveal-delay', `${i * 90}ms`);
  });

  // 5. Contact Section — Left column info & Right column form card
  const contactLeft = document.querySelector('#contact .lg\\:col-span-5');
  const contactRight = document.querySelector('#contact .lg\\:col-span-7');
  if (contactLeft) {
    contactLeft.classList.add('reveal-on-scroll', 'reveal-left');
    contactLeft.style.setProperty('--reveal-delay', '60ms');
  }
  if (contactRight) {
    contactRight.classList.add('reveal-on-scroll', 'reveal-right');
    contactRight.style.setProperty('--reveal-delay', '140ms');
  }

  // 6. Hero 4 mini-preview cards staggered entrance
  document.querySelectorAll('#hero .grid.grid-cols-2 > div').forEach((el, i) => {
    el.classList.add('reveal-on-scroll');
    el.style.setProperty('--reveal-delay', `${200 + i * 90}ms`);
  });

  // IntersectionObserver — trigger as soon as 10% enters viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      // Check if element is already in viewport on initial load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Element is already visible on load
        setTimeout(() => el.classList.add('is-visible'), 100);
      } else {
        observer.observe(el);
      }
    });
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
  }
}


// ─── Tab Switching (About Me Binder) — smooth crossfade ──────────────────────
function switchAboutTab(tab) {
  const storyContent = document.getElementById('about-content-story');
  const techContent  = document.getElementById('about-content-tech');
  const storyBtn     = document.getElementById('tab-story-btn');
  const techBtn      = document.getElementById('tab-tech-btn');

  if (!storyContent || !techContent || !storyBtn || !techBtn) return;

  const showEl  = tab === 'story' ? storyContent : techContent;
  const hideEl  = tab === 'story' ? techContent  : storyContent;
  const activeBtn   = tab === 'story' ? storyBtn : techBtn;
  const inactiveBtn = tab === 'story' ? techBtn  : storyBtn;

  // Crossfade out → swap → fade in
  hideEl.style.transition = 'opacity 180ms ease, transform 180ms ease';
  hideEl.style.opacity    = '0';
  hideEl.style.transform  = 'translateY(6px)';

  setTimeout(() => {
    hideEl.classList.add('hidden');
    hideEl.classList.remove('block');
    hideEl.style.opacity   = '';
    hideEl.style.transform = '';

    showEl.classList.remove('hidden');
    showEl.classList.add('block');
    showEl.style.opacity   = '0';
    showEl.style.transform = 'translateY(6px)';
    showEl.style.transition = 'opacity 220ms ease, transform 220ms ease';

    requestAnimationFrame(() => {
      showEl.style.opacity   = '1';
      showEl.style.transform = 'translateY(0)';
    });
  }, 180);

  activeBtn.className   = 'px-5 py-2 rounded-t-lg border-t border-l border-r border-on-surface bg-surface text-on-surface font-label-md font-bold shadow-[-1px_-1px_0px_#1c1c0d] transition-all';
  inactiveBtn.className = 'px-5 py-2 rounded-t-lg border-t border-l border-r border-on-surface bg-secondary-container text-on-secondary-fixed font-label-md font-bold transition-all hover:bg-secondary-fixed';
}

// ─── Project Filter — animated card shuffle ───────────────────────────────────
function filterProjects(category) {
  const allCards       = document.querySelectorAll('.project-card');
  const filterAllBtn   = document.getElementById('filter-all');
  const filterFeatBtn  = document.getElementById('filter-featured');

  if (!filterAllBtn || !filterFeatBtn) return;

  // Phase 1: fade all cards out
  allCards.forEach(c => {
    c.style.transition = 'opacity 160ms ease, transform 160ms ease';
    c.style.opacity    = '0';
    c.style.transform  = 'translateY(8px) scale(0.97)';
  });

  setTimeout(() => {
    // Phase 2: show/hide based on filter
    allCards.forEach(c => {
      const show = category === 'all' || c.getAttribute('data-category') === 'featured';
      if (show) {
        c.style.display = 'flex';
        c.classList.remove('hidden');
      } else {
        c.style.display = 'none';
        c.classList.add('hidden');
      }
    });

    // Phase 3: fade visible cards back in with stagger
    let visibleIndex = 0;
    allCards.forEach(c => {
      if (c.style.display !== 'none') {
        const delay = visibleIndex * 50;
        visibleIndex++;
        setTimeout(() => {
          c.style.transition = 'opacity 220ms ease, transform 220ms cubic-bezier(.2,.8,.2,1)';
          c.style.opacity    = '1';
          c.style.transform  = 'translateY(0) scale(1)';
        }, delay);
      }
    });
  }, 160);

  // Update button states
  if (category === 'all') {
    filterAllBtn.className  = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-secondary-container text-on-secondary-fixed font-label-md font-bold shadow-[1px_1px_0px_#1c1c0d] transition-all';
    filterFeatBtn.className = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-surface-container-high text-on-surface font-label-md font-bold hover:bg-surface-variant transition-all';
  } else {
    filterFeatBtn.className = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-tertiary text-on-tertiary font-label-md font-bold shadow-[1px_1px_0px_#1c1c0d] transition-all';
    filterAllBtn.className  = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-surface-container-high text-on-surface font-label-md font-bold hover:bg-surface-variant transition-all';
  }
}

// ─── Modal — smooth open/close dengan scale + fade ────────────────────────────
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  document.getElementById('modal-category').innerText    = data.category;
  document.getElementById('modal-title').innerText       = data.title;
  document.getElementById('modal-role').innerText        = data.role;
  document.getElementById('modal-timeline').innerText    = data.timeline;
  document.getElementById('modal-description').innerText = data.description;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  data.keyFeatures.forEach((feat, i) => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2';
    li.style.opacity = '0';
    li.style.transform = 'translateX(-8px)';
    li.innerHTML = `<span class="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>${feat}</span>`;
    featuresList.appendChild(li);
    // Stagger each feature item
    setTimeout(() => {
      li.style.transition = 'opacity 250ms ease, transform 250ms ease';
      li.style.opacity    = '1';
      li.style.transform  = 'translateX(0)';
    }, 120 + i * 60);
  });

  const tagsList = document.getElementById('modal-tags');
  tagsList.innerHTML = '';
  data.techStack.forEach((tag, i) => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-xs border border-outline-variant font-bold';
    span.style.opacity   = '0';
    span.style.transform = 'scale(0.85)';
    span.innerText = tag;
    tagsList.appendChild(span);
    setTimeout(() => {
      span.style.transition = 'opacity 200ms ease, transform 200ms cubic-bezier(.2,.8,.2,1)';
      span.style.opacity    = '1';
      span.style.transform  = 'scale(1)';
    }, 200 + i * 40);
  });

  const linkBtn = document.getElementById('modal-link');
  if (linkBtn) {
    if (data.link) {
      linkBtn.href = data.link;
      linkBtn.classList.remove('hidden');
      linkBtn.classList.add('inline-flex');
    } else {
      linkBtn.classList.add('hidden');
      linkBtn.classList.remove('inline-flex');
    }
  }

  const modal    = document.getElementById('project-modal');
  const modalBox = modal.querySelector('[id="modal-box"], .modal-box, [role="dialog"]') || modal.firstElementChild?.firstElementChild;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  // Animate overlay + modal box
  modal.style.opacity = '0';
  if (modalBox) {
    modalBox.style.opacity   = '0';
    modalBox.style.transform = 'scale(0.94) translateY(16px)';
  }
  requestAnimationFrame(() => {
    modal.style.transition   = 'opacity 220ms ease';
    modal.style.opacity      = '1';
    if (modalBox) {
      modalBox.style.transition = 'opacity 280ms ease, transform 280ms cubic-bezier(.2,.8,.2,1)';
      modalBox.style.opacity    = '1';
      modalBox.style.transform  = 'scale(1) translateY(0)';
    }
  });
}

function closeProjectModal() {
  const modal    = document.getElementById('project-modal');
  if (!modal) return;

  const modalBox = modal.querySelector('[id="modal-box"], .modal-box, [role="dialog"]') || modal.firstElementChild?.firstElementChild;

  modal.style.transition = 'opacity 200ms ease';
  modal.style.opacity    = '0';
  if (modalBox) {
    modalBox.style.transition = 'opacity 180ms ease, transform 180ms ease';
    modalBox.style.opacity    = '0';
    modalBox.style.transform  = 'scale(0.96) translateY(10px)';
  }

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.opacity  = '';
    modal.style.transition = '';
    if (modalBox) {
      modalBox.style.opacity   = '';
      modalBox.style.transform = '';
      modalBox.style.transition = '';
    }
    document.body.style.overflow = '';
  }, 210);
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
async function handleFormSubmit() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const feedback = document.getElementById('submit-feedback');
  if (!form || !submitBtn || !feedback) return;

  const name = document.getElementById('contact-name')?.value.trim() || '';
  const email = document.getElementById('contact-email')?.value.trim() || '';
  const message = document.getElementById('contact-message')?.value.trim() || '';
  const originalButton = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="material-symbols-outlined text-base animate-spin">refresh</span> Sending...';
  feedback.classList.add('hidden');

  try {
    await emailjs.send('service_seg969s', 'template_3ga4bmi', {
      name,
      email,
      message
    }, {
      publicKey: 'Fydv-1-H-KkN3dPA6'
    });

    feedback.textContent = 'Message sent successfully. Thank you for reaching out!';
    feedback.classList.remove('hidden');
    form.reset();
    submitBtn.innerHTML = '<span class="material-symbols-outlined text-base">check_circle</span> Sent!';
  } catch (error) {
    console.error('EmailJS send failed:', error);
    feedback.textContent = 'The message could not be sent. Please try again in a moment.';
    feedback.classList.remove('hidden');
    submitBtn.innerHTML = originalButton;
  } finally {
    submitBtn.disabled = false;
  }
}

// ─── Mobile Menu — slide down toggle ─────────────────────────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.style.opacity   = '0';
    menu.style.transform = 'translateY(-8px)';
    requestAnimationFrame(() => {
      menu.style.transition = 'opacity 220ms ease, transform 220ms ease';
      menu.style.opacity    = '1';
      menu.style.transform  = 'translateY(0)';
    });
  } else {
    menu.style.transition = 'opacity 180ms ease, transform 180ms ease';
    menu.style.opacity    = '0';
    menu.style.transform  = 'translateY(-8px)';
    setTimeout(() => {
      menu.classList.add('hidden');
      menu.style.opacity    = '';
      menu.style.transform  = '';
      menu.style.transition = '';
    }, 185);
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.style.transition = 'opacity 180ms ease, transform 180ms ease';
    menu.style.opacity    = '0';
    menu.style.transform  = 'translateY(-8px)';
    setTimeout(() => {
      menu.classList.add('hidden');
      menu.style.opacity    = '';
      menu.style.transform  = '';
      menu.style.transition = '';
    }, 185);
  }
}

// ─── Active Nav Link on Scroll ────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const sections = ['hero', 'about', 'projects', 'contact'];
  const scrollY  = window.pageYOffset;

  sections.forEach(secId => {
    const el   = document.getElementById(secId);
    if (!el) return;
    const top    = el.offsetTop - 140;
    const height = el.offsetHeight;
    const link   = document.getElementById('nav-' + (secId === 'hero' ? 'home' : secId));
    if (!link) return;

    if (scrollY >= top && scrollY < top + height) {
      link.className = 'border-b-2 border-secondary text-secondary font-label-md font-bold pb-1 flex items-center gap-1.5 transition-colors duration-300';
    } else {
      link.className = 'text-on-surface-variant font-label-md hover:text-on-surface transition-colors duration-300 pb-1 flex items-center gap-1.5';
    }
  });
}, { passive: true });

// ─── Keyboard: close modal on Escape ─────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProjectModal();
});

// ─── Click outside modal to close ────────────────────────────────────────────
document.addEventListener('click', e => {
  const modal = document.getElementById('project-modal');
  if (!modal || modal.classList.contains('hidden')) return;
  if (e.target === modal) closeProjectModal();
});

// ─── Cursor sparkle effect (subtle archival ink drop) ────────────────────────
function initCursorSparkle() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return; // skip on touch devices

  const colors = ['#476643', '#fed262', '#9d413e', '#7a9b74', '#de736d'];
  let lastTime = 0;

  document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastTime < 80) return; // throttle
    lastTime = now;

    const dot = document.createElement('span');
    dot.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      pointer-events: none;
      z-index: 9999;
      opacity: 0.7;
      transform: translate(-50%, -50%) scale(1);
      transition: opacity 500ms ease, transform 500ms ease;
    `;
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
      dot.style.opacity   = '0';
      dot.style.transform = `translate(-50%, -50%) scale(0) translateY(-10px)`;
    });
    setTimeout(() => dot.remove(), 520);
  });
}

// ─── Typing effect untuk hero tagline ────────────────────────────────────────
function initTypingEffect() {
  const el = document.getElementById('hero-tagline');
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const fullText = el.textContent.trim();
  el.textContent = '';
  el.style.borderRight = '2px solid #476643';

  let i = 0;
  const type = () => {
    if (i < fullText.length) {
      el.textContent += fullText[i++];
      setTimeout(type, 28 + Math.random() * 18);
    } else {
      // Blink cursor then remove
      let blinks = 0;
      const blink = setInterval(() => {
        el.style.borderRight = blinks % 2 === 0 ? 'none' : '2px solid #476643';
        if (++blinks > 5) { clearInterval(blink); el.style.borderRight = 'none'; }
      }, 400);
    }
  };
  setTimeout(type, 900); // delay after page load
}

// ─── Smooth counter animation for any stat numbers ───────────────────────────
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count') || el.textContent, 10);
  if (isNaN(target)) return;
  let current = 0;
  const step  = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + (el.getAttribute('data-suffix') || '');
    if (current >= target) clearInterval(timer);
  }, 30);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => obs.observe(el));
}

// ─── Init on DOM ready or immediate if already parsed ─────────────────────────
function initAll() {
  initScrollProgressBar();
  initScrollReveal();
  initTypingEffect();
  initCounters();
  initCursorSparkle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  // DOM is already parsed (interactive / complete)
  initAll();
}

