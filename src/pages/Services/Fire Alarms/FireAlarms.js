import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function FireAlarms(){
  // ========= Company contacts (edit these if you have official numbers) =========
  const PHONE = "";          // e.g. "+44 20 7123 4567"  (leave empty to hide Call buttons)
  const WHATSAPP = "";       // e.g. "447712345678" (digits only, no +, used in wa.me link)

  // ========= State =========
  const [audience,setAudience]=React.useState("business"); // "home" | "business"
  const [tab,setTab]=React.useState("design"); // design | install | commission | maintain
  const [isMobile,setIsMobile]=React.useState(false);
  const [reduceMotion,setReduceMotion]=React.useState(false);


  const [errorSummary,setErrorSummary]=React.useState([]);
  const [postcode,setPostcode]=React.useState("");
  const [pcResult,setPcResult]=React.useState("");

  const [wizard,setWizard]=React.useState({bldg:"office",sleep:"no",monitor:"no"});
  const [wizardResult,setWizardResult]=React.useState("");

  const [countdown,setCountdown]=React.useState(""); // month-end ribbon
  const [consent,setConsent]=React.useState(null); // null | "accepted" | "rejected"

  const [utm,setUtm]=React.useState({});
  const [dealHint,setDealHint]=React.useState(null);

  const tabOrder=["design","install","commission","maintain"];
  const tabRefs=React.useRef({});

  React.useEffect(()=>{
    if(typeof window!=="undefined"){
      // Media queries
      const m=window.matchMedia("(max-width:767px)");
      setIsMobile(m.matches);
      const on=()=>setIsMobile(m.matches);
      m.addEventListener?.("change",on);

      const rm=window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(!!rm.matches);
      const onRM=()=>setReduceMotion(!!rm.matches);
      rm.addEventListener?.("change",onRM);

      // Month-end countdown
      const now=new Date();
      const endOfMonth=new Date(now.getFullYear(), now.getMonth()+1, 0, 23, 59, 59);
      const update=()=>{
        const diff=endOfMonth.getTime()-Date.now();
        if(diff<=0){ setCountdown("Ends today"); return; }
        const d=Math.floor(diff/(1000*60*60*24));
        const h=Math.floor((diff/(1000*60*60))%24);
        setCountdown(`${d}d ${h}h left`);
      };
      update();
      const t=setInterval(update, 60*60*1000); // hourly tick

      // Consent restore
      try{
        const c=localStorage.getItem("ev_consent");
        if(c==="accepted"||c==="rejected") setConsent(c);
      }catch{}

      // URL params: utm_* + deal (from search OR hash)
      const sp=new URLSearchParams(window.location.search);
      const u={};
      ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(k=>{
        if(sp.get(k)) u[k]=sp.get(k);
      });
      setUtm(u);
      let deal=sp.get("deal");
      // Also support #quote?deal=... style anchors
      const hash=window.location.hash||"";
      if(!deal && hash.includes("?")){
        const hp=new URLSearchParams(hash.split("?")[1]);
        if(hp.get("deal")) deal=hp.get("deal");
      }
      if(deal) setDealHint(deal);

      return ()=>{ m.removeEventListener?.("change",on); rm.removeEventListener?.("change",onRM); clearInterval(t); };
    }
  },[]);

  // ========= Helpers =========
  const validUKPostcode=(pc)=>{
    if(!pc) return false;
    const s=pc.trim().toUpperCase();
    const re=/^(GIR ?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPS-UW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLN-UW-Z]{2}))$/i;
    return re.test(s);
  };

  const inCoverage=(pc)=>{
    if(!pc) return false;
    const s=pc.toUpperCase().replace(/\s+/g,"");
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
      ? "You're within our regular service area. We can usually survey within a few days."
      : "You're likely covered. Share your address and we’ll confirm today and arrange a survey.");
  };

  // Mini wizard
  const runWizard=()=>{
    const {bldg,sleep,monitor}=wizard;
    if(bldg==="hmo"||bldg==="care"||sleep==="yes"){
      setWizardResult("Likely L1/L2 (sleeping risk) or LD2 for HMOs. ARC monitoring may be recommended.");
      return;
    }
    if(bldg==="warehouse"){
      setWizardResult(monitor==="yes"?"Likely P1 with ARC monitoring.":"Likely P2 or L3/P2 depending on objectives.");
      return;
    }
    if(bldg==="office"||bldg==="shop"||bldg==="school"){
      setWizardResult("Typically L2 or L3; add P2 if required by your insurer.");
      return;
    }
    setWizardResult("We’ll confirm after survey — book a visit to set the correct category/grade.");
  };

  // Tabs: ARIA + keyboard
  const onTabKeyDown=(e)=>{
    const idx=tabOrder.indexOf(tab);
    let nextIdx=idx;
    switch(e.key){
      case "ArrowRight": nextIdx=(idx+1)%tabOrder.length; break;
      case "ArrowLeft": nextIdx=(idx-1+tabOrder.length)%tabOrder.length; break;
      case "Home": nextIdx=0; break;
      case "End": nextIdx=tabOrder.length-1; break;
      default: return;
    }
    e.preventDefault();
    const next=tabOrder[nextIdx];
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  // Form validation
  const validateForm=(data)=>{
    const errs={};
    if(!data.name?.trim()) errs.name="Please enter your name.";
    if(!data.email?.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email="Please enter a valid email.";
    if(data.phone && !/^[0-9+()\-.\s]{7,}$/.test(data.phone)) errs.phone="Please enter a valid phone number.";
    return errs;
  };

  // ========= Deals Data =========
  const homeDeals=[
    {
      id:"ld2-starter",
      tag:"Popular",
      title:"LD2 Starter Pack",
      price:"from £249",
      was:null,
      bullets:[
        "Risk check & device plan",
        "Interlinked smoke + heat (typical 2–3 devices)*",
        "Supply, install & test",
        "Landlord docs included"
      ],
      note:"*Final device count set after survey; price adjusts to dwelling size.",
    },
    {
      id:"takeover-home",
      tag:"Switch & Save",
      title:"Existing System Takeover",
      price:"from £119",
      was:"£149",
      bullets:[
        "Compliance review & test",
        "Logbook issued/updated",
        "First service visit included"
      ],
      note:"For domestic Grade A/D systems in good condition.",
    },
    {
      id:"hmo-bundle",
      tag:"HMO Ready",
      title:"HMO Compliance Bundle",
      price:"Custom",
      was:null,
      bullets:[
        "LD2 design (rooms/routes) • Grade A where required",
        "Panel/alarms, labels, zone chart",
        "Council-ready paperwork"
      ],
      note:"Scope varies by layout and local authority requirements.",
    }
  ];

  const bizDeals=[
    {
      id:"office-l3",
      tag:"Best Value",
      title:"Small Office L3 Starter",
      price:"from £899",
      was:null,
      bullets:[
        "Category L3 design & drawings",
        "Conventional panel + devices*",
        "Commissioning & certificates"
      ],
      note:"*Exact device count by survey; addressable on request.",
    },
    {
      id:"takeover-pro",
      tag:"Switch & Save",
      title:"System Takeover + First Service",
      price:"£199 fixed",
      was:"£249",
      bullets:[
        "Asset list & condition report",
        "Zone chart tidy-up",
        "First six-monthly service included"
      ],
      note:"For compliant, serviceable systems within Greater London.",
    },
    {
      id:"p1-monitor",
      tag:"Risk Focus",
      title:"P1 + ARC Monitoring Bundle",
      price:"Custom",
      was:null,
      bullets:[
        "Property protection (P1) design",
        "ARC setup with confirmed-alarm protocol",
        "False-alarm reduction review"
      ],
      note:"Includes ARC paperwork and keyholder configuration.",
    }
  ];

  const deals = audience==="home" ? homeDeals : bizDeals;

  // ========= Service plan cards =========
  const maintPlans=[
    {name:"Bronze",price:"from £149/yr",desc:"Annual service plan",bullets:[
      "1 scheduled maintenance visit per year",
      "Logbook update & maintenance certificate",
      "Engineer support via phone/email"
    ],sla:"Standard response next business day"},
    {name:"Silver",price:"from £279/yr",desc:"Biannual service plan",bullets:[
      "2 scheduled maintenance visits per year",
      "Weekly test guidance (non-domestic)",
      "Priority engineer attendance"
    ],sla:"Target response within 8 business hours"},
    {name:"Gold",price:"Custom",desc:"Enhanced service plan",bullets:[
      "Quarterly maintenance schedule",
      "Optional ARC monitoring",
      "False-alarm reduction review"
    ],sla:"Target emergency response within 4 hours (London)"},
  ];

  const homeSpecs=[
    {k:"Standard",v:"BS 5839-6:2019+A1:2020 (domestic)"},
    {k:"Typical grade",v:"Grades A, C, D1/D2 or F1/F2"},
    {k:"Coverage",v:"LD2 or LD3 (risk-based)"},
    {k:"Use cases",v:"Houses, flats, HMOs"},
  ];
  const bizSpecs=[
    {k:"Standard",v:"BS 5839-1:2025 (non-domestic)"},
    {k:"Category",v:"L1–L5 / P1–P2 / M"},
    {k:"Cause-and-effect",v:"Zoning, phased evacuation, interfaces"},
    {k:"Records",v:"Logbook, certificates, as-fitted"},
  ];

  // ARIA ids
  const tabIds={design:"tab-design",install:"tab-install",commission:"tab-commission",maintain:"tab-maintain"};
  const panelIds={design:"panel-design",install:"panel-install",commission:"panel-commission",maintain:"panel-maintain"};

  // ========= JSON-LD =========
  const offerItems=[...(homeDeals.map(d=>({aud:"home",...d}))),...(bizDeals.map(d=>({aud:"business",...d})))];
  const offerCatalog = {
    "@type":"OfferCatalog",
    "name":"Eco Voltex Fire Alarm Deals",
    "itemListElement": offerItems.map(d=>({
      "@type":"Offer",
      "name": d.title,
      "category": d.aud==="home"?"Residential":"Non-domestic",
      "priceCurrency":"GBP",
      "price": d.price.toLowerCase().includes("custom") ? undefined : (d.price.replace(/[^\d.]/g,"")||undefined),
      "url": `https://www.ecovoltex.co.uk/#deals`,
      "availability":"https://schema.org/InStock"
    }))
  };


  // Consent handlers (placeholder; no trackers are loaded here)
  const acceptCookies=()=>{ setConsent("accepted"); try{localStorage.setItem("ev_consent","accepted");}catch{} };
  const rejectCookies=()=>{ setConsent("rejected"); try{localStorage.setItem("ev_consent","rejected");}catch{} };

  // Error summary helper
  const buildErrorSummary=(errs)=>{
    const list=[];
    if(errs.name) list.push({field:"name",text:errs.name});
    if(errs.email) list.push({field:"email",text:errs.email});
    if(errs.phone) list.push({field:"phone",text:errs.phone});
    setErrorSummary(list);
  };

  // ========= Render =========
  return (
    <>
    <Header/>
    <main className="ev ev--page" role="main">
      {/* ===== Inline CSS ===== */}
      <style>{`
:root{
  --p900:#0A1B2B;--p800:#0F2C44;--p700:#154363;
  --acc:#16A34A;--accD:#128838;--neon:#22E57F;
  --soft:#F3F7FB;--border:#D6E8DD;--card:#FFFFFF;
  --text:#000000; /* force all text to black */
  --muted:#444444;
}
*{box-sizing:border-box}
[id]{scroll-margin-top:84px}
.ev{
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  color:var(--text);
  background:#fff;
}
.ev--page{min-height:100vh}
.ev a{text-decoration:none;color:inherit}
.ev :focus-visible{outline:3px solid var(--neon);outline-offset:2px;border-radius:6px}
.ev-center{text-align:center}
.ev-meta{font-size:12px;color:var(--muted)!important}
.ev-strong{font-weight:800}
.ev-container{max-width:1152px;margin:0 auto;padding:0 24px}
.ev-section{padding:56px 0;border-top:1px solid #eef2f7}
.ev-soft{background:var(--soft);border-top:1px solid var(--border)}
.ev-grid{display:grid}
.ev-grid-12{grid-template-columns:repeat(12,1fr)}
.ev-grid-4{grid-template-columns:repeat(4,1fr)}
.ev-grid-3{grid-template-columns:repeat(3,1fr)}
.ev-grid-2{grid-template-columns:repeat(2,1fr)}
.ev-col-7{grid-column:span 7}
.ev-col-5{grid-column:span 5}
.ev-gap-12{gap:12px}
.ev-gap-16{gap:16px}
.ev-row{display:flex;gap:10px;flex-wrap:wrap}
.ev-topnav{position:sticky;top:0;z-index:20;background:#ffffffcc;backdrop-filter:saturate(180%) blur(6px);border-bottom:1px solid var(--border)}
.ev-topnav .nav{display:flex;gap:12px;align-items:center;justify-content:center;padding:10px;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch}
.ev-topnav a{color:var(--p800);font-weight:800;border:1px solid var(--border);padding:8px 12px;border-radius:999px;flex:0 0 auto}
.ev-topnav a:hover{background:var(--soft)}

/* ===== HERO section reset ===== */
.ev-hero{
  position:relative;
  overflow:hidden;
  background:#fff !important; /* remove gradient */
  color:#000 !important;       /* force text to black */
}
.ev-hero__bg{display:none !important;} /* remove video background */

/* Headings all black */
.ev-h1{font-size:40px;line-height:1.15;font-weight:900;color:#000 !important}
.ev-h2{font-size:28px;font-weight:800;color:#000 !important}
.ev-h3{font-size:18px;font-weight:800;color:#000 !important}

.ev-neon{color:#000} /* remove neon green inside headings */

/* Pills, ribbons, tags still keep brand styling */
.ev-pill{display:inline-flex;gap:8px;align-items:center;background:#dcfce7;color:#166534;padding:6px 10px;border-radius:999px;font-weight:800;font-size:13px}
.ev-ribbon{display:flex;align-items:center;justify-content:center;gap:10px;background:#072538;color:#d9ffe9;padding:8px 12px;border-bottom:1px solid #0b3a5a}
.ev-card{background:var(--card);border:1px solid var(--border);border-radius:16px;box-shadow:0 8px 24px rgba(10,65,106,.08);padding:16px}
.ev-card--glass{background:#fff;border-color:#ddd;color:#000}
.ev-badge{border:1px solid #dbe9ef;background:#f8fbff;border-radius:999px;padding:4px 8px;color:#36506b;font-weight:800;font-size:12px}
.ev-tag{display:inline-flex;align-items:center;gap:6px;background:#e7f8ef;border:1px solid #cdebd9;color:#0b5c2b;border-radius:999px;padding:4px 10px;font-weight:800;font-size:12px}

/* Buttons */
.ev-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid transparent;cursor:pointer;min-height:44px}
.ev-btnPrimary{background:var(--acc);color:#fff}
.ev-btnPrimary:hover{background:var(--accD)}
.ev-btnOutline{background:#fff;border-color:var(--border);color:#000}
.ev-btnGhost{background:transparent;border:1px solid #000;color:#000}

/* Lists and text black */
.ev-list{padding-left:18px}
.ev-list--disc{list-style:disc}
.ev-list li{color:#000}
.ev-form{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.ev-form input,.ev-form textarea,.ev-input,select{border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:14px;width:100%}
.ev-form .ev-error{color:#b42318;font-size:12px;margin-top:6px}
.ev-form [aria-invalid="true"]{border-color:#b42318;box-shadow:0 0 0 3px rgba(180,35,24,0.08)}
.ev-form button[type="submit"]{grid-column:1/-1}
.ev-errorSummary{border:1px solid #f3b4b4;background:#fff5f5;padding:12px;border-radius:12px}
.ev-deals{background:linear-gradient(0deg, #f7fbff, #ffffff)}
.ev-dealCard{position:relative}
.ev-dealPrice{font-size:24px;font-weight:900;margin:6px 0}
.ev-dealWas{font-size:12px;text-decoration:line-through;color:#6b788a}
.ev-cta{background:#f7f7f7;color:#000;padding:48px 0}
.ev-testis .t{font-style:italic}
.ev-mobile-stick{position:fixed;left:0;right:0;bottom:0;z-index:50;display:none;gap:8px;background:#ffffffee;border-top:1px solid var(--border);padding:10px calc(10px + env(safe-area-inset-right)) calc(10px + env(safe-area-inset-bottom)) calc(10px + env(safe-area-inset-left))}
.ev-stick-btn{flex:1;display:flex;justify-content:center;align-items:center;border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-weight:800;color:#000;text-decoration:none;min-height:44px}
.ev-stick-btn--prime{background:var(--acc);color:#fff;border-color:var(--acc)}
.ev-skip{position:absolute;left:-999px;top:auto}
.ev-skip:focus{left:12px;top:12px;background:#fff;color:#000;padding:8px 12px;border-radius:8px;z-index:50}
.ev-footer{border-top:1px solid var(--border);background:#fafcfe}
.ev-footer .row{display:flex;gap:12px;flex-wrap:wrap;justify-content:space-between;align-items:center}
.ev-backTop{position:fixed;right:16px;bottom:80px;background:#0F2C44;color:#fff;border:1px solid #0b2136;border-radius:999px;padding:10px 12px;box-shadow:0 6px 18px rgba(0,0,0,.18)}
.ev-consent{position:fixed;left:12px;right:12px;bottom:12px;background:#ffffff;border:1px solid var(--border);border-radius:14px;box-shadow:0 10px 24px rgba(10,65,106,.12);padding:14px;display:flex;gap:10px;align-items:flex-start;z-index:60}
.ev-mt-8{margin-top:8px}

/* Responsive */
@media(max-width:1023px){
  .ev-grid-12{grid-template-columns:1fr}
  .ev-col-7,.ev-col-5{grid-column:1/-1}
  .ev-grid-4{grid-template-columns:1fr 1fr}
  .ev-grid-3{grid-template-columns:1fr 1fr}
  .ev-grid-2{grid-template-columns:1fr}
  .ev-h1{font-size:34px}
  .ev-h2{font-size:26px}
  .ev-form{grid-template-columns:1fr}
}
@media(max-width:768px){
  .ev-grid-4{grid-template-columns:1fr}
  .ev-grid-3{grid-template-columns:1fr}
  .ev-mobile-stick{display:flex}
}
      `}</style>

      

      {/* ===== HERO ===== */}
      <section id="overview" className="ev-section ev-hero" aria-labelledby="hero-title">
       
        <div className="ev-container ev-grid ev-grid-12" style={{alignItems:"center"}}>
          <div className="ev-col-7">
            
            <h1 id="hero-title" className="ev-h1 ev-h1--on-dark">Compliant fire alarm systems — <span className="ev-neon">designed, installed and cared for</span> by Eco Voltex</h1>
            <p style={{color:'#eaf3ff',opacity:.95,marginTop:12,maxWidth:'65ch'}}>BS 5839 design, neat installation, full commissioning and clear maintenance. Fewer false alarms. Simple training. Clean paperwork.</p>
            <div className="ev-row" aria-label="Choose audience">
              <button className={`ev-btn ${audience==='home'?'ev-btnPrimary':'ev-btnOutline'}`} onClick={()=>setAudience('home')} aria-pressed={audience==='home'}>Home</button>
              <button className={`ev-btn ${audience==='business'?'ev-btnPrimary':'ev-btnOutline'}`} onClick={()=>setAudience('business')} aria-pressed={audience==='business'}>Business</button>
            </div>
            <ul className="ev-list ev-list--disc" style={{color:'#fff',marginTop:10}}>
              {(audience==='home'
                ?[
                  "BS 5839-6 domestic systems (Grades A, C, D1/D2, F1/F2; LD2/LD3 by risk)",
                  "Linked heat/smoke/CO, hush buttons, escape-route cover",
                  "Landlord/HMO packages and certificates"
                ]
                :[
                  "BS 5839-1:2025 categories L1–L5 / P1–P2 / M",
                  "Cause-and-effect planning & zone charts",
                  "Servicing at intervals not exceeding six months"
                ]
              ).map(x=> <li key={x}>{x}</li>)}
            </ul>
            <div className="ev-row" style={{marginTop:16}}>
              <a href="#deals" className="ev-btn ev-btnPrimary">View deals</a>
              <a href="/contact" className="ev-btn ev-btnGhost">Book a survey</a>
            </div>
            <p className="ev-meta" style={{color:'black',marginTop:12}}>Neat workmanship • Clear documentation • Friendly, competent engineers</p>
          </div>
          <div className="ev-col-5">
            <div className="ev-card ev-card--glass" aria-label={audience==='business'?"Business specs":"Home specs"}>
              <div className="ev-grid ev-grid-2 ev-gap-12">
                {(audience==='business'?bizSpecs:homeSpecs).map(({k,v})=> (
                  <div key={k} style={{background:'#ffffff10',border:'1px solid #ffffff26',borderRadius:12,padding:12}}>
                    <p style={{fontWeight:800,color:'black'}}>{k}</p>
                    <p style={{color:'black'}}>{v}</p>
                  </div>
                ))}
              </div>
              <p className="ev-meta" style={{marginTop:12,color:'black'}}>Clear drawings • Zone plans • User training</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTORS ===== */}
      <section id="sectors" className="ev-section" aria-labelledby="sector-title">
        <div className="ev-container">
          <h2 id="sector-title" className="ev-h2">Who we help</h2>
          <div className="ev-grid ev-grid-4 ev-gap-16" style={{marginTop:16}}>
            {[
              ["Landlords & HMOs","LD2/LD3, council-ready paperwork, quick turnarounds"],
              ["Property Managers","Routine maintenance, logbooks, call-outs"],
              ["Shops & Offices","L2/L3 installs, low disruption, out-of-hours work"],
              ["Schools & Care","Life-safety focus (L1/L2), weekly test guidance"],
              ["Warehouses","Property protection P1/P2, insurer compliance"],
              ["Homeowners","Interlinked smoke/heat/CO alarms"],
              ["Hospitality & Leisure","False-alarm reduction, staff training"],
              ["Mixed-Use Blocks","Common parts systems, takeover & upgrades"]
            ].map(([t,d])=> (
              <div key={t} className="ev-card"><p className="ev-h3">{t}</p><p style={{marginTop:6}}>{d}</p></div>
            ))}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="#deals" aria-label="See current deals after sectors">See current deals</a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SNAPSHOT ===== */}
      <section id="services" className="ev-section ev-soft" aria-labelledby="svc-title">
        <div className="ev-container">
          <h2 id="svc-title" className="ev-h2">All four modules covered</h2>
          <div className="ev-grid ev-grid-4 ev-gap-16" style={{marginTop:16}}>
            {[['Design','Risk-led spec, category selection, drawings & cause-and-effect'],['Installation','Neat cabling, device siting, labelling & as-installed docs'],['Commissioning','Verification, sound levels, function tests, certificates'],['Maintenance','Six-monthly service (max), parts, logbook, false-alarm review']].map(([t,d])=> (
              <div key={t} className="ev-card"><p className="ev-h3">{t}</p><p style={{marginTop:6}}>{d}</p></div>
            ))}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="#deals" aria-label="See current deals after services">See current deals</a>
          </div>
        </div>
      </section>

      {/* ===== DEALS ===== */}
      <section id="deals" className="ev-section ev-deals" aria-labelledby="deals-title">
        <div className="ev-container">
          <h2 id="deals-title" className="ev-h2">Limited-time deals</h2>
          <p className="ev-meta">Transparent “from” pricing. Final spec and price confirmed after survey. London & nearby counties.</p>
          <div className="ev-grid ev-grid-3 ev-gap-16" style={{marginTop:16}}>
            {deals.map(d=>(
              <div key={d.id} className="ev-card ev-dealCard">
                {d.tag && <span className="ev-tag" aria-label="deal tag">{d.tag}</span>}
                <p className="ev-h3" style={{marginTop:8}}>{d.title}</p>
                <div>
                  <p className="ev-dealPrice">{d.price} {d.was && <span className="ev-dealWas">{d.was}</span>}</p>
                </div>
                <ul className="ev-list ev-list--disc" style={{marginTop:6}}>
                  {d.bullets.map(b=><li key={b}>{b}</li>)}
                </ul>
                <p className="ev-meta ev-mt-8">{d.note}</p>
                <div className="ev-row" style={{marginTop:10}}>
                  <a className="ev-btn ev-btnPrimary" href={`#quote?deal=${encodeURIComponent(d.id)}`}>Claim this deal</a>
                  <a className="ev-btn ev-btnOutline" href="#quote">Ask a question</a>
                </div>
              </div>
            ))}
          </div>
          <p className="ev-meta ev-mt-8">No direct autodial to the Fire & Rescue Service. ARC attendance is subject to local FRS policy and confirmed-alarm protocols.</p>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after deals">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== STANDARDS ===== */}
      <section id="standards" className="ev-section" aria-labelledby="std-title">
        <div className="ev-container">
          <h2 id="std-title" className="ev-h2">Which standard applies?</h2>
          <div className="ev-grid ev-grid-2 ev-gap-16" style={{marginTop:16}}>
            <div className="ev-card" id="install">
              <p className="ev-h3">Non-domestic — BS 5839-1:2025</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li><b>Life protection (L):</b> L1 (all areas) to L5 (specific objective)</li>
                <li><b>Property protection (P):</b> P1 (all areas) or P2 (defined parts)</li>
                <li><b>Manual (M):</b> call points only (often combined with L/P)</li>
              </ul>
            </div>
            <div className="ev-card">
              <p className="ev-h3">Domestic/HMO — BS 5839-6:2019+A1:2020</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li><b>Grades:</b> A, C, D1/D2, F1/F2</li>
                <li><b>Coverage:</b> LD1/LD2/LD3 (risk-based)</li>
                <li>HMOs often require Grade A with LD2 coverage.</li>
              </ul>
            </div>
          </div>
          <p className="ev-meta" style={{marginTop:8}}>We confirm the correct category/grade after survey. General info only.</p>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after standards">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== WIZARD ===== */}
      <section className="ev-section ev-soft" aria-labelledby="wiz-title">
        <div className="ev-container">
          <h2 id="wiz-title" className="ev-h2">Not sure which category you need?</h2>
          <div className="ev-card">
            <div className="ev-grid ev-grid-3 ev-gap-16">
              <div>
                <label className="ev-meta" htmlFor="w-bldg">Building type</label>
                <select id="w-bldg" className="ev-input" value={wizard.bldg} onChange={(e)=>setWizard(w=>({...w,bldg:e.target.value}))}>
                  <option value="office">Office</option>
                  <option value="shop">Shop/Restaurant</option>
                  <option value="school">School</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="hmo">HMO / Hostel</option>
                  <option value="care">Care / Healthcare</option>
                  <option value="house">House / Flat</option>
                </select>
              </div>
              <div>
                <label className="ev-meta" htmlFor="w-sleep">Sleeping risk?</label>
                <select id="w-sleep" className="ev-input" value={wizard.sleep} onChange={(e)=>setWizard(w=>({...w,sleep:e.target.value}))}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="ev-meta" htmlFor="w-monitor">24/7 monitoring required?</label>
                <select id="w-monitor" className="ev-input" value={wizard.monitor} onChange={(e)=>setWizard(w=>({...w,monitor:e.target.value}))}>
                  <option value="no">No / Not sure</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>
            <div className="ev-row" style={{marginTop:12}}>
              <button className="ev-btn ev-btnPrimary" onClick={runWizard}>Suggest a category</button>
              <a className="ev-btn ev-btnOutline" href="/contact">Book a survey to confirm</a>
            </div>
            <div className="ev-meta ev-mt-8" aria-live="polite">{wizardResult}</div>
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after wizard">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== TABS: DEEP DIVE ===== */}
      <section id="design" className="ev-section" aria-labelledby="deep-title">
        <div className="ev-container">
          <div className="ev-row" role="tablist" aria-label="Fire services tabs" onKeyDown={onTabKeyDown}>
            {tabOrder.map(key=> (
              <button
                key={key}
                id={tabIds[key]}
                ref={el=>{tabRefs.current[key]=el}}
                className={`ev-btn ${tab===key?'ev-btnPrimary':'ev-btnOutline'}`}
                onClick={()=>setTab(key)}
                role="tab"
                aria-selected={tab===key}
                aria-controls={panelIds[key]}
                tabIndex={tab===key?0:-1}
              >
                {key.charAt(0).toUpperCase()+key.slice(1)}
              </button>
            ))}
          </div>

          {/* DESIGN */}
          <div id={panelIds.design} role="tabpanel" aria-labelledby={tabIds.design} hidden={tab!=="design"} className="ev-grid ev-grid-2 ev-gap-16" style={{marginTop:16}}>
            <div className="ev-card"><p className="ev-h3">Design</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Agree objectives (L / P / M) and evacuation strategy</li>
                <li>Detector selection (optical/heat/CO, beam, ASD) & spacing</li>
                <li>Cause-and-effect matrix; interfaces (lifts, doors, AHU)</li>
                <li>Drawings: layout, zoning, sound levels, power calcs</li>
              </ul>
            </div>
            <div className="ev-card"><p className="ev-h3">Outcomes</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Specification & bill of materials</li>
                <li>Category/grade justification</li>
                <li>Programme & method statements</li>
              </ul>
            </div>
          </div>

          {/* INSTALL */}
          <div id={panelIds.install} role="tabpanel" aria-labelledby={tabIds.install} hidden={tab!=="install"} className="ev-grid ev-grid-2 ev-gap-16" style={{marginTop:16}}>
            <div className="ev-card"><p className="ev-h3">Installation</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>BS 7671 compliant wiring, labelled & tested</li>
                <li>Neat containment; penetrations sealed to fire-stopping standards</li>
                <li>Device siting per manufacturer & standard; address labelling</li>
                <li>As-installed drawings kept up to date</li>
              </ul>
            </div>
            <div className="ev-card"><p className="ev-h3">Handover prep</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Panel config backed up; loop maps & addresses recorded</li>
                <li>Signage and user controls in place (hush, test keys)</li>
              </ul>
            </div>
          </div>

          {/* COMMISSION */}
          <div id={panelIds.commission} role="tabpanel" aria-labelledby={tabIds.commission} hidden={tab!=="commission"} className="ev-grid ev-grid-2 ev-gap-16" style={{marginTop:16}}>
            <div className="ev-card"><p className="ev-h3">Commissioning</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Device tests, SPL checks, alarm transmission checks</li>
                <li>Verify cause-and-effect, interfaces and fail-safes</li>
                <li>Certificates: design, installation & commissioning, zone chart</li>
              </ul>
            </div>
            <div className="ev-card"><p className="ev-h3">Training & docs</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>User training: routine test & fault reporting</li>
                <li>Logbook issue and quick-reference guide</li>
              </ul>
            </div>
          </div>

          {/* MAINTAIN */}
          <div id={panelIds.maintain} role="tabpanel" aria-labelledby={tabIds.maintain} hidden={tab!=="maintain"} className="ev-grid ev-grid-2 ev-gap-16" style={{marginTop:16}}>
            <div className="ev-card"><p className="ev-h3">Planned maintenance</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Periodic inspection & servicing at intervals not exceeding six months (non-domestic; site-dependent)</li>
                <li>Detector cleaning/replacement schedule & battery checks</li>
                <li>False-alarm root-cause review and adjustments</li>
              </ul>
              <p className="ev-meta ev-mt-8">
                <b>Routine user tests:</b> <br/>
                <span>• <b>Non-domestic (BS 5839-1:2025):</b> weekly test in rotation.</span><br/>
                <span>• <b>Domestic/HMO (BS 5839-6):</b> monthly; Grade A follows the weekly routine.</span>
              </p>
            </div>
            <div className="ev-card"><p className="ev-h3">Service plans</p>
              <div className="ev-grid ev-grid-3 ev-gap-16" style={{marginTop:8}}>
                {maintPlans.map(p=> (
                  <div key={p.name} className="ev-card" style={{padding:14}}>
                    <div className="ev-row" style={{justifyContent:'space-between'}}>
                      <p className="ev-strong">{p.name}</p>
                      <span className="ev-badge">{p.desc}</span>
                    </div>
                    <p style={{fontSize:22,fontWeight:800,margin:'8px 0'}}>{p.price}</p>
                    <ul className="ev-list" style={{marginTop:6}}>{p.bullets.map(b=> <li key={b}>{b}</li>)}</ul>
                    <p className="ev-meta ev-mt-8"><b>SLA:</b> {p.sla}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after deep dive">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== CAUSE & EFFECT ===== */}
      <section id="cause" className="ev-section ev-soft" aria-labelledby="cause-title">
        <div className="ev-container">
          <h2 id="cause-title" className="ev-h2">Cause-and-effect and integration</h2>
          <div className="ev-grid ev-grid-3 ev-gap-16" style={{marginTop:16}}>
            {[
              ["Phased evacuation","Sequence alarms to avoid congestion; staged tones/voice"],
              ["Interfaces","Control doors, lifts, gas shut-off, AHUs, sprinklers"],
              ["Monitoring","ARC connection with confirmed-alarm protocols and keyholder notification. No direct autodial to the Fire & Rescue Service; attendance varies by local FRS policy."]
            ].map(([t,d])=> (
              <div key={t} className="ev-card"><p className="ev-h3">{t}</p><p style={{marginTop:6}}>{d}</p></div>
            ))}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after cause and effect">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== MONITORING ===== */}
      <section id="monitoring" className="ev-section" aria-labelledby="mon-title">
        <div className="ev-container">
          <h2 id="mon-title" className="ev-h2">Remote monitoring & alerts</h2>
          <p className="ev-meta">Optional services for higher-risk premises and insurer-led requirements.</p>
          <div className="ev-grid ev-grid-3 ev-gap-16" style={{marginTop:16}}>
            {[
              ["ARC connection","24/7 Alarm Receiving Centre with confirmed-alarm protocols and keyholder notification. No direct autodial to the Fire & Rescue Service; attendance policies vary by local FRS."],
              ["Panel health & faults","Remote status notifications and performance insights (where equipment supports it)."],
              ["Reports","Test reminders, attendance logs, certificate archive."]
            ].map(([t,d])=> <div key={t} className="ev-card"><p className="ev-h3">{t}</p><p style={{marginTop:6}}>{d}</p></div>)}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after monitoring">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTS ===== */}
      <section id="docs" className="ev-section ev-soft" aria-labelledby="doc-title">
        <div className="ev-container">
          <h2 id="doc-title" className="ev-h2">Documentation & samples</h2>
          <div className="ev-grid ev-grid-3 ev-gap-16" style={{marginTop:16}}>
            {[
              ["Installation/Commissioning certificate (sample PDF)","Download"],
              ["Maintenance checklist (sample PDF)","Download"],
              ["Fire alarm logbook template (CSV/PDF)","Download"],
              ["RAMS (redacted)","View"],
              ["Competence & training matrix (redacted)","View"],
              ["Cause-and-effect matrix (sample)","View"]
            ].map(([t,cta])=> (
              <div key={t} className="ev-card">
                <p className="ev-h3">{t}</p>
                <div className="ev-row ev-mt-8"><button className="ev-btn ev-btnOutline" type="button">{cta}</button></div>
              </div>
            ))}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after docs">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE ===== */}
      <section id="coverage" className="ev-section" aria-labelledby="cov-title">
        <div className="ev-container">
          <h2 id="cov-title" className="ev-h2">Greater London coverage</h2>
        <p className="ev-meta">All 32 boroughs + City of London. Same-week surveys, permit-aware installs.</p>
          <div className="ev-card ev-mt-8">
            <p className="ev-strong">Boroughs</p>
            <p className="ev-meta ev-mt-8">Barking & Dagenham • Barnet • Bexley • Brent • Bromley • Camden • Croydon • Ealing • Enfield • Greenwich • Hackney • Hammersmith & Fulham • Haringey • Harrow • Havering • Hillingdon • Hounslow • Islington • Kensington & Chelsea • Kingston upon Thames • Lambeth • Lewisham • Merton • Newham • Redbridge • Richmond upon Thames • Southwark • Sutton • Tower Hamlets • Waltham Forest • Wandsworth • Westminster • City of London</p>
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after coverage">Book a survey</a>
          </div>
        </div>
      </section>

      {/* ===== WARRANTIES ===== */}
      <section id="warranty" className="ev-section ev-soft" aria-labelledby="war-title">
        <div className="ev-container">
          <h2 id="war-title" className="ev-h2">Warranties, SLAs & handover</h2>
          <div className="ev-grid ev-grid-3 ev-gap-16" style={{marginTop:16}}>
            {[
              ["Workmanship warranty","12 months as standard; extendable with a maintenance plan."],
              ["Manufacturers’ warranties","Per device/brand (usually 3–5 years)."],
              ["Service SLAs","Bronze: next business day • Silver: 8h • Gold: 4h (London)"],
              ["Handover pack","Certificates, zone chart, logbook, quick guide, training notes."],
              ["False-alarm reduction","Detector choice, sensitivity, housekeeping advice, reviews."],
              ["Takeover & upgrades","We can adopt existing systems and bring paperwork up to date."]
            ].map(([t,d])=> (
              <div key={t} className="ev-card"><p className="ev-h3">{t}</p><p style={{marginTop:6}}>{d}</p></div>
            ))}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="/contact" aria-label="Book a survey after warranties">Book a survey</a>
          </div>
        </div>
      </section>

     

      {/* ===== FAQs ===== */}
      <section id="faqs" className="ev-section" aria-labelledby="faq-title">
        <div className="ev-container">
          <h2 id="faq-title" className="ev-h2">Fire alarm FAQs</h2>
          <div className="ev-grid ev-grid-2 ev-gap-16" style={{marginTop:16}}>
            {[
              ["Is a fire alarm legally required?","Most non-domestic premises need suitable detection/warning. The Responsible Person must maintain systems and keep records."],
              ["How often should it be tested?","Non-domestic: weekly; competent servicing ≤ six months. Domestic/HMO: monthly; Grade A follows weekly."],
              ["What categories exist?","Non-domestic: L1–L5 (life), P1–P2 (property), M (manual). Domestic/HMO: Grades A/C/D/F with LD1–LD3 coverage."],
              ["Can you work on my existing system?","Yes — we can take over, survey, tidy cabling, update drawings and certify after remedials."],
              ["Do you provide certificates?","Yes — design/installation/commissioning and maintenance certificates, plus a logbook."],
              ["Do you offer monitoring?","Yes — ARC monitoring with confirmed-alarm protocols and keyholder notification. No direct autodial; FRS attendance varies."]
            ].map(([q,a])=> (
              <details key={q} className="ev-card">
                <summary className="ev-strong">{q}</summary>
                <p style={{marginTop:8}}>{a}</p>
              </details>
            ))}
          </div>
          <div className="ev-inline-cta">
            <a className="ev-btn ev-btnPrimary" href="#quote" aria-label="Book a survey after FAQs">Book a survey</a>
          </div>
        </div>
      </section>

      
    </main>
    <Footer />
    </>
  );
}
