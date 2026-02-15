# Quantitative Analysis: Autonomous Agentic AI Impacts

**Analyst:** Data Scientist Agent
**Date:** February 10, 2026
**Methodology:** Statistical validation, source triangulation, methodology critique
**Scope:** All quantitative claims from the seed research report + independent data discovery

---

## Executive Summary

The quantitative landscape of agentic AI is characterized by **wide variance in market estimates, methodological fragility in adoption/ROI surveys, and a fundamental measurement paradox** where high reported returns coexist with high failure rates. After rigorous validation, I find:

- **Market size projections are directionally correct but unreliable in magnitude** -- estimates from different research firms vary by 2-4x for the same time horizon
- **The 171% ROI figure is an expectation, not a measurement** -- it reflects what executives *hope* to achieve, not documented returns
- **The 79% adoption figure conflates experimentation with production deployment** -- more rigorous surveys show 52% deployment (Google Cloud) or 23% scaling (McKinsey)
- **The 80-95% failure rate is poorly sourced** -- Gartner's more defensible prediction is 40%+ cancellation by 2027
- **Labor displacement data (Stanford/Brynjolfsson) is methodologically strong** -- the 13% decline for young workers in AI-exposed jobs is the most credible statistic in this entire report
- **Security incident data lacks standardized taxonomy** -- the 520 tool-misuse figure from Adversa AI is informative but not independently verifiable

The core tension: **nearly every high-impact statistic in this domain comes from parties with financial incentives to inflate or deflate the numbers**. Independent, peer-reviewed empirical data remains scarce.

---

## Validated Market Data

### Market Size Estimates -- Cross-Source Comparison

| Research Firm | 2025 Baseline | Target Year | Projected Size | CAGR | Confidence |
|---|---|---|---|---|---|
| DataM Intelligence | $4.54B | 2033 | $98.26B | 46.87% | C |
| Grand View Research | $7.63B | 2033 | $182.97B | 49.6% | B |
| Fortune Business Insights | $7.29B | 2034 | $139.19B | 40.5% | B |
| Precedence Research | $7.55B | 2034 | $199.05B | 43.84% | B- |
| Mordor Intelligence | $6.96B | 2031 | $57.42B | 42.14% | B |
| Market.us | $5.2B (2024) | 2034 | $196.6B | 43.8% | C |

**Critical Observation:** The 2025 baseline estimates range from **$4.54B to $7.63B** -- a 68% spread. The 2033-2034 projections range from **$98B to $199B** -- a 103% spread. This is not convergence; this is guesswork dressed as precision.

**Methodology Critique:**
- DataM Intelligence is a relatively small Indian market research firm (founded 2017). Their $4.54B baseline is an outlier on the low end. No independent validation of their sampling methodology is available. **Reliability Grade: C** (unverifiable methodology, financial incentive to produce reports).
- Grand View Research is more established (publicly traded parent company, standardized methodology). Their higher baseline ($7.63B) likely reflects broader market definition. **Reliability Grade: B** (established firm, but all market research firms face definition-boundary problems).
- All firms agree on ~40-50% CAGR, which is the only area of genuine convergence. The absolute numbers are less reliable than the growth trajectory.

**Verdict on seed report's "$4.54B -> $98.26B" claim:**
This uses the **lowest baseline from the least established source** (DataM Intelligence). A more defensible range would be: **$5-8B (2025) growing to $100-200B (2033-2034) at 40-50% CAGR**. The specific "$4.54B -> $98.26B" should be cited with source attribution and noted as one estimate among many.

### Investment Data

| Metric | Value | Source | Period | Confidence |
|---|---|---|---|---|
| Agentic AI VC funding, H1 2025 | $2.8B | AI Agents Directory / Crunchbase data | Jan-Jun 2025 | B+ |
| Agentic AI share of AI funding | ~10% | Industry estimate | 2025 | B- |
| Total AI VC funding | $270B | Crunchbase | 2025 | A- |
| AI share of total global VC | 52.7% ($270B of $512.6B) | Crunchbase | 2025 | A- |

**Note:** The seed report's "$10.9 billion projected for 2026" figure could not be independently validated. The H1 2025 run rate of $2.8B annualizes to ~$5.6B, suggesting $10.9B would require nearly doubling -- plausible but unverified. The $7.6-7.8B for 2025 is also unverified as a standalone figure.

### S&P 500 Value Projections (Morgan Stanley)

