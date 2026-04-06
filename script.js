document.addEventListener('DOMContentLoaded', function() {
    /* ── CUSTOM CURSOR ── */
    const cur = document.getElementById('cursor');
    
    document.addEventListener('mousemove', function(e) {
        cur.style.left = e.clientX + 'px';
        cur.style.top = e.clientY + 'px';
    });

    const interactiveElements = 'a, button, .project-card, .team-card, .service-item';
    document.querySelectorAll(interactiveElements).forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cur.classList.add('big');
        });
        el.addEventListener('mouseleave', function() {
            cur.classList.remove('big');
        });
    });

    /* ── PROGRESS BAR ── */
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', function() {
        const s = document.documentElement.scrollTop;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (h > 0) {
            bar.style.width = (s / h * 100).toFixed(2) + '%';
        }
    });

    /* ── SCROLL REVEAL ── */
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(function(r) {
        io.observe(r);
    });

    /* ── HERO CANVAS DETECTION ── */
    // Note: This detects scroll position for the yarn animation
    const heroEl = document.getElementById('hero');
    let target = 0;
    
    window.addEventListener('scroll', function() {
        const rect = heroEl.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight * 0.5)));
        target = ratio;
    });

    // Note: The specific yarn animation (Canvas rendering) was partially cut off in your prompt.
    // If you need the full math-heavy 'yarn-canvas' logic reconstructed, let me know!
});






// Inject HERO
document.getElementById("hero-eyebrow").innerHTML = siteData.hero.eyebrow;
document.getElementById("hero-title").innerHTML = siteData.hero.title;
document.getElementById("hero-sub").innerHTML = siteData.hero.sub;

// Inject ABOUT
document.getElementById("about-heading").innerHTML = siteData.about.heading;
document.getElementById("about-text1").innerText = siteData.about.text1;
document.getElementById("about-text2").innerText = siteData.about.text2;

// Inject STATS
const statsContainer = document.querySelector(".about-stats");
statsContainer.innerHTML = "";
siteData.about.stats.forEach(stat => {
  statsContainer.innerHTML += `
    <div>
      <div class="stat-num">${stat.num}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `;
});

// Inject PROJECTS
const projectContainer = document.getElementById("projects-container");

siteData.projects.forEach(p => {
  projectContainer.innerHTML += `
    <div class="project-card">
      <div class="project-card-inner">
        <div class="project-bg" style="background:url('${p.image}') center/cover;"></div>
        <div class="project-overlay"></div>
        <div class="project-info">
          <div class="project-cat">${p.category}</div>
          <div class="project-name">${p.name}</div>
          <div class="project-year">${p.year}</div>
        </div>
      </div>
    </div>
  `;
});

// Inject CONTACT
document.getElementById("contact-address").innerText = siteData.contact.address;
document.getElementById("contact-email").innerText = siteData.contact.email;
document.getElementById("contact-phone").innerText = siteData.contact.phone;