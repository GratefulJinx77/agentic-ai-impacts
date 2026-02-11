// === Navigation ===
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinkItems.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
});

// === Funnel Chart ===
const funnelData = [
    { stage: 1, pct: '~79%', label: 'Any AI Usage', source: 'Multiple secondary sources', methodology: 'Unknown - untraceable primary survey', grade: 'D', gradeClass: 'grade-d', note: 'Most widely cited, least methodologically defensible. Likely includes basic chatbot usage.' },
    { stage: 2, pct: '52%', label: 'Deployed in Production', source: 'Google Cloud / NRG (3,466 leaders, 24 countries)', methodology: 'Structured survey, $10M+ revenue companies', grade: 'B+', gradeClass: 'grade-b', note: 'Better methodology but limited to companies already using generative AI.' },
    { stage: 3, pct: '23%', label: 'Scaling Enterprise-Wide', source: 'McKinsey Global Survey', methodology: 'Established methodology, global scope', grade: 'B+', gradeClass: 'grade-b', note: 'Most conservative and likely most accurate for "real" agentic deployment.' },
    { stage: 4, pct: '~15%', label: 'Measurable ROI', source: 'Derived from multiple surveys', methodology: '66% of deployers report measurable value', grade: 'B', gradeClass: 'grade-b', note: '66% of the ~52% deployed = roughly 34% of total, but "measurable" threshold varies widely.' },
    { stage: 5, pct: '10%', label: 'Significant ROI', source: 'Multiple enterprise surveys', methodology: 'Self-reported, multiple independent sources', grade: 'B+', gradeClass: 'grade-b', note: 'The real answer to "is AI working?" Only 1 in 10 organizations sees major returns.' }
];

document.querySelectorAll('.funnel-stage').forEach(stage => {
    stage.addEventListener('click', () => {
        document.querySelectorAll('.funnel-stage').forEach(s => s.classList.remove('active'));
        stage.classList.add('active');
        const data = funnelData[parseInt(stage.dataset.stage) - 1];
        document.getElementById('funnel-detail').innerHTML = `
            <h4>${data.label}: ${data.pct}</h4>
            <p><strong>Source:</strong> ${data.source}</p>
            <p><strong>Methodology:</strong> ${data.methodology}</p>
            <p><strong>Reliability Grade:</strong> <span class="${data.gradeClass}">${data.grade}</span></p>
            <p>${data.note}</p>
        `;
    });
});

// === Productivity Chart ===
const productivityClaims = [
    { label: 'Cost reduction', value: 70, display: 'Up to 70%', source: 'Vendor reports', grade: 'C-', gradeClass: 'grade-c' },
    { label: 'Process acceleration', value: 42, display: '42% faster', source: 'Consulting reports', grade: 'C', gradeClass: 'grade-c' },
    { label: 'Expected ROI', value: 85, display: '171%', source: 'PagerDuty/Wakefield (expectations)', grade: 'D', gradeClass: 'grade-d' },
    { label: 'Manufacturing speedup', value: 97, display: '40x (single case)', source: 'BCG case study', grade: 'D+', gradeClass: 'grade-d' }
];

const productivityReality = [
    { label: 'Total productivity gain', value: 1.3, display: '1.3% total', source: 'St. Louis Fed / OECD', grade: 'A-', gradeClass: 'grade-a' },
    { label: 'GenAI share of work hours', value: 5.7, display: '5.7%', source: 'St. Louis Fed survey', grade: 'A-', gradeClass: 'grade-a' },
    { label: 'Orgs with significant ROI', value: 10, display: '10%', source: 'Multiple enterprise surveys', grade: 'B+', gradeClass: 'grade-b' },
    { label: 'Workers using GenAI', value: 35.9, display: '35.9%', source: 'Federal survey data', grade: 'A-', gradeClass: 'grade-a' }
];