| Metric | Value | Source | Methodology | Confidence |
|---|---|---|---|---|
| Annual net benefits, full AI adoption | $920B | Morgan Stanley (Aug 2025) | Task automation analysis using Anthropic data | B |
| Agentic AI portion | $490B/year | Morgan Stanley | Subset of above | B |
| Embodied AI portion | $430B/year | Morgan Stanley | Subset of above | B- |
| Long-term S&P 500 value addition | $13-16T | Morgan Stanley | Capitalization of annual benefits | B- |

**Methodology Critique:**
- Morgan Stanley used data from Anthropic (an AI company) to model task automation potential -- this introduces **supplier bias** into the methodology
- The $920B figure represents what **could** happen with "full adoption" -- a theoretical ceiling, not a projection
- The $13-16T value range depends on valuation multiples, adding another layer of uncertainty
- **Reliability Grade: B** for the analytical framework; **C+** for the specific dollar amounts, which assume perfect execution

---

## Adoption Statistics -- Quality Assessment

| Statistic | Claimed Value | Original Source | Survey Details | Methodology Grade | Notes |
|---|---|---|---|---|---|
| Organizations deploying AI agents | 79% | Appears to be PwC (unconfirmed) | Unknown sample/methodology | **D** | Widely cited but original methodology not traceable; likely conflates any AI use with agentic deployment |
| Organizations deploying AI agents | 52% | Google Cloud / NRG | 3,466 leaders, 24 countries, $10M+ revenue, Apr-Jun 2025 | **B+** | Better methodology but limited to companies already using generative AI |
| Organizations scaling agentic AI | 23% | McKinsey | Global survey, established methodology | **B+** | Most conservative and likely most accurate for "real" deployment |
| Organizations in experimental phase | 39% | McKinsey | Same survey | **B+** | Combined with 23% = 62% engaged at some level |
| Enterprise apps with AI agents by 2026 | 40% | Gartner | Analyst prediction (not survey) | **B** | Prediction, not measurement; Gartner has mixed track record on timing |
| Enterprise apps with AI agents (2025 baseline) | <5% | Gartner | Analyst estimate | **B** | Directionally credible |
| 1 billion agents by end 2026 | 1B+ | IBM/Salesforce | Forecast | **C-** | Vendor forecast with no disclosed methodology; definition of "agent" unclear |
| 68% plan to integrate agents by 2026 | 68% | Protiviti | ~900 respondents, global C-suite | **B** | Forward-looking intent, not current state |

**The Adoption Number Problem:**
The 79% figure is the most widely cited and the **least methodologically defensible**. It appears in dozens of secondary sources but I could not trace it to a primary survey with disclosed methodology. The more rigorous Google Cloud study (52%) and McKinsey study (23% scaling) tell a fundamentally different story.

**My best estimate of actual agentic AI deployment:** 20-30% of large enterprises (>$500M revenue) have deployed agentic AI in at least one production use case. 50-60% are experimenting. The 79% figure likely includes any organization that has used any AI tool, including basic chatbots.

---

## ROI Data -- The Measurement Paradox

### The 171% ROI Claim: Anatomy of a Misleading Statistic

| Aspect | Detail |
|---|---|
| **Source** | PagerDuty Agentic AI Survey 2025 |
| **Conducted by** | Wakefield Research (reputable polling firm) |
| **Sample** | 1,000 IT and Business Executives, Director+ level, $500M+ revenue companies |
| **Geography** | US, UK, Australia, Japan (250 each) |
| **Margin of error** | +/- 3.1% global, +/- 6.2% per market |
| **Date** | February 27 - March 6, 2025 |
| **Critical distinction** | This is **expected** ROI, not **measured** ROI |

**The 171% is what executives hope to achieve, not what they have achieved.** The survey question asks about expected returns. This is a critical distinction that is lost in nearly every secondary citation.

### Contrasting ROI Data Points

| Metric | Value | Source | Type | Confidence |
|---|---|---|---|---|
| Average *expected* ROI | 171% | PagerDuty/Wakefield | Expectation survey | B (methodology) / **D** (as evidence of actual returns) |
| US-specific *expected* ROI | 192% | PagerDuty/Wakefield | Expectation survey | Same |
| Organizations achieving ROI within first year | 74% | Google Cloud/NRG | Self-reported measurement | B |
| Organizations seeing "significant" ROI | 10% | Industry surveys (multiple) | Self-reported | B+ |
| Agentic AI early adopters seeing ROI | 88% | Google Cloud/NRG | Self-reported, 13% of sample | B- |
| Organizations reporting measurable productivity value | 66% | Multiple sources | Self-reported | B |
| Revenue increase attributed to GenAI | 6-10% (53% of those reporting growth) | Google Cloud/NRG | Self-reported | B- |

