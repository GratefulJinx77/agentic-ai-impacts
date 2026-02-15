# Governance & Policy Analysis: Autonomous Agentic AI

**Analyst:** Governance & Policy Analyst Agent
**Date:** February 10, 2026
**Evidence Base:** 80+ sources across government publications, legal analyses, international body reports, academic journals, and industry documentation
**Scope:** Global regulatory landscape for autonomous agentic AI systems

---

## Executive Summary

The governance landscape for autonomous agentic AI in early 2026 is characterized by a fundamental paradox: the technology is deploying faster than any jurisdiction can regulate it, yet the regulatory response is simultaneously accelerating at an unprecedented pace. Over 700 AI-related bills were introduced across US state legislatures in 2025 alone, the EU AI Act entered phased enforcement in August 2025, and international bodies launched new governance mechanisms. Yet critical gaps persist.

**Five headline findings:**

1. **No jurisdiction has enacted legislation specifically designed for agentic AI systems.** Existing frameworks (EU AI Act, state laws, sector regulations) address "AI systems" generically. The unique properties of autonomous agents — multi-step planning, tool use, persistent memory, chain-of-action opacity — fall through definitional cracks in every major regulatory framework.

2. **The US is in an active federal-state regulatory collision.** The December 2025 Executive Order creates an AI Litigation Task Force specifically to challenge state AI laws in court, while California, New York, Texas, and Colorado have enacted or are implementing major AI legislation. This collision will likely reach the courts in 2026-2027.

3. **118 countries — predominantly in the Global South — remain outside all significant AI governance initiatives.** The August 2025 UN resolution establishing new governance bodies is the first framework to include all 193 member states, but enforceable international standards are estimated at 5-7 years away.

4. **A critical liability gap exists for autonomous agent behavior.** No court has issued definitive rulings on liability for fully autonomous agent chains-of-action. California's AB 316 (effective January 1, 2026) closes one loophole by prohibiting the "autonomous AI defense," but comprehensive liability frameworks remain absent.

5. **Industry self-regulation through voluntary commitments has produced minimal accountability.** The 2023 White House voluntary commitments brought some improved red-teaming practices but "nowhere near" adequate governance. The Agentic AI Foundation (AAIF) focuses on technical interoperability, not safety governance.

**Overall Assessment:** Governance is in a transitional period — moving from aspirational principles to enforceable obligations — but the transition is incomplete, fragmented, and poorly coordinated across jurisdictions. The regulatory architecture being built today will determine whether agentic AI develops within a framework of accountability or whether a "governance vacuum" persists during the period of fastest capability advancement.

---

## Regulatory Landscape Overview

| Jurisdiction | Framework | Status | Enforcement | Agentic AI Coverage |
|---|---|---|---|---|
| **EU** | AI Act (Regulation 2024/1689) | Phased enforcement: prohibited practices (Feb 2025), GPAI (Aug 2025), high-risk systems (Aug 2026), full application (Aug 2027) | European AI Office + Member State authorities; fines up to EUR 35M or 7% global turnover | Indirect — covers "AI systems" broadly; no agentic-specific provisions; GPAI systemic risk rules apply to foundation models underlying agents |
| **EU** | Product Liability Directive (2024/2853) | Member State transposition deadline: Dec 9, 2026 | Strict liability through national courts | Strong — explicitly covers software/AI as "products"; covers autonomous/adaptive behavior including post-sale ML updates |
| **US Federal** | Executive Order (Dec 11, 2025) | Active; directs creation of AI Litigation Task Force and legislative recommendation | Federal preemption strategy; no direct enforcement mechanism yet | Policy-level; frames innovation-enabling approach; does not define or specifically address agentic AI |
| **California** | TFAIA (SB 53) | Effective Jan 1, 2026 | CA Attorney General | Frontier model transparency; does not specifically address agentic capabilities |
| **California** | AB 316 (AI Liability) | Effective Jan 1, 2026 | Civil litigation | Directly relevant — eliminates "autonomous AI" defense for liability |
| **New York** | RAISE Act | Signed Dec 19, 2025; effective Mar 19, 2026 (some provisions Jan 1, 2027) | NY Attorney General | Frontier model safety frameworks; transparency obligations |
| **Texas** | TRAIGA | Effective Jan 1, 2026 | TX Attorney General (exclusive); 60-day cure period | Prohibits harmful AI uses; regulatory sandbox; NIST RMF safe harbor |
| **Colorado** | AI Act (SB 24-205) | Effective Jun 30, 2026 (delayed from Feb 2026) | AG enforcement as unfair trade practice | High-risk AI system obligations; algorithmic discrimination focus |
| **UK** | Pro-innovation principles + planned AI Bill | Five principles active; comprehensive legislation expected 2026 | Sector regulators (no central AI regulator yet) | AI Security Institute (rebranded Feb 2025) focuses on frontier/national security risks |
| **China** | Multiple regulations (Generative AI, labeling, ethics) | Active since Aug 2023; continuous expansion through 2025-2026 | Cyberspace Administration of China (CAC) + sector regulators | Comprehensive — AI agents specifically targeted in "AI Plus" initiative (70% penetration goal by 2027) |
| **International** | UN Global Dialogue + Scientific Panel (Aug 2025) | Established; implementation in early stages | Aspirational — no enforcement mechanism | Broad mandate; 5-7 year timeline to enforceable standards |
| **International** | OECD AI Principles (revised 2024) | Active soft law; Reporting Framework launched Feb 2025 | Voluntary reporting; no enforcement | Principles-based; monitoring through AI Policy Observatory |
| **International** | G7 Hiroshima AI Process | Code of Conduct active; Reporting Framework launched Feb 2025 | Voluntary; OECD-hosted transparency mechanism | Advanced AI systems generally; not agentic-specific |

**Evidence Tier: Established Consensus** — Based on enacted legislation, official government publications, and international body documentation.

---

## EU AI Act Analysis

### Relevance to Agentic AI

The EU AI Act (Regulation 2024/1689) is the world's first comprehensive, legally binding AI regulation. However, it was drafted primarily between 2019-2023, before "agentic AI" emerged as a distinct category. The Act's framework creates several relevant obligations but also significant gaps.

**What the Act covers that applies to agentic AI:**

1. **Prohibited Practices (Article 5, effective February 2, 2025):** Bans AI systems that manipulate behavior, exploit vulnerabilities, implement social scoring by public authorities, or conduct untargeted facial recognition scraping. Autonomous agents designed to manipulate user behavior would fall under these prohibitions.

2. **High-Risk AI Systems (Annex III, effective August 2, 2026):** AI systems used in employment, education enrollment, credit scoring, essential services, law enforcement, migration, and democratic processes are classified as high-risk regardless of the level of autonomy. An agentic system making hiring decisions or credit assessments would face full compliance requirements including risk management systems, data governance, technical documentation, human oversight, and accuracy/robustness standards.

3. **General-Purpose AI Models (Chapter V, effective August 2, 2025):** All GPAI model providers must maintain technical documentation, provide information to downstream deployers, comply with copyright obligations, and publish training data summaries. GPAI models with "systemic risk" (>10^25 FLOPs training compute) face additional obligations: model evaluations, adversarial testing, serious incident tracking/reporting, and cybersecurity protections.

4. **Transparency Obligations (Article 50, effective August 2, 2026):** AI systems interacting with natural persons must disclose they are AI. This directly applies to agentic systems that communicate with users or take actions on their behalf.

**What the Act does NOT adequately cover for agentic AI:**

1. **Multi-step autonomous planning:** The Act's risk classification assumes relatively bounded AI system behavior. An agent that plans and executes multi-step workflows — purchasing, emailing, scheduling, coding — across tools and services defies the Act's implicit model of an AI system performing a single classifiable function.

