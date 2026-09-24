gsap.registerPlugin(ScrollTrigger);

const story = document.getElementById("story");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const thesisLink = document.getElementById("thesisLink");

thesisLink.href = STORY.thesisUrl || "#";

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderScene(scene, i) {
  const number = String(i + 1).padStart(2, "0");

  if (scene.type === "hero") return `
    <section class="scene scene-hero" data-scene="${i}">
      <div class="scene-inner hero-grid">
        <div class="hero-copy">
          <p class="kicker">${esc(scene.kicker)}</p>
          <h1>${esc(scene.title)}</h1>
          <p class="lead">${esc(scene.body)}</p>
          <p class="scroll-hint">↓ ${esc(scene.note)}</p>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="pulse-ring r1"></div><div class="pulse-ring r2"></div><div class="pulse-ring r3"></div>
          <div class="phone-core"><span>COVID-19</span><strong>Impfung</strong></div>
          <div class="source-dot d1">f</div><div class="source-dot d2">▶</div>
          <div class="source-dot d3">✈</div><div class="source-dot d4">+</div>
          <div class="source-dot d5">👥</div><div class="source-dot d6">●</div>
        </div>
      </div>
    </section>`;

  if (scene.type === "context") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p>
        <h2>${esc(scene.title)}</h2>
        <div class="context-grid">
          ${scene.cards.map((c, idx) => `
            <article class="info-card reveal">
              <div class="card-icon">${["⌁","⌂","◉"][idx]}</div>
              <h3>${esc(c[0])}</h3><p>${esc(c[1])}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>`;

  if (scene.type === "study") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="stats-grid">${scene.stats.map(s => `<div class="stat reveal"><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join("")}</div>
        <div class="methods-grid">
          <div>${scene.methods.map(m => `<div class="method reveal"><b>${esc(m[0])}</b><span>${esc(m[1])}</span></div>`).join("")}</div>
          <p class="body-copy">${esc(scene.body)}</p>
        </div>
      </div>
    </section>`;

  if (scene.type === "rings") return `
    <section class="scene scene-rings" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2><p class="body-copy narrow">${esc(scene.body)}</p>
        <div class="rings-layout">
          <div class="rings" aria-label="Schematische Darstellung von Informationsquellen">
            <span class="ring ring-1"></span><span class="ring ring-2"></span><span class="ring ring-3"></span><span class="ring ring-4"></span>
            <span class="ring-label center">Information</span>
            <span class="ring-label rl1">Institutionen</span><span class="ring-label rl2">Medien</span>
            <span class="ring-label rl3">Soziales Umfeld</span><span class="ring-label rl4">Community</span>
          </div>
          <div class="legend">${scene.categories.map(c => `<div><i></i><strong>${esc(c[0])}</strong><span>${esc(c[1])}</span></div>`).join("")}
            <button class="secondary-button" id="showOriginal">Originalgrafik einblenden</button>
            <img class="original-image" id="originalImage" src="${esc(scene.originalImage)}" alt="Originalgrafik mit konzentrischen Kreisen" hidden>
          </div>
        </div>
      </div>
    </section>`;

  if (scene.type === "trust") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="compare">
          <div class="compare-card trust-card"><h3>${esc(scene.leftTitle)}</h3>${scene.leftItems.map(x => `<p>✓ ${esc(x)}</p>`).join("")}</div>
          <div class="arrow">→</div>
          <div class="compare-card decision-card"><h3>${esc(scene.rightTitle)}</h3>${scene.rightItems.map(x => `<p>● ${esc(x)}</p>`).join("")}</div>
        </div>
        <p class="body-copy">${esc(scene.body)}</p>
      </div>
    </section>`;

  if (scene.type === "quote") return `
    <section class="scene scene-quote" data-scene="${i}">
      <div class="scene-inner quote-inner">
        <p class="kicker">${esc(scene.kicker)}</p>
        <blockquote>${esc(scene.quote)}</blockquote><cite>${esc(scene.source)}</cite>
        <p class="body-copy narrow">${esc(scene.body)}</p>
        <div class="noise-words"><span>„sicher & wirksam“</span><span>„Langzeitfolgen?“</span><span>„neue Regelung“</span><span>„neue Studie“</span></div>
      </div>
    </section>`;

  if (scene.type === "community") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner community-grid">
        <div class="phone-mock">
          <div class="phone-head">Telegram · Community</div>
          <div class="chat user">Welche Regeln gelten aktuell für …?</div>
          <div class="chat reply">Hier eine Übersicht auf Arabisch.</div>
          <div class="chat reply">Ich war heute beim Arzt, hier die Infos …</div>
        </div>
        <div>
          <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
          <blockquote>${esc(scene.quote)}</blockquote><cite>${esc(scene.source)}</cite>
          <p class="body-copy">${esc(scene.body)}</p>
        </div>
      </div>
    </section>`;

  if (scene.type === "barriers") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="barrier-grid">${scene.barriers.map((b, idx) => `<article class="barrier reveal"><span>${String(idx+1).padStart(2,"0")}</span><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p></article>`).join("")}</div>
      </div>
    </section>`;

  if (scene.type === "network") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner network-grid">
        <div><p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2><blockquote>${esc(scene.quote)}</blockquote><cite>${esc(scene.source)}</cite><p class="body-copy">${esc(scene.body)}</p></div>
        <div class="network" aria-hidden="true"><span class="node n0">A</span><span class="node n1">B</span><span class="node n2">C</span><span class="node n3">D</span><span class="node n4">E</span><span class="line l1"></span><span class="line l2"></span><span class="line l3"></span><span class="line l4"></span></div>
      </div>
    </section>`;

  if (scene.type === "trust2") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="quote-card"><blockquote>${esc(scene.quote)}</blockquote><cite>${esc(scene.source)}</cite></div>
        <div class="insight-row"><span>kompetent</span><b>≠</b><span>automatisch vertrauenswürdig</span></div>
        <p class="body-copy narrow">${esc(scene.body)}</p>
      </div>
    </section>`;

  if (scene.type === "needs") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner">
        <p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="needs-grid">${scene.groups.map(g => `<article class="needs-card"><div class="needs-icon">${esc(g.icon)}</div><h3>${esc(g.title)}</h3>${g.items.map(x => `<p>→ ${esc(x)}</p>`).join("")}</article>`).join("")}</div>
        <p class="body-copy narrow">${esc(scene.body)}</p>
      </div>
    </section>`;

  if (scene.type === "rating") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner rating-layout">
        <div><p class="kicker">${esc(scene.kicker)}</p><div class="rating">${esc(scene.title)}</div><p class="subtitle">${esc(scene.subtitle)}</p><div class="stars">★★★☆☆</div><small>${esc(scene.note)}</small></div>
        <div class="rating-columns"><div class="positive"><h3>Positiv</h3>${scene.positive.map(x => `<p>+ ${esc(x)}</p>`).join("")}</div><div class="critical"><h3>Kritisch</h3>${scene.critical.map(x => `<p>− ${esc(x)}</p>`).join("")}</div></div>
      </div>
    </section>`;

  if (scene.type === "synthesis") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner"><p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="synthesis">${scene.items.map(x => `<div><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join("")}</div>
        <div class="equals">↓</div><div class="recommendation-label">Handlungsempfehlungen</div>
      </div>
    </section>`;

  if (scene.type === "recommendations") return `
    <section class="scene" data-scene="${i}">
      <div class="scene-inner"><p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2>
        <div class="recommendations">${scene.items.map(x => `<article><b>${esc(x[0])}</b><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></article>`).join("")}</div>
      </div>
    </section>`;

  if (scene.type === "final") return `
    <section class="scene scene-final" data-scene="${i}">
      <div class="scene-inner final-grid"><div><p class="kicker">${esc(scene.kicker)}</p><h2>${esc(scene.title)}</h2><p class="lead">${esc(scene.body)}</p><p class="closing">${esc(scene.closing)}</p><a class="cta" href="${esc(scene.thesisUrl)}">Masterarbeit ansehen →</a></div><div class="final-circle">LEIPZIG</div></div>
    </section>`;
}

story.innerHTML = STORY.scenes.map(renderScene).join("");

document.querySelectorAll(".reveal").forEach(el => {
  gsap.from(el, {
    y: 35, opacity: 0, duration: 0.7, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 82%" }
  });
});

document.querySelectorAll(".scene").forEach((scene, i) => {
  ScrollTrigger.create({
    trigger: scene,
    start: "top center",
    end: "bottom center",
    onEnter: () => updateProgress(i),
    onEnterBack: () => updateProgress(i)
  });
});

function updateProgress(i) {
  const pct = ((i + 1) / STORY.scenes.length) * 100;
  progressBar.style.width = `${pct}%`;
  progressLabel.textContent = `${String(i + 1).padStart(2,"0")} / ${String(STORY.scenes.length).padStart(2,"0")}`;
}

const originalButton = document.getElementById("showOriginal");
if (originalButton) {
  originalButton.addEventListener("click", () => {
    const img = document.getElementById("originalImage");
    img.hidden = !img.hidden;
    originalButton.textContent = img.hidden ? "Originalgrafik einblenden" : "Originalgrafik ausblenden";
  });
}