**The Paradox Explained:**
- 171% is an **expectation**, not a measurement
- 74% report *some* ROI, but only 10% report *significant* ROI
- These are not contradictory -- most organizations see modest positive returns, a few see large returns, and the 171% average expectation has not been tested against reality
- **Survivorship bias**: organizations that abandoned AI projects are not surveyed about ROI

### Productivity Data -- Empirical vs. Projected

| Metric | Value | Source | Type | Confidence |
|---|---|---|---|---|
| Labor productivity increase since ChatGPT | Up to 1.3% | St. Louis Fed / OECD | Modeled estimate from empirical data | **A-** |
| OECD projected annual productivity growth (G7, 10yr) | 0.4-1.3% | OECD | Projection range | B+ |
| GenAI share of work hours (Aug 2025) | 5.7% | St. Louis Fed | Measured (survey) | A- |
| GenAI share of work hours (Nov 2024) | 4.1% | St. Louis Fed | Measured (survey) | A- |
| US workers using GenAI (Dec 2025) | 35.9% | Federal survey data | Measured | A- |
| Time savings from GenAI | 1.6% of all work hours | Multiple academic studies | Measured/modeled | B+ |
| Cost reduction through automation | "Up to 70%" | Vendor reports | Claimed | C- |
| Process acceleration with hyperautomation | 42% faster | Vendor/consulting reports | Claimed | C |
| Manufacturing optimization: 6 weeks to 1 day | Single case study | BCG/vendor report | Anecdotal | D+ |

**Key Finding:** The empirical evidence (St. Louis Fed, OECD) shows **modest but real** productivity gains of 0.4-1.3%. The vendor-cited figures of "70% cost reduction" and "42% faster" are cherry-picked best cases with no statistical population validity. The gap between empirical aggregate data and vendor anecdotes is enormous.

---

## Labor Market Data

### Displacement Evidence

| Indicator | Value | Period | Source | Methodology | Confidence |
|---|---|---|---|---|---|
| Employment decline, workers 22-25 in AI-exposed jobs | **13%** | Nov 2022 - Jul 2025 | Stanford (Brynjolfsson et al.) via ADP payroll data | Millions of payroll records, controlled for education, remote work, outsourcing, macro factors | **A** |
| Entry-level decline in software/customer service | ~20% | Nov 2022 - Jul 2025 | Same Stanford study | Same rigorous methodology | **A** |
| Entry-level job postings decline | ~35% | Jan 2023 - present | Multiple job board data sources | Observational, some confounders | B |
| Jobs displaced globally by 2030 | 92M | Projection | WEF Future of Jobs Report 2025 | 1,000+ companies, 22 industries, 55 economies, 14M+ employees represented | **B+** |
| Projected unemployment rate (2026) | 6% | Projection | Macroeconomic forecasts | Modeled | B- |

### Creation Evidence

| Indicator | Value | Period | Source | Methodology | Confidence |
|---|---|---|---|---|---|
| New jobs created globally by 2030 | 170M | Projection | WEF Future of Jobs Report 2025 | Same 1,000+ company survey | **B+** |
| Net job gain by 2030 | +78M | Projection | WEF (170M created - 92M displaced) | Derived | **B+** |
| Leaders facing AI skill shortages | 94% | 2025 | Multiple enterprise surveys | Self-reported | B |
| Expected skill gaps by 2028 | 20-40% | Projection | Gartner/industry | Analyst prediction | B- |
| Existing skills becoming outdated | 39% | By 2030 | WEF | Survey-based projection | B |

### Methodology Critique: Stanford vs. WEF

**Stanford (Brynjolfsson et al.)** is the gold standard in this space:
- Uses ADP payroll records (millions of actual employment records, not surveys)
- Controls for confounding variables systematically
- Distinguishes between automative and augmentative AI exposure
- Finding: In **automative** occupations, young workers see substantial decline; in **augmentative** occupations, they do not
- **Limitation:** US-only, may not generalize globally