2. **Chain-of-action opacity:** The Act requires transparency and human oversight, but agentic systems can take dozens of intermediate actions before producing an observable output. The oversight model assumes a human can meaningfully review AI decisions, which becomes impractical at agent speed and complexity.

3. **Dynamic capability expansion:** An agent using tools, browsing the web, and writing code can acquire capabilities post-deployment that were not present during conformity assessment. The Act's pre-market conformity assessment model struggles with systems whose capabilities are emergent and context-dependent.

4. **Multi-agent interactions:** The Act regulates individual "AI systems" and their "providers" and "deployers." Multi-agent architectures where several agents collaborate create unclear liability chains and compliance obligations.

### Implementation Timeline and Enforcement

| Date | Milestone |
|---|---|
| Feb 2, 2025 | Prohibited practices ban takes effect |
| Aug 2, 2025 | GPAI model obligations, governance structure |
| Nov 2025 | Legislative proposal to extend high-risk deadlines to Dec 2027 |
| Aug 2, 2026 | High-risk AI system obligations (Annex III), transparency rules, innovation measures |
| Aug 2, 2027 | Full application of all remaining provisions |

**Enforcement architecture:** The European AI Office (within the European Commission) supervises GPAI model compliance. Each Member State designates national competent authorities for market surveillance. The AI Board, Scientific Panel, and Advisory Forum provide governance steering.

**Penalties:**
- Prohibited practices violations: Up to EUR 35 million or 7% of global annual turnover
- High-risk and GPAI obligations: Up to EUR 15 million or 3% of global turnover
- Incorrect information to authorities: Up to EUR 7.5 million or 1% of global turnover

**Evidence Tier: Established Consensus** — Based on enacted EU legislation (Official Journal L, 2024/1689), European Commission implementation guidance, and legal analysis from DLA Piper, K&L Gates, Arnold & Porter, Orrick, and SIG.

