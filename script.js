/**
 * ==============================================================================
 * PORTFOLIO CLIENT-SIDE SCRIPT - SINDHUJA (B.TECH CSE)
 * ==============================================================================
 * Description: Handles typing animation, responsive navigation, skill filtering,
 * modal dialogs, contact form validation, scroll-spy, and DevOps code copying.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----------------------------------------------------------------------------
  // 1. DYNAMIC HERO TYPING EFFECT
  // ----------------------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  const phrases = [
    'B.Tech CSE Student @ AVN IET',
    'Python & Core Java Developer',
    'AI CareerMate Creator',
    'DevOps & CI/CD Automation Learner',
    'Modern Full-Stack Enthusiast'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      isDeleting = true;
      typingSpeed = 1600;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  // ----------------------------------------------------------------------------
  // 2. STICKY NAVBAR & ACTIVE NAVIGATION LINK SCROLL-SPY
  // ----------------------------------------------------------------------------
  const header = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Header background change on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll-to-top button visibility
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
      if (scrollY > 350) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }

    // Active link highlighting
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Scroll to Top click handler
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 3. MOBILE HAMBURGER MENU TOGGLE
  // ----------------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking on any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 4. SKILLS TAB FILTERING
  // ----------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedFilter = button.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ----------------------------------------------------------------------------
  // 5. INTERACTIVE CV MODAL
  // ----------------------------------------------------------------------------
  const cvModal = document.getElementById('cv-modal');
  const openCvBtn = document.getElementById('open-cv-modal-btn');
  const closeCvBtn = document.getElementById('close-cv-modal-btn');
  const printCvBtn = document.getElementById('print-cv-btn');

  function openCvModal() {
    if (cvModal) {
      cvModal.classList.add('active');
      cvModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCvModal() {
    if (cvModal) {
      cvModal.classList.remove('active');
      cvModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openCvBtn) openCvBtn.addEventListener('click', openCvModal);
  if (closeCvBtn) closeCvBtn.addEventListener('click', closeCvModal);
  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close CV modal on backdrop click
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }

  // ----------------------------------------------------------------------------
  // 6. PROJECT DEEP DIVE MODAL
  // ----------------------------------------------------------------------------
  const projectModal = document.getElementById('project-modal');
  const closeProjectBtn = document.getElementById('close-project-modal-btn');
  const projectContentContainer = document.getElementById('project-modal-content');
  const projectPreviewButtons = document.querySelectorAll('.project-preview-btn');

  const projectData = {
    careermate: {
      title: 'AI CareerMate - Career Guidance & Resume Optimizer',
      badge: 'Flagship Project &bull; Python &amp; NLP',
      image: 'assets/projects/ai-careermate.svg',
      overview: 'AI CareerMate was designed to bridge the gap between academic curriculum and current software industry hiring standards. By leveraging Natural Language Processing and text analytics in Python, it parses student resumes, matches key skills against live industry benchmarks, and builds custom milestone roadmaps.',
      features: [
        'Resume Text Parsing & Keyword Vector Analysis',
        'Industry Benchmark Matching (Software Engineer, Cloud Engineer, Data Analyst)',
        'Algorithmic Skill Gap Identification with recommended courses and GitHub project suggestions',
        'Interactive Student Scorecard with ATS compatibility score'
      ],
      techStack: ['Python', 'Natural Language Processing', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Git CLI'],
      githubLink: 'https://github.com/sindhuja-dev/ai-careermate'
    },
    algoviz: {
      title: 'AlgoVisualizer - Interactive Sorting & Pathfinding',
      badge: 'Algorithm Engineering &bull; Web Animations',
      image: 'assets/projects/algo-visualizer.svg',
      overview: 'AlgoVisualizer is an interactive educational sandbox demonstrating how sorting algorithms operate under the hood. It allows students to visualize array mutations, active pointers, pivot selections, and recursive steps in real time.',
      features: [
        'Visual execution of Quick Sort, Merge Sort, Bubble Sort, and Insertion Sort',
        'Real-time comparison counter and array swap visualization with color-coded states',
        'Dynamic array size controller (10 to 100 elements) and stepping speed slider',
        'Educational side-by-side asymptotic time & space complexity summaries'
      ],
      techStack: ['JavaScript ES6+', 'HTML5 Canvas API', 'CSS3 Flexbox', 'Algorithms & DSA'],
      githubLink: 'https://github.com/sindhuja-dev/algo-visualizer'
    },
    tracker: {
      title: 'Academic Performance & Attendance Tracker',
      badge: 'Analytics System &bull; Python &amp; OOP',
      image: 'assets/projects/student-tracker.svg',
      overview: 'An academic management platform engineered to automate grade point calculations, aggregate course credits, and enforce university attendance minimum regulations with timely student alerts.',
      features: [
        'Automated SGPA/CGPA computation supporting weighted theory and practical credits',
        'Attendance threshold monitor generating automated low-attendance warnings',
        'Visual performance graphs tracking subject-wise exam scores',
        'Exportable CSV and PDF summary report generator'
      ],
      techStack: ['Python 3', 'Object-Oriented Architecture', 'CSV/JSON File Handling', 'Matplotlib'],
      githubLink: 'https://github.com/sindhuja-dev/student-performance-tracker'
    }
  };

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data || !projectContentContainer || !projectModal) return;

    projectContentContainer.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge-pill" style="margin-bottom: 0.8rem;">${data.badge}</span>
        <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.8rem;">${data.title}</h2>
        <div style="border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; max-height: 280px; background: #080a18;">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin-bottom: 1.25rem;">${data.overview}</p>
        
        <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.75rem;">Key Architecture &amp; Capabilities:</h4>
        <ul style="padding-left: 1.25rem; color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.6rem;">Technology Stack:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.8rem;">
          ${data.techStack.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 0.8rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.2rem;">
          <a href="${data.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fa-brands fa-github"></i> View GitHub Repository
          </a>
        </div>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  projectPreviewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      if (projectId) openProjectModal(projectId);
    });
  });

  if (closeProjectBtn) closeProjectBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // Global escape key handler for all modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCvModal();
      closeProjectModal();
    }
  });

  // ----------------------------------------------------------------------------
  // 7. COPY GITHUB ACTIONS YAML WORKFLOW TO CLIPBOARD
  // ----------------------------------------------------------------------------
  const copyWorkflowBtn = document.getElementById('copy-workflow-btn');
  if (copyWorkflowBtn) {
    copyWorkflowBtn.addEventListener('click', async () => {
      const codeSnippet = document.querySelector('.code-display code');
      if (!codeSnippet) return;

      try {
        await navigator.clipboard.writeText(codeSnippet.innerText);
        const originalHtml = copyWorkflowBtn.innerHTML;
        copyWorkflowBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> Copied!';
        setTimeout(() => {
          copyWorkflowBtn.innerHTML = originalHtml;
        }, 2200);
      } catch (err) {
        console.warn('Clipboard write failed, selecting text instead:', err);
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 8. INTERACTIVE CONTACT FORM VALIDATION & SUBMISSION
  // ----------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const subjectError = document.getElementById('subject-error');
      const messageError = document.getElementById('message-error');

      // Clear previous error messages
      [nameError, emailError, subjectError, messageError].forEach(el => {
        if (el) el.textContent = '';
      });
      if (formFeedback) {
        formFeedback.style.display = 'none';
        formFeedback.className = 'form-feedback';
      }

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
        isValid = false;
      }

      // Validate Email with regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please enter your message.';
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message should be at least 10 characters long.';
        isValid = false;
      }

      if (!isValid) return;

      // Show spinner during simulated transmission
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');

      btnText.style.display = 'none';
      btnSpinner.style.display = 'inline-flex';
      submitBtn.disabled = true;

      setTimeout(() => {
        btnText.style.display = 'inline-flex';
        btnSpinner.style.display = 'none';
        submitBtn.disabled = false;

        // Display Success Toast
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <strong><i class="fa-solid fa-circle-check"></i> Thank you, ${escapeHtml(nameInput.value.trim())}!</strong><br>
            Your message regarding "<em>${escapeHtml(subjectInput.value.trim())}</em>" has been noted.
            <br><small style="color: #94a3b8; display: block; margin-top: 4px;">You can also mail me directly at <a href="mailto:sindhuja.cse2028@gmail.com" style="color: #38bdf8;">sindhuja.cse2028@gmail.com</a>.</small>
          `;
          formFeedback.style.display = 'block';
        }

        // Reset form
        contactForm.reset();
      }, 1000);
    });
  }

  // Helper utility to prevent XSS in client-side text injection
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ----------------------------------------------------------------------------
  // 9. DYNAMIC COPYRIGHT YEAR
  // ----------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  console.log('Sindhuja Portfolio CI/CD & Frontend initialized successfully.');
});