**WEF Future of Jobs Report:**
- Comprehensive scope (1,000+ companies, 22 industries, 55 economies)
- But relies on **employer surveys about future plans** -- not measured displacement
- The 170M/92M figures are what companies **say** they expect, not observed outcomes
- Important: These figures include **all technology-driven change**, not AI alone (also includes green transition, demographics, macroeconomic shifts)

**Reconciliation:** The Stanford data measures **what has already happened** (real displacement of young workers). The WEF data projects **what might happen** (net positive but with friction). Both can be true simultaneously. The WEF's net-positive framing obscures the distributional pain shown in the Stanford data: **the same workers who lose jobs are not the ones who get the new ones.**

---

## Security Incident Quantitative Data

| Metric | Value | Source | Methodology | Confidence |
|---|---|---|---|---|
| Tool misuse incidents (2025) | 520 | Adversa AI Annual Report | Incident tracking/compilation | **B-** |
| Incidents caused by simple prompts | 35% of all AI security incidents | Adversa AI | Same | B- |
| Prompt injection attacks in red-team competition | 1.8M attacks, 60,000+ succeeded | Competition data | Controlled environment | B+ |
| Shadow AI breach cost premium | $670,000 more than traditional | Industry reports | Unclear methodology | C |
| Supply chain attack (Drift/Salesforce, Aug 2025) | 700+ organizations affected | Incident report | Single event documentation | B+ |
| Deepfake content volume growth | 500K files (2023) -> 8M (2025) | Industry tracking | Estimation | C+ |
| UK adults exposed to harmful deepfakes | 15% | Alan Turing Institute (2024) | Survey | B+ |
| UK adults who have seen synthetic content | 43% (ages 16+) | Ofcom (2024) | Representative survey | **A-** |
| Enterprise employees pasting data into AI | 77% | LayerX (2025) | Enterprise monitoring data | B |

**Key Limitations:**
- No standardized taxonomy for "AI security incident" exists -- different reports count different things
- The 520 tool-misuse figure from Adversa AI is not independently auditable
- Adversa AI is an AI security vendor with financial interest in highlighting threats (not disqualifying, but important context)
- Most incident data comes from disclosed breaches; actual incident volume is likely higher
- The Ofcom deepfake data is among the most methodologically rigorous in this domain

### AI Self-Replication Capability Data

| Metric | Value | Period | Source | Confidence |
|---|---|---|---|---|
| Self-replication eval success rate | <5% | Early 2023 | UK AISI | **A-** |
| Self-replication eval success rate | >60% | Summer 2025 | UK AISI | **A-** |
| Real-world self-replication likelihood | Low | Current | UK AISI assessment | A- |

**Important caveat from AISI:** Models are "currently unlikely to succeed in real-world conditions" because they struggle with tasks like accessing new computing resources. No evidence of spontaneous self-replication attempts has been observed. The 5% -> 60% improvement is on **structured evaluations**, not real-world attempts.

---

## Data Reconciliation

### The Adoption Paradox: High Adoption + High Failure + High ROI

This is the central quantitative puzzle. Here is how the seemingly contradictory numbers can all be valid:

| Layer | Statistic | What It Actually Measures |
|---|---|---|
| **Broad adoption** | 79% "deploying" | Any AI usage, including chatbots and simple automation |
| **Real deployment** | 52% (Google Cloud) | Organizations with at least one GenAI use case in production |
| **Scaling** | 23% (McKinsey) | Organizations moving beyond pilot to enterprise-wide deployment |
| **Significant ROI** | 10% | Organizations with measurable, significant financial returns |
| **Expected ROI** | 171% | What executives hope to achieve (not measured) |
| **Project failure** | 40%+ canceled by 2027 | Gartner prediction for agentic-specific projects |
| **General AI failure** | 80-95% | Poorly sourced; likely conflates "didn't reach production" with "failed" |

**The reconciliation:** These numbers describe a **funnel**, not a contradiction:
1. ~80% of enterprises are **trying** AI (chatbots, copilots, experiments)
2. ~50% have **deployed** something in production
3. ~23% are **scaling** beyond single use cases
4. ~10% are seeing **significant** measurable returns
5. The rest are in various stages of experimentation, pilot hell, or quiet abandonment

This is a **normal technology adoption curve**, not a paradox. The "paradox" only exists because different surveys measure different stages of the funnel and secondary sources mix them indiscriminately.

### Job Creation vs. Displacement