**Sources:**
- [EU AI Act Implementation Timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act)
- [DLA Piper: Latest Obligations Under EU AI Act](https://www.dlapiper.com/en-us/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect)
- [Comprehensive EU AI Act Summary, January 2026](https://www.softwareimprovementgroup.com/blog/eu-ai-act-summary/)
- [Article 6: Classification Rules](https://artificialintelligenceact.eu/article/6/)
- [GPAI Guidelines Overview](https://artificialintelligenceact.eu/gpai-guidelines-overview/)
- [Orrick: 6 Steps Before August 2026](https://www.orrick.com/en/Insights/2025/11/The-EU-AI-Act-6-Steps-to-Take-Before-2-August-2026)

---

## US Regulatory Fragmentation

### Federal Level: The Preemption Strategy

The December 11, 2025 Executive Order, titled "Ensuring a National Policy Framework for Artificial Intelligence," represents a dramatic shift in US AI governance strategy. Rather than establishing comprehensive federal AI regulation, the Order's primary mechanism is *preempting state regulation* through three tools:

1. **Federal litigation:** The Attorney General must establish an AI Litigation Task Force within 30 days to challenge state AI laws on theories including unconstitutional burdens on interstate commerce and preemption by existing federal statutes.

2. **Funding conditions:** Federal grant funding can be withheld from states that enact "onerous" AI laws.

3. **FTC policy statement:** The FTC is directed to explain when state laws requiring alterations to AI model outputs are preempted by the FTC Act.

**Exemptions from preemption:** The Order specifically exempts state laws relating to child safety protections, AI compute and data center infrastructure, and state government procurement and use of AI.

**Critical assessment:** The Executive Order creates a governance vacuum by design. It aims to prevent "burdensome" state regulation without establishing substantive federal requirements. The legislative recommendation for a "uniform Federal policy framework" is directed but not yet produced. In the interim, the US federal government's substantive AI governance consists primarily of sector-specific agency guidance (SEC, CFTC, FDA, etc.) without binding AI-specific regulation.

**Evidence Tier: Established Consensus** — Based on the Executive Order text, legal analyses from Latham & Watkins, Mayer Brown, Sidley Austin, Epstein Becker Green, McGuireWoods, and the Economic Policy Institute.

### State-Level Legislation: The Patchwork

Despite federal preemption pressure, states are legislating aggressively. Key enacted laws:

#### Texas: TRAIGA (Effective January 1, 2026)

The Texas Responsible AI Governance Act is notable for its structure:

- **Prohibitions:** AI systems designed for behavioral manipulation, discrimination, CSAM, unlawful deepfakes, or constitutional rights infringement
- **Government obligations:** Mandatory AI interaction disclosure; prohibition on social scoring systems; biometric identification restrictions
- **Regulatory sandbox:** 36-month innovation sandbox for AI testing under regulatory oversight
- **Enforcement:** Texas Attorney General holds exclusive enforcement authority; 60-day cure period before action; no private right of action
- **Civil penalties:** Curable violations: $10,000-$12,000 per violation; uncurable: $80,000-$200,000; continuing: $2,000-$40,000/day
- **Safe harbor:** Substantial compliance with NIST AI RMF or equivalent recognized framework serves as affirmative defense
- **Preemption of local law:** Nullifies any city or county AI ordinances

**Assessment:** TRAIGA is a pro-business framework — it provides significant safe harbors, mandates cure periods, blocks local regulation, and channels enforcement exclusively through the AG's office. The 36-month sandbox is innovation-enabling. The NIST RMF safe harbor incentivizes adoption of voluntary frameworks.

**Sources:**
- [Baker Botts: Texas Enacts TRAIGA](https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-enacts-responsible-ai-governance-act-what-companies-need-to-know)
- [Latham & Watkins: Texas Signs TRAIGA](https://www.lw.com/en/insights/texas-signs-responsible-ai-governance-act-into-law)
- [Norton Rose Fulbright: TRAIGA Guide](https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act)
- [Ropes & Gray: Navigating TRAIGA](https://www.ropesgray.com/en/insights/alerts/2025/06/navigating-traiga-texas-new-ai-compliance-framework)
- [ABA: Texas AI Sandbox](https://www.americanbar.org/groups/business_law/resources/business-law-today/2025-july/texas-enters-ai-sandbox-with-traiga-implications-business-trials/)

#### California: TFAIA + AB 316 (Both Effective January 1, 2026)

California enacted two significant laws:

**TFAIA (SB 53) — Transparency in Frontier AI Act:**
- Requires developers of "frontier" AI models (those with $500M+ developer revenue) to publish safety frameworks
- Mandates transparency about model capabilities, limitations, and testing
- Signed September 29, 2025

**AB 316 — AI Liability Defense Elimination:**
- Prohibits defendants who developed, modified, or used AI from asserting a defense that "the AI autonomously caused the harm"
- Applies across the entire AI supply chain: foundation model developers, fine-tuners, integrators, and deployers
- Does NOT create strict liability — removes one specific defense while preserving traditional liability analysis
- Companies retaining reasonable safeguards, testing, and documentation can still demonstrate appropriate conduct

**Assessment:** AB 316 is the most directly relevant US legislation for agentic AI liability. By eliminating the "autonomous AI defense," California establishes that AI autonomy does not sever the accountability chain. This is a significant precedent even if other states do not follow suit, given California's market influence.

**Sources:**
- [Baker Botts: California Eliminates Autonomous AI Defense](https://ourtake.bakerbotts.com/post/102m29i/california-eliminates-the-autonomous-ai-defense-what-ab-316-means-for-ai-deplo)
- [National Law Review: California AI Laws 2026](https://natlawreview.com/article/new-california-ai-laws-taking-effect-2026)
- [FPF: California SB 53 Explained](https://fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained/)

#### New York: RAISE Act (Signed December 19, 2025)

- Imposes transparency, compliance, safety, and reporting requirements on developers of "frontier" AI models
- Covers "large developers" with >$500M revenue developing, deploying, or operating frontier models in New York
- Closely tracks California's TFAIA in structure and scope
- Signed just 8 days after the federal preemption Executive Order — a deliberate assertion of state regulatory authority

**Assessment:** The timing of the RAISE Act signing suggests Governor Hochul's deliberate defiance of the federal preemption strategy, setting up a direct federal-state confrontation.

**Sources:**
- [Governor Hochul Signs RAISE Act](https://www.governor.ny.gov/news/governor-hochul-signs-nation-leading-legislation-require-ai-frameworks-ai-frontier-models)
- [Skadden: NY AI Transparency Law](https://www.skadden.com/insights/publications/2026/01/new-york-enacts-ai-transparency-law)
- [DLA Piper: RAISE Act Analysis](https://www.dlapiper.com/en-us/insights/publications/2025/12/the-raise-act-new-york-joins-california-in-requiring-developer-transparency-for-large-ai-models)
- [FPF: RAISE Act vs. SB 53](https://fpf.org/blog/the-raise-act-vs-sb-53-a-tale-of-two-frontier-ai-laws/)
- [KPMG: State AI Safety Laws](https://kpmg.com/us/en/articles/2026/state-ai-safety-laws-ca-and-ny-reg-alert.html)

#### Colorado: AI Act (Effective June 30, 2026)

- First US state to enact comprehensive AI regulation (signed May 2024)
- Focuses on preventing algorithmic discrimination in "consequential decisions" (employment, education, finance, healthcare, housing, insurance, government, legal)
- Requires: risk management programs, impact assessments, annual system reviews, consumer notification for consequential decisions, correction rights, human appeal rights
- Developer obligations: disclose foreseeable uses and known harmful uses; report algorithmic discrimination discoveries to AG within 90 days
- Affirmative defense: compliance with nationally/internationally recognized risk management framework + good faith corrective measures
- Implementation delayed from February 2026 to June 2026 following August 2025 special legislative session
- In 2025, Colorado replaced SB 205 with SB25B-004, which shifted to a transparency-focused approach

**Sources:**
- [Clark Hill: Colorado AI Law Delayed](https://www.clarkhill.com/news-events/news/colorados-ai-law-delayed-until-june-2026-what-the-latest-setback-means-for-businesses/)
- [ABA: Colorado AI Act Deep Dive](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-july/colorado-enacts-law-regulating-high-risk-artificial-intelligence-systems/)
- [NAAG: Deep Dive Colorado AI Act](https://www.naag.org/attorney-general-journal/a-deep-dive-into-colorados-artificial-intelligence-act/)
- [Colorado SB 24-205 Text](https://content.leg.colorado.gov/sites/default/files/2024a_205_signed.pdf)

### The Federal-State Collision Course

The regulatory collision is now structurally inevitable:

| Factor | Federal Position | State Position |
|---|---|---|
| Regulatory philosophy | "Minimally burdensome" innovation enablement | Consumer protection, accountability, discrimination prevention |
| Enforcement mechanism | Preemption lawsuits, funding withholding | AG enforcement, unfair trade practice actions |
| Agentic AI coverage | No specific framework | Various (liability, transparency, high-risk obligations) |
| Timeline | Legislative recommendation pending | Multiple laws already effective (Jan 1, 2026+) |
| Legal basis | Commerce Clause preemption; FTC Act preemption | State police powers; consumer protection authority |

**Prediction (Medium Confidence):** The AI Litigation Task Force will likely challenge the RAISE Act and TFAIA in 2026. The outcome will depend on whether courts find federal AI policy sufficiently specific to preempt state requirements. Given the absence of substantive federal AI legislation, preemption arguments face significant hurdles — executive orders alone typically cannot preempt state law absent underlying federal statutory authority.

**Evidence Tier: Strong Evidence** — Based on enacted legislation, Executive Order text, and legal analyses from Baker Botts, Latham & Watkins, King & Spalding, Fisher Phillips, and others.

---

## International Coordination

### The 118-Country Governance Gap

The most consequential structural weakness in global AI governance is the exclusion of 118 countries — predominantly in the Global South — from all significant AI governance initiatives. As documented in UN reporting:

- **Only 7 developed nations** are party to all major AI governance initiatives (G7, OECD, EU AI Act engagement)
- **118 countries** have no participation in any significant AI governance framework
- **Consequence:** AI governance standards are designed by and for wealthy nations, potentially creating frameworks that disadvantage developing economies
- **Regulatory arbitrage:** The governance gap creates opportunities for organizations to route AI development through minimally regulated jurisdictions

**Why this matters for agentic AI:** As autonomous agents increasingly operate across borders — browsing international websites, executing transactions across jurisdictions, interacting with users globally — the absence of any governance framework in 118 countries creates enforcement black holes. An agentic system deployed from a jurisdiction with no AI governance faces zero regulatory accountability regardless of the harm it causes.

### UN Response: New Governance Bodies (August 2025)

The UN General Assembly resolution establishing two new bodies represents the first governance mechanism to include all 193 member states:

1. **Global Dialogue on AI Governance:** Political forum for multilateral discussion and coordination
2. **Independent International Scientific Panel on AI:** Expert body for technical assessment and evidence-based recommendations

**Assessment of effectiveness:** These bodies are consensus-building forums, not regulatory agencies. They lack enforcement mechanisms, binding authority, or funding mandates. Implementation timelines suggest 5-7 years before enforceable international standards could emerge. The bodies' primary value is legitimacy — they include the 118 excluded countries — but their practical impact on near-term governance is minimal.

**Sources:**
- [WEF: UN's New AI Governance Bodies Explained](https://www.weforum.org/stories/2025/10/un-new-ai-governance-bodies/)
- [UN News: Closing AI Governance Void](https://news.un.org/en/story/2025/09/1165898)
- [TraxTech: 118 Countries Excluded](https://www.traxtech.com/ai-in-supply-chain/un-launches-global-ai-governance-framework-as-118-countries-remain-excluded-from-existing-initiatives)
- [Oxford Academic: Global AI Governance Barriers](https://academic.oup.com/ia/article/100/3/1275/7641064)

### OECD AI Principles and Reporting Framework

The OECD revised its AI Principles in 2024 and launched a Reporting Framework in February 2025:

- **AI Policy Observatory:** Live database of AI strategies, policies, and initiatives across countries
- **AI Policy Toolkit (Jan 2025 - Mar 2026):** Self-assessment tool for countries to evaluate alignment with AI Principles
- **Hiroshima AI Process Reporting Framework (Feb 2025):** Companies voluntarily report on risk management practices aligned with the G7 Code of Conduct

**Effectiveness assessment:** The OECD framework is the most mature international soft law instrument for AI governance. Its strengths are broad adoption (46 member countries + partners) and established institutional infrastructure. Its weakness is that it remains entirely voluntary — the OECD "does not regulate the implementation" and can only monitor and analyze.

**Sources:**
- [OECD AI Policy Observatory](https://oecd.ai/en/)
- [OECD: Hiroshima AI Process Reporting Framework Launch](https://www.oecd.org/en/about/news/press-releases/2025/02/oecd-launches-global-framework-to-monitor-application-of-g7-hiroshima-ai-code-of-conduct.html)
- [OECD: AI Policy Toolkit](https://www.oecd.org/content/dam/oecd/en/events/2025/06/mcm/MCM-2025-Scoping-Note-for-an-AI-Policy-Toolkit-to-Support-Economies-in-Realising-AI-Benefits.pdf)

### G7 Hiroshima AI Process

The G7 Code of Conduct for Advanced AI Systems includes 11 voluntary commitments. The OECD-hosted Reporting Framework launched in February 2025 enables comparable reporting on:
- Risk assessment practices
- Incident reporting mechanisms
- Information sharing
- Testing and red-teaming practices

**Assessment:** The Reporting Framework is the most concrete international transparency mechanism for AI governance. Initial submissions from "diverse geographies and various sizes" demonstrate global reach. However, reporting is voluntary, self-assessed, and lacks independent verification.

**Sources:**
- [OECD: Initial Reporting Submissions](https://oecd.ai/en/wonk/initial-submissions-g7-hiroshima-ai-process-reporting-framework)
- [WEF: Hiroshima AI Process Common Ground](https://www.weforum.org/stories/2025/12/hiroshima-ai-process-governance/)
- [Hiroshima AI Process Code of Conduct](https://www.mofa.go.jp/files/100573473.pdf)

### China: Comprehensive but Opaque

China operates the most active AI regulatory apparatus globally:

- **Interim Measures for Generative AI Services (Aug 2023):** First binding national regulation for generative AI globally
- **Content Labeling Rules (Sep 1, 2025):** Mandatory implicit labeling of AI-generated content
- **Three National Security Standards (effective Nov 1, 2025):** Enhanced security and governance for generative AI
- **AI Governance Framework (Sep 9, 2025):** Principles and guidelines for AI risk management
- **Draft Ethics Measures (Aug 22, 2025):** Responsible innovation and ethical oversight
- **"AI Plus" Initiative (Aug 2025):** Sets AI agent penetration targets — 70% by 2027, 90% by 2030
- **Proposed WAICO:** World Artificial Intelligence Cooperation Organization — China's bid to lead international coordination

**Assessment:** China has issued as many national AI requirements in the first half of 2025 as in the previous three years combined. China's approach is notably more prescriptive and faster-moving than Western frameworks. However, enforcement transparency is limited, and the framework serves dual purposes: genuine risk management and political control over information ecosystems (content alignment with "core socialist values" requirements).

**Sources:**
- [White & Case: AI Watch China](https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-china)
- [IAPP: Global AI Governance China](https://iapp.org/resources/article/global-ai-governance-china)
- [Mayer Brown: China AI Governance Action Plan](https://www.mayerbrown.com/en/insights/publications/2025/10/artificial-intelligence-a-brave-new-world-china-formulates-new-ai-global--governance-action-plan-and-issues-draft-ethics-rules-and-ai-labelling-rules)
- [Nature: China Leading AI Governance](https://www.nature.com/articles/d41586-025-03972-y)
- [CFR: How 2026 Could Decide AI Future](https://www.cfr.org/articles/how-2026-could-decide-future-artificial-intelligence)

### UK: Innovation-First with Security Pivot

The UK maintains a principles-based, sector-led approach:

- **Five cross-sector principles (2023):** Safety/security/robustness, transparency/explainability, fairness, accountability/governance, contestability/redress
- **AI Security Institute (rebranded Feb 2025):** Formerly AI Safety Institute; pivot toward national security and misuse risks (cyberattacks, weapons development)
- **AI Growth Lab (consultation Oct 2025):** Cross-economy sandboxes for testing AI under targeted regulatory modifications
- **Comprehensive AI Bill expected 2026:** Drawing on EU AI Act lessons and international AI summits

**Assessment:** The UK's approach is deliberately lighter-touch than the EU's, aiming to attract AI investment through regulatory flexibility. The AI Security Institute rebrand signals prioritization of national security over broad societal safety. A comprehensive AI Bill in 2026 could shift this balance.

**Sources:**
- [Nemko: UK AI Regulation](https://digital.nemko.com/regulations/ai-regulation-a-pro-innovation-approach)
- [White & Case: AI Watch UK](https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-united-kingdom)
- [Taylor Wessing: UK Digital Policy 2026](https://www.taylorwessing.com/en/interface/2025/predictions-2026/uk-tech-and-digital-regulatory-policy-in-2026)

---

## Accountability Gap Analysis

### The Core Problem

When an autonomous AI agent causes harm — financial loss, discriminatory decision, privacy breach, physical damage — existing legal frameworks strain to assign accountability. The fundamental challenge is the "abstraction gap" between human instruction and autonomous action: the more steps an agent takes independently, the harder it becomes to attribute responsibility to the initiating human or deploying organization.

### Scenario Analysis

| Scenario | Current Framework | Gap | Proposed/Emerging Solutions |
|---|---|---|---|
| **Agent makes discriminatory hiring decision** | Title VII, state anti-discrimination law, Colorado AI Act (Jun 2026) | Unclear whether bias in foundation model or deployment configuration is the proximate cause; developer vs. deployer responsibility unclear | Colorado SB 205 requires deployer impact assessments and human appeal rights; EU AI Act classifies employment AI as high-risk |
| **Agent executes unauthorized financial transaction** | Contract law, UCC, agency law; SEC/CFTC guidance | Agent may be acting within general parameters but exceeding specific authorization; "intent" doctrine fails for neural networks | SEC asserts "failure to supervise AI = failure to supervise the firm"; CFTC advisory encourages engagement during AI deployment |
| **Agent causes medical harm through clinical recommendation** | Medical malpractice, FDA device regulation, state licensing | Unclear if clinical AI is a "device" requiring FDA clearance or a clinical decision support tool exempt from regulation | FDA Jan 2026 guidance narrows oversight of low-risk AI; Illinois bans autonomous therapy decisions (Aug 2025) |
| **Agent spreads disinformation at scale** | Section 230 immunities, FTC deception rules, state deepfake laws | Agent-generated content may be difficult to attribute; platform liability shields may apply | Texas TRAIGA bans certain deepfake uses; EU AI Act requires AI interaction disclosure |
| **Multi-agent system cascading failure causes supply chain disruption** | Product liability, negligence, contractual indemnification | No clear framework for liability in multi-agent architectures where no single agent is "defective" but system behavior emerges from interaction | EU Product Liability Directive covers autonomous/adaptive behavior; but multi-agent attribution remains unresolved |
| **Agent deployed in one jurisdiction causes harm in another** | Private international law, bilateral agreements | 118 countries have no AI governance framework; enforcement across jurisdictions is impractical | UN Global Dialogue (aspirational); no enforceable cross-border mechanism |

### Key Legal Developments

**California AB 316 (Jan 1, 2026):** The single most important development for agentic AI liability. By prohibiting the "autonomous AI defense," California establishes that deployers, developers, modifiers, and users of AI cannot claim "the AI did it autonomously" as a defense. This applies across the entire supply chain. It does NOT create strict liability — traditional negligence, product liability, and other frameworks still apply — but it closes the most dangerous loophole: the argument that autonomy severs the accountability chain.

**EU Product Liability Directive (transposition by Dec 9, 2026):** Software, firmware, AI systems, and digital manufacturing files are now "products" subject to strict liability. The Directive explicitly covers harm caused by autonomous or adaptive behavior, including post-sale changes from machine learning or over-the-air updates. Defectiveness can be presumed if manufacturers fail to disclose evidence or if the product violates mandatory safety requirements. This is the most comprehensive liability framework for autonomous AI in any jurisdiction.

**"Legal Actorship Without Personhood" Model:** Legal scholars are developing a framework where AI agents are treated as "legal actors" (duty bearers, action takers) without being "legal persons." This mirrors existing legal constructs like Spain's *Entidades Sin Personalidad Juridica* and UK Authorised Unit Trusts — entities that bear duties without having full legal personality. This framework could bridge the gap between current law (which assigns all liability to humans/corporations) and the practical reality of autonomous agent behavior.

**Evidence Tier: Strong Evidence** — Based on enacted legislation (AB 316, EU PLD), legal analyses from Baker Botts, Squire Patton Boggs, Lawfare, National Law Review, Global Legal Insights, and academic proposals.

**Sources:**
- [Baker Botts: When AI Agents Misbehave](https://ourtake.bakerbotts.com/post/102me2l/when-ai-agents-misbehave-governance-and-security-for-autonomous-ai)
- [Lawfare: How Existing Liability Frameworks Can Handle Agentic AI](https://www.lawfaremedia.org/article/how-existing-liability-frameworks-can-handle-agentic-ai-harms)
- [Global Legal Insights: Who Is Responsible When AI Acts Autonomously](https://www.globallegalinsights.com/practice-areas/ai-machine-learning-and-big-data-laws-and-regulations/autonomous-ai-who-is-responsible-when-ai-acts-autonomously-and-things-go-wrong/)
- [National Law Review: Legal Considerations for Agentic AI](https://natlawreview.com/article/when-ai-acts-independently-legal-considerations-agentic-ai-systems)
- [AryaXAI: AI Agent Autonomy and Liability](https://www.aryaxai.com/article/understanding-ai-agent-autonomy-and-liability-a-legal-and-policy-lens)
- [Yale Law Journal: Ethics of Legal Personhood for AI](https://yalelawjournal.org/forum/the-ethics-and-challenges-of-legal-personhood-for-ai)

---

## Industry Self-Regulation Assessment

### White House Voluntary Commitments (2023): Minimal Impact

In July 2023, seven leading AI companies (Amazon, Anthropic, Google, Inflection, Meta, Microsoft, OpenAI) committed to safety measures including red-teaming, watermarking, and information sharing. Eight additional companies joined in September 2023.

**One-year assessment (MIT Technology Review, July 2024):** The commitments brought "better red-teaming practices and watermarks, but no meaningful transparency or accountability." Companies showed "some good practices towards their own products, but nowhere near where we need them to be in terms of good governance or protection of rights at large."

**Key weaknesses:**
- Commitments are voluntary and unenforceable
- Many focused on issues companies were already addressing
- No independent verification mechanism
- Unclear whether commitments changed company behavior or merely documented existing practices
- Under the current administration, fewer companies are publicly confirming adherence to the commitments

**Evidence Tier: Strong Evidence** — Based on the original White House fact sheets, MIT Technology Review assessment, and Harvard Law Review analysis.

**Sources:**
- [White House: Voluntary AI Commitments Fact Sheet](https://bidenwhitehouse.archives.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/)
- [MIT Technology Review: One Year Assessment](https://www.technologyreview.com/2024/07/22/1095193/ai-companies-promised-the-white-house-to-self-regulate-one-year-ago-whats-changed/)
- [Harvard Law Review: Voluntary Commitments Analysis](https://harvardlawreview.org/print/vol-137/voluntary-commitments-from-leading-artificial-intelligence-companies-on-july-21-2023/)

### Agentic AI Foundation (AAIF): Technical Standards, Not Safety Governance

The AAIF, announced December 9, 2025 under the Linux Foundation, represents the major industry-led standardization effort. Founding members: Anthropic, OpenAI, and Block.

**What AAIF does:**
- Hosts three open-source projects: MCP (Anthropic), Goose (Block), AGENTS.md (OpenAI)
- Provides vendor-neutral governance for technical interoperability standards
- Enables AI systems from different builders to work together
- AGENTS.md adopted by 60,000+ open-source projects including GitHub Copilot, VS Code, Cursor, Gemini CLI

**What AAIF does NOT do:**
- Does not establish safety standards or requirements
- Does not mandate testing, red-teaming, or evaluation practices
- Does not create enforcement mechanisms
- Does not address liability, accountability, or harm prevention
- Does not include civil society, government, or academic governance

**Assessment:** AAIF addresses a genuine need for technical interoperability standards in the agentic AI ecosystem. However, it is not a safety governance body. The concentration of founding influence among three companies (two of which are direct competitors in the frontier AI market) raises concerns about whether the foundation will prioritize safety standards that might constrain its founders' products.

**Sources:**
- [Linux Foundation: AAIF Launch](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)
- [OpenAI: AAIF Co-founding](https://openai.com/index/agentic-ai-foundation/)
- [Anthropic: Donating MCP to AAIF](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
- [TechCrunch: Linux Foundation AI Agent Standards](https://techcrunch.com/2025/12/09/openai-anthropic-and-block-join-new-linux-foundation-effort-to-standardize-the-ai-agent-era/)

### Safety Commitments and Evaluations: Mixed Record

The International AI Safety Report (2026 edition) provides the most authoritative assessment:

- **Only 3 of 7 major AI firms** conduct substantive dangerous capability testing (Anthropic, OpenAI, Google DeepMind)
- Reviewers warn that underlying safety tests "miss basic risk-assessment standards"
- "Low confidence" that dangerous capabilities would be detected in time
- The Anthropic-OpenAI cross-company evaluation pilot (Summer 2025) found concerning behavior in GPT-4o and GPT-4.1 around misuse support, sycophancy, whistleblowing reluctance, and self-preservation
- "If-then" safety commitments (capability thresholds triggering safety measures) represent the most promising framework, but implementation varies significantly

**Evidence Tier: Strong Evidence** — Based on the International AI Safety Report 2026, Anthropic-OpenAI alignment evaluation findings, and METR analysis of common elements in frontier AI safety policies.

**Sources:**
- [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026)
- [Anthropic-OpenAI Alignment Evaluation Findings](https://alignment.anthropic.com/2025/openai-findings/)
- [METR: Common Elements of Frontier AI Safety Policies](https://metr.org/common-elements)

---

## Sector-Specific Governance

### Healthcare AI

**FDA Approach:** The FDA published guidance on January 6, 2026, reducing oversight of low-risk digital health products including certain AI-enabled software. AI tools that assist clinicians (summarizing data, suggesting options for independent evaluation) may not require FDA clearance. However, AI making autonomous clinical decisions falls under device regulation.

**Key developments:**
- FDA itself deployed "Agentic AI" capabilities agency-wide on January 12, 2026 (the "Elsa" system for regulatory workflows)
- Illinois banned AI from making independent therapeutic decisions, directly interacting with therapy clients, or generating treatment plans without licensed professional review (effective August 1, 2025)
- Global trend toward classifying clinical AI as "High-Impact" or "High-Risk" with lifecycle monitoring rather than static pre-market approval

**Gap:** The distinction between "decision support" (exempt) and "autonomous decision-making" (regulated) is blurry for agentic systems that can plan multi-step clinical workflows. An agent that autonomously orders tests, reviews results, and recommends treatment occupies an uncertain regulatory space.

**Sources:**
- [FDA: Updated Guidance on Digital Health](https://www.ropesgray.com/en/insights/alerts/2026/01/fda-adapts-with-the-times-on-digital-health-updated-guidances-on-general-wellness-products)
- [PDA: FDA Expands Agentic AI](https://www.pda.org/pda-letter-portal/home/full-article/news-brief-fda-expands-ai-with-agentic-deployment)
- [Bipartisan Policy Center: FDA AI Oversight](https://bipartisanpolicy.org/issue-brief/fda-oversight-understanding-the-regulation-of-health-ai-tools/)

### Financial Services AI

**Regulatory stance:** Neither SEC, CFTC, nor FINRA has issued new binding regulations specifically for AI. However:

- **SEC (2025-2026):** Expanded examination priorities to include AI; asserts "failure to supervise AI = failure to supervise the firm"
- **CFTC:** Issued staff advisory encouraging regulated entities to engage with CFTC when deploying AI; may incorporate AI into routine examinations
- **Emerging challenge:** Autonomous agentic trading creates potential insider trading liability where "intent" — a core element of insider trading law — cannot be attributed to neural network weights

**Gap:** The speed and subtlety of AI-driven trading agents exceed traditional surveillance capabilities. The SEC is grappling with a landscape where AI can "inadvertently — or strategically — exploit material non-public information with a speed and subtlety that traditional surveillance methods are struggling to contain."

**Sources:**
- [FinancialContent: AI Redefining Insider Trading 2026](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-19-the-ghost-in-the-machine-how-agentic-ai-is-redefining-insider-trading-in-2026)
- [Sidley Austin: US Financial Regulator AI Guidelines](https://www.sidley.com/en/insights/newsupdates/2025/02/artificial-intelligence-us-financial-regulator-guidelines-for-responsible-use)
- [GAO: AI Use and Oversight in Financial Services](https://www.gao.gov/assets/gao-25-107197.pdf)
- [CFTC: AI Advisory](https://www.cftc.gov/PressRoom/PressReleases/9013-24)

### Defense and Autonomous Weapons

**The most consequential governance gap:** Lethal Autonomous Weapon Systems (LAWS) represent the highest-stakes application of autonomous AI, and governance is at a critical juncture:

- **November 2025 UN General Assembly:** 156 nations voted to negotiate a legally enforceable LAWS agreement by the 2026 Seventh Review Conference
- **5 nations rejected:** Notably the United States and Russia — the two largest military AI investors
- **Two-tier approach proposed:** Complete prohibition on systems that cannot distinguish civilians from combatants, with strict regulations on other autonomous systems ensuring "meaningful human control"
- **"Pre-proliferation window":** Experts describe 2026 as the "finish line" for global diplomacy on LAWS; if a treaty is not reached, the speed of military AI innovation will make future regulation obsolete
- Israel's "Iron Beam" laser system (late 2025) uses autonomous targeting at speeds no human could match

**Assessment:** This is the area where governance failure has the most catastrophic potential consequences. The refusal of the US and Russia to participate in binding agreements means the two most advanced military AI programs operate outside any international accountability framework. The 2026 Review Conference represents what may be the last viable opportunity for a binding international instrument.

**Sources:**
- [UN Office for Disarmament Affairs: LAWS](https://disarmament.unoda.org/en/our-work/emerging-challenges/lethal-autonomous-weapon-systems)
- [ASIL: LAWS and International Law](https://www.asil.org/insights/volume/29/issue/1)
- [Arms Control Association: Geopolitics and LAWS Regulation](https://www.armscontrol.org/act/2025-01/features/geopolitics-and-regulation-autonomous-weapons-systems)
- [Stop Killer Robots: 156 States Support UNGA Resolution](https://www.stopkillerrobots.org/news/156-states-support-unga-resolution/)
- [Lieber Institute: National Positions on LAWS Governance](https://lieber.westpoint.edu/future-warfare-national-positions-governance-lethal-autonomous-weapons-systems/)

---

## Emerging Frameworks and Standards

### NIST AI Risk Management Framework (AI RMF 1.0)

- Voluntary, flexible framework primarily used in the US
- Organized around four functions: Govern, Map, Measure, Manage
- Serves as safe harbor/affirmative defense in Texas TRAIGA and Colorado AI Act
- Not legally binding but increasingly referenced as standard of care
- Does not specifically address agentic AI systems but provides adaptable risk management structure

### ISO/IEC 42001 (AI Management System Standard)

- International certifiable standard using Plan-Do-Check-Act methodology
- More prescriptive than NIST AI RMF
- Valuable for companies operating globally or needing external proof of AI governance
- Being integrated into broader enterprise governance alongside SOC2 AI controls and EU AI Act conformity workflows

### OWASP Agentic AI Security Framework

- Extends OWASP's work to autonomous and tool-using AI agents
- Defines early standards for safe orchestration and control
- Includes OWASP ASI08 guidance on cascading failures in agentic systems
- Most directly relevant technical standard for agentic AI security

### MAESTRO Framework (February 2025)

- Structured defense-oriented framework for identifying, modeling, and mitigating threats in agentic AI systems
- Specifically designed for systems capable of autonomous reasoning, tool use, and multi-agent coordination
- Most technically specific framework for agentic AI threat modeling

**Assessment:** The standards landscape for agentic AI is in early development. NIST AI RMF and ISO 42001 provide general AI governance foundations. OWASP and MAESTRO provide agentic-specific technical frameworks. However, none of these standards carry regulatory force on their own — they gain legal significance through incorporation into legislation (like TRAIGA's NIST RMF safe harbor) or through establishment as standard of care in litigation.

**Sources:**
- [NIST: AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [RSI Security: NIST AI RMF and ISO 42001 Crosswalk](https://blog.rsisecurity.com/nist-ai-risk-management-framework-iso-42001-crosswalk/)
- [Bradley: Five Key AI Governance Frameworks](https://www.bradley.com/insights/publications/2025/08/global-ai-governance-five-key-frameworks-explained)
- [ActiveFence: AI Risk Frameworks](https://www.activefence.com/blog/ai-risk-management-frameworks-nist-owasp-mitre-maestro-iso/)
- [Adversa AI: OWASP ASI08 Cascading Failures Guide](https://adversa.ai/blog/cascading-failures-in-agentic-ai-complete-owasp-asi08-security-guide-2026/)

---

## Critical Governance Gaps

### Ranked by Urgency and Impact

**1. No Agentic-Specific Regulation (CRITICAL)**
- **Gap:** No jurisdiction has enacted legislation specifically addressing the unique properties of agentic AI systems: multi-step autonomous planning, tool use, persistent memory, chain-of-action opacity, multi-agent coordination
- **Impact:** Existing frameworks designed for traditional AI systems or generic "AI systems" fail to address the specific risks of autonomous agents
- **Urgency:** Agents are deploying now at production scale; governance is retrospective

**2. Cross-Border Enforcement Vacuum (CRITICAL)**
- **Gap:** 118 countries have no AI governance framework; no enforceable international mechanism for cross-border AI harms; agents operate across jurisdictions by default
- **Impact:** Regulatory arbitrage, unaccountable harm to populations in unregulated jurisdictions, race-to-the-bottom dynamics
- **Urgency:** Agents browsing the web, executing transactions, and interacting with users globally are already crossing these enforcement boundaries daily

**3. Multi-Agent Liability Attribution (HIGH)**
- **Gap:** No legal framework addresses liability in multi-agent architectures where harmful outcomes emerge from interactions between multiple agents, none of which is individually "defective"
- **Impact:** As multi-agent systems become common in enterprise environments (39% of organizations developing multi-step agent processes), liability gaps grow
- **Urgency:** Production multi-agent deployments are increasing in 2026; the $3.2M procurement fraud case study demonstrates real-world cascading failures

**4. Lethal Autonomous Weapons Governance (HIGH)**
- **Gap:** US and Russia refuse binding agreements; 2026 Review Conference is the last viable opportunity
- **Impact:** Autonomous targeting systems deploying without international accountability; risk of arms race dynamics
- **Urgency:** Active military deployments (Israel's Iron Beam); "pre-proliferation window" closing

**5. Human Oversight Feasibility at Agent Speed (HIGH)**
- **Gap:** Regulations (EU AI Act, Colorado AI Act) require "human oversight" and "human appeal rights," but agentic systems operate at speeds and complexities that make meaningful human review impractical for many use cases
- **Impact:** Compliance becomes performative rather than substantive; "human-in-the-loop" becomes rubber-stamping
- **Urgency:** Growing immediately as agent autonomy increases

**6. Federal-State Regulatory Conflict (MEDIUM-HIGH)**
- **Gap:** US federal preemption strategy creates regulatory uncertainty; state laws already enacted may be challenged in court; no substantive federal replacement exists
- **Impact:** Compliance chaos for enterprises operating across states; potential years of litigation uncertainty
- **Urgency:** Litigation likely in 2026; resolution potentially years away

**7. Dynamic Capability Assessment (MEDIUM)**
- **Gap:** Pre-market conformity assessment (EU AI Act model) assumes stable system capabilities; agents acquire new capabilities through tool use, web browsing, and code execution post-deployment
- **Impact:** Conformity assessments become obsolete quickly; systems may acquire high-risk capabilities not present during initial assessment
- **Urgency:** Growing as agentic capabilities expand

**8. Voluntary Commitment Enforcement (MEDIUM)**
- **Gap:** Industry safety commitments (White House 2023, G7 Hiroshima Code) are voluntary with no enforcement or independent verification
- **Impact:** Commitments may be abandoned when commercially inconvenient; only 3 of 7 major firms conduct substantive dangerous capability testing
- **Urgency:** Ongoing; gap widens as capability advances outpace commitment compliance

---

## Policy Recommendations

### Near-Term (2026)

1. **Agentic AI Definition and Classification:** Regulators should develop formal definitions of "agentic AI system" that distinguish autonomous agents from traditional AI systems based on functional criteria (multi-step planning, tool use, persistent memory, autonomous action). The EU AI Act's implementing guidance and the upcoming UK AI Bill are the nearest opportunities.

2. **Mandatory Incident Reporting for Agentic Systems:** All jurisdictions should require reporting of significant incidents involving autonomous AI agents, analogous to existing requirements in aviation, pharmaceuticals, and financial services. The EU AI Act's serious incident reporting for GPAI models with systemic risk provides a template.

3. **Cross-Border AI Harm Cooperation:** The UN Global Dialogue should prioritize developing a mutual assistance framework for cross-border AI harms, even before comprehensive international standards emerge. This could follow models from international competition law or data protection cooperation.

4. **Standardized Audit Requirements:** Regulators should mandate independent third-party audits of agentic AI systems in high-risk domains (healthcare, finance, employment, law enforcement), building on NIST AI RMF and ISO 42001 but with agentic-specific evaluation criteria.

### Medium-Term (2027-2028)

5. **Adaptive Conformity Assessment:** Replace static pre-market assessment with continuous monitoring frameworks that account for dynamic capability acquisition in agentic systems. The EU AI Act's post-market monitoring provisions could be extended specifically for this purpose.

6. **Multi-Agent Liability Framework:** Develop legal frameworks specifically addressing liability allocation in multi-agent architectures. This may require new legal constructs beyond traditional product liability and negligence.

7. **Meaningful Human Oversight Standards:** Replace vague "human oversight" requirements with specific, measurable standards that account for agent speed and complexity. Define minimum review intervals, escalation criteria, and oversight capacity requirements.

8. **LAWS Treaty:** Complete negotiations on a binding international instrument on lethal autonomous weapon systems at the 2026 Review Conference, before the pre-proliferation window closes.

### Long-Term (2029+)

9. **International AI Governance Institution:** Establish an international body with binding authority and enforcement mechanisms for AI governance, potentially modeled on the International Atomic Energy Agency (IAEA) but adapted for AI's distributed nature.

10. **Regulatory Interoperability Framework:** Develop mutual recognition agreements between major jurisdictions (EU, US, UK, China) to reduce compliance fragmentation while maintaining core safety standards.

---

## Methodological Notes

### Source Hierarchy

This analysis prioritizes sources in the following order:
1. **Enacted legislation and official government publications** (EU AI Act text, Executive Orders, state legislation)
2. **International body reports** (UN, OECD, G7 publications)
3. **Legal analyses from major law firms** (Baker Botts, Latham & Watkins, DLA Piper, Skadden, etc.)
4. **Academic and research institution publications** (Oxford Academic, Harvard Law Review, Yale Law Journal, CSIS)
5. **Authoritative safety reports** (International AI Safety Report, Anthropic-OpenAI evaluations)
6. **Industry and media sources** (used for context, not as primary evidence)

### Limitations

- Regulatory landscape is changing weekly; this analysis reflects the state as of February 10, 2026
- Chinese regulatory analysis is limited by language barriers and opacity of enforcement data
- The effectiveness of newly enacted legislation (effective January-June 2026) cannot yet be empirically assessed
- Predictions about federal preemption litigation outcomes are inherently uncertain
- Global South perspectives are underrepresented in available English-language sources

### Evidence Tier Definitions

| Tier | Definition | Application |
|---|---|---|
| **Established Consensus** | Multiple authoritative, independent sources agree; based on enacted law or documented fact | EU AI Act provisions, Texas TRAIGA requirements, AAIF structure |
| **Strong Evidence** | Multiple credible sources with consistent findings; some contested interpretations | US federal-state collision, liability gap analysis, China regulatory pace |
| **Emerging Evidence** | Limited sources or recent developments; preliminary data | UN body effectiveness, LAWS treaty prospects, multi-agent liability frameworks |
| **Contested/Speculative** | Significant expert disagreement or insufficient data | Federal preemption litigation outcomes, long-term international coordination effectiveness |

---

## Complete Source List

### Enacted Legislation and Official Government Publications
- EU AI Act (Regulation 2024/1689), Official Journal of the European Union
- EU Product Liability Directive (2024/2853)
- [Executive Order: Ensuring a National Policy Framework for AI (Dec 11, 2025)](https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/)
- California AB 316 (AI Liability Defense), effective Jan 1, 2026
- California SB 53 (TFAIA), effective Jan 1, 2026
- [New York RAISE Act, signed Dec 19, 2025](https://www.governor.ny.gov/news/governor-hochul-signs-nation-leading-legislation-require-ai-frameworks-ai-frontier-models)
- [Texas TRAIGA, effective Jan 1, 2026](https://capitol.texas.gov/tlodocs/89R/analysis/html/HB00149S.htm)
- [Colorado SB 24-205, effective Jun 30, 2026](https://leg.colorado.gov/bills/sb24-205)
- [CFTC Staff Advisory on AI](https://www.cftc.gov/PressRoom/PressReleases/9013-24)
- [Hiroshima AI Process Code of Conduct](https://www.mofa.go.jp/files/100573473.pdf)
- [UN General Assembly Resolution on AI Governance Bodies (Aug 2025)](https://news.un.org/en/story/2025/09/1165898)
- [UN Secretary-General: Governing AI for Humanity (Sep 2024)](https://www.un.org/sites/un2.un.org/files/governing_ai_for_humanity_final_report_en.pdf)

### International Organization Reports
- [OECD AI Policy Observatory](https://oecd.ai/en/)
- [OECD: Hiroshima AI Process Reporting Framework Launch](https://www.oecd.org/en/about/news/press-releases/2025/02/oecd-launches-global-framework-to-monitor-application-of-g7-hiroshima-ai-code-of-conduct.html)
- [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026)
- [ITU: Annual AI Governance Report 2025](https://www.itu.int/epublications/en/publication/the-annual-ai-governance-report-2025-steering-the-future-of-ai/en/)
- [WEF: UN's New AI Governance Bodies](https://www.weforum.org/stories/2025/10/un-new-ai-governance-bodies/)
- [WEF: Hiroshima AI Process Common Ground](https://www.weforum.org/stories/2025/12/hiroshima-ai-process-governance/)
- [World Bank: Global Trends in AI Governance](https://openknowledge.worldbank.org/entities/publication/a570d81a-0b48-4cac-a3d9-73dff48a8f1a)

### Legal Analyses
- [Baker Botts: Texas TRAIGA](https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-enacts-responsible-ai-governance-act-what-companies-need-to-know)
- [Baker Botts: When AI Agents Misbehave](https://ourtake.bakerbotts.com/post/102me2l/when-ai-agents-misbehave-governance-and-security-for-autonomous-ai)
- [Baker Botts: California AB 316](https://ourtake.bakerbotts.com/post/102m29i/california-eliminates-the-autonomous-ai-defense-what-ab-316-means-for-ai-deplo)
- [Latham & Watkins: Texas TRAIGA](https://www.lw.com/en/insights/texas-signs-responsible-ai-governance-act-into-law)
- [Latham & Watkins: AI Executive Order Preemption](https://www.lw.com/en/insights/ai-executive-order-targets-state-laws-and-seeks-uniform-federal-standards)
- [Latham & Watkins: EU Product Liability Directive](https://www.lw.com/en/insights/2024/12/New-EU-Product-Liability-Directive-Comes-Into-Force)
- [DLA Piper: EU AI Act Obligations](https://www.dlapiper.com/en-us/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect)
- [DLA Piper: RAISE Act Analysis](https://www.dlapiper.com/en-us/insights/publications/2025/12/the-raise-act-new-york-joins-california-in-requiring-developer-transparency-for-large-ai-models)
- [Skadden: NY AI Transparency Law](https://www.skadden.com/insights/publications/2026/01/new-york-enacts-ai-transparency-law)
- [Norton Rose Fulbright: TRAIGA Guide](https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act)
- [Ropes & Gray: Navigating TRAIGA](https://www.ropesgray.com/en/insights/alerts/2025/06/navigating-traiga-texas-new-ai-compliance-framework)
- [Mayer Brown: December 2025 Executive Order](https://www.mayerbrown.com/en/insights/publications/2025/12/president-trump-issues-executive-order-on-ensuring-a-national-policy-framework-for-artificial-intelligence)
- [Sidley Austin: Executive Order Analysis](https://datamatters.sidley.com/2025/12/23/unpacking-the-december-11-2025-executive-order-ensuring-a-national-policy-framework-for-artificial-intelligence/)
- [Squire Patton Boggs: Agentic AI Legal Risks](https://www.squirepattonboggs.com/insights/publications/the-agentic-ai-revolution-managing-legal-risks/)
- [Lawfare: Existing Liability Frameworks for Agentic AI](https://www.lawfaremedia.org/article/how-existing-liability-frameworks-can-handle-agentic-ai-harms)
- [Global Legal Insights: AI Autonomous Liability](https://www.globallegalinsights.com/practice-areas/ai-machine-learning-and-big-data-laws-and-regulations/autonomous-ai-who-is-responsible-when-ai-acts-autonomously-and-things-go-wrong/)
- [National Law Review: Agentic AI Legal Considerations](https://natlawreview.com/article/when-ai-acts-independently-legal-considerations-agentic-ai-systems)
- [Wiley: 2026 State AI Bills Expanding Liability](https://www.wiley.law/article-2026-State-AI-Bills-That-Could-Expand-Liability-Insurance-Risk)
- [King & Spalding: New State AI Laws](https://www.kslaw.com/news-and-insights/new-state-ai-laws-are-effective-on-january-1-2026-but-a-new-executive-order-signals-disruption)
- [Fisher Phillips: NY AI Safety Law](https://www.fisherphillips.com/en/news-insights/new-york-governor-signs-sweeping-ai-safety-law.html)
- [FPF: RAISE Act vs. SB 53](https://fpf.org/blog/the-raise-act-vs-sb-53-a-tale-of-two-frontier-ai-laws/)
- [FPF: California SB 53 Explained](https://fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained/)
- [KPMG: State AI Safety Laws](https://kpmg.com/us/en/articles/2026/state-ai-safety-laws-ca-and-ny-reg-alert.html)
- [IAPP: TRAIGA Sample Policy Framework](https://iapp.org/news/a/texas-responsible-ai-governance-act-compliance-a-sample-policy-framework)
- [Yale Law Journal: Legal Personhood for AI](https://yalelawjournal.org/forum/the-ethics-and-challenges-of-legal-personhood-for-ai)
- [Harvard Law Review: Voluntary AI Commitments](https://harvardlawreview.org/print/vol-137/voluntary-commitments-from-leading-artificial-intelligence-companies-on-july-21-2023/)
- [Oxford Academic: International AI Agency](https://academic.oup.com/ia/article/101/4/1483/8141294)
- [Oxford Academic: Global AI Governance Barriers](https://academic.oup.com/ia/article/100/3/1275/7641064)

### Safety and Technical Reports
- [Anthropic-OpenAI Alignment Evaluation](https://alignment.anthropic.com/2025/openai-findings/)
- [METR: Common Elements of Frontier AI Safety Policies](https://metr.org/common-elements)
- [NIST: AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OWASP: Agentic AI Security Framework](https://adversa.ai/blog/cascading-failures-in-agentic-ai-complete-owasp-asi08-security-guide-2026/)

### Industry and Media
- [Linux Foundation: AAIF Launch](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)
- [OpenAI: AAIF](https://openai.com/index/agentic-ai-foundation/)
- [Anthropic: MCP Donation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
- [MIT Technology Review: Voluntary Commitments One Year](https://www.technologyreview.com/2024/07/22/1095193/ai-companies-promised-the-white-house-to-self-regulate-one-year-ago-whats-changed/)
- [White & Case: AI Watch China](https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-china)
- [White & Case: AI Watch UK](https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-united-kingdom)
- [Nature: China Leading AI Governance](https://www.nature.com/articles/d41586-025-03972-y)
- [CFR: How 2026 Could Decide AI Future](https://www.cfr.org/articles/how-2026-could-decide-future-artificial-intelligence)
- [Credo AI: AI Regulations 2026](https://www.credo.ai/blog/latest-ai-regulations-update-what-enterprises-need-to-know)
- [Holistic AI: AI Regulation 2026](https://www.holisticai.com/blog/ai-regulation-in-2026-navigating-an-uncertain-landscape)
- [Baker Donelson: 2026 AI Legal Forecast](https://www.bakerdonelson.com/2026-ai-legal-forecast-from-innovation-to-compliance)
- [The New Stack: Field Guide to 2026 AI Laws](https://thenewstack.io/a-field-guide-to-2026-federal-state-and-eu-ai-laws/)
- [Stop Killer Robots: 156 States Support UNGA Resolution](https://www.stopkillerrobots.org/news/156-states-support-unga-resolution/)
- [Arms Control Association: LAWS Regulation](https://www.armscontrol.org/act/2025-01/features/geopolitics-and-regulation-autonomous-weapons-systems)
- [ASIL: LAWS and International Law](https://www.asil.org/insights/volume/29/issue/1)

---

## Report Metadata

**Analyst:** Governance & Policy Analyst Agent (Claude Opus 4.6)
**Date:** February 10, 2026
**Total Sources Consulted:** 80+
**Source Categories:** Enacted legislation (12), international body reports (7), legal analyses from major law firms (24), academic/research publications (6), safety/technical reports (4), industry/media (15+)
**Jurisdictions Covered:** EU, US (Federal + 4 states), UK, China, International (UN, OECD, G7), 118 countries analysis
**Evidence Tiers Applied:** Established Consensus, Strong Evidence, Emerging Evidence, Contested/Speculative
**Confidence Assessment:** HIGH for enacted law analysis; MEDIUM-HIGH for enforcement effectiveness projections; MEDIUM for federal-state conflict outcomes; MEDIUM-LOW for international coordination timeline predictions
