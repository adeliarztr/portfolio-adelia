/**
 * Archival Portfolio Web Script
 * Adelia Rizki Eka Putri
 */

// Project Data for Modal Dossier Inspection
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

// Tab switching for About Me Binder
function switchAboutTab(tab) {
  const storyContent = document.getElementById('about-content-story');
  const techContent = document.getElementById('about-content-tech');
  const storyBtn = document.getElementById('tab-story-btn');
  const techBtn = document.getElementById('tab-tech-btn');

  if (!storyContent || !techContent || !storyBtn || !techBtn) return;

  if (tab === 'story') {
    storyContent.classList.remove('hidden');
    storyContent.classList.add('block');
    techContent.classList.add('hidden');
    techContent.classList.remove('block');

    storyBtn.className = 'px-5 py-2 rounded-t-lg border-t border-l border-r border-on-surface bg-surface text-on-surface font-label-md font-bold shadow-[-1px_-1px_0px_#1c1c0d] transition-all';
    techBtn.className = 'px-5 py-2 rounded-t-lg border-t border-l border-r border-on-surface bg-secondary-container text-on-secondary-fixed font-label-md font-bold transition-all hover:bg-secondary-fixed';
  } else {
    techContent.classList.remove('hidden');
    techContent.classList.add('block');
    storyContent.classList.add('hidden');
    storyContent.classList.remove('block');

    techBtn.className = 'px-5 py-2 rounded-t-lg border-t border-l border-r border-on-surface bg-surface text-on-surface font-label-md font-bold shadow-[-1px_-1px_0px_#1c1c0d] transition-all';
    storyBtn.className = 'px-5 py-2 rounded-t-lg border-t border-l border-r border-on-surface bg-secondary-container text-on-secondary-fixed font-label-md font-bold transition-all hover:bg-secondary-fixed';
  }
}

// Filter switching for Projects Archive
function filterProjects(category) {
  const allCards = document.querySelectorAll('.project-card');
  const filterAllBtn = document.getElementById('filter-all');
  const filterFeaturedBtn = document.getElementById('filter-featured');

  if (!filterAllBtn || !filterFeaturedBtn) return;

  if (category === 'all') {
    allCards.forEach(c => {
      c.style.display = 'flex';
      c.classList.remove('hidden');
    });
    filterAllBtn.className = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-secondary-container text-on-secondary-fixed font-label-md font-bold shadow-[1px_1px_0px_#1c1c0d] transition-all';
    filterFeaturedBtn.className = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-surface-container-high text-on-surface font-label-md font-bold hover:bg-surface-variant transition-all';
  } else {
    allCards.forEach(c => {
      if (c.getAttribute('data-category') === 'featured') {
        c.style.display = 'flex';
        c.classList.remove('hidden');
      } else {
        c.style.display = 'none';
        c.classList.add('hidden');
      }
    });
    filterFeaturedBtn.className = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-tertiary text-on-tertiary font-label-md font-bold shadow-[1px_1px_0px_#1c1c0d] transition-all';
    filterAllBtn.className = 'px-4 py-1.5 rounded-t-lg border border-on-surface bg-surface-container-high text-on-surface font-label-md font-bold hover:bg-surface-variant transition-all';
  }
}

// Open Project Detail Modal
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  document.getElementById('modal-category').innerText = data.category;
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-role').innerText = data.role;
  document.getElementById('modal-timeline').innerText = data.timeline;
  document.getElementById('modal-description').innerText = data.description;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  data.keyFeatures.forEach(feat => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2';
    li.innerHTML = `<span class="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>${feat}</span>`;
    featuresList.appendChild(li);
  });

  const tagsList = document.getElementById('modal-tags');
  tagsList.innerHTML = '';
  data.techStack.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-xs border border-outline-variant font-bold';
    span.innerText = tag;
    tagsList.appendChild(span);
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

  const modal = document.getElementById('project-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// Contact form handling with simulated typewriter message dispatch
function handleFormSubmit() {
  const name = document.getElementById('contact-name')?.value || '';
  const phone = document.getElementById('contact-phone')?.value || '';
  const email = document.getElementById('contact-email')?.value || '';
  const message = document.getElementById('contact-message')?.value || '';
  const feedback = document.getElementById('submit-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (!submitBtn) return;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="material-symbols-outlined text-base animate-spin">refresh</span> Logging to ledger...';

  setTimeout(() => {
    submitBtn.innerHTML = '<span class="material-symbols-outlined text-base">check_circle</span> Inquiry Logged!';
    if (feedback) feedback.classList.remove('hidden');

    // Also prepare WhatsApp direct link option if user wants to ping directly
    const waUrl = `https://wa.me/628813154922?text=${encodeURIComponent(`Halo Adelia, saya ${name} (${email}). ${message}`)}`;
    console.log("Ready to dispatch to WA if needed:", waUrl);

    setTimeout(() => {
      document.getElementById('contact-form')?.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="material-symbols-outlined text-base">send</span> Send inquiry';
    }, 4500);
  }, 1000);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Close mobile menu on link click
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
  const sections = ['hero', 'about', 'projects', 'contact'];
  const scrollY = window.pageYOffset;

  sections.forEach(secId => {
    const el = document.getElementById(secId);
    if (el) {
      const top = el.offsetTop - 140;
      const height = el.offsetHeight;
      const link = document.getElementById('nav-' + (secId === 'hero' ? 'home' : secId));
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.className = 'border-b-2 border-secondary text-secondary font-label-md font-bold pb-1 flex items-center gap-1.5 transition-colors';
        } else {
          link.className = 'text-on-surface-variant font-label-md hover:text-on-surface transition-colors pb-1 flex items-center gap-1.5';
        }
      }
    }
  });
});

// Close modal on Escape key or outside click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});