The WEF's "+78 million net jobs" and Stanford's "-13% for young workers" are not contradictory:

1. **Different timeframes:** WEF projects to 2030; Stanford measures 2022-2025
2. **Different populations:** WEF counts global aggregate; Stanford tracks specific demographics
3. **Different causes:** WEF includes ALL drivers of change (tech, green, demographic); Stanford isolates AI
4. **Distribution matters:** Net positive does not mean positive for all. Entry-level workers bear disproportionate costs while new roles require different skills and often different geographies
5. **Temporal mismatch:** Displacement happens now; creation happens later. The transition period creates real human suffering even if the long-term net is positive

---

## Data Gaps

| Topic | What's Missing | Impact on Analysis | How to Close |
|---|---|---|---|
| Actual measured ROI (not expectations) | No large-scale study measures ROI post-deployment with standardized methodology | **Critical** -- we cannot validate the economic thesis | Independent audit of enterprises 12+ months post-deployment |
| Standardized AI incident taxonomy | Different reports count different things differently | **High** -- security risk quantification unreliable | OWASP/NIST standardized reporting framework |
| Global South AI deployment data | Nearly all surveys cover US/EU/developed Asia | **High** -- global projections built on partial data | OECD/World Bank expanded surveying |
| Longitudinal worker tracking | Stanford study is cross-sectional; need individual trajectories | **Medium-High** -- can't distinguish displacement from career pivot | Multi-year panel study tracking individual workers |
| Small/medium enterprise data | Most surveys require $500M+ revenue or 1,000+ employees | **Medium** -- market size estimates may be inflated | Extend surveys to SME population |
| Agentic vs. GenAI vs. traditional AI decomposition | Most data lumps all AI together | **High** -- cannot isolate agentic AI specific impacts | Surveys with clear definitional boundaries |
| Actual (not projected) productivity at macro level | Fed estimates are modeled, not directly measured | **Medium** -- productivity thesis rests on models, not observation | BLS sectoral productivity data with AI exposure controls |
| Independent security incident verification | Adversa AI data is self-compiled | **Medium** -- cannot independently confirm incident counts | Government or academic incident database (expand AI Incident Database) |

---

## Governance Quantitative Data

| Metric | Value | Source | Confidence |
|---|---|---|---|
| Countries excluded from major AI governance initiatives | 118 (of 193 UN members) | UN report (2024) | **A-** |
| Developed nations in ALL major initiatives | 7 | UN report (2024) | **A-** |
| Countries with AI policy initiatives | 72+ | OECD tracking (early 2026) | B+ |
| Total AI policy initiatives worldwide | 2,083+ | OECD | B+ |
| UN member states in new governance bodies | 193 (all) | UN General Assembly (Aug 2025) | **A** |
| EU AI Act enforcement start | August 2026 (phased) | EU legislation | **A** |
| US states with AI legislation | CA, NY, TX, CO + many others | State legislatures | **A** |

**Key Governance Gap Metric:** The ratio of 118 excluded countries to 7 fully-included countries illustrates profound asymmetry -- the nations most affected by AI (through labor arbitrage, data extraction, digital colonialism) have the least say in governance.

---

## Website Visualization Specifications

### 1. Market Growth Chart

| Attribute | Specification |
|---|---|
| **Chart Type** | Line chart with confidence band (range across research firms) |
| **X-axis** | Years: 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034 |
| **Y-axis** | Market size (USD Billions) |
| **Data Series 1** | Conservative estimate (Mordor Intelligence trajectory) |
| **Data Series 2** | Moderate estimate (Fortune BI / DataM trajectory) |
| **Data Series 3** | Aggressive estimate (Grand View / Precedence trajectory) |
| **Confidence Band** | Shaded area between conservative and aggressive |
| **Key Data Points** | 2025: $5-8B; 2028: $20-50B (interpolated); 2031: $57-120B; 2033-34: $98-199B |
| **Annotations** | Mark key events: EU AI Act (Aug 2026), Gartner 40% prediction (2026) |
| **Interactivity** | Hover for source attribution; toggle between linear and log scale |
| **Color** | Green gradient for confidence band, distinct lines for each estimate |
| **Critical Note** | Display disclaimer: "Estimates vary 2-4x across research firms. Treat as directional, not precise." |

### 2. Risk Matrix (Severity vs. Likelihood)