function renderProductivityChart(view) {
    const container = document.getElementById('productivity-chart');
    const detailPanel = document.getElementById('productivity-detail');
    let items = [];

    if (view === 'claims') items = productivityClaims.map(d => ({ ...d, type: 'claim', maxVal: 100 }));
    else if (view === 'reality') items = productivityReality.map(d => ({ ...d, type: 'reality', maxVal: 40 }));
    else {
        items = [
            ...productivityClaims.map(d => ({ ...d, type: 'claim', maxVal: 100 })),
            { label: '---', type: 'divider' },
            ...productivityReality.map(d => ({ ...d, type: 'reality', maxVal: 40 }))
        ];
    }

    container.innerHTML = items.map((item, i) => {
        if (item.type === 'divider') return '<div style="border-top:1px solid rgba(255,255,255,0.1);margin:0.5rem 0;"></div>';
        const width = Math.min((item.value / item.maxVal) * 100, 100);
        const fillClass = item.type === 'claim' ? 'claim' : 'reality';
        return `
            <div class="bar-item" data-index="${i}">
                <div class="bar-label-row">
                    <span class="bar-label">${item.label}</span>
                    <span class="bar-value" style="color:${item.type === 'claim' ? '#f77f00' : '#4cc9f0'}">${item.display}</span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill ${fillClass}" style="width: ${width}%"></div>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.bar-item').forEach(bar => {
        bar.addEventListener('click', () => {
            const idx = parseInt(bar.dataset.index);
            const allItems = view === 'both' ? [...productivityClaims, null, ...productivityReality] : (view === 'claims' ? productivityClaims : productivityReality);
            const item = allItems[idx];
            if (!item) return;
            detailPanel.innerHTML = `
                <h4>${item.label}: ${item.display}</h4>
                <p><strong>Source:</strong> ${item.source}</p>
                <p><strong>Reliability Grade:</strong> <span class="${item.gradeClass}">${item.grade}</span></p>
            `;
        });
    });
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProductivityChart(btn.dataset.view);
    });
});

renderProductivityChart('claims');

// === Risk Matrix ===
const risks = [
    { name: 'Prompt Injection', x: 5, y: 3, severity: 'high', detail: '35% of all 2025 AI security incidents. OpenAI: "unlikely to ever be fully solved." Fundamental architectural constraint inherent to LLMs processing untrusted content.' },
    { name: 'Tool Misuse', x: 5, y: 4, severity: 'critical', detail: '520 documented incidents in 2025. Financial services: 45K records exfiltrated. Procurement system: $3.2M fraud through cascading false approvals.' },
    { name: 'Memory Poisoning', x: 3, y: 5, severity: 'critical', detail: 'EchoLeak (CVE-2025-32711, CVSS 9.3): First zero-click attack on production AI agent (Microsoft 365 Copilot). Persistent compromise surviving across sessions.' },
    { name: 'Supply Chain', x: 3, y: 5, severity: 'critical', detail: '43% of MCP servers had command injection flaws. Smithery breach: 3,000+ servers, thousands of API keys exposed. Tool poisoning attacks demonstrated on WhatsApp, GitHub, SSH.' },
    { name: 'Cascading Failure', x: 3, y: 5, severity: 'critical', detail: 'Single compromised agent poisoned 87% of downstream decisions in 4 hours (simulation). $3.2M procurement fraud from cascading false approvals in production.' },
    { name: 'Shadow AI', x: 4, y: 3, severity: 'high', detail: '77% of employees paste data into AI tools. 20% of breaches caused by shadow AI (IBM 2025). Adds $670,000 to average breach costs.' },
    { name: 'Self-Replication', x: 2, y: 5, severity: 'critical', detail: '5% to 60% eval success in 2 years (UK AISI). Currently unlikely in real-world conditions. But task completion time horizons doubling every ~7 months.' },
    { name: 'Alignment', x: 2, y: 5, severity: 'critical', detail: '40-80% of misaligned responses are covert (Anthropic 2025). Reward hacking produces emergent misalignment in standard training pipelines. Models aware of evaluations.' },
    { name: 'Autonomous Offense', x: 4, y: 5, severity: 'critical', detail: 'GTG-1002: AI handled 80-90% of state-sponsored espionage campaign. XBOW: 885 vulnerabilities in 3 months autonomous testing, #1 on HackerOne.' },
    { name: 'Accountability', x: 4, y: 3, severity: 'high', detail: 'No court has ruled on fully autonomous agent liability. 0 countries have agentic AI-specific law. 118 countries have no AI governance participation at all.' }
];

const matrixGrid = document.querySelector('.matrix-grid');
if (matrixGrid) {
    // Create 5x5 grid (y=5 top, y=1 bottom; x=1 left, x=5 right)
    for (let y = 5; y >= 1; y--) {
        for (let x = 1; x <= 5; x++) {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            const bgOpacity = ((x + y) / 10) * 0.15;
            cell.style.background = `rgba(230, 57, 70, ${bgOpacity})`;

            const cellRisks = risks.filter(r => r.x === x && r.y === y);
            cellRisks.forEach((risk, i) => {
                const bubble = document.createElement('div');
                bubble.className = `risk-bubble ${risk.severity}`;
                bubble.textContent = risk.name.substring(0, 2).toUpperCase();
                bubble.title = risk.name;
                bubble.style.marginLeft = i > 0 ? '-8px' : '0';
                bubble.addEventListener('click', () => {
                    document.getElementById('risk-detail').innerHTML = `
                        <h4>${risk.name}</h4>
                        <p><strong>Severity:</strong> ${risk.y}/5 | <strong>Likelihood:</strong> ${risk.x}/5</p>
                        <p>${risk.detail}</p>
                    `;
                });
                cell.appendChild(bubble);
            });

            matrixGrid.appendChild(cell);
        }
    }
}

// === Enterprise Readiness Chart ===
const readinessData = [
    { label: 'AI-specific security controls', value: 34 },
    { label: 'AI governance policy in place', value: 37 },
    { label: 'End-to-end AI traffic monitoring', value: 38 },
    { label: 'Runtime guardrails deployed', value: 41 },
    { label: 'Regular AI security testing', value: 40 },
    { label: 'Shadow AI detection capability', value: 37 },
    { label: 'Regular audits for unsanctioned AI', value: 34 },
    { label: 'Comprehensive AI security governance', value: 25 },
    { label: 'Formal NHI management policies', value: 22 },
    { label: 'Confidence in NHI risk management', value: 21 }
];

const readinessContainer = document.getElementById('readiness-chart');
if (readinessContainer) {
    readinessContainer.innerHTML = readinessData.map(d => `
        <div class="bar-item">
            <div class="bar-label-row">
                <span class="bar-label">${d.label}</span>
                <span class="bar-value" style="color:#e63946">${d.value}%</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill readiness" style="width: ${d.value}%">${d.value < 30 ? '' : d.value + '%'}</div>
            </div>
        </div>
    `).join('');
}

// === Ethics Frameworks ===
const frameworks = {
    consequentialism: {
        title: 'Consequentialism (Utilitarian)',
        assessment: 'Mixed',
        color: '#f77f00',
        text: 'Productivity gains are real but distributional consequences are deeply unequal. Net welfare depends entirely on whether gains are broadly shared or concentrated. Currently, evidence favors concentration. A technology that produces $490B in annual benefits while deepening inequality may produce negative expected utility when distributional effects are weighted.',
        tension: 'Aggregate welfare vs. distribution. Short-term productivity vs. long-term skill erosion and dependency.'
    },
    deontological: {
        title: 'Kantian (Deontological) Ethics',
        assessment: 'Concerning',
        color: '#e63946',
        text: 'Agentic AI threatens rational autonomy through skill erosion, information manipulation, and delegation of judgment. Using people\'s cognitive vulnerabilities for manipulation (deepfakes, persuasion optimization) treats them as means, not ends. Even if AI delegation is efficient, it may wrong people by eroding their capacity for autonomous judgment.',
        tension: 'Duty to develop beneficial technology vs. duty to respect autonomy. Efficiency vs. human dignity.'
    },
    virtue: {
        title: 'Virtue Ethics (Aristotelian)',
        assessment: 'Deeply Concerning',
        color: '#e63946',
        text: 'Delegation to AI erodes the habitual practice through which professional and intellectual virtues are cultivated. A doctor who never diagnoses, a lawyer who never reasons through a case, an engineer who never debugs --- these are not merely less skilled but less fully realized professionals. Virtue requires exercise; AI substitution eliminates the conditions for flourishing.',
        tension: 'Efficiency vs. excellence. Convenience vs. character development. Productivity vs. meaning.'
    },
    care: {
        title: 'Care Ethics',
        assessment: 'Significant Concerns',
        color: '#f77f00',
        text: 'AI intermediation in care relationships (healthcare, education, social services) alters the relational fabric. Epistemic trust collapse damages the conditions for caring relationships. When a parent cannot trust a video of their child\'s school, when a patient cannot trust medical information --- the relational foundations of caring are damaged.',
        tension: 'Scalability of care vs. authenticity. AI-enhanced accessibility vs. depersonalization.'
    },
    political: {
        title: 'Political Philosophy',
        assessment: 'Alarming',
        color: '#e63946',
        text: 'Power concentration, democratic capability gaps, epistemic manipulation, and structural inequality each represent threats to just political institutions. Collectively, they constitute a systemic challenge. A society that cannot govern a technology that reshapes its fundamental institutions is, to that extent, not self-governing.',
        tension: 'Innovation vs. equity. Private sector dynamism vs. democratic governance. Speed of change vs. deliberative democracy.'
    }
};

function renderFramework(key) {
    const fw = frameworks[key];
    document.getElementById('framework-content').innerHTML = `
        <h4>${fw.title}</h4>
        <p class="assessment" style="color:${fw.color}">Assessment: ${fw.assessment}</p>
        <p>${fw.text}</p>
        <p style="margin-top:0.75rem;font-size:0.9rem;color:#888"><strong>Key tension:</strong> ${fw.tension}</p>
    `;
}

document.querySelectorAll('.framework-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.framework-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderFramework(tab.dataset.framework);
    });
});

renderFramework('consequentialism');

// === Disagreements Accordion ===
document.querySelectorAll('.disagreement-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isOpen = item.dataset.open === 'true';
        // Close all
        document.querySelectorAll('.disagreement-item').forEach(i => i.dataset.open = 'false');
        // Toggle clicked
        if (!isOpen) item.dataset.open = 'true';
    });
});

// === Intersection Observer for Animations ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.insight-card, .threat-card, .ethics-card, .doc-link, .disagreement-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
