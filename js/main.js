/**
 * main.js — lógica de la página de inicio.
 * Lee los datos de data.js y pinta: grid de proyectos + filtros,
 * tecnologías, línea de tiempo, y comportamiento de la nav.
 */
(function () {
  "use strict";

  /* ---------- Utilidades ---------- */

  // Paleta de gradientes para los thumbnails placeholder (sin imágenes reales).
  const THUMB_GRADIENTS = [
    "linear-gradient(135deg, #6c5ce7, #00c2b8)",
    "linear-gradient(135deg, #ff6b6b, #f6ad3c)",
    "linear-gradient(135deg, #4b3fc7, #8a7bff)",
    "linear-gradient(135deg, #00c2b8, #6fd6ff)",
    "linear-gradient(135deg, #f6ad3c, #ff6b6b)",
    "linear-gradient(135deg, #181a2a, #6c5ce7)"
  ];

  function thumbGradientFor(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    return THUMB_GRADIENTS[hash % THUMB_GRADIENTS.length];
  }

  function categoryLabel(cat) {
    return cat === "university" ? "Universitario" : "Personal";
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach((c) => node.appendChild(c));
    return node;
  }

  /* ---------- Nav ---------- */

  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMobile.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMobile.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navMobile.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Proyectos: render + filtros combinables ---------- */

  const grid = document.getElementById("projectGrid");
  const resultsMeta = document.getElementById("resultsMeta");
  const typeButtons = document.querySelectorAll("#filterType .filter-chip");
  const techSelect = document.getElementById("filterTech");

  let activeType = "all";
  let activeTech = "all";

  // Poblar el <select> de tecnologías a partir de lo que realmente usan los proyectos.
  function populateTechFilter() {
    const allTechs = new Set();
    PROJECTS.forEach((p) => p.technologies.forEach((t) => allTechs.add(t)));
    [...allTechs].sort().forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      techSelect.appendChild(opt);
    });
  }

  function matchesFilters(project) {
    const typeOk =
      activeType === "all" ||
      (activeType === "featured" && project.featured) ||
      activeType === project.category;
    const techOk = activeTech === "all" || project.technologies.includes(activeTech);
    return typeOk && techOk;
  }

  function renderProjects() {
    const filtered = PROJECTS.filter(matchesFilters).sort(
      (a, b) => (b.featured === true) - (a.featured === true)
    );

    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.appendChild(
        el("div", { class: "empty-state" }, [
          document.createTextNode("No hay proyectos que coincidan con estos filtros todavía.")
        ])
      );
    } else {
      filtered.forEach((p) => grid.appendChild(renderProjectCard(p)));
    }

    const typeLabel =
      activeType === "all" ? "todos" :
      activeType === "featured" ? "destacados" :
      categoryLabel(activeType).toLowerCase();
    const techLabel = activeTech === "all" ? "" : ` · ${activeTech}`;

    resultsMeta.innerHTML = `<strong>${filtered.length}</strong> proyecto${filtered.length === 1 ? "" : "s"} — ${typeLabel}${techLabel}`;

    if (window.lucide) lucide.createIcons();
  }

  function renderProjectCard(p) {
    const card = el("article", { class: "project-card" });

    const thumb = el("div", {
      class: "project-thumb",
      style: `background:${thumbGradientFor(p.id)}`
    });
    thumb.appendChild(el("span", { class: "project-thumb-glyph" }, [document.createTextNode("</>")]));
    if (p.featured) {
      const badge = el("span", { class: "project-featured-badge" });
      badge.innerHTML = '<i data-lucide="star"></i> Destacado';
      thumb.appendChild(badge);
    }
    card.appendChild(thumb);

    const body = el("div", { class: "project-body" });

    const topRow = el("div", { class: "project-top-row" });
    topRow.appendChild(
      el("span", { class: `project-category ${p.category}` }, [
        document.createTextNode(categoryLabel(p.category))
      ])
    );
    body.appendChild(topRow);

    body.appendChild(el("h3", {}, [document.createTextNode(p.title)]));
    body.appendChild(el("p", { class: "desc" }, [document.createTextNode(p.description)]));

    const techList = el("div", { class: "project-tech-list" });
    p.technologies.forEach((t) =>
      techList.appendChild(el("span", { class: "tech-pill" }, [document.createTextNode(t)]))
    );
    body.appendChild(techList);

    const linkRow = el("div", { class: "project-link-row" });
    linkRow.innerHTML = 'Ver detalle <i data-lucide="arrow-right"></i>';
    body.appendChild(linkRow);

    card.appendChild(body);

    const hit = el("a", {
      class: "project-card-hitbox",
      href: `proyecto.html?id=${encodeURIComponent(p.id)}`,
      "aria-label": `Ver detalle del proyecto ${p.title}`
    });
    card.appendChild(hit);

    return card;
  }

  typeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeType = btn.dataset.filterType;
      renderProjects();
    });
  });

  techSelect.addEventListener("change", () => {
    activeTech = techSelect.value;
    renderProjects();
  });

  populateTechFilter();
  renderProjects();

  /* ---------- Tecnologías ---------- */

  const techGroupsEl = document.getElementById("techGroups");
  Object.entries(TECHNOLOGIES).forEach(([groupName, items]) => {
    const group = el("div", { class: "tech-group" });
    group.appendChild(el("h3", {}, [document.createTextNode(groupName)]));
    const list = el("div", { class: "tech-item-list" });
    items.forEach((tech) => {
      const item = el("div", { class: "tech-item" });
      item.innerHTML = `<i data-lucide="${tech.icon}"></i><span>${tech.name}</span>`;
      list.appendChild(item);
    });
    group.appendChild(list);
    techGroupsEl.appendChild(group);
  });

  /* ---------- Timeline ---------- */

  const timelineEl = document.getElementById("timelineList");
  TIMELINE.forEach((item) => {
    const node = el("div", { class: "timeline-item", "data-type": item.type });
    node.innerHTML = `
      <span class="timeline-dot"></span>
      <span class="timeline-meta">${item.period}</span>
      <h4>${item.title}</h4>
      <span class="timeline-place">${item.place}</span>
      <p class="desc">${item.description}</p>
    `;
    timelineEl.appendChild(node);
  });

  /* ---------- Scroll spy simple para la nav ---------- */

  const sections = ["inicio", "proyectos", "sobre-mi", "contacto"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll(".nav-links a");

  function updateActiveLink() {
    let currentId = sections[0] ? sections[0].id : "";
    sections.forEach((sec) => {
      if (window.scrollY + 140 >= sec.offsetTop) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  }
  document.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();

  if (window.lucide) lucide.createIcons();
  window.addEventListener("load", () => { if (window.lucide) lucide.createIcons(); });
})();