| Attribute | Specification |
|---|---|
| **Chart Type** | 5x5 scatter/bubble plot grid |
| **X-axis** | Likelihood (1=Very Low to 5=Very High) |
| **Y-axis** | Severity (1=Minimal to 5=Catastrophic) |
| **Risks to Plot** | See data below |
| **Bubble Size** | Proportional to number of documented incidents (where available) |
| **Color Coding** | Red (critical), Orange (high), Yellow (medium), Green (low) |
| **Interactivity** | Click bubble for detail card with evidence summary |

**Risk Data Points:**

| Risk | Likelihood | Severity | Incidents (2025) | Evidence Quality |
|---|---|---|---|---|
| Prompt injection | 5 | 3 | 35% of all incidents | A- |
| Tool misuse / privilege escalation | 5 | 4 | 520 documented | B- |
| Memory poisoning | 3 | 5 | Fewer than tool misuse | B |
| Supply chain compromise | 3 | 5 | Multiple major (700+ orgs in one) | B+ |
| Cascading multi-agent failure | 3 | 5 | Limited documentation | C+ |
| Shadow AI data leakage | 4 | 3 | 77% paste data into AI | B |
| Deepfake fraud | 4 | 4 | Growing rapidly | B |
| Self-replication / loss of control | 2 | 5 | 0 real-world (60% eval success) | A- |
| Alignment failure | 2 | 5 | Lab-documented only | B+ |
| Accountability gap (legal) | 4 | 3 | No framework exists | B+ |

### 3. Adoption Paradox Visualization

| Attribute | Specification |
|---|---|
| **Chart Type** | Funnel diagram OR stacked horizontal bars |
| **Data Structure** | Adoption funnel stages with percentages |
| **Stage 1** | "Any AI Usage" -- 79% (poorly sourced, show with warning) |
| **Stage 2** | "GenAI Deployed" -- 52% (Google Cloud, solid) |
| **Stage 3** | "Scaling Agentic AI" -- 23% (McKinsey, solid) |
| **Stage 4** | "Measurable ROI" -- 66% of deployers (~34% of total) |
| **Stage 5** | "Significant ROI" -- 10% (multiple sources) |
| **Overlay** | Expected ROI (171%) as a dotted line/annotation contrasting with actual |
| **Interactivity** | Click each stage for methodology details and source attribution |
| **Color** | Gradient from wide (light blue) to narrow (deep blue) |
| **Key Insight Text** | "The 'paradox' is actually a normal technology adoption funnel. Different surveys measure different stages." |

### 4. Labor Impact Visualization

| Attribute | Specification |
|---|---|
| **Chart Type** | Dual-axis diverging bar chart |
| **Left Side** | Job displacement (negative, red bars) |
| **Right Side** | Job creation (positive, green bars) |
| **Categories** | By demographic (age group), by sector, by skill level |
| **Key Data Points** | |

**Demographic Data:**
| Group | Impact | Source | Confidence |
|---|---|---|---|
| Workers 22-25 (AI-exposed) | -13% employment | Stanford/ADP | A |
| Entry-level software/CS | -20% | Stanford/ADP | A |
| Entry-level postings (all) | -35% since Jan 2023 | Job board data | B |
| Older workers (same occupations) | +growth | Stanford/ADP | A |
| Net global jobs by 2030 | +78M (170M created - 92M displaced) | WEF | B+ |

**Sector Data (WEF projections):**
| Sector | Direction | Magnitude | Source |
|---|---|---|---|
| Technology / Data roles | Net creation | Largest growth area | WEF |
| Administrative / Clerical | Net displacement | Largest decline area | WEF |
| Healthcare support | Net creation | Moderate growth | WEF |
| Manufacturing (routine) | Net displacement | Moderate decline | WEF |
| AI governance / Ethics | New category | Emerging | Multiple |

| **Interactivity** | Toggle between "Current Measured" (Stanford) and "Projected 2030" (WEF) views |
| **Annotation** | "The same workers who lose jobs are NOT the same ones who get new roles" |
| **Timeline slider** | 2022 -> 2025 (measured) -> 2030 (projected), with visual distinction |

### 5. Global Governance Gap Visualization

