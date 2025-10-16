/* script.js
   Vanilla implementation of the React/TSX digital audit.
*/

(function () {
    // -- Data (copied & simplified from TSX) --
    const categories = [
        {
            id: 'infrastructure',
            name: "Digital Infrastructure",
            icon: "🖥️",
            description: "Internet, Hardware, Software, Cloud & IT Support",
            areas: [
                {
                    id: 1, area: "Internet Connectivity & Speed", description: "Quality and reliability of internet connection", examples: {
                        1: "No internet or dial-up", 2: "Basic broadband, frequent issues", 3: "Stable broadband, occasional drops", 4: "High-speed fiber, backup connection", 5: "Enterprise-grade, redundant lines"
                    }
                },
                {
                    id: 2, area: "Hardware & Devices", description: "Computers, laptops, tablets, smartphones availability", examples: {
                        1: "No computers, manual work", 2: "1-2 old desktop computers", 3: "Computers for most staff", 4: "Modern laptops/desktops for all", 5: "Latest devices, tablets, mobile"
                    }
                },
                {
                    id: 3, area: "Software Licensing", description: "Legitimate software licenses and regular updates", examples: {
                        1: "No software licenses", 2: "Pirated or very basic software", 3: "Some licensed software", 4: "All software properly licensed", 5: "Enterprise licenses, auto-updates"
                    }
                },
                {
                    id: 4, area: "Cloud Services Adoption", description: "Use of cloud storage and computing services", examples: {
                        1: "No cloud usage at all", 2: "Personal email only", 3: "Google Drive or similar", 4: "Cloud storage & apps", 5: "Full cloud infrastructure"
                    }
                },
                {
                    id: 5, area: "IT Support & Maintenance", description: "Technical support availability and response time", examples: {
                        1: "No IT support available", 2: "Fix issues ourselves", 3: "Call technician when needed", 4: "Regular IT maintenance contract", 5: "Dedicated IT team/managed services"
                    }
                }
            ]
        },
        {
            id: 'operations',
            name: "Business Operations",
            icon: "💼",
            description: "Accounting, Inventory, CRM, Projects & Documents",
            areas: [
                {
                    id: 6, area: "Accounting & Finance Software", description: "Digital accounting, invoicing, and financial management", examples: {
                        1: "Paper ledgers, manual books", 2: "Excel sheets for accounts", 3: "Tally or basic software", 4: "Zoho Books, QuickBooks", 5: "Integrated ERP with analytics"
                    }
                },
                {
                    id: 7, area: "Inventory Management", description: "Digital tracking of stock, orders, and supplies", examples: {
                        1: "Manual counting, registers", 2: "Excel inventory tracking", 3: "Basic inventory software", 4: "Real-time inventory system", 5: "Automated with barcode/RFID"
                    }
                },
                {
                    id: 8, area: "Customer Relationship Management (CRM)", description: "Digital customer data and interaction tracking", examples: {
                        1: "No customer records kept", 2: "Phone contacts, notebooks", 3: "Excel customer database", 4: "CRM software (Zoho, Salesforce)", 5: "Advanced CRM with automation"
                    }
                },
                {
                    id: 9, area: "Project Management Tools", description: "Digital task and project tracking systems", examples: {
                        1: "No project tracking", 2: "WhatsApp group coordination", 3: "Excel task lists, emails", 4: "Trello, Asana, Monday.com", 5: "Integrated project management"
                    }
                },
                {
                    id: 10, area: "Document Management", description: "Digital filing, storage, and retrieval systems", examples: {
                        1: "Paper files in cabinets", 2: "Scanned docs in folders", 3: "Google Drive, basic cloud", 4: "Organized digital system", 5: "DMS with version control"
                    }
                }
            ]
        },
        {
            id: 'marketing',
            name: "Digital Marketing & Sales",
            icon: "📱",
            description: "Website, Social Media, E-commerce & Advertising",
            areas: [
                {
                    id: 11, area: "Website Presence", description: "Professional, mobile-responsive website", examples: {
                        1: "No website at all", 2: "Basic 1-page site", 3: "Simple website, not updated", 4: "Professional, mobile-friendly", 5: "Dynamic site with CMS, SEO"
                    }
                },
                {
                    id: 12, area: "Social Media Marketing", description: "Active presence on relevant social platforms", examples: {
                        1: "No social media presence", 2: "Personal profile only", 3: "Business page, rare posts", 4: "Regular posts, engagement", 5: "Strategic campaigns, analytics"
                    }
                },
                {
                    id: 13, area: "E-commerce Capabilities", description: "Online selling and payment processing", examples: {
                        1: "Only offline sales", 2: "WhatsApp orders only", 3: "Listed on marketplaces", 4: "Own e-commerce website", 5: "Omnichannel, integrated system"
                    }
                },
                {
                    id: 14, area: "Digital Advertising", description: "Use of Google Ads, Facebook Ads, etc.", examples: {
                        1: "No digital advertising", 2: "Tried once, didn't continue", 3: "Occasional boosted posts", 4: "Regular ad campaigns", 5: "Professional campaigns, ROI tracking"
                    }
                },
                {
                    id: 15, area: "Email Marketing", description: "Email campaigns and automation tools", examples: {
                        1: "No email marketing", 2: "Manual emails to customers", 3: "Bulk emails occasionally", 4: "Mailchimp or similar tool", 5: "Automated campaigns, segmentation"
                    }
                }
            ]
        },
        {
            id: 'communication',
            name: "Communication & Collaboration",
            icon: "💬",
            description: "Email, Video Conferencing, Team Tools & File Sharing",
            areas: [
                {
                    id: 16, area: "Email Systems", description: "Professional email with company domain", examples: {
                        1: "No business email", 2: "Gmail/Yahoo personal email", 3: "Business email (free)", 4: "Professional domain email", 5: "Enterprise email with security"
                    }
                },
                {
                    id: 17, area: "Video Conferencing", description: "Tools like Zoom, Teams, Google Meet", examples: {
                        1: "No video calls capability", 2: "WhatsApp video calls", 3: "Free Zoom/Meet occasionally", 4: "Regular video meetings", 5: "Enterprise tools, webinars"
                    }
                },
                {
                    id: 18, area: "Team Collaboration Platforms", description: "Slack, Teams, or similar collaboration tools", examples: {
                        1: "No collaboration tools", 2: "WhatsApp groups only", 3: "Email threads for projects", 4: "Slack or Microsoft Teams", 5: "Integrated collaboration suite"
                    }
                },
                {
                    id: 19, area: "File Sharing Systems", description: "Secure digital file sharing capabilities", examples: {
                        1: "No file sharing system", 2: "USB drives, physical transfer", 3: "Email attachments", 4: "Google Drive, Dropbox", 5: "Enterprise file sharing, secure"
                    }
                },
                {
                    id: 20, area: "Internal Communication", description: "Digital channels for employee communication", examples: {
                        1: "In-person only", 2: "Phone calls primarily", 3: "WhatsApp for team updates", 4: "Dedicated communication app", 5: "Intranet, employee portal"
                    }
                }
            ]
        },
        {
            id: 'analytics',
            name: "Data & Analytics",
            icon: "📊",
            description: "Data Collection, Reporting, Dashboards & Insights",
            areas: [
                {
                    id: 21, area: "Data Collection Systems", description: "Systematic digital data gathering", examples: {
                        1: "No data collection", 2: "Manual records, registers", 3: "Excel data entry", 4: "Automated data capture", 5: "Real-time data collection, IoT"
                    }
                },
                {
                    id: 22, area: "Analytics & Reporting", description: "Business intelligence and reporting tools", examples: {
                        1: "No reports generated", 2: "Manual calculations", 3: "Basic Excel reports", 4: "Automated reports, charts", 5: "BI tools (Power BI, Tableau)"
                    }
                },
                {
                    id: 23, area: "Performance Dashboards", description: "Real-time KPI tracking and visualization", examples: {
                        1: "No performance tracking", 2: "Monthly manual review", 3: "Weekly Excel tracking", 4: "Real-time dashboards", 5: "AI-powered predictive analytics"
                    }
                },
                {
                    id: 24, area: "Customer Analytics", description: "Customer behavior and sales analytics", examples: {
                        1: "No customer analysis", 2: "Remember regular customers", 3: "Basic sales tracking", 4: "Customer purchase patterns", 5: "Predictive customer analytics"
                    }
                },
                {
                    id: 25, area: "Data-Driven Decision Making", description: "Using data insights for strategy", examples: {
                        1: "Decisions based on instinct", 2: "Occasional data review", 3: "Some data influences decisions", 4: "Regular data-based decisions", 5: "All decisions data-driven"
                    }
                }
            ]
        },
        {
            id: 'security',
            name: "Cybersecurity & Compliance",
            icon: "🔒",
            description: "Security, Backups, Password Management & Privacy",
            areas: [
                {
                    id: 26, area: "Antivirus & Security Software", description: "Updated security protection systems", examples: {
                        1: "No antivirus installed", 2: "Free antivirus, not updated", 3: "Basic paid antivirus", 4: "Enterprise security suite", 5: "Advanced threat protection"
                    }
                },
                {
                    id: 27, area: "Data Backup Systems", description: "Regular automated backups", examples: {
                        1: "No backups at all", 2: "Occasional manual backups", 3: "Weekly backup to external drive", 4: "Daily automated cloud backup", 5: "Real-time backup, disaster recovery"
                    }
                },
                {
                    id: 28, area: "Password Management", description: "Secure password policies and tools", examples: {
                        1: "Same password for everything", 2: "Simple passwords, written down", 3: "Different passwords remembered", 4: "Password manager used", 5: "Enterprise password policy, 2FA"
                    }
                },
                {
                    id: 29, area: "Employee Security Training", description: "Cybersecurity awareness programs", examples: {
                        1: "No security training", 2: "Verbal warnings only", 3: "One-time security briefing", 4: "Annual security training", 5: "Regular training, simulations"
                    }
                },
                {
                    id: 30, area: "Data Privacy Compliance", description: "GDPR, data protection compliance", examples: {
                        1: "No privacy policy", 2: "Basic customer data stored", 3: "Privacy policy exists", 4: "Compliance procedures followed", 5: "Full compliance, certified"
                    }
                }
            ]
        },
        {
            id: 'innovation',
            name: "Automation & Innovation",
            icon: "🚀",
            description: "Process Automation, AI/ML, Digital Payments & Apps",
            areas: [
                {
                    id: 31, area: "Process Automation", description: "Automated workflows and processes", examples: {
                        1: "All manual processes", 2: "Some Excel macros", 3: "Basic workflow automation", 4: "Key processes automated", 5: "Fully automated operations"
                    }
                },
                {
                    id: 32, area: "AI/ML Implementation", description: "Use of artificial intelligence tools", examples: {
                        1: "No AI/ML usage", 2: "Aware but not using", 3: "Trying ChatGPT, basic tools", 4: "AI tools for specific tasks", 5: "Custom AI solutions integrated"
                    }
                },
                {
                    id: 33, area: "Digital Payment Systems", description: "Multiple digital payment options", examples: {
                        1: "Cash only", 2: "Bank transfer manually", 3: "UPI/card accepted", 4: "Multiple payment gateways", 5: "Integrated payment ecosystem"
                    }
                },
                {
                    id: 34, area: "Mobile App Presence", description: "Mobile applications for business", examples: {
                        1: "No mobile app", 2: "Listed on third-party apps", 3: "Considering app development", 4: "Own mobile app launched", 5: "Full-featured native apps"
                    }
                },
                {
                    id: 35, area: "Innovation Mindset", description: "Openness to adopting new technologies", examples: {
                        1: "Resistant to change", 2: "Very cautious, slow to adapt", 3: "Open but budget constraints", 4: "Actively exploring new tech", 5: "Early adopter, innovation leader"
                    }
                }
            ]
        }
    ];

    const ratingScale = [
        { value: 1, label: "Not Implemented", examples: "Paper-based, Manual", colorClass: "scale-1" },
        { value: 2, label: "Basic", examples: "Excel, Email, WhatsApp", colorClass: "scale-2" },
        { value: 3, label: "Developing", examples: "Software, Website", colorClass: "scale-3" },
        { value: 4, label: "Advanced", examples: "ERP, CRM, Cloud", colorClass: "scale-4" },
        { value: 5, label: "Leading", examples: "AI, Automation", colorClass: "scale-5" },
    ];

    // -- App state --
    const state = {
        selectedCategories: new Set(),
        ratings: {},   // areaId => rating (1-5)
        comments: {},  // areaId => text
        companyName: '',
        auditDate: '',
        email: '',
        contactNumber: ''
    };

    // -- DOM refs --
    const totalCategoriesEl = document.getElementById('totalCategories');
    const categoriesGrid = document.getElementById('categoriesGrid');
    const selectedCountEl = document.getElementById('selectedCount');
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const startAuditBtn = document.getElementById('startAuditBtn');
    const selectAllBtn = document.getElementById('selectAllBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const auditDateEl = document.getElementById('auditDate');
    const companyNameEl = document.getElementById('companyName');
    const emailEl = document.getElementById('email');
    const contactNumberEl = document.getElementById('contactNumber');

    const selectionStep = document.getElementById('selection-step');
    const auditStep = document.getElementById('audit-step');
    const categoriesContainer = document.getElementById('categoriesContainer');
    const ratingScaleGrid = document.getElementById('ratingScaleGrid');
    const backBtn = document.getElementById('backBtn');
    const downloadReportBtn = document.getElementById('downloadReportBtn');

    const scorePanel = document.getElementById('scorePanel');
    const overallScoreLarge = document.getElementById('overallScoreLarge');
    const maturityLabel = document.getElementById('maturityLabel');
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    const answeredQuestionsEl = document.getElementById('answeredQuestions');
    const allQuestionsEl = document.getElementById('allQuestions');

    const completionModal = document.getElementById('completionModal');
    const modalScore = document.getElementById('modalScore');
    const modalMaturity = document.getElementById('modalMaturity');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    const auditSummary = document.getElementById('auditSummary');
    const selectedCountDisplay = selectedCountEl;

    // initialize totals
    totalCategoriesEl.textContent = categories.length;
    // set default audit date to today
    auditDateEl.value = new Date().toISOString().split('T')[0];

    // Helper: compute selected categories array
    function getSelectedCats() {
        return categories.filter(c => state.selectedCategories.has(c.id));
    }

    function getTotalQuestionsForSelected() {
        return getSelectedCats().reduce((sum, c) => sum + c.areas.length, 0);
    }

    // UI: render category cards
    function renderCategoryCards() {
        categoriesGrid.innerHTML = '';
        categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            if (state.selectedCategories.has(cat.id)) card.classList.add('selected');

            card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-size:26px">${cat.icon}</div>
          <div style="width:26px;height:26px;border-radius:50%;border:2px solid ${state.selectedCategories.has(cat.id) ? '#4f46e5' : '#e6eef8'};display:flex;align-items:center;justify-content:center;background:${state.selectedCategories.has(cat.id) ? '#4f46e5' : 'transparent'};color:white">
            ${state.selectedCategories.has(cat.id) ? '✓' : ''}
          </div>
        </div>
        <h4 style="margin:10px 0 6px">${cat.name}</h4>
        <div class="muted" style="font-size:13px">${cat.description}</div>
        <div style="font-size:12px;margin-top:8px;color:var(--muted)">${cat.areas.length} questions</div>
      `;
            card.addEventListener('click', () => {
                if (state.selectedCategories.has(cat.id)) state.selectedCategories.delete(cat.id);
                else state.selectedCategories.add(cat.id);
                updateSelectionUI();
                renderCategoryCards();
            });
            categoriesGrid.appendChild(card);
        });
        updateSelectionUI();
    }

    function updateSelectionUI() {
        selectedCountEl.textContent = state.selectedCategories.size;
        totalQuestionsEl.textContent = getTotalQuestionsForSelected();
    }

    // Select all / clear all
    selectAllBtn.addEventListener('click', () => {
        categories.forEach(c => state.selectedCategories.add(c.id));
        renderCategoryCards();
    });
    clearAllBtn.addEventListener('click', () => {
        state.selectedCategories.clear();
        renderCategoryCards();
    });

    // Start Audit button
    startAuditBtn.addEventListener('click', () => {
        const cname = companyNameEl.value.trim();
        const email = emailEl.value.trim();
        const contact = contactNumberEl.value.trim();
        const totalSelected = state.selectedCategories.size;
        if (totalSelected === 0) { alert('Please select at least one category to audit'); return; }
        if (!cname || !email || !contact) { alert('Please fill in Company Name, Email and Contact Number'); return; }

        // save state
        state.companyName = cname;
        state.auditDate = auditDateEl.value || new Date().toISOString().split('T')[0];
        state.email = email;
        state.contactNumber = contact;

        // switch view
        selectionStep.classList.add('hidden');
        auditStep.classList.remove('hidden');
        renderAudit();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // back button
    backBtn.addEventListener('click', () => {
        auditStep.classList.add('hidden');
        selectionStep.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // render rating scale reference
    function renderRatingScale() {
        ratingScaleGrid.innerHTML = '';
        ratingScale.forEach(s => {
            const pill = document.createElement('div');
            pill.className = 'scale-pill';
            pill.innerHTML = `<div class="num">${s.value}</div><div class="label">${s.label}</div><div class="muted" style="font-size:12px;margin-top:6px">${s.examples}</div>`;
            ratingScaleGrid.appendChild(pill);
        });
    }

    // render audit categories & areas
    function renderAudit() {
        const selected = getSelectedCats();
        categoriesContainer.innerHTML = '';
        // header summary
        auditSummary.textContent = `${state.companyName} — ${selected.length} Categories Selected`;

        // for each selected category, create a card with its areas
        selected.forEach(cat => {
            const catCard = document.createElement('div');
            catCard.className = 'card';
            const catHeader = document.createElement('div');
            catHeader.className = 'row between';
            catHeader.innerHTML = `<div style="display:flex;gap:12px;align-items:center"><div style="font-size:28px">${cat.icon}</div>
                              <div><h3 style="margin:0">${cat.name}</h3><div class="muted">${cat.description}</div></div></div>
                              <div style="text-align:right"><div class="muted">Category Score</div><div style="font-weight:800;color:#4f46e5" id="catScore-${cat.id}">0 / 5.0</div></div>`;
            catCard.appendChild(catHeader);

            // areas
            cat.areas.forEach(area => {
                const a = document.createElement('div');
                a.className = 'area-block';
                a.id = `area-${area.id}`;
                a.innerHTML = `
          <div class="area-header">
            <div>
              <div style="font-weight:700">${area.area}</div>
              <div class="muted" style="font-size:13px">${area.description}</div>
            </div>
            <div id="areaRatingDisplay-${area.id}" class="muted">Rating: ${state.ratings[area.id] || 'Not Rated'} / 5</div>
          </div>
          <div class="rating-row" id="ratingRow-${area.id}"></div>
          <textarea id="comment-${area.id}" placeholder="Add comments, observations, or recommendations...">${state.comments[area.id] || ''}</textarea>
        `;

                // rating buttons
                const ratingRow = a.querySelector(`#ratingRow-${area.id}`);
                [1, 2, 3, 4, 5].forEach(r => {
                    const btn = document.createElement('button');
                    btn.className = 'rating-btn';
                    btn.innerHTML = `<div style="font-weight:700">${r}</div><div style="font-size:12px" class="muted">${ratingScale[r - 1].label}</div><div style="font-size:11px;margin-top:6px" class="muted">${area.examples[r]}</div>`;
                    if (state.ratings[area.id] === r) btn.classList.add('selected');
                    btn.addEventListener('click', () => {
                        state.ratings[area.id] = r;
                        // reflect UI changes
                        document.querySelectorAll(`#area-${area.id} .rating-btn`).forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        document.getElementById(`areaRatingDisplay-${area.id}`).textContent = `Rating: ${r} / 5`;
                        state.comments[area.id] = document.getElementById(`comment-${area.id}`).value;
                        updateScoresUI();
                        checkCompletionAndModal();
                    });
                    ratingRow.appendChild(btn);
                });

                // comment event
                const commentEl = a.querySelector(`#comment-${area.id}`);
                commentEl.addEventListener('input', (e) => {
                    state.comments[area.id] = e.target.value;
                });

                catCard.appendChild(a);
            });

            categoriesContainer.appendChild(catCard);
        });

        // initial score UI
        renderRatingScale();
        updateScoresUI();
    }

    function calculateCategoryScore(category) {
        const vals = category.areas.map(a => state.ratings[a.id]).filter(v => typeof v === 'number');
        if (vals.length === 0) return 0;
        const sum = vals.reduce((s, v) => s + v, 0);
        return (sum / vals.length);
    }

    function calculateOverallScore() {
        const selected = getSelectedCats();
        const allAreas = selected.flatMap(c => c.areas);
        const values = allAreas.map(a => state.ratings[a.id]).filter(v => typeof v === 'number');
        if (values.length === 0) return 0;
        const sum = values.reduce((s, v) => s + v, 0);
        return (sum / values.length);
    }

    function getMaturityLevel(score) {
        if (score >= 4.5) return { level: "Digital Leader", className: "green" };
        if (score >= 3.5) return { level: "Digitally Advanced", className: "blue" };
        if (score >= 2.5) return { level: "Digitally Developing", className: "yellow" };
        if (score >= 1.5) return { level: "Digital Beginner", className: "orange" };
        return { level: "Digital Laggard", className: "red" };
    }

    function updateScoresUI() {
        const selected = getSelectedCats();
        // per category
        selected.forEach(cat => {
            const score = calculateCategoryScore(cat);
            const el = document.getElementById(`catScore-${cat.id}`);
            if (el) el.textContent = `${score ? score.toFixed(1) : '0.0'} / 5.0`;
        });

        const totalQ = getTotalQuestionsForSelected();
        const answeredQ = Object.keys(state.ratings).filter(k => {
            const id = Number(k);
            return getSelectedCats().some(cat => cat.areas.some(a => a.id === id));
        }).length;

        // overall
        const overall = calculateOverallScore();
        const overallDisplay = overall ? overall.toFixed(1) : '0.0';
        overallScoreLarge.textContent = `${overallDisplay} / 5.0`;
        modalScore.textContent = `${overallDisplay} / 5.0`;
        const maturity = getMaturityLevel(overall);
        maturityLabel.textContent = maturity.level;
        modalMaturity.textContent = maturity.level;

        // progress
        const percent = totalQ === 0 ? 0 : Math.round((answeredQ / totalQ) * 100);
        progressBar.style.width = percent + '%';
        progressPercent.textContent = percent + '%';
        answeredQuestionsEl.textContent = answeredQ;
        allQuestionsEl.textContent = totalQ;

        // show score panel if at least one rating given
        if (answeredQ > 0) scorePanel.classList.remove('hidden');
        else scorePanel.classList.add('hidden');
    }

    // Completion modal trigger when all answered
    let modalShown = false;
    function checkCompletionAndModal() {
        const totalQ = getTotalQuestionsForSelected();
        const answeredQ = Object.keys(state.ratings).filter(k => {
            const id = Number(k);
            return getSelectedCats().some(cat => cat.areas.some(a => a.id === id));
        }).length;
        if (totalQ > 0 && answeredQ === totalQ && !modalShown) {
            modalShown = true;
            completionModal.classList.remove('hidden');
            setTimeout(() => {
                // smooth scroll top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 250);
        }
    }

    // close modal
    modalCloseBtn.addEventListener('click', () => {
        completionModal.classList.add('hidden');
        // don't reset modalShown to preserve one-time show
    });

    // Download report: generate HTML and download
    downloadReportBtn.addEventListener('click', generateReport);

    function generateReport() {
        const selectedCats = getSelectedCats();
        const totalQ = getTotalQuestionsForSelected();
        const answeredQ = Object.keys(state.ratings).filter(k => {
            const id = Number(k);
            return selectedCats.some(cat => cat.areas.some(a => a.id === id));
        }).length;
        const overall = calculateOverallScore();
        const overallDisplay = overall ? overall.toFixed(1) : '0.0';
        const maturity = getMaturityLevel(overall);

        // prepare category blocks
        function renderCategoryHTML(cat) {
            const catScore = calculateCategoryScore(cat);
            const areasHTML = cat.areas.map(area => {
                const r = state.ratings[area.id];
                const comment = state.comments[area.id] || '';
                return `
          <div class="area-item">
            <div class="area-name">${area.area}</div>
            <div style="color:#64748b;font-size:14px;margin:6px 0">${area.description}</div>
            <div class="area-rating">Rating: ${r ? r : 'Not Rated'} / 5</div>
            ${r ? `<div style="margin-top:10px;padding:10px;background:#f1f5f9;border-left:4px solid #3730a3;">
              <strong>Your Selection (Level ${r}):</strong>
              <p style="margin:8px 0;color:#475569">${area.examples[r]}</p>
            </div>` : ''}
            ${comment ? `<div style="margin-top:10px;padding:10px;background:#f8fafc;border-radius:6px;color:#475569"><strong>Comment:</strong> ${escapeHtml(comment)}</div>` : ''}
          </div>
        `;
            }).join('\n');
            return `
        <div class="category-section">
          <div class="category-header"><span>${cat.icon} ${cat.name}</span><span class="category-score">${catScore ? catScore.toFixed(1) : '0.0'} / 5.0</span></div>
          <div style="background:#f8fafc;padding:20px;border-radius:0 0 12px 12px;">
            <p style="color:#64748b">${escapeHtml(cat.description)}</p>
            ${areasHTML}
          </div>
        </div>
      `;
        }

        const reportHTML = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Aventra Systems - Digital Audit Report</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6;background:#fff;padding:0;margin:0}
    .letterhead{background:linear-gradient(135deg,#1e3a8a 0%,#3730a3 100%);color:white;padding:40px;text-align:center}
    .company-name{font-size:36px;font-weight:800;letter-spacing:2px}
    .tagline{color:#a5b4fc;margin-top:6px}
    .content{padding:30px;max-width:1000px;margin:0 auto}
    .report-title{font-size:28px;color:#1e3a8a;font-weight:800;text-align:center;margin-bottom:18px}
    .info-section{background:#f8fafc;padding:16px;border-radius:8px;margin-bottom:16px;border-left:5px solid #3730a3}
    .info-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #e6eaf5}
    .score-section{background:linear-gradient(135deg,#dbeafe,#e0e7ff);padding:20px;border-radius:12px;text-align:center;margin-bottom:18px}
    .score-value{font-size:48px;font-weight:800;color:#1e3a8a}
    .category-section{margin-bottom:18px}
    .category-header{background:#3730a3;color:white;padding:12px;border-radius:8px;display:flex;justify-content:space-between;align-items:center}
    .area-item{background:white;padding:14px;margin:14px 0;border-radius:8px;border:1px solid #e6eaf5}
    .area-name{font-weight:700}
    .rating-guide{background:#f1f5f9;padding:16px;border-radius:8px}
    .footer{background:linear-gradient(135deg,#1e3a8a 0%,#3730a3 100%);color:white;padding:30px;text-align:center;margin-top:30px}
  </style>
</head>
<body>
  <div class="letterhead">
    <img src="https://cdn.prod.website-files.com/679c600e41c2c993e087876c/679c60e23c96e5e8ebe5f7bd_Group%201.svg" alt="Aventra" style="height:64px;filter:brightness(0) invert(1)"/>
    <div class="company-name">AVENTRA SYSTEMS</div>
    <div class="tagline">SMART SYSTEMS DELIVERED</div>
  </div>
  <div class="content">
    <div class="report-title">MSME DIGITAL AUDIT REPORT</div>
    <div class="info-section">
      <div class="info-row"><div><strong>Company Name:</strong></div><div>${escapeHtml(state.companyName || 'N/A')}</div></div>
      <div class="info-row"><div><strong>Audit Date:</strong></div><div>${escapeHtml(state.auditDate || '')}</div></div>
      <div class="info-row"><div><strong>Email:</strong></div><div>${escapeHtml(state.email || 'N/A')}</div></div>
      <div class="info-row"><div><strong>Contact Number:</strong></div><div>${escapeHtml(state.contactNumber || 'N/A')}</div></div>
      <div class="info-row"><div><strong>Scope:</strong></div><div>${selectedCats.length === categories.length ? 'Complete Audit (All Categories)' : 'Partial Audit (' + selectedCats.length + ' Categories)'}</div></div>
      <div class="info-row"><div><strong>Questions Completed:</strong></div><div>${answeredQ} / ${totalQ}</div></div>
    </div>

    <div class="score-section">
      <div style="font-size:18px;color:#1e3a8a;font-weight:700">Digital Maturity Assessment</div>
      <div class="score-value">${overallDisplay} / 5.0</div>
      <div style="font-weight:700;color:#3730a3;margin-top:6px">${maturity.level}</div>
      <div style="color:#64748b;margin-top:8px">Based on assessment of ${selectedCats.length} categories covering ${totalQ} areas</div>
    </div>

    ${selectedCats.map(c => renderCategoryHTML(c)).join('\n')}

    <div class="rating-guide">
      <h3>Understanding the Rating Scale</h3>
      <div><strong>Level 1 - Not Implemented:</strong> No digital tools or processes.</div>
      <div><strong>Level 2 - Basic:</strong> Minimal digital adoption.</div>
      <div><strong>Level 3 - Developing:</strong> Some digital tools in use.</div>
      <div><strong>Level 4 - Advanced:</strong> Strong digital presence.</div>
      <div><strong>Level 5 - Leading:</strong> Cutting-edge technology.</div>
    </div>

    <div style="margin-top:18px;padding:16px;background:#f8fafc;border-radius:8px">
      <h4>Next Steps</h4>
      <ul>
        <li>Schedule a consultation with our team.</li>
        <li>Identify priority areas for digital transformation.</li>
        <li>Develop a customized roadmap.</li>
      </ul>
      <div style="margin-top:8px;color:#475569">Contact: <strong>sales@aventrasystems.in</strong></div>
    </div>
  </div>

  <div class="footer">
    <img src="https://cdn.prod.website-files.com/679c600e41c2c993e087876c/679c60e23c96e5e8ebe5f7bd_Group%201.svg" alt="logo" style="height:48px;filter:brightness(0) invert(1)"/><br>
    © 2025 Aventra Systems. All Rights Reserved.
  </div>
</body>
</html>
    `;

        // const blob = new Blob([reportHTML], { type: 'text/html' });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // const safeName = (state.companyName || 'Report').replace(/\s+/g, '_').replace(/[^\w\-]/g, '');
        // a.href = url;
        // a.download = `Aventra_Digital_Audit_${safeName}_${(state.auditDate || '')}.html`;
        // document.body.appendChild(a);
        // a.click();
        // a.remove();
        // URL.revokeObjectURL(url);
        const reportElement = document.createElement('div');
reportElement.innerHTML = reportHTML;

const safeName = (state.companyName || 'Report')
  .replace(/\s+/g, '_')
  .replace(/[^\w\-]/g, '');

const options = {
  margin:       0.5,
  filename:     `Aventra_Digital_Audit_${safeName}_${(state.auditDate || '')}.pdf`,
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
};

// Generate and download PDF
html2pdf().set(options).from(reportElement).save();
    }

    // small helper to escape HTML in report
    function escapeHtml(s) {
        if (!s) return '';
        return String(s).replace(/[&<>"']/g, function (m) {
            return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]);
        });
    }

    // initial render
    renderCategoryCards();
    renderRatingScale();

    // for accessibility & initial values
    companyNameEl.addEventListener('input', (e) => state.companyName = e.target.value);
    auditDateEl.addEventListener('change', (e) => state.auditDate = e.target.value);
    emailEl.addEventListener('input', (e) => state.email = e.target.value);
    contactNumberEl.addEventListener('input', (e) => state.contactNumber = e.target.value);

})();
