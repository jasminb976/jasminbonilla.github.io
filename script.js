// ---------- PROJECT DATA ----------
const CATEGORY_META = {
  campaigns: { label: "Campaigns & Launches", color: "#C2453A" },
  editorial: { label: "Editorial & Content", color: "#D8A63D" },
  strategy:  { label: "Strategy & Research", color: "#5C7A3E" }
};

const PROJECTS = {
  "orchard-cafe": {
    category: "campaigns",
    title: "Orchard Café Microsite",
    tagline: "Launch microsite & brand identity for a neighborhood coffee shop",
    role: "Web & Brand Designer",
    tools: "Webflow, Figma, Illustrator",
    timeline: "6 weeks",
    overview: "Designed and built a launch microsite for a new neighborhood café, pairing a full brand identity (logo, packaging, signage) with a simple one-page site used to drive opening-week foot traffic.",
    highlights: [
      "Designed a full identity system used across the site, packaging, and signage",
      "Built and shipped the microsite solo, from wireframe to launch",
      "Site launch coincided with the café's opening week going fully booked"
    ],
    links: [
      { label: "View live site", url: "#", icon: "live" },
      { label: "View on GitHub", url: "#", icon: "github" }
    ]
  },
  "sundrop-rebrand": {
    category: "campaigns",
    title: "Sundrop Market Microsite",
    tagline: "Rebrand microsite for a local farmers market",
    role: "Lead Designer",
    tools: "Webflow, Illustrator, Procreate",
    timeline: "3 months",
    overview: "Led a top-to-bottom rebrand for a long-running farmers market and built the microsite that introduced the new look to shoppers and vendors ahead of the season opener.",
    highlights: [
      "Interviewed 12 vendors and shoppers to shape the creative direction",
      "Designed and built the responsive rebrand microsite end to end",
      "Rebrand contributed to a reported 18% increase in weekend foot traffic"
    ],
    links: [
      { label: "View live site", url: "#", icon: "live" },
      { label: "View on GitHub", url: "#", icon: "github" }
    ]
  },
  "honeydew-drop": {
    category: "campaigns",
    title: "Honeydew Microsite",
    tagline: "Product drop microsite & merch launch campaign",
    role: "Graphic & Web Designer",
    tools: "Webflow, Photoshop, Illustrator",
    timeline: "4 weeks",
    overview: "Designed a limited-run merch and sticker collection for an indie brand's seasonal drop, along with the countdown microsite used to launch it.",
    highlights: [
      "Illustrated a 6-piece sticker set that sold out within 48 hours of launch",
      "Built a countdown microsite that drove early email signups",
      "Designed the full promo kit for email, Instagram, and TikTok"
    ],
    links: [
      { label: "View live site", url: "#", icon: "live" },
      { label: "View on GitHub", url: "#", icon: "github" }
    ]
  },
  "moss-meadow-zine": {
    category: "editorial",
    title: "Moss & Meadow Zine",
    tagline: "Editorial illustration series for an indie print zine",
    role: "Illustrator",
    tools: "Procreate, InDesign",
    timeline: "Ongoing, quarterly",
    overview: "Illustrate a recurring editorial spread for a small-press nature zine, translating each issue's theme into a cohesive visual narrative across 6–8 print pages.",
    highlights: [
      "Delivered original illustrations for 4 consecutive quarterly issues",
      "Developed a visual style guide for future contributing artists",
      "Illustrations were featured in the zine's first print exhibition"
    ],
    media: {
      type: "gallery",
      images: [
        { caption: "Cover spread" },
        { caption: "Feature spread" },
        { caption: "Back cover" }
      ]
    }
  },
  "wildflower-zine": {
    category: "editorial",
    title: "Wildflower Zine",
    tagline: "Interactive digital zine, published as a live website",
    role: "Content & Web Designer",
    tools: "Webflow, Figma",
    timeline: "2 months",
    overview: "Designed and built an interactive digital zine — a scroll-driven, illustrated website that reimagines the print zine format for the web, with original layout and content for every spread.",
    highlights: [
      "Translated a print zine layout into a fully responsive scroll experience",
      "Designed and wrote all 8 spreads, plus the interactive navigation",
      "Site has been used as a portfolio piece in 2 speaking engagements"
    ],
    links: [
      { label: "Open live zine", url: "#", icon: "live" }
    ],
    media: {
      type: "embed",
      url: "#",
      note: "Interactive zine embed"
    }
  },
  "case-study-breakdown": {
  category: "strategy",
  title: "Case Study Breakdown",
  tagline: "A guided breakdown & analysis of a real marketing case study",
  role: "Marketing Analyst",
  tools: "Google Docs, Miro",
  timeline: "1 week",
  overview: "Selected and broke down a real brand marketing case study, mapping out the campaign's strategy, execution, and results to identify what worked, what didn't, and what could be applied to future campaigns.",
  highlights: [
    "Reverse-engineered the campaign's target audience and positioning strategy",
    "Mapped the full campaign timeline against key performance results",
    "Distilled the analysis into 3 transferable takeaways for future campaigns"
  ],
  media: {
    type: "gallery",
    images: [
      { caption: "Campaign overview" },
      { caption: "Strategy breakdown" },
      { caption: "Key takeaways" }
    ]
  }
},
  "analytics-dashboard": {
    category: "strategy",
    title: "Analytics Dashboard",
    tagline: "Campaign performance dashboard & reporting system",
    role: "Marketing Analyst",
    tools: "Google Sheets, Looker Studio",
    timeline: "Ongoing",
    overview: "Built a recurring performance dashboard to track campaign reach, engagement, and conversion across channels, used to guide monthly strategy check-ins.",
    highlights: [
      "Consolidated 3 data sources into a single automated weekly report",
      "Designed the dashboard layout for fast, at-a-glance reads",
      "Findings directly informed 2 mid-campaign strategy pivots"
    ],
    media: {
      type: "gallery",
      images: [
        { caption: "Dashboard overview" },
        { caption: "Traffic breakdown" }
      ]
    }
  },
  "market-research-presentation": {
  category: "strategy",
  title: "Market Research Presentation",
  tagline: "Marketing & outreach strategy presented to Baruch Writing Center staff",
  role: "Outreach & Marketing Intern",
  tools: "Google Slides, Canva, Google Docs",
  timeline: "March 2025 to May 2025",
  overview: "During my internship at the Baruch Writing Center, I worked alongside two fellow interns (L.L and S.G) to research and evaluate the Center's current marketing approach, then present data-backed recommendations to Writing Center faculty and leadership. I contributed to every stage of the research — audience analysis, SWOT, and competitor benchmarking — and took the lead on structuring the final presentation itself, organizing our findings into a clear narrative arc (audience → current state → gaps → recommendations) that stakeholders could act on immediately.",
  highlights: [
    "Synthesized 5 years of enrollment and appointment data into a clear audience profile",
    "Benchmarked outreach strategy against two comparable campus offices (STARR and SACC)",
    "Co-developed 5 actionable recommendations, presented directly to Writing Center leadership",
    "Structured the presentation's narrative arc, used to guide the entire stakeholder pitch"
  ],
  media: {
    type: "gallery",
    images: [
      { caption: "Title & Introduction", src: "assets/market-research/slide-01.jpg" },
      { caption: "Project Overview", src: "assets/market-research/slide-02.jpg" },
      { caption: "Methodology", src: "assets/market-research/slide-03.jpg" },
      { caption: "Marketing Goals", src: "assets/market-research/slide-04.jpg" },
      { caption: "SWOT Analysis", src: "assets/market-research/slide-05.jpg" },
      { caption: "Audience Analysis", src: "assets/market-research/slide-06.jpg" },
      { caption: "Who We Serve, By Major", src: "assets/market-research/slide-07.jpg" },
      { caption: "Services Provided", src: "assets/market-research/slide-08.jpg" },
      { caption: "School Culture", src: "assets/market-research/slide-09.jpg" },
      { caption: "Lasting Effects of the Pandemic", src: "assets/market-research/slide-10.jpg" },
      { caption: "Current Marketing Efforts", src: "assets/market-research/slide-11.jpg" },
      { caption: "Competitor Analysis", src: "assets/market-research/slide-12.jpg" },
      { caption: "Student Perspectives", src: "assets/market-research/slide-13.jpg" },
      { caption: "Underserved Segments", src: "assets/market-research/slide-14.jpg" },
      { caption: "The Roadmap", src: "assets/market-research/slide-15.jpg" },
      { caption: "Recommendations in Detail", src: "assets/market-research/slide-16.jpg" },
      { caption: "Deliverables", src: "assets/market-research/slide-17.jpg" },
      { caption: "Project Outcome", src: "assets/market-research/slide-18.jpg" }
    ]
  }
}
};

