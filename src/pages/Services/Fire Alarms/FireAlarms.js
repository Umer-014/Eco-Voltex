import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

/**
 * Eco Voltex — Fire Alarms (Flagship page, brand-first)
 * - No deals
 * - No embedded quote form
 * - Strong brand layout, premium feel, mobile-perfect
 * - Sticky subnav for quick section jumps
 * - Subtle glass cards, gradients, refined typography
 */

export default  function FireAlarms(){
  // ========= Company contacts (optional) =========
  const PHONE = "";    // "+44 20..." (leave empty to hide)
  const WHATSAPP = ""; // "4477..." digits only for wa.me

  // ========= State =========
  const [audience,setAudience]=React.useState("business"); // "home" | "business"
  const [postcode,setPostcode]=React.useState("");
  const [pcResult,setPcResult]=React.useState("");
  const [consent,setConsent]=React.useState(null);         // null | "accepted" | "rejected"

  React.useEffect(()=>{
    if(typeof window==="undefined") return;
    try{
      const c=localStorage.getItem("ev_consent");
      if(c==="accepted"||c==="rejected") setConsent(c);
    }catch{}
    try{
      const a=localStorage.getItem("ev_audience");
      if(a==="home"||a==="business") setAudience(a);
    }catch{}
  },[]);
  React.useEffect(()=>{ try{ localStorage.setItem("ev_audience",audience); }catch{} },[audience]);

  // ========= Helpers =========
  const validUKPostcode=(pc)=>{
    if(!pc) return false;
    const s=pc.trim().toUpperCase();
    const re=/^(GIR ?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPS-UW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLN-UW-Z]{2}))$/i;
    return re.test(s);
  };
  const inCoverage=(pc)=>{
    const s=(pc||"").toUpperCase().replace(/\s+/g,"");
    const allowed=["E","EC","N","NW","W","WC","SE","SW","BR","CR","DA","EN","HA","IG","KT","TW","UB","SM","RM","WD","SL","AL"];
    return allowed.some(p=>s.startsWith(p));
  };
  const checkPostcode=(e)=>{
    e.preventDefault();
    if(!validUKPostcode(postcode)){
      setPcResult("❌ Please enter a valid UK postcode (e.g., E1 6AN).");
      return;
    }
    setPcResult(inCoverage(postcode)
      ? "✅ You’re in our service area. We can usually survey within a few days."
      : "ℹ️ Likely covered — share your address and we’ll confirm today.");
  };

  // ========= Content data =========
  const specsHome=[
    ["Standard","BS 5839-6 (domestic/HMO)"],
    ["Typical grade","A, C, D1/D2 or F1/F2"],
    ["Coverage","LD2 or LD3 (risk-based)"],
    ["Use cases","Houses, flats, HMOs"]
  ];
  const specsBiz=[
    ["Standard","BS 5839-1 (non-domestic)"],
    ["Category","L1–L5 / P1–P2 / M"],
    ["Design tools","Cause & effect • Zoning • Interfaces"],
    ["Records","Certificates • Logbook • As-fitted"]
  ];
  const fitGuides=[
    {title:"Offices & Shops", rec:"BS 5839-1 L2/L3", expl:"Life safety on escape routes & higher-risk rooms; add P2 if insurer requests."},
    {title:"Schools & Care", rec:"BS 5839-1 L1/L2", expl:"Maximum/near-maximum coverage where occupants are vulnerable or sleeping."},
    {title:"Warehouses", rec:"BS 5839-1 P1/P2", expl:"Property protection throughout (P1) or defined areas (P2); add life category when occupied."},
    {title:"HMOs & Hostels", rec:"BS 5839-6 Grade A, LD2", expl:"Panel-based Grade A with sounders and detectors in risk rooms and routes."},
    {title:"Homes & Flats", rec:"BS 5839-6 LD2/LD3", expl:"Interlinked smoke/heat (and CO where required)."},
    {title:"Mixed-Use Blocks", rec:"Core: -1 / Flats: -6", expl:"Common parts to BS 5839-1; dwellings to BS 5839-6 — correct split by area."},
  ];
  const process=[
    {
      t:"Design",
      k:["Risk-led objectives (L / P / M / LD)","Detector types & spacing","Zoning & cause-and-effect outline"],
      i:(
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3h10a2 2 0 0 1 2 2v6h-2V5H7v14h5v2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.5 10a1.5 1.5 0 0 1 1.5 1.5V20a1 1 0 0 1-1 1h-5.5A1.5 1.5 0 0 1 13 19.5V15a1 1 0 0 1 1-1zM17 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"/></svg>
      )
    },
    {
      t:"Installation",
      k:["BS 7671 cabling & containment","Correct siting & labelling","As-installed drawings kept updated"],
      i:(
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m20.7 7l-4.9-4.9l-1.4 1.4l1.1 1.1l-2.2 2.2l-1.1-1.1l-1.4 1.4L13.1 8L4 17.1V20h2.9L18 8.9l1.1 1.1zM6.5 18.5H6v-.5l9.7-9.7l.5.5z"/></svg>
      )
    },
    {
      t:"Commissioning",
      k:["Device tests & sound pressure checks","Cause-and-effect verification","Certificates & zone chart issued"],
      i:(
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10v2H7zm2 4h6v2H9zm-2 4h10v2H7zm-2 4h6v2H5zM3 20h18v2H3z"/></svg>
      )
    },
    {
      t:"Maintenance",
      k:["Six-monthly service (non-domestic)","Logbook updates & user guidance","False-alarm reduction reviews"],
      i:(
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 6a6 6 0 1 1 0 12A6 6 0 0 1 12 6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 12 4m1 4h-2v5l4.2 2.5l1-1.6L13 12z"/></svg>
      )
    }
  ];

  // ========= Styles =========
  const styles=`
:root{
  /* Brand palette */
  --navy:#0B1624;      /* deep premium navy */
  --ink:#0F2338;       /* card text */
  --mint:#22E57F;      /* neon accent */
  --green:#10B981;     /* eco green */
  --cyan:#7AD7F0;      /* soft accent */
  --soft:#F5F8FC;      /* page background */
  --glass:#ffffffE6;   /* glass card bg */
  --line:#E4EDF5;      /* hairline */
  --text:#0B1320;      /* body text */
  --muted:#5B6673;     /* muted text */
  --shadow:0 18px 60px rgba(5,22,40,.18);
}
*{box-sizing:border-box}
html,body{background:var(--soft)}
[id]{scroll-margin-top:96px}
.ev{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text)}
.ev a{text-decoration:none;color:inherit}
.ev :focus-visible{outline:3px solid var(--mint);outline-offset:3px;border-radius:10px}

.ev-container{max-width:1200px;margin:0 auto;padding:0 24px}
.ev-section{padding:72px 0;border-top:1px solid var(--line)}
.ev-section--dark{background:linear-gradient(180deg,var(--navy),#0E2035);color:#EAF7F0;border-top:none}
.ev-section--dark .muted{color:#C6D6E6}

.hero{
  background:
    radial-gradient(1000px 400px at 80% -50%, rgba(34,229,127,.25), transparent 60%),
    radial-gradient(800px 300px at 0% -30%, rgba(122,215,240,.25), transparent 60%),
    linear-gradient(180deg,var(--navy),#0E2035);
  color:#EAF7F0;
  padding:96px 0 72px;
}
.hero h1{font-size:48px;line-height:1.08;margin:0 0 12px;font-weight:900;letter-spacing:-0.02em}
.hero p.lead{font-size:18px;opacity:.92;max-width:70ch}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
.hero .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;font-weight:800;border:1px solid transparent;min-height:46px}
.btn--primary{background:var(--green);color:#071A14}
.btn--ghost{background:transparent;border-color:#2E445A;color:#DDFCEE}

.toggle{display:inline-flex;border:1px solid #27415A;background:#11283F;border-radius:12px;overflow:hidden}
.toggle button{padding:8px 14px;font-weight:800;color:#CDE3F6;background:transparent;border:none;cursor:pointer}
.toggle button[aria-pressed="true"]{background:#1A3551;color:#fff}

.glass{
  background:var(--glass);backdrop-filter:saturate(1.3) blur(10px);
  border:1px solid rgba(255,255,255,.6);border-radius:20px;box-shadow:var(--shadow);
}
.card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 10px 30px rgba(10,35,60,.08);padding:18px}
.card--ghost{background:transparent;border:1px dashed var(--line)}
.card h3{margin:2px 0 6px;font-size:18px;font-weight:900;color:var(--ink)}
.kv{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.kv .box{border:1px solid var(--line);border-radius:12px;padding:12px;background:#fff}

.badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
.badge{display:flex;gap:8px;align-items:center;border:1px solid #1F3E2F;background:#10261C;color:#DFFFEF;border-radius:999px;padding:6px 10px;font-weight:800;font-size:12px}

.subnav{position:sticky;top:64px;z-index:40;background:#0E2035;border-bottom:1px solid #12314D}
.subnav .wrap{display:flex;gap:10px;overflow:auto;padding:10px 24px}
.subnav a{color:#CFE7F9;border:1px solid #254D70;border-radius:999px;padding:8px 12px;font-weight:800;white-space:nowrap}
.subnav a:hover{background:#153957;color:#fff}

.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}

.meta{font-size:12px;color:var(--muted)}
.list{padding-left:18px}
.list--disc{list-style:disc}

.gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-auto-rows:180px;gap:12px}
.gallery img{width:100%;height:100%;object-fit:cover;border-radius:14px;border:1px solid var(--line)}

.coverage form{display:grid;grid-template-columns:1fr auto;gap:10px}
.coverage input{border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:14px}
.coverage button{padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid #0D5B3A;background:var(--green);color:#062519}

.footer-cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.footer-cta a{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;border:1px solid var(--line);background:#fff;font-weight:800}

@media(max-width:1024px){
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .gallery{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .grid-3{grid-template-columns:1fr}
  .grid-4{grid-template-columns:1fr}
  .grid-2{grid-template-columns:1fr}
  .hero h1{font-size:40px}
}
@media (hover:hover) and (pointer:fine){
  .card{transition:transform .16s ease, box-shadow .16s ease}
  .card:hover{transform:translateY(-2px);box-shadow:0 18px 46px rgba(10,35,60,.12)}
}
@media (prefers-reduced-motion: reduce) {
  *{animation:none!important;transition:none!important}
}
`;

  // ========= Render =========
  return (
    <>
      <Header/>

      

      <main className="ev" role="main">
        <style>{styles}</style>

        {/* ===== HERO ===== */}
        <section className="hero" id="overview" aria-labelledby="hero-title">
          <div className="ev-container">
            <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:20,alignItems:"center"}}>
              <div>
                <h1 id="hero-title">Fire alarm design, installation, commissioning & maintenance — London</h1>
                <p className="lead">
                  Brand-level delivery for life and property protection. Neat cabling, correct siting, precise commissioning, and clear documentation — to
                  <b> BS 5839-1</b> (non-domestic) and <b>BS 5839-6</b> (domestic/HMO). Fully insured. London and nearby counties.
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

                {/* Hero CTAs — link to your existing pages */}
                <div className="cta">
                  <a className="btn btn--primary" href="/contact">Book a survey</a>
                  <a className="btn btn--ghost" href="/quote">Get a quote</a>
                  {PHONE && <a className="btn btn--ghost" href={`tel:${PHONE}`}>Call us</a>}
                  {WHATSAPP && <a className="btn btn--ghost" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>}
                </div>
              </div>

              {/* Hero spec panel */}
              <div className="glass" style={{padding:18}}>
                <div className="kv">
                  {(audience==="business"?specsBiz:specsHome).map(([k,v])=>(
                    <div key={k} className="box">
                      <p className="meta" style={{margin:0}}>{k}</p>
                      <p style={{margin:"4px 0 0 0",fontWeight:800}}>{v}</p>
                    </div>
                  ))}
                </div>
                <p className="meta" style={{marginTop:10}}>Clear drawings • Zone plans • User training</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Sticky SUBNAV ===== */}
        <nav className="subnav" aria-label="Section navigation">
          <div className="wrap ev-container">
            <a href="#basics">Basics</a>
            <a href="#sectors">Who we help</a>
            <a href="#fit">Which option?</a>
            <a href="#process">How we deliver</a>
            <a href="#standards">Standards</a>
            <a href="#gallery">Gallery</a>
            <a href="#coverage">Coverage</a>
            <a href="#faqs">FAQs</a>
          </div>
        </nav>

        {/* ===== BASICS ===== */}
        <section id="basics" className="ev-section" aria-labelledby="basics-title">
          <div className="ev-container">
            <h2 id="basics-title" style={{fontSize:30,margin:"0 0 8px",fontWeight:900,color:"#0F2338"}}>Fire alarm basics — in plain English</h2>
            <div className="grid-3" style={{marginTop:12}}>
              <div className="card">
                <h3>What it is</h3>
                <ul className="list list--disc">
                  <li>Detectors + manual call points + sounders, managed by a control panel</li>
                  <li>Warns people to evacuate; can interface with doors, lifts, AHU</li>
                  <li>Records alarms/faults in a logbook</li>
                </ul>
              </div>
              <div className="card">
                <h3>System types</h3>
                <ul className="list list--disc">
                  <li><b>Conventional:</b> devices grouped by zone</li>
                  <li><b>Addressable:</b> each device has an address for pinpoint info</li>
                  <li><b>Domestic interlinked:</b> mains/battery with wired/wireless link</li>
                </ul>
              </div>
              <div className="card">
                <h3>Standards & categories</h3>
                <ul className="list list--disc">
                  <li><b>BS 5839-1 (non-domestic):</b> L1–L5 (life), P1–P2 (property), M (manual)</li>
                  <li><b>BS 5839-6 (domestic/HMO):</b> Grades A/C/D/F with LD1–LD3 coverage</li>
                  <li>We confirm the right category/grade after survey</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHO WE HELP ===== */}
        <section id="sectors" className="ev-section" aria-labelledby="sector-title">
          <div className="ev-container">
            <h2 id="sector-title" style={{fontSize:30,margin:0,fontWeight:900,color:"#0F2338"}}>Who we help</h2>
            <div className="grid-4" style={{marginTop:12}}>
              {[
                ["Landlords & HMOs","LD2/LD3, council-ready paperwork, quick turnarounds"],
                ["Property Managers","Routine maintenance, logbooks, call-outs"],
                ["Shops & Offices","L2/L3 installs, low disruption, out-of-hours work"],
                ["Schools & Care","Life-safety focus (L1/L2), weekly test guidance"],
                ["Warehouses","Property protection P1/P2, insurer compliance"],
                ["Homeowners","Interlinked smoke/heat/CO alarms"],
                ["Hospitality & Leisure","False-alarm reduction, staff training"],
                ["Mixed-Use Blocks","Common parts systems, takeover & upgrades"]
              ].map(([t,d])=>(
                <div key={t} className="card">
                  <h3>{t}</h3>
                  <p style={{marginTop:6}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHICH OPTION FITS ===== */}
        <section id="fit" className="ev-section" aria-labelledby="fit-title">
          <div className="ev-container">
            <h2 id="fit-title" style={{fontSize:30,margin:0,fontWeight:900,color:"#0F2338"}}>Which option fits my building?</h2>
            <div className="grid-3" style={{marginTop:12}}>
              {fitGuides.map(g=>(
                <div key={g.title} className="card">
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
                    <h3 style={{margin:0}}>{g.title}</h3>
                    <span className="meta" style={{fontWeight:800,border:"1px solid var(--line)",borderRadius:999,padding:"4px 10px"}}>{g.rec}</span>
                  </div>
                  <p style={{marginTop:6}}>{g.expl}</p>
                </div>
              ))}
            </div>
            <p className="meta" style={{marginTop:8}}>Common starting points — we confirm the exact category/grade after survey.</p>
          </div>
        </section>

        {/* ===== HOW WE DELIVER ===== */}
        <section id="process" className="ev-section ev-section--dark" aria-labelledby="process-title">
          <div className="ev-container">
            <h2 id="process-title" style={{fontSize:30,margin:0,fontWeight:900}}>How we deliver — step by step</h2>
            <p className="muted" style={{marginTop:6}}>Clarity at every stage. No pushy sales — written scope with drawings before you decide.</p>
            <div className="grid-4" style={{marginTop:14}}>
              {process.map(p=>(
                <div key={p.t} className="card" style={{background:"#0F2439",borderColor:"#254D70",color:"#EAF6FF"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:36,height:36,display:"grid",placeItems:"center",borderRadius:12,background:"rgba(122,215,240,.15)",color:"#7AD7F0"}}>
                      {p.i}
                    </div>
                    <h3 style={{margin:"2px 0",color:"#fff"}}>{p.t}</h3>
                  </div>
                  <ul className="list list--disc" style={{marginTop:8}}>
                    {p.k.map(item=> <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STANDARDS STRIP ===== */}
        <section id="standards" className="ev-section" aria-labelledby="std-title" style={{paddingTop:36}}>
          <div className="ev-container">
            <div className="glass" style={{padding:"14px 16px",display:"flex",gap:10,flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}}>
              <p id="std-title" className="meta" style={{margin:0,fontWeight:800}}>Standards & records we work to</p>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {["BS 5839-1 (non-domestic)","BS 5839-6 (domestic/HMO)","BS 7671 (cabling)","Logbook & certificates","Zone charts & drawings"].map(x=>(
                  <span key={x} className="meta" style={{border:"1px solid var(--line)",borderRadius:999,padding:"6px 10px",background:"#fff",fontWeight:800}}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== GALLERY (visual trust) ===== */}
        <section id="gallery" className="ev-section" aria-labelledby="gal-title">
          <div className="ev-container">
            <h2 id="gal-title" style={{fontSize:30,margin:0,fontWeight:900,color:"#0F2338"}}>Recent work — neat, UK-correct details</h2>
            <p className="meta" style={{marginTop:6}}>No faces required — we focus on craftsmanship and compliance.</p>
            <div className="gallery" style={{marginTop:12}}>
              {/* Replace src with your Cloudinary/CDN images; keep loading="lazy" */}
              <img loading="lazy" src="https://res.cloudinary.com/demo/image/upload/w_1200,h_800,c_fill,q_auto/abstract1.jpg" alt="Tidy FP-rated cabling in white mini-trunking with fire clips" />
              <img loading="lazy" src="https://res.cloudinary.com/demo/image/upload/w_800,h_800,c_fill,q_auto/abstract2.jpg" alt="Ceiling detector on UK suspended grid, correct spacing" />
              <img loading="lazy" src="https://res.cloudinary.com/demo/image/upload/w_800,h_800,c_fill,q_auto/abstract3.jpg" alt="Clean panel internals, labelled cores (no brand names)" />
              <img loading="lazy" src="https://res.cloudinary.com/demo/image/upload/w_800,h_800,c_fill,q_auto/abstract4.jpg" alt="Commissioning: sound level meter & zone chart (non-legible)" />
              <img loading="lazy" src="https://res.cloudinary.com/demo/image/upload/w_800,h_800,c_fill,q_auto/abstract5.jpg" alt="As-fitted drawing mark-ups" />
              <img loading="lazy" src="https://res.cloudinary.com/demo/image/upload/w_800,h_800,c_fill,q_auto/abstract6.jpg" alt="Neat call point install with signage (UK style)" />
            </div>
            <div className="footer-cta">
              <a href="/contact">Book a survey</a>
              <a href="/quote">Get a quote</a>
            </div>
          </div>
        </section>

        {/* ===== COVERAGE CHECK ===== */}
        <section id="coverage" className="ev-section" aria-labelledby="pc-title">
          <div className="ev-container coverage">
            <h2 id="pc-title" style={{fontSize:30,margin:0,fontWeight:900,color:"#0F2338"}}>Check coverage & survey availability</h2>
            <form onSubmit={checkPostcode} noValidate style={{marginTop:12}}>
              <input
                id="pc"
                name="pc"
                value={postcode}
                onChange={(e)=>setPostcode(e.target.value)}
                placeholder="E1 6AN"
                autoComplete="postal-code"
                aria-label="Your postcode"
              />
              <button type="submit">Check</button>
            </form>
            <div className="meta" style={{marginTop:8}} aria-live="polite">{pcResult}</div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section id="faqs" className="ev-section" aria-labelledby="faq-title">
          <div className="ev-container">
            <h2 id="faq-title" style={{fontSize:30,margin:0,fontWeight:900,color:"#0F2338"}}>Fire alarm FAQs</h2>
            <div className="grid-2" style={{marginTop:12}}>
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

        {/* ===== Consent banner (privacy-simple) ===== */}
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

        {/* ===== Minimal JSON-LD (FAQ + Service) ===== */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              { "@type":"Question","name":"Is a fire alarm legally required?","acceptedAnswer":{"@type":"Answer","text":"Most non-domestic premises need suitable detection and warning. The Responsible Person must maintain systems and keep records."}},
              { "@type":"Question","name":"How often should it be tested?","acceptedAnswer":{"@type":"Answer","text":"Non-domestic: weekly user tests and competent servicing at intervals not exceeding six months. Domestic/HMO: monthly user tests; Grade A follows the weekly routine."}}
            ]
          })}} />
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

      <Footer/>
    </>
  );
}