| Attribute | Specification |
|---|---|
| **Chart Type** | World map (choropleth) + summary statistics |
| **Color Coding** | Dark blue = party to all major initiatives (7 countries); Medium blue = some participation; Light blue = minimal; Gray = no participation (118 countries) |
| **Overlay Data** | AI policy initiatives per country (2,083+ total from OECD) |
| **Summary Stats Panel** | 118 countries excluded; 7 fully included; 72+ with any policy; 2,083+ total initiatives |
| **Key Events Timeline** | Below map: UN bodies (Aug 2025), EU AI Act (Aug 2026), US state laws (2025-2026) |
| **Interactivity** | Hover country for participation details; click for regulatory summary |
| **Annotation** | "The nations most affected by AI labor arbitrage have the least governance participation" |

### 6. Supplementary: Productivity Reality Check

| Attribute | Specification |
|---|---|
| **Chart Type** | Bar chart comparing vendor claims vs. empirical evidence |
| **Left Group** | "Vendor/Consulting Claims": 70% cost reduction, 42% faster, 171% ROI, 40x acceleration |
| **Right Group** | "Empirical Measurements": 1.3% productivity increase, 5.7% of work hours, 10% significant ROI, 35.9% workers using |
| **Color** | Left = orange (unverified), Right = blue (measured) |
| **Purpose** | Visually demonstrate the gap between marketing and reality |
| **Interactivity** | Click each bar for source, methodology, and reliability grade |

---

## Confidence Grading Scale

| Grade | Meaning | Criteria |
|---|---|---|
| **A** | High confidence | Peer-reviewed or government statistical data; large representative sample; transparent methodology; independently replicated |
| **B** | Moderate confidence | Established research firm or institution; reasonable methodology; some limitations noted; not independently replicated |
| **C** | Low confidence | Small/unknown research firm; opaque methodology; financial conflicts of interest; or projection rather than measurement |
| **D** | Very low confidence | Unable to trace to primary source; methodology unknown; widely cited without attribution; or expectation/hope masquerading as measurement |

---

## Statistics Reliability Scorecard

### Most Reliable Statistics (Grade A/A-)

1. **13% employment decline for young workers in AI-exposed jobs** -- Stanford/Brynjolfsson, ADP payroll data, millions of records, rigorous controls (A)
2. **Self-replication eval: 5% -> 60%** -- UK AISI, standardized evaluation framework (A-)
3. **118 countries excluded from AI governance** -- UN official data (A-)
4. **43% UK adults have seen synthetic content** -- Ofcom, representative survey methodology (A-)
5. **35.9% US workers using GenAI** -- Federal survey data (A-)
6. **AI = 52.7% of global VC** -- Crunchbase, comprehensive deal tracking (A-)

### Moderately Reliable (Grade B/B+)

7. **WEF 170M created / 92M displaced** -- Large survey but forward-looking employer intent, not measurement (B+)
8. **52% organizations deployed AI agents** -- Google Cloud/NRG, good methodology but sample limited to existing GenAI users (B+)
9. **Gartner 40% agentic projects canceled by 2027** -- Established analyst prediction, poll-informed (B)
10. **520 tool misuse incidents** -- Adversa AI, informative but not independently verifiable (B-)

### Least Reliable / Most Misused (Grade C/D)

11. **79% organizations "deploying" AI agents** -- Untraceable primary methodology, conflates experimentation with deployment (D)
12. **171% average ROI** -- Well-conducted survey (B for methodology) but measures **expectations**, not outcomes (D as evidence of returns)
13. **80-95% failure rate** -- Poorly sourced, conflates different definitions of "failure" (C-)
14. **"Up to 70% cost reduction"** -- Vendor claim, cherry-picked best case (C-)
15. **1 billion agents by 2026** -- Vendor forecast, undefined terms (C-)
16. **$4.54B -> $98.26B market** -- Single source with least established methodology (C)

---

## Sources

### Tier 1 (Highest Reliability)