// ---------- LIGHTBOX (click a gallery image to view full size) ----------
function openLightbox(src, caption) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <figure>
      <img src="${src}" alt="${caption}">
      <figcaption>${caption}</figcaption>
    </figure>
  `;
  overlay.addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}

// ---------- ELEMENT REFS ----------
const tabbar = document.getElementById("tabbar");
const dynamicPanels = document.getElementById("dynamicPanels");
const urlText = document.getElementById("url-text");

// ---------- CORE TAB SWITCHING ----------
function showTab(key) {
  document.querySelectorAll(".tab").forEach(t => {
    const tKey = t.dataset.project ? "project-" + t.dataset.project : t.dataset.tab;
    t.classList.toggle("active", tKey === key);
  });
  document.querySelectorAll(".panel").forEach(p => {
    p.classList.toggle("active", p.dataset.panel === key);
  });
  urlText.textContent = "jasmin-bonilla.portfolio.com/" + key;
  document.querySelector(".frame").scrollIntoView({ behavior: "smooth", block: "start" });
}

// static tab clicks
document.querySelectorAll(".tab[data-tab]").forEach(tab => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});

// ---------- DYNAMIC PROJECT TABS ----------
function openProject(id) {
  const key = "project-" + id;
  const existing = document.querySelector(`.tab[data-project="${id}"]`);

  if (!existing) {
    const data = PROJECTS[id];
    if (!data) return;
    createProjectTab(id, data);
    createProjectPanel(id, data);
  }
  showTab(key);
}

function createProjectTab(id, data) {
  const tab = document.createElement("button");
  tab.className = "tab";
  tab.dataset.project = id;
  tab.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>
    <span class="tab-label"></span>
    <span class="tab-close" title="Close tab">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </span>
  `;
  tab.querySelector(".tab-label").textContent = data.title;

  tab.addEventListener("click", () => showTab("project-" + id));
  tab.querySelector(".tab-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeProject(id);
  });

  tabbar.appendChild(tab);
}

