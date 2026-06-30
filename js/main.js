// Mobile menu functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  const isMenuHidden = mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");

  // Add slide animation classes
  if (isMenuHidden) {
    mobileMenu.classList.add("animate-slide-in");
    mobileMenu.classList.remove("animate-slide-out");
  } else {
    mobileMenu.classList.add("animate-slide-out");
    mobileMenu.classList.remove("animate-slide-in");
  }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.getElementsByTagName("a");
Array.from(mobileMenuLinks).forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ================================
// Resources expandable panel
// ================================

const resourceData = {
  blogs: {
    title: "All Blog Articles",
    items: [
      {
        title: "PCC vs MCC: The Complete Panel Selection Guide",
        url: "/blogs/pcc-vs-mcc-blog.html",
        meta: "5 min read",
      },
      {
        title: "MLFB Decoded: How to Read Siemens Part Numbers",
        url: "/blogs/mlfb-decoder-blog.html",
        meta: "4 min read",
      },
      {
        title: "APFC Panels & Power Factor",
        url: "/blogs/apfc-power-factor-blog.html",
        meta: "3 min read",
      },
      {
        title: "MPCB Complete Guide",
        url: "/blogs/mpcb-blog.html",
        meta: "4 min read",
      },
      {
        title: "How to Select the Right MPCB",
        url: "/blogs/mpcb-selection-blog.html",
        meta: "5 min read",
      },
      {
        title: "AFDD: Arc Fault Detection Device",
        url: "/blogs/afdd-blog.html",
        meta: "3 min read",
      },
      {
        title: "AI & The Future of MSMEs",
        url: "/blogs/ai_future_msm_es.html",
        meta: "4 min read",
      },
      {
        title: "MCB vs MCCB: Choosing the Right Protection",
        url: "/blogs/mcb_mccb_guide.html",
        meta: "5 min read",
      },
      {
        title: "AI Quick Wins for MSME Procurement",
        url: "/blogs/ai_procurement_guide.html",
        meta: "4 min read",
      },
      {
        title: "Top 5 Mistakes in MSME Projects",
        url: "/blogs/msme_project_mistakes.html",
        meta: "4 min read",
      },
      {
        title: "MSME ERP Adoption",
        url: "/blogs/msme_erp_adoption.html",
        meta: "6 min read",
      },
      {
        title: "Road & Pavement Design Consulting",
        url: "/blogs/road-consulting.html",
        meta: "6 min read",
      },
    ],
  },
  downloads: {
    title: "All Downloads",
    items: [
      {
        title: "Siemens Product Catalog 2024",
        url: "#",
        meta: "PDF • Coming soon",
        soon: true,
      },
      { title: "Panel Checklist", url: "#", meta: "PDF" },
      {
        title: "MSME Digital Audit Template",
        url: "./digital-audit/digital-audit.html",
        meta: "Interactive",
      },
      {
        title: "ERP Readiness Assessment",
        url: "./digital-audit/digital-audit.html",
        meta: "Interactive",
        external: true,
      },
      { title: "Electrical Safety Guidelines", url: "#", meta: "PDF" },
    ],
  },
  tools: {
    title: "All Interactive Tools",
    items: [
      {
        title: "Digital Maturity Audit",
        url: "./digital-audit/digital-audit.html",
        meta: "Interactive",
      },
      {
        title: "ERP Readiness Scorecard",
        url: "./digital-audit/digital-audit.html",
        meta: "Interactive",
      },
      {
        title: "Panel Sizing Calculator",
        url: "#",
        meta: "Coming soon",
        soon: true,
      },
      {
        title: "Power Factor Estimator",
        url: "#",
        meta: "Coming soon",
        soon: true,
      },
    ],
  },
};

const resourcePanel = document.getElementById("resource-panel");
const resourcePanelTitle = document.getElementById("resource-panel-title");
const resourcePanelBody = document.getElementById("resource-panel-body");
const resourcePanelClose = document.getElementById("resource-panel-close");
const resourceExploreButtons = document.querySelectorAll(
  ".resource-explore-btn",
);

function renderResourcePanel(category) {
  const data = resourceData[category];
  if (!data) return;

  resourcePanelTitle.textContent = data.title;

  const grid = document.createElement("div");
  grid.className = "resource-panel-grid";

  data.items.forEach((item) => {
    const cell = document.createElement("div");
    cell.className = "resource-panel-item";

    const icon = item.soon
      ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>';

    if (item.soon) {
      cell.innerHTML = `
                <div class="resource-panel-item-icon">${icon}</div>
                <div class="resource-panel-item-content">
                    <div class="resource-panel-item-title">${item.title}</div>
                    <div class="resource-panel-item-meta">${item.meta}</div>
                </div>
            `;
    } else {
      const target = item.external
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      cell.innerHTML = `
                <a href="${item.url}" class="resource-panel-item-link"${target}>
                    <div class="resource-panel-item-icon">${icon}</div>
                    <div class="resource-panel-item-content">
                        <div class="resource-panel-item-title">${item.title}</div>
                        <div class="resource-panel-item-meta">${item.meta}</div>
                    </div>
                </a>
            `;
    }

    grid.appendChild(cell);
  });

  resourcePanelBody.innerHTML = "";
  resourcePanelBody.appendChild(grid);
}

function openResourcePanel(category) {
  renderResourcePanel(category);

  resourceExploreButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.category === category);
    btn.setAttribute(
      "aria-expanded",
      btn.dataset.category === category ? "true" : "false",
    );
  });

  resourcePanel.classList.add("is-open");
  resourcePanel.setAttribute("aria-hidden", "false");

  // Smoothly scroll the panel into view on mobile
  if (window.innerWidth < 1024) {
    resourcePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeResourcePanel() {
  resourcePanel.classList.remove("is-open");
  resourcePanel.setAttribute("aria-hidden", "true");
  resourceExploreButtons.forEach((btn) => {
    btn.classList.remove("is-active");
    btn.setAttribute("aria-expanded", "false");
  });
}

resourceExploreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (
      resourcePanel.classList.contains("is-open") &&
      resourcePanelTitle.textContent === resourceData[category].title
    ) {
      closeResourcePanel();
    } else {
      openResourcePanel(category);
    }
  });
});

if (resourcePanelClose) {
  resourcePanelClose.addEventListener("click", closeResourcePanel);
}

// Close panel when clicking outside the panel (but not on the explore buttons)
document.addEventListener("click", (e) => {
  if (!resourcePanel) return;
  const isOpen = resourcePanel.classList.contains("is-open");
  const clickedInsidePanel = resourcePanel.contains(e.target);
  const clickedExploreBtn = e.target.closest(".resource-explore-btn");
  if (isOpen && !clickedInsidePanel && !clickedExploreBtn) {
    closeResourcePanel();
  }
});
