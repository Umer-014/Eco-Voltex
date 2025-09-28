import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

/**
 * Eco Voltex — Fire Alarms (Premium, brand-first, long-form)
 * - No deals, no embedded quote form (CTAs link to /contact and /quote)
 * - No external libraries required
 * - Accurate UK copy (BS 5839-1/-6, BS 7671)
 * - Image slots with alt text (swap /images/... for your assets)
 * - Responsive, AA contrast, accessible focus states
 */

export default function FireAlarmsPremium() {
  // Optional quick contacts (shown only if filled)
  const PHONE = "";    // e.g. "+44 20 7123 4567"
  const WHATSAPP = ""; // e.g. "447700900123" (digits only)

  // STATE
  const [audience, setAudience] = React.useState("business"); // "home" | "business"
  const [postcode, setPostcode] = React.useState("");
  const [pcResult, setPcResult] = React.useState("");
  const [consent, setConsent] = React.useState(null); // null | "accepted" | "rejected"

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const a = localStorage.getItem("ev_audience");
      if (a === "home" || a === "business") setAudience(a);
      const c = localStorage.getItem("ev_consent");
      if (c === "accepted" || c === "rejected") setConsent(c);
    } catch {}
  }, []);
  React.useEffect(() => { try { localStorage.setItem("ev_audience", audience); } catch {} }, [audience]);

  // HELPERS
  const validUKPostcode = (pc) => {
    if (!pc) return false;
    const s = pc.trim().toUpperCase();
    const re = /^(GIR ?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPS-UW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLN-UW-Z]{2}))$/i;
    return re.test(s);
  };
  const inCoverage = (pc) => {
    const s = (pc || "").toUpperCase().replace(/\s+/g, "");
    const allowed = ["E","EC","N","NW","W","WC","SE","SW","BR","CR","DA","EN","HA","IG","KT","TW","UB","SM","RM","WD","SL","AL"];
    return allowed.some(p => s.startsWith(p));
  };
  const checkPostcode = (e) => {
    e.preventDefault();
    if (!validUKPostcode(postcode)) {
      setPcResult("❌ Please enter a valid UK postcode (e.g., E1 6AN).");
      return;
    }
    setPcResult(inCoverage(postcode)
      ? "✅ You’re in our service area. We can usually survey within a few days."
      : "ℹ Likely covered — share your address and we’ll confirm today.");
  };

  // CONTENT
  const specsHome = [
    ["Standard", "BS 5839-6 (domestic/HMO)"],
    ["Typical grade", "A, C, D1/D2 or F1/F2"],
    ["Coverage", "LD2 or LD3 (risk-based)"],
    ["Use cases", "Houses, flats, HMOs"]
  ];
  const specsBiz = [
    ["Standard", "BS 5839-1 (non-domestic)"],
    ["Category", "L1–L5 / P1–P2 / M"],
    ["Design tools", "Cause & effect • Zoning • Interfaces"],
    ["Records", "Certificates • Logbook • As-fitted"]
  ];

  const sectors = [
    ["Landlords & HMOs","LD2/LD3, council-ready paperwork, quick turnarounds"],
    ["Property Managers","Routine maintenance, logbooks, call-outs"],
    ["Shops & Offices","L2/L3 installs, low disruption, out-of-hours work"],
    ["Schools & Care","Life-safety focus (L1/L2), weekly test guidance"],
    ["Warehouses","Property protection P1/P2, insurer compliance"],
    ["Homeowners","Interlinked smoke/heat/CO alarms"],
    ["Hospitality & Leisure","False-alarm reduction, staff training"],
    ["Mixed-Use Blocks","Common parts systems, takeover & upgrades"]
  ];

  const comparison = [
    { type: "Conventional", typical: "Small/medium buildings", detection: "Zones (groups of devices)", pros: "Lower cost, simple", cons: "No per-device pinpointing", notes: "Good for shops/offices with modest complexity" },
    { type: "Addressable", typical: "Medium/large or complex buildings", detection: "Each device has an address", pros: "Pinpoint info, flexible cause/effect", cons: "Higher cost, configuration required", notes: "Ideal for campuses, multi-storey, interfacing" },
    { type: "Domestic interlinked", typical: "Houses, flats, small HMOs", detection: "Interlinked smoke/heat/CO", pros: "Quick install, low disruption", cons: "Not for large non-domestic", notes: "BS 5839-6 LD2/LD3; add CO where required" }
  ];

  const process = [
    {
      key: "design",
      title: "Design",
      bullets: [
        "Objectives agreed (L / P / M / LD) with the Responsible Person",
        "Detector types & spacing; call points; audibility targets (dB(A))",
        "Zoning & cause-and-effect matrix (doors, lifts, HVAC, plant)",
        "Drawings: layout, zoning, device schedule; cable routes as applicable"
      ],
      image: { src: "/images/fire/step-design-2400x1350.jpg", alt: "Zoning overlay on plan (non-legible) with scale and tablet", w: 1200, h: 675 }
    },
    {
      key: "installation",
      title: "Installation",
      bullets: [
        "BS 7671 cabling & containment; FP-rated where specified",
        "Correct device siting (ceiling/voids), labelling & identification",
        "Fire-rated supports; penetrations sealed appropriately",
        "As-installed drawings maintained during works"
      ],
      image: { src: "/images/fire/step-install-2400x1350.jpg", alt: "Detector on UK suspended grid; tidy FP red cabling in white trunking with clips", w: 1200, h: 675 }
    },
    {
      key: "commissioning",
      title: "Commissioning",
      bullets: [
        "100% device tests; sound pressure checks vs objectives",
        "Cause-and-effect verified; third-party interface tests",
        "Certificates, zone chart, device list, logbook setup",
        "User training: weekly tests, fault reporting, isolation procedure"
      ],
      image: { src: "/images/fire/step-commission-2400x1350.jpg", alt: "Panel verification with meter (labels non-legible)", w: 1200, h: 675 }
    },
    {
      key: "maintenance",
      title: "Maintenance",
      bullets: [
        "Non-domestic: competent servicing at intervals not exceeding 6 months",
        "Domestic/HMO: monthly user tests; Grade A follows the weekly routine",
        "Logbook updates; false-alarm reduction & housekeeping tips",
        "Takeovers of existing systems; remedials and upgrades"
      ],
      image: { src: "/images/fire/step-maintain-2400x1350.jpg", alt: "Service logbook with keys and zone chart (non-legible)", w: 1200, h: 675 }
    }
  ];

  const docsRows = [
    ["Design/Installation/Commissioning Certificates", "Formal record that work meets scope and standard", "PDF (signed)", "At handover"],
    ["Zone Chart", "Shows zones for alarm/fault localisation", "Printed + PDF", "At handover"],
    ["Device/Asset List", "Every device & location for maintenance", "Spreadsheet + PDF", "At handover"],
    ["As-fitted Drawings", "Final device positions, zoning, routes (where applicable)", "PDF (source by agreement)", "At/after handover"],
    ["Logbook", "User’s record for weekly tests, faults, servicing", "Printed", "At handover"],
  ];

  const maintRows = [
    ["Device tests", "Smoke/heat detectors, MCPs, sounders, interfaces", "Operation confirmed & recorded"],
    ["Audibility", "Spot checks vs objectives (dB(A))", "Meets objectives or remedials advised"],
    ["Panel & power", "Indicators, faults, battery condition/charge", "Healthy state or actions listed"],
    ["Cause & effect", "Door releases, plant shutdown, lifts", "Sequence verified or issues raised"],
    ["Records", "Logbook updates, asset list changes", "Documentation up to date"],
  ];

  // STYLES
  const styles = `
:root{
  --navy:#0B1624; --navy2:#0E2035;
  --ink:#0F2338; --mint:#22E57F; --green:#10B981; --cyan:#7AD7F0;
  --soft:#F5F8FC; --glass:#ffffffE6; --line:#E4EDF5; --text:#0B1320; --muted:#5B6673;
  --shadow:0 22px 70px rgba(5,22,40,.18);
}
*{box-sizing:border-box}
html,body{background:var(--soft)}
[id]{scroll-margin-top:96px}
.ev{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text)}
.ev a{text-decoration:none;color:inherit}
.ev :focus-visible{outline:3px solid var(--mint);outline-offset:3px;border-radius:10px}

.container{max-width:1240px;margin:0 auto;padding:0 24px}
.section{padding:84px 0;border-top:1px solid var(--line)}
.section--tight{padding:56px 0}
.section--dark{background:linear-gradient(180deg,var(--navy),var(--navy2));color:#EAF7F0;border-top:none}
.section--dark .muted{color:#C6D6E6}

/* HERO */
.hero{
  background:
    radial-gradient(1200px 500px at 85% -60%, rgba(34,229,127,.20), transparent 65%),
    radial-gradient(900px 360px at -10% -40%, rgba(122,215,240,.22), transparent 65%),
    linear-gradient(180deg,var(--navy),var(--navy2));
  color:#EAF7F0; padding:110px 0 82px;
}
.hero h1{font-size:56px;line-height:1.06;margin:0 0 14px;font-weight:900;letter-spacing:-0.02em}
.hero p.lead{font-size:18px;opacity:.94;max-width:78ch}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
.hero .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;font-weight:800;border:1px solid transparent;min-height:46px}
.btn--primary{background:var(--green);color:#071A14;border-color:#0D5B3A}
.btn--ghost{background:transparent;border-color:#2E445A;color:#DDFCEE}

/* Toggle */
.toggle{display:inline-flex;border:1px solid #27415A;background:#11283F;border-radius:12px;overflow:hidden}
.toggle button{padding:8px 14px;font-weight:800;color:#CDE3F6;background:transparent;border:none;cursor:pointer}
.toggle button[aria-pressed="true"]{background:#1A3551;color:#fff}

/* Cards / Glass */
.glass{background:var(--glass);backdrop-filter:saturate(1.3) blur(10px);border:1px solid rgba(255,255,255,.6);border-radius:20px;box-shadow:var(--shadow)}
.card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 12px 34px rgba(10,35,60,.09);padding:18px}
.card h3{margin:2px 0 6px;font-size:18px;font-weight:900;color:var(--ink)}
.kv{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.kv .box{border:1px solid var(--line);border-radius:12px;padding:12px;background:#fff}

.meta{font-size:12px;color:var(--muted)}
.small{font-size:13px}
.badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
.badge{display:flex;gap:8px;align-items:center;border:1px solid #1F3E2F;background:#10261C;color:#DFFFEF;border-radius:999px;padding:6px 10px;font-weight:800;font-size:12px}

/* Subnav */
.subnav{position:sticky;top:64px;z-index:50;background:#0E2035;border-bottom:1px solid #12314D}
.subnav .wrap{display:flex;gap:10px;overflow:auto;padding:10px 24px}
.subnav a{color:#CFE7F9;border:1px solid #254D70;border-radius:999px;padding:8px 12px;font-weight:800;white-space:nowrap}
.subnav a:hover{background:#153957;color:#fff}

/* Grids */
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}

/* Tables */
.table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}
.table th,.table td{padding:12px 14px;border-bottom:1px solid var(--line);vertical-align:top}
.table th{background:#F7FAFF;text-align:left;font-weight:900;color:var(--ink)}
.table tr:last-child td{border-bottom:none}

/* Lists */
.list{padding-left:18px}
.list--disc{list-style:disc}

/* Steps */
.step{background:#0F2439;border:1px solid #254D70;color:#EAF6FF;border-radius:16px;padding:18px}
.step .icon{width:40px;height:40px;display:grid;place-items:center;border-radius:12px;background:rgba(122,215,240,.15);color:#7AD7F0;margin-bottom:6px}
.step .banner{margin:10px 0 0;border-radius:12px;overflow:hidden;border:1px solid #2B5170}

/* Media */
.thumb{width:100%;aspect-ratio:16/9;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-auto-rows:200px;gap:12px}
.gallery img{width:100%;height:100%;object-fit:cover;border-radius:14px;border:1px solid var(--line)}

/* Coverage */
.coverage form{display:grid;grid-template-columns:1fr auto;gap:10px}
.coverage input{border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:14px;background:#fff}
.coverage button{padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid #0D5B3A;background:var(--green);color:#062519}

/* Footer CTA */
.footer-cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.footer-cta a{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;border:1px solid var(--line);background:#fff;font-weight:800}

/* Hover & Motion */
@media (hover:hover) and (pointer:fine){
  .card,.step{transition:transform .16s ease, box-shadow .16s ease}
  .card:hover,.step:hover{transform:translateY(-2px);box-shadow:0 20px 50px rgba(10,35,60,.12)}
}
@media (prefers-reduced-motion: reduce){ *{animation:none!important;transition:none!important} }

/* Responsive */
@media(max-width:1180px){ .kv{grid-template-columns:1fr} }
@media(max-width:1024px){
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .gallery{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .grid-3{grid-template-columns:1fr}
  .grid-4{grid-template-columns:1fr}
  .grid-2{grid-template-columns:1fr}
  .hero h1{font-size:42px}
}
`;

  return (
    <>
      <Header />
      <main className="ev" role="main">
        <style>{styles}</style>

        {/* HERO */}
        <section className="hero" id="overview" aria-labelledby="hero-title">
          <div  className="container">
            <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:22,alignItems:"center"}}>

              <div>
                <h1 id="hero-title">Fire alarm design, installation, commissioning & maintenance — London</h1>
                <p className="lead">
                  Brand-level delivery for life and property protection. Neat cabling, correct siting, precise commissioning, and clear documentation — to
                  <b> BS 5839-1</b> (non-domestic) and <b> BS 5839-6</b> (domestic/HMO). Fully insured. London and nearby counties.
                </p>

                {/* Audience toggle */}
                <div className="toggle" role="tablist" aria-label="Choose audience" style={{marginTop:16}}>
                  <button role="tab" aria-selected={audience==="home"} aria-pressed={audience==="home"} onClick={()=>setAudience("home")}>Home</button>
                  <button role="tab" aria-selected={audience==="business"} aria-pressed={audience==="business"} onClick={()=>setAudience("business")}>Business</button>
                </div>

                {/* Trust badges */}
                <div className="badges" aria-label="Key trust points">
                  <span className="badge">Neat workmanship</span>
                  <span className="badge">BS 5839-1/-6 documentation</span>
                  <span className="badge">Friendly, competent engineers</span>
                </div>

                {/* CTAs */}
                <div className="cta">
                  <a className="btn btn--primary" href="/contact">Book a survey</a>
                  <a className="btn btn--ghost" href="/quote">Get a quote</a>
                  
                </div>
              </div>

              {/* Hero visual (replace src with your image) */}
              <figure className="thumb" aria-label="Hero visual">
                <img
                  loading="eager"
                  src="/images/fire/hero-1600x900.jpg"
                  width="1600" height="900"
                  alt="Clean UK fire alarm detector with tidy FP red cabling and labelled trunking"
                />
              </figure>
            </div>
          </div>

        </section>

        {/* SUBNAV */}
        <nav className="subnav" aria-label="Section navigation">
          <div className="wrap container">
            <a href="#value">Why Eco Voltex</a>
            <a href="#basics">Basics</a>
            <a href="#compare">System comparison</a>
            <a href="#process">How we deliver</a>
            <a href="#sectors">Who we help</a>
            <a href="#standards">Standards</a>
            <a href="#docs">Documentation</a>
            <a href="#cases">Case studies</a>
            <a href="#gallery">Gallery</a>
            <a href="#coverage">Coverage</a>
            <a href="#faqs">FAQs</a>
          </div>
        </nav>

        {/* WHY US */}
        <section id="value" className="section" aria-labelledby="value-title">
          <div className="container">
            <h2 id="value-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Why Eco Voltex</h2>
            <p className="small" style={{marginTop:8}}>Clarity, neatness, and compliance — delivered without disruption.</p>
            <div className="grid-4" style={{marginTop:16}}>
              {[
                ["Neat by default","Tidy containment, correct clips, labelled devices — snags minimised."],
                ["Risk-led design","Objectives (L/P/M/LD) matched to actual use."],
                ["Clear documentation","Zone charts, logbook, certificates; understandable drawings."],
                ["Respect for sites","Low disruption; clean working; out-of-hours available."],
                ["Transparent scope","Written scope with drawings before you decide."],
                ["Competent engineers","UK methods, PPE, and courteous conduct."],
                ["Lifecycle support","Takeovers, remedials, upgrades, maintenance."],
                ["Insurer-friendly","Property-protection categories and ARC setup if required."]
              ].map(([t,d])=>(
                <div className="card" key={t}>
                  <h3>{t}</h3>
                  <p style={{marginTop:6}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BASICS */}
        <section id="basics" className="section section--tight" aria-labelledby="basics-title">
          <div className="container">
            <h2 id="basics-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Fire alarm basics — in plain English</h2>
            <div className="grid-3" style={{marginTop:14}}>
              {[
                {
                  title:"What it is",
                  points:[
                    "Detectors + manual call points + sounders, managed by a control panel",
                    "Warns people to evacuate; can interface with doors, lifts, HVAC",
                    "Records alarms/faults in a logbook"
                  ],
                  img:"/images/fire/illus-system-800x600.jpg",
                  alt:"Illustration of detectors, call points and a control panel connected"
                },
                {
                  title:"System types",
                  points:[
                    "Conventional: devices grouped by zone",
                    "Addressable: each device has an address for pinpoint info",
                    "Domestic interlinked: mains/battery with wired/wireless link"
                  ],
                  img:"/images/fire/illus-types-800x600.jpg",
                  alt:"Icons for conventional, addressable, and domestic interlinked"
                },
                {
                  title:"Standards & categories",
                  points:[
                    "BS 5839-1 (non-domestic): L1–L5 (life), P1–P2 (property), M (manual)",
                    "BS 5839-6 (domestic/HMO): Grades A/C/D/F with LD1–LD3 coverage",
                    "We confirm the right category/grade after survey"
                  ],
                  img:"/images/fire/illus-standards-800x600.jpg",
                  alt:"Stylised standards cards labelled non-domestic and domestic (non-legible)"
                }
              ].map((b)=>(
                <div className="card" key={b.title}>
                  <div className="thumb" style={{marginBottom:8}}>
                    <img loading="lazy" src={b.img} alt={b.alt} />
                  </div>
                  <h3>{b.title}</h3>
                  <ul className="list list--disc">
                    {b.points.map(p=> <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM COMPARISON */}
        <section id="compare" className="section" aria-labelledby="cmp-title">
          <div className="container">
            <h2 id="cmp-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>System comparison</h2>
            <p className="small" style={{marginTop:6}}>A quick guide — we’ll recommend the right approach after survey.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:16,alignItems:"start",marginTop:12}}>
              <div style={{overflowX:"auto"}}>
                <table className="table" role="table" aria-label="System comparison table">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Typical use</th>
                      <th scope="col">Detection model</th>
                      <th scope="col">Pros</th>
                      <th scope="col">Cons</th>
                      <th scope="col">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(row=>(
                      <tr key={row.type}>
                        <td><b>{row.type}</b></td>
                        <td>{row.typical}</td>
                        <td>{row.detection}</td>
                        <td>{row.pros}</td>
                        <td>{row.cons}</td>
                        <td>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figure className="thumb">
                <img loading="lazy" src="/images/fire/compare-devices-1200x675.jpg" alt="Conventional zone indicators and addressable device label (non-legible)" />
              </figure>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section section--dark" aria-labelledby="process-title">
          <div className="container">
            <h2 id="process-title" style={{fontSize:32,margin:0,fontWeight:900}}>How we deliver — step by step</h2>
            <p className="muted" style={{marginTop:6}}>Clarity at every stage. Written scope with drawings before you decide.</p>
            <div className="grid-4" style={{marginTop:16}}>
              {process.map(s=>(
                <div key={s.key} className="step">
                  <div className="icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L2 9l10 6l10-6l-10-6Z"/></svg>
                  </div>
                  <h3 style={{margin:"2px 0 6px",color:"#fff"}}>{s.title}</h3>
                  <ul className="list list--disc">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>
                  <div className="banner">
                    <img loading="lazy" src={s.image.src} width={s.image.w} height={s.image.h} alt={s.image.alt} style={{width:"100%",height:"auto"}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section id="sectors" className="section" aria-labelledby="sector-title">
          <div className="container">
            <h2 id="sector-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Who we help</h2>
            <div className="grid-4" style={{marginTop:14}}>
              {sectors.map(([t,d],i)=>(
                <div key={t} className="card">
                  <div className="thumb" style={{marginBottom:8}}>
                    <img loading="lazy" src={'https://res.cloudinary.com/dug1siluu/image/upload/v1757605665/ChatGPT_Image_Sep_11_2025_08_47_34_PM_ntffio.png'} />
                  </div>
                  <h3>{t}</h3>
                  <p style={{marginTop:6}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDS */}
        <section id="standards" className="section section--tight" aria-labelledby="std-title">
          <div className="container">
            <h2 id="std-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Standards & records we work to</h2>
            <div className="grid-3" style={{marginTop:14}}>
              <div className="card">
                <h3>Non-domestic (BS 5839-1)</h3>
                <ul className="list list--disc">
                  <li>Life categories L1–L5 • Property P1–P2 • Manual M</li>
                  <li>Six-monthly servicing (maximum interval)</li>
                  <li>Zone charts, logbook, certificates issued</li>
                </ul>
              </div>
              <div className="card">
                <h3>Domestic/HMO (BS 5839-6)</h3>
                <ul className="list list--disc">
                  <li>Grades A/C/D/F • LD1–LD3 coverage</li>
                  <li>Monthly user tests; Grade A weekly routine</li>
                  <li>HMO: council-ready paperwork provided</li>
                </ul>
              </div>
              <div className="card">
                <h3>Electrical & Firestopping</h3>
                <ul className="list list--disc">
                  <li>BS 7671 for cabling/containment</li>
                  <li>Fire-rated supports and fixings where required</li>
                  <li>Penetrations sealed with appropriate systems</li>
                </ul>
              </div>
            </div>
            <figure className="thumb" style={{marginTop:12}}>
              <img loading="lazy" src="/images/fire/zone-chart-1200x675.jpg" alt="Zone chart example (non-legible), illustrating clear zoning" />
            </figure>
            <p className="meta" style={{marginTop:8}}>
              Monitoring: ARC with confirmed-alarm protocols & keyholder notification. No direct autodial to Fire & Rescue. Attendance policies vary by FRS.
            </p>
          </div>
        </section>

        {/* DOCUMENTATION PACK */}
        <section id="docs" className="section" aria-labelledby="docs-title">
          <div className="container">
            <h2 id="docs-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>What you receive — documentation pack</h2>
            <p className="small" style={{marginTop:6}}>Clear records for compliance and handover.</p>
            <div style={{overflowX:"auto",marginTop:12}}>
              <table className="table" aria-label="Documentation pack contents">
                <thead>
                  <tr>
                    <th scope="col">Document</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Format</th>
                    <th scope="col">When issued</th>
                  </tr>
                </thead>
                <tbody>
                  {docsRows.map(([doc,purpose,format,when])=>(
                    <tr key={doc}>
                      <td><b>{doc}</b></td>
                      <td>{purpose}</td>
                      <td>{format}</td>
                      <td>{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="section" aria-labelledby="cases-title">
          <div className="container">
            <h2 id="cases-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Recent case studies</h2>
            <div className="grid-3" style={{marginTop:14}}>
              {[
                { title:"Office fit-out, EC2", img:"/images/fire/cases/ec2-1920x1080.jpg", alt:"Neat cable management above suspended ceiling during office fit-out",
                  points:["Category L3 design & install","Neat containment, zero snags","Commissioned in 2 visits"],
                  metrics:["2 floors, 14 zones","96 devices","≥72 dB(A) achieved"] },
                { title:"Warehouse upgrade, DA1", img:"/images/fire/cases/da1-1920x1080.jpg", alt:"Addressable detector line and interface module in warehouse aisle",
                  points:["Property protection P1 + interfaces","Addressable loop with plant shutdown","False alarms down by ~80%"],
                  metrics:["1 loop + I/O","ARC setup","Insurer sign-off"] },
                { title:"HMO conversion, SE6", img:"/images/fire/cases/se6-1920x1080.jpg", alt:"HMO landing with sounder and call point by escape route",
                  points:["Grade A panel + LD2 coverage","Landlord docs issued same day","Council-ready zone chart"],
                  metrics:["3 storeys","15 detectors","Same-week survey"] }
              ].map(cs=>(
                <div className="card" key={cs.title}>
                  <div className="thumb" style={{marginBottom:8}}>
                    <img loading="lazy" src={cs.img} alt={cs.alt} />
                  </div>
                  <h3>{cs.title}</h3>
                  <ul className="list list--disc">{cs.points.map(p=> <li key={p}>{p}</li>)}</ul>
                  <div className="badges" style={{marginTop:10}}>
                    {cs.metrics.map(m => <span className="badge" key={m} style={{background:"#10261C"}}>{m}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE CHECKLIST */}
        <section id="maintenance" className="section section--tight" aria-labelledby="maint-title">
          <div className="container">
            <h2 id="maint-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Maintenance overview — what we check</h2>
            <p className="small" style={{marginTop:6}}>Snapshot of typical non-domestic servicing (scope varies by system).</p>
            <div style={{overflowX:"auto",marginTop:12}}>
              <table className="table" aria-label="Maintenance checklist">
                <thead>
                  <tr>
                    <th scope="col">Area</th>
                    <th scope="col">Examples</th>
                    <th scope="col">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {maintRows.map(([area,ex,out])=>(
                    <tr key={area}>
                      <td><b>{area}</b></td>
                      <td>{ex}</td>
                      <td>{out}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section" aria-labelledby="gal-title">
          <div className="container">
            <h2 id="gal-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Recent work — neat, UK-correct details</h2>
            <p className="small" style={{marginTop:6}}>No faces required — we focus on craftsmanship and compliance.</p>
            <div className="gallery" style={{marginTop:14}}>
              <img loading="lazy" src="/images/fire/gallery/1-1200x800.jpg" alt="FP-rated red cabling clipped at correct intervals" />
              <img loading="lazy" src="/images/fire/gallery/2-800x800.jpg" alt="Ceiling smoke detector on UK suspended grid, correct spacing" />
              <img loading="lazy" src="/images/fire/gallery/3-800x800.jpg" alt="Clean panel internals, labelled cores (no brand names)" />
              <img loading="lazy" src="/images/fire/gallery/4-800x800.jpg" alt="Commissioning: sound level check (labels not legible)" />
              <img loading="lazy" src="/images/fire/gallery/5-800x800.jpg" alt="As-fitted drawings and neat zoning overlay" />
              <img loading="lazy" src="/images/fire/gallery/6-800x800.jpg" alt="Manual call point with UK fire action signage" />
            </div>
            <div className="footer-cta">
              <a href="/contact">Book a survey</a>
              <a href="/quote">Get a quote</a>
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="coverage" className="section section--tight" aria-labelledby="pc-title">
          <div className="container coverage">
            <h2 id="pc-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Check coverage & survey availability</h2>
            <div className="grid-2" style={{marginTop:12,alignItems:"start"}}>
              <form onSubmit={checkPostcode} noValidate>
                <input
                  id="pc"
                  name="pc"
                  value={postcode}
                  onChange={(e)=>setPostcode(e.target.value)}
                  placeholder="E1 6AN"
                  autoComplete="postal-code"
                  aria-label="Your postcode"
                />
                <button type="submit" style={{marginTop:10}}>Check</button>
                <div className="meta" style={{marginTop:8}} aria-live="polite">{pcResult}</div>
              </form>
              <figure className="thumb" aria-label="Coverage map">
                <img loading="lazy" src="/images/fire/coverage-london-1200x675.jpg" alt="Coverage across London and nearby counties (illustrative)" />
              </figure>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="section" aria-labelledby="faq-title">
          <div className="container">
            <h2 id="faq-title" style={{fontSize:32,margin:0,fontWeight:900,color:"var(--ink)"}}>Fire alarm FAQs</h2>
            <div className="grid-2" style={{marginTop:14}}>
              {[
                ["Is a fire alarm legally required?","Most non-domestic premises need suitable detection and warning. The Responsible Person must maintain systems and keep records."],
                ["How often should it be tested?","Non-domestic: weekly user tests; competent servicing at intervals not exceeding six months. Domestic/HMO: monthly user tests; Grade A follows the weekly routine."],
                ["What categories exist?","Non-domestic: L1–L5 (life), P1–P2 (property), M (manual). Domestic/HMO: Grades A/C/D/F with LD1–LD3 coverage."],
                ["Can you work on my existing system?","Yes — takeover, survey, remedials, updated drawings; certify on completion."],
                ["Do you provide certificates?","Yes — design/installation/commissioning and maintenance certificates, plus a logbook."],
                ["Do you offer monitoring?","Yes — ARC monitoring with confirmed-alarm protocols and keyholder notification. No direct autodial; FRS attendance varies."]
              ].map(([q,a])=>(
                <div key={q} className="card">
                  <h3 style={{margin:"2px 0 6px"}}>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
            <div className="footer-cta">
              <a href="/contact">Ask a question</a>
              <a href="/quote">Get a quote</a>
            </div>
          </div>
        </section>

        {/* CONSENT (simple) */}
        {consent===null && (
          <div role="dialog" aria-live="polite" aria-label="Cookie consent"
               style={{position:"fixed",left:12,right:12,bottom:12,zIndex:60}}
               className="glass">
            <div style={{display:"flex",gap:12,alignItems:"flex-start",padding:14}}>
              <div style={{flex:1}}>
                <p style={{margin:0,fontWeight:900}}>Your privacy</p>
                <p className="meta" style={{margin:"6px 0 0 0"}}>
                  We use only necessary cookies for basic site features. No trackers by default.
                </p>
              </div>
              <button className="btn btn--ghost" onClick={()=>{ setConsent("rejected"); try{localStorage.setItem("ev_consent","rejected");}catch{} }}>Reject</button>
              <button className="btn btn--primary" onClick={()=>{ setConsent("accepted"); try{localStorage.setItem("ev_consent","accepted");}catch{} }}>Accept</button>
            </div>
          </div>
        )}

        {/* JSON-LD (minimal) */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Service",
            "name":"Fire alarm design, installation, commissioning & maintenance",
            "serviceType":"Fire detection and alarm systems",
            "areaServed":{"@type":"AdministrativeArea","name":"London"},
            "provider":{"@type":"Organization","name":"Eco Voltex"}
          })}} />
      </main>
      <Footer />
    </>
  );
}