function closeProject(id) {
  const tab = document.querySelector(`.tab[data-project="${id}"]`);
  const panel = document.querySelector(`.panel[data-panel="project-${id}"]`);
  const wasActive = tab && tab.classList.contains("active");

  if (tab) tab.remove();
  if (panel) panel.remove();

  if (wasActive) showTab("projects");
}

// ---------- ICONS FOR LINK BUTTONS ----------
const LINK_ICONS = {
  live: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>`
};

function renderLinks(links) {
  if (!links || !links.length) return "";
  const buttons = links.map(l => `
    <a class="project-link-btn" href="${l.url}" target="_blank" rel="noopener">
      ${LINK_ICONS[l.icon] || LINK_ICONS.live}
      ${l.label}
    </a>
  `).join("");
  return `<div class="project-links">${buttons}</div>`;
}

// ---------- MEDIA (GALLERY / EMBED) ----------
function renderMedia(media) {
  if (!media) return "";

  if (media.type === "gallery") {
    const items = media.images.map(img => {
      if (img.src) {
  return `
    <div class="gallery-item">
      <img src="${img.src}" alt="${img.caption}" onclick="openLightbox('${img.src}', '${img.caption.replace(/'/g, "\\'")}')">
      <p>${img.caption}</p>
    </div>
  `;
}
      return `
        <div class="gallery-item gallery-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-9 9"/></svg>
          <p>${img.caption}</p>
        </div>
      `;
    }).join("");
    return `
      <div class="project-media">
        <h3>Take a look</h3>
        <div class="media-gallery">${items}</div>
      </div>
    `;
  }

  if (media.type === "embed") {
    if (!media.url || media.url === "#") {
      return `
        <div class="project-media">
          <h3>Take a look</h3>
          <div class="embed-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>
            <p>${media.note || "Live embed will appear here"}</p>
            <span>Add the real URL in script.js to activate this embed</span>
          </div>
        </div>
      `;
    }
    return `
      <div class="project-media">
        <h3>Take a look</h3>
        <div class="embed-frame">
          <iframe src="${media.url}" loading="lazy" title="${media.note || 'Embedded project'}"></iframe>
        </div>
      </div>
    `;
  }

  return "";
}

function createProjectPanel(id, data) {
  const meta = CATEGORY_META[data.category];

  const panel = document.createElement("div");
  panel.className = "panel";
  panel.dataset.panel = "project-" + id;

  const highlightsHtml = data.highlights.map(h => `
    <li>
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${h}</span>
    </li>
  `).join("");

  panel.innerHTML = `
    <div class="project-detail">
      <button class="back-link" data-back>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg>
        Back to Projects
      </button>

      <div class="project-banner" style="background:${meta.color};">
        <span class="cat-label">${meta.label}</span>
        <h2>${data.title}</h2>
        <p>${data.tagline}</p>
      </div>

      <div class="project-meta">
        <div class="meta-chip"><b>Role</b>${data.role}</div>
        <div class="meta-chip"><b>Tools</b>${data.tools}</div>
        <div class="meta-chip"><b>Timeline</b>${data.timeline}</div>
      </div>

      ${renderLinks(data.links)}

      <div class="project-body">
        <h3>Overview</h3>
        <p>${data.overview}</p>
        <h3>Highlights</h3>
        <ul class="project-highlights">
          ${highlightsHtml}
        </ul>
      </div>

      ${renderMedia(data.media)}
    </div>
  `;

  panel.querySelector("[data-back]").addEventListener("click", () => showTab("projects"));

  dynamicPanels.appendChild(panel);
}

// project tile clicks
document.querySelectorAll(".tile[data-project]").forEach(tile => {
  tile.addEventListener("click", () => openProject(tile.dataset.project));
});

