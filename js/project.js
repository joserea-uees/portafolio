/**
 * project.js — pinta la vista de detalle de un proyecto individual.
 * Toma el id de la URL (proyecto.html?id=algo) y busca los datos en data.js.
 */
(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMobile.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

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
    return cat === "university" ? "Proyecto universitario" : "Proyecto personal";
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find((p) => p.id === id);

  const root = document.getElementById("projectRoot");

  if (!project) {
    root.innerHTML = `
      <div class="not-found">
        <span class="section-tag">error 404</span>
        <h1>No encontramos ese proyecto</h1>
        <p>Puede que el enlace esté roto o que el proyecto ya no exista. Vuelve a la lista de proyectos para seguir explorando.</p>
        <a href="index.html#proyectos" class="btn btn-primary">Ver todos los proyectos</a>
      </div>
    `;
    return;
  }

  document.title = `${project.title} — José Miguel Rea`;

  const featuresHtml = project.features
    .map(
      (f) => `<li><i data-lucide="check-circle-2"></i><span>${f}</span></li>`
    )
    .join("");

  const mediaHtml = project.video
    ? `<video controls preload="metadata" src="${project.video}"></video>`
    : `<div class="project-thumb" style="background:${thumbGradientFor(project.id)}">
         <span class="project-thumb-glyph">&lt;/&gt;</span>
       </div>`;

  const demoButton = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-outline"><i data-lucide="external-link"></i> Ver demo</a>`
    : "";

  root.innerHTML = `
    <div class="detail-hero">
      <a href="index.html#proyectos" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Volver a proyectos
      </a>

      <div class="detail-header">
        <div>
          <span class="project-category ${project.category}">${categoryLabel(project.category)}</span>
          <h1 style="margin-top:14px">${project.title}</h1>
        </div>
      </div>

      <div class="detail-tech-row">
        ${project.technologies.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
      </div>

      <div class="detail-media">${mediaHtml}</div>

      <div class="detail-actions">
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> Ver código en GitHub
        </a>
        ${demoButton}
      </div>
    </div>

    <div class="detail-body">
      <div>
        <div class="detail-block">
          <h2>Descripción</h2>
          <p>${project.description}</p>
        </div>
        <div class="detail-block">
          <h2>El problema</h2>
          <p>${project.problem}</p>
        </div>
        <div class="detail-block">
          <h2>La solución</h2>
          <p>${project.solution}</p>
        </div>
        <div class="detail-block">
          <h2>Características principales</h2>
          <ul class="feature-list">${featuresHtml}</ul>
        </div>
        <div class="detail-block">
          <h2>Lo que aprendí</h2>
          <p>${project.learned}</p>
        </div>
      </div>

      <aside class="detail-side">
        <div class="side-card">
          <h4>MI PARTICIPACIÓN</h4>
          <p>${project.role}</p>
        </div>
        <div class="side-card">
          <h4>TECNOLOGÍAS</h4>
          <div class="project-tech-list">
            ${project.technologies.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
        </div>
      </aside>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  window.addEventListener("load", () => { if (window.lucide) lucide.createIcons(); });
})();