- Brynjolfsson, E., Chandaran, A., Chen, T. "Canaries in the Coal Mine? Six Facts about the Recent Decline in Employment for Young Workers." Stanford Digital Economy Lab, August 2025. [Paper](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf)
- UK AI Security Institute (AISI). "Frontier AI Trends Report." 2025. [Report](https://www.aisi.gov.uk/frontier-ai-trends-report)
- World Economic Forum. "Future of Jobs Report 2025." January 2025. [Press Release](https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/)
- Ofcom. "A deep dive into deepfakes that demean, defraud and disinform." 2024. [Report](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/deepfakes-demean-defraud-disinform)
- St. Louis Federal Reserve. "The State of Generative AI Adoption in 2025." November 2025. [Article](https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025)
- United Nations General Assembly. AI governance bodies resolution. August 2025. [UN News](https://news.un.org/en/story/2025/09/1165898)
- International AI Safety Report 2026. [Report](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026)

### Tier 2 (Moderate Reliability)

- Google Cloud / National Research Group. "ROI of AI 2025." 3,466 leaders, 24 countries. September 2025. [Press Release](https://www.googlecloudpresscorner.com/2025-09-04-Google-Cloud-Study-Reveals-52-of-Executives-Say-Their-Organizations-Have-Deployed-AI-Agents,-Unlocking-a-New-Wave-of-Business-Value,1)
- PagerDuty / Wakefield Research. "2025 Agentic AI ROI Survey." 1,000 executives, 4 countries. March 2025. [Report](https://www.pagerduty.com/resources/ai/reports/agentic-ai-survey-2025/)
- McKinsey & Company. "The state of AI in 2025: Agents, innovation, and transformation." [Report](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)
- Morgan Stanley. "AI in the Workplace Could Increase Market Value by 30%." August 2025. [Article](https://www.morganstanley.com/insights/articles/ai-workplace-outlook-2H-2025)
- Gartner. Multiple press releases on agentic AI predictions. 2024-2025. [40% apps](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025); [40% canceled](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)
- Adversa AI. "Top AI Security Incidents -- 2025 Edition." July 2025. [Report](https://adversa.ai/blog/adversa-ai-unveils-explosive-2025-ai-security-incidents-report-revealing-how-generative-and-agentic-ai-are-already-under-attack/)
- Crunchbase. AI funding data, 2025. [Analysis](https://news.crunchbase.com/ai/big-funding-trends-charts-eoy-2025/)
- OECD. AI Policy Observatory data. 2025-2026.

### Tier 3 (Context/Informational)

- Grand View Research. AI Agents Market Report. [Report](https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report)
- DataM Intelligence. Agentic AI Market Report. February 2026. [Press Release](https://techintelpro.com/news/ai/agentic-ai/agentic-ai-market-to-reach-9826b-by-2033-4687-cagr)
- Fortune Business Insights. Agentic AI Market Report. [Report](https://www.fortunebusinessinsights.com/agentic-ai-market-114233)
- Precedence Research. Agentic AI Market Report. [Report](https://www.precedenceresearch.com/agentic-ai-market)
- Mordor Intelligence. Agentic AI Market Report. [Report](https://www.mordorintelligence.com/industry-reports/agentic-ai-market)
- AI Agents Directory. "Agentic AI Startups Raise $2.8B in H1 2025." [Article](https://aiagentsdirectory.com/blog/agentic-ai-venture-funding-explodes-dollar28-billion-invested-in-h1-2025-as-autonomous-workplace-agents-reshape-industries)
- Protiviti. AI Agents Adoption Study. [Press Release](https://www.protiviti.com/us-en/press-release/ai-agents-adoption-by-2026-protiviti-study)
- Zapier. "State of agentic AI adoption survey." 2026. [Article](https://zapier.com/blog/ai-agents-survey/)
- LayerX. Enterprise AI data exposure report. 2025.
- Alan Turing Institute. UK deepfake exposure survey. 2024.

---

## Appendix: Key Methodological Warnings for Report Authors

1. **Never cite 171% ROI as measured returns.** It is expected/hoped ROI from a forward-looking survey.
2. **Never cite 79% adoption without noting it is unverifiable.** Use 52% (Google Cloud) or 23% scaling (McKinsey) for defensible claims.
3. **Never cite 80-95% failure without source attribution.** Use Gartner's 40% cancellation prediction, which has disclosed methodology.
4. **Always note that market size projections vary 2-4x across research firms.** Never present a single estimate as definitive.
5. **Always distinguish between "agentic AI" and "generative AI" and "AI broadly."** Most statistics conflate these categories.
6. **The WEF 170M/92M figures are not AI-specific.** They cover all technology-driven change including green transition and demographics.
7. **Morgan Stanley's $920B/$16T figures use Anthropic's data as input.** Note the supplier relationship.
8. **The Stanford labor data is the most methodologically rigorous statistic in this entire domain.** Lead with it.

---

*Analysis completed February 10, 2026. All statistics graded for reliability using the framework specified in the agent definition. This document prioritizes methodological transparency over narrative coherence -- the data does not tell a clean story, and that uncertainty is the finding.*
