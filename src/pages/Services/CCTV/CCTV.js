import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
export default function EcoVoltexCctvPagePreview(){
  const [audience,setAudience]=React.useState("home");
  const [isMobile,setIsMobile]=React.useState(false);
  const [formStatus,setFormStatus]=React.useState("");
  const [postcode,setPostcode]=React.useState("");
  const [pcResult,setPcResult]=React.useState("");
  React.useEffect(()=>{if(typeof window!=="undefined"){const m=window.matchMedia("(max-width:767px)");setIsMobile(m.matches);const on=()=>setIsMobile(m.matches);m.addEventListener?.("change",on);return()=>m.removeEventListener?.("change",on);}},[]);
  const inCoverage=(pc)=>{if(!pc)return false;const s=pc.toUpperCase().replace(/\s+/g,"");const allowed=["E","EC","N","NW","W","WC","SE","SW","BR","CR","DA","EN","HA","IG","KT","TW","UB","SM","RM","WD","SL","AL"];return allowed.some(p=>s.startsWith(p));};
  const checkPostcode=(e)=>{e.preventDefault();setPcResult(inCoverage(postcode)?"✅ You're in our regular coverage. We can usually survey within a few days.":"👍 Likely covered — tell us your address and we’ll confirm availability.");};
  const homePlans=[{name:"Starter 2-Cam",tag:"Entry",price:"from £549",meta:"2× 4MP/8MP PoE + NVR (1TB)",bullets:["Neat cabling & containment","Colour night vision","App set-up & training","12-month workmanship warranty"]},{name:"Family 4-Cam",tag:"Popular",price:"from £899",meta:"4× 4MP/8MP PoE + NVR (2TB)",bullets:["Front & rear coverage","Smart motion alerts","Quick ‘find footage’ tutorial","Secure remote viewing"]},{name:"Home Pro 6-Cam",tag:"Premium",price:"from £1,249",meta:"6× 4MP/8MP PoE + NVR (4TB)",bullets:["Driveway + garden + side return","AI filters (human/vehicle)","Labelled ports & admin pack","30-day health check"]}];
  const businessPlans=[{name:"Small Business 4–6",tag:"Best value",price:"from £1,099",meta:"4–6× 4MP/8MP PoE + NVR (2–4TB)",bullets:["Entrances, POS & stock areas","AI analytics (line/vehicle)","Staff access + audit","Retention policy guidance"]},{name:"Retail Focus 6–8",tag:"Retail",price:"from £1,399",meta:"6–8× 4MP/8MP PoE + NVR (4TB)",bullets:["Till & aisle coverage","Incident tagging","Signage included","Dashboard snapshots"]},{name:"Professional 8–16+",tag:"Tailored",price:"from £1,799",meta:"Mixed optics, multi-site ready",bullets:["Cross-site roles","Central monitoring","Reports & alerts","Maintenance SLA available"]}];
  const plans=audience==="home"?homePlans:businessPlans;
  return (
    <>
    <Header />
    <main className="ev ev--page">
      <style>{`
:root{--p900:#0A1B2B;--p800:#0F2C44;--p700:#154363;--acc:#16A34A;--accD:#128838;--neon:#22E57F;--soft:#F3F7FB;--border:#D6E8DD;--card:#FFFFFF;--text:#0B1320;--muted:#667289}
.ev{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);background:#fff}
.ev--page{min-height:100vh}
.ev a{text-decoration:none;color:inherit}
.ev :focus-visible{outline:3px solid var(--neon);outline-offset:2px;border-radius:6px}
.ev-center{text-align:center}.ev-meta{font-size:12px;color:var(--muted)}.ev-strong{font-weight:700}
.ev-container{max-width:1152px;margin:0 auto;padding:0 24px}
.ev-section{padding:64px 0;border-top:1px solid #eef2f7}
.ev-soft{background:var(--soft);border-top:1px solid var(--border)}
.ev-grid{display:grid}.ev-grid-12{grid-template-columns:repeat(12,1fr)}.ev-grid-3{grid-template-columns:repeat(3,1fr)}.ev-grid-2{grid-template-columns:repeat(2,1fr)}.ev-col-7{grid-column:span 7}.ev-col-5{grid-column:span 5}
.ev-topnav{position:sticky;top:0;z-index:20;background:#ffffffcc;backdrop-filter:saturate(180%) blur(6px);border-bottom:1px solid var(--border)}
.ev-topnav .nav{display:flex;gap:12px;align-items:center;justify-content:center;padding:10px;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch}
.ev-topnav a{color:var(--p800);font-weight:800;border:1px solid var(--border);padding:6px 10px;border-radius:999px;flex:0 0 auto}
.ev-topnav a:hover{background:var(--soft)}
.ev-hero{position:relative;overflow:hidden;background:linear-gradient(180deg,var(--p900),var(--p800) 60%,var(--p700));color:#fff}
.ev-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.22;z-index:0}
.ev-h1{font-size:40px;line-height:1.15;font-weight:900}.ev-h1--on-dark{color:#fff}
.ev-h2{font-size:28px;font-weight:800;color:var(--p800)}.ev-h2--compact{font-size:20px;font-weight:800;color:var(--p800)}.ev-h3{font-size:18px;font-weight:800;color:var(--p800)}
.ev-neon{color:var(--neon)}.ev-pill{display:inline-flex;gap:8px;align-items:center;background:#dcfce7;color:#166534;padding:6px 10px;border-radius:999px;font-weight:800;font-size:13px}
.ev-hero-sub{color:#eaf3ff;opacity:.95;margin-top:12px;max-width:60ch}.ev-hero-proof{color:#e7f6ff;margin-top:10px;font-weight:700}
.ev-hero-bullets{color:#fff;margin-top:10px;padding-left:18px}.ev-hero-bullets li{list-style:disc}
.ev-hero-ctas{margin-top:16px}.ev-hero-meta{color:#eef6ff;margin-top:12px}
.ev-card{background:var(--card);border:1px solid var(--border);border-radius:16px;box-shadow:0 8px 24px rgba(10,65,106,.08);padding:16px}
.ev-card--glass{background:rgba(255,255,255,.06);border-color:#ffffff33;color:#fff}.ev-card-head{display:flex;justify-content:space-between;align-items:center}
.ev-gallery img{width:100%;height:auto;border-radius:10px;display:block}
.ev-mini-kv{background:#ffffff10;border:1px solid #ffffff26;border-radius:12px;padding:12px}.ev-mini-kv__k{font-weight:800;color:#e7f6ff}.ev-mini-kv__v{color:#cfe1f5}
.ev-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid transparent;cursor:pointer}
.ev-btnPrimary{background:#16A34A;color:#fff}.ev-btnPrimary:hover{background:#128838}
.ev-btnOutline{background:#fff;border-color:var(--border);color:#1a2636}.ev-btnOutline:hover{background:#f9fbfd}
.ev-btnGhost{background:transparent;border:1px solid #ffffff55;color:#fff}.ev-btn--block{display:flex;width:100%}
.ev-chip{border:1px solid #ffffff40;color:#fff;background:transparent;border-radius:999px;padding:8px 12px;font-weight:700;cursor:pointer}
.ev-chip--active{background:#ffffff18}
.ev-list{padding-left:18px}.ev-list--disc{list-style:disc}
.ev-form{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.ev-form input,.ev-form textarea,.ev-input{border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:14px;width:100%}
.ev-form button[type="submit"]{grid-column:1/-1}
.ev-price{font-size:26px;font-weight:800;margin:12px 0 8px}
.ev-cta{background:#154363;color:#fff;padding:56px 0}.ev-cta__sub{color:#e8eef7}
.ev-btn--light{background:#fff;color:#0a0f18;border:0}.ev-btn--light:hover{background:#eef1f6}
.ev-btn--ghost{border:1px solid rgba(255,255,255,.4);color:#fff;background:transparent}.ev-btn--ghost:hover{background:rgba(255,255,255,.08)}
.ev-actions{display:flex;flex-wrap:wrap;gap:12px}.ev-actions--center{justify-content:center}
.ev-mobile-stick{position:fixed;left:0;right:0;bottom:0;z-index:50;display:none;gap:8px;background:#ffffffee;border-top:1px solid var(--border);padding:10px}
.ev-stick-btn{flex:1;display:flex;justify-content:center;align-items:center;border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-weight:800;color:#0b1320;text-decoration:none}
.ev-stick-btn--prime{background:#16A34A;color:#fff;border-color:#16A34A}
.ev-skip{position:absolute;left:-999px;top:auto}
.ev-skip:focus{left:12px;top:12px;background:#fff;color:#000;padding:8px 12px;border-radius:8px;z-index:50}
@media(max-width:1023px){.ev-grid-12{grid-template-columns:1fr}.ev-col-7,.ev-col-5{grid-column:1/-1}.ev-grid-3{grid-template-columns:1fr}.ev-grid-2{grid-template-columns:1fr}.ev-h1{font-size:34px}.ev-h2{font-size:26px}.ev-form{grid-template-columns:1fr}}
@media(max-width:768px){.ev-mobile-stick{display:flex}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}}
      `}</style>

      

      <section id="overview" className="ev-section ev-hero" aria-labelledby="hero-title">
        {!isMobile && (
          <video className="ev-hero__bg" autoPlay loop muted playsInline poster="/images/cctv-hero-fallback.jpg">
            <source src="/videos/cctv-hero-loop.mp4" type="video/mp4" />
          </video>
        )}
        <div className="ev-container ev-grid ev-grid-12" style={{alignItems:"center"}}>
          <div className="ev-col-7">
            <span className="ev-pill">CCTV Installation • Greater London</span>
            <h1 id="hero-title" className="ev-h1 ev-h1--on-dark">See more. Deter more. <span className="ev-neon">Protect what matters.</span></h1>
            <p className="ev-hero-sub">Design-led CCTV with 4K clarity, smart analytics and secure remote viewing — installed neatly and tuned to your risks.</p>
            <p className="ev-hero-proof">“Neatest cabling I’ve seen. Clear 4K coverage of tills & doors.” — Store Manager, E2 ★★★★★</p>
            <div className="ev-row" style={{marginTop:12}} role="tablist" aria-label="Audience selector">
              <button className={`ev-chip ${audience==='home'?'ev-chip--active':''}`} onClick={()=>setAudience('home')} role="tab" aria-selected={audience==='home'}>Home</button>
              <button className={`ev-chip ${audience==='business'?'ev-chip--active':''}`} onClick={()=>setAudience('business')} role="tab" aria-selected={audience==='business'}>Business</button>
            </div>
            <ul className="ev-hero-bullets">
              {(audience==='home'?['Discreet turrets/domes with colour night vision','Smart alerts tuned for people/visitors, not pets','Secure remote viewing for the household']:[
                'Coverage for entrances, POS, staff & stock areas','AI analytics (line crossing, vehicle filters)','Role-based access, audit logs & retention policy'
              ]).map(x=>(<li key={x}>{x}</li>))}
            </ul>
            <div className="ev-row ev-hero-ctas">
              <a href="#packages" className="ev-btn ev-btnPrimary">See packages</a>
              <a href="#quote" className="ev-btn ev-btnGhost">Book a survey</a>
            </div>
            <p className="ev-meta ev-hero-meta">Fully insured (£2m Public Liability + £1m Professional Indemnity) • GDPR guidance & signage • No VAT charged</p>
          </div>
          <div className="ev-col-5" aria-label="Key specs">
            <div className="ev-card ev-card--glass">
              <div className="ev-grid ev-grid-2">
                {[["Clarity","Up to 8MP / 4K"],["Night","Colour/IR low light"],["Smart","Human/vehicle filters"],["Secure","HTTPS, VLAN, strong credentials"]].map(([k,v])=> (
                  <div key={k} className="ev-mini-kv"><p className="ev-mini-kv__k">{k}</p><p className="ev-mini-kv__v">{v}</p></div>
                ))}
              </div>
              <p className="ev-meta" style={{marginTop:12}}>Neat containment • Labelled NVR • User training</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="ev-section">
        <div className="ev-container">
          <h2 className="ev-h2">Tailored solutions for homes and businesses</h2>
          <div className="ev-grid ev-grid-2" style={{gap:16, marginTop:16}}>
            <div className="ev-card"><p className="ev-h3">Residential</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Deterrent coverage for driveways, doors, gardens</li>
                <li>Discreet turrets/domes; colour night vision where suitable</li>
                <li>Privacy masks for neighbours/public footways</li>
                <li>Secure remote viewing for household members</li>
              </ul>
            </div>
            <div className="ev-card"><p className="ev-h3">Commercial & FM</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Entrances, POS, car parks, stock & loading bays</li>
                <li>AI analytics (human/vehicle, line crossing, intrusion)</li>
                <li>24/7 recording, health checks & cyber hardening</li>
                <li>Multi-site dashboards, roles & audit logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="ev-section ev-soft">
        <div className="ev-container">
          <h2 className="ev-h2">What you get with Eco Voltex CCTV</h2>
          <ul className="ev-grid ev-grid-3" style={{gap:16, marginTop:16, listStyle:"none"}} aria-label="Key features">
            {[
              "4MP–8MP (2K–4K) cameras with true WDR and low-light colour",
              "Smart detection: human/vehicle, line-crossing & intrusion",
              "Mobile & web viewing with role-based access and two-factor options",
              "Secure NVR: locked admin, strong passwords, network segmentation",
              "Privacy masking and retention controls aligned to policy",
              "Professional signage and GDPR guidance for lawful operation",
              "Storage choices: on-prem NVR, NAS or encrypted cloud",
              "Power: PoE (preferred), PoE+ for long runs; Wi-Fi where cabling isn’t feasible",
              "Optional audio challenge, siren & strobe on deterrence models",
            ].map(s=>(<li key={s} className="ev-card">{s}</li>))}
          </ul>
        </div>
      </section>

      <section id="process" className="ev-section">
        <div className="ev-container">
          <h2 className="ev-h2">Our installation process</h2>
          <ol className="ev-grid ev-grid-3" style={{gap:16, marginTop:16}} aria-label="Installation steps">
            {[["Survey & design","We map risk areas, coverage, cable paths and retention needs."],["Quote & plan","Transparent proposal with kit list, positioning plan and timeframes."],["First fix","Prepare routes; containment fitted neatly where needed."],["Install & commission","Cameras mounted, PoE/NVR configured, analytics tuned & tested."],["Handover","App setup, user training, admin docs, passwords sealed and labelled."],["Aftercare","Proactive maintenance, firmware updates and remote support."]].map(([k,v],i)=>(
              <li key={i} className="ev-card"><div className="ev-meta" style={{color:'#16A34A',fontWeight:800,marginBottom:6}}>Step {i+1}</div><p className="ev-strong">{k}</p><p>{v}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="storage" className="ev-section ev-soft">
        <div className="ev-container ev-grid ev-grid-2" style={{gap:16}}>
          <div className="ev-card"><p className="ev-h3">Storage & retention</p>
            <p style={{marginTop:8}}>Typical retention: <b>14–30 days</b> (homes/SMEs) or <b>30–60+ days</b> (higher risk). We balance resolution, frame rate, motion activity and budget.</p>
            <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
              <li>Event-based recording to extend retention</li>
              <li>Health alerts for camera/disk issues (where supported)</li>
              <li>Cloud backup for critical entrances/gates</li>
            </ul>
          </div>
          <div className="ev-card"><p className="ev-h3">Cyber-secure by default</p>
            <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
              <li>Unique strong credentials; remove defaults; admin separation</li>
              <li>Firmware updates; disable unused services; HTTPS where supported</li>
              <li>Local network isolation/VLAN & outbound-only remote access where feasible</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery" className="ev-section">
        <div className="ev-container">
          <h2 className="ev-h2">Before & after — neat, discreet, professional</h2>
          <div className="ev-grid ev-grid-3" style={{gap:16, marginTop:16}}>
            {[1,2,3].map(i=>(
              <figure key={i} className="ev-card ev-gallery">
                <img src={`/images/gallery/cctv-${i}.webp`} width="640" height="360" loading="lazy" alt={`Eco Voltex CCTV installation example ${i}`}/>
                <figcaption className="ev-meta">Tidy containment • Correct sealants • Labelled NVR</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="ev-section ev-soft">
        <div className="ev-container">
          <h2 className="ev-h2">Packages (No VAT) — clear & great value</h2>
          <div className="ev-row" style={{marginTop:8}} role="tablist" aria-label="Package audience selector">
            <button className={`ev-btn ${audience==='home'?'ev-btnPrimary':'ev-btnOutline'}`} role="tab" aria-selected={audience==='home'} onClick={()=>setAudience('home')}>Home</button>
            <button className={`ev-btn ${audience==='business'?'ev-btnPrimary':'ev-btnOutline'}`} role="tab" aria-selected={audience==='business'} onClick={()=>setAudience('business')}>Business</button>
          </div>
          <p className="ev-meta" style={{marginTop:8}}>Guide pricing for Greater London. Final quotes depend on cable routes, heights, fabric, access and analytics. Out-of-hours: +20%.</p>
          <div className="ev-grid ev-grid-3" style={{gap:16, marginTop:16}}>
            {(audience==='home'?homePlans:businessPlans).map(pkg=>(
              <div key={pkg.name} className="ev-card">
                <div className="ev-card-head"><p className="ev-h3">{pkg.name}</p><span className="ev-badge">{pkg.tag}</span></div>
                <p className="ev-meta">{pkg.meta}</p><p className="ev-price">{pkg.price}</p>
                <ul className="ev-list" style={{marginTop:8}}>{pkg.bullets.map(b=>(<li key={b}>{b}</li>))}</ul>
                <a href="#quote" className="ev-btn ev-btnPrimary ev-btn--block" style={{marginTop:12}}>{pkg.name.includes('Professional')? 'Speak to us':'Book survey'}</a>
                <p className="ev-meta" style={{marginTop:8}}>Add-ons: cloud clip backup, proactive maintenance, intercom/intruder links.</p>
              </div>
            ))}
          </div>
          <div className="ev-card" style={{marginTop:16}}>
            <div className="ev-grid ev-grid-2" style={{gap:16}}>
              <div>
                <p className="ev-strong">Included</p>
                <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                  <li>PoE cabling, neat containment, commissioning & testing</li>
                  <li>App setup, quick training, admin pack (passwords, labels, IP map)</li>
                  <li>12-month workmanship warranty (manufacturer warranties apply)</li>
                </ul>
              </div>
              <div>
                <p className="ev-strong">Not included</p>
                <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                  <li>Scaffold/MEWP if required (quoted separately)</li>
                  <li>Unusual fabric works (e.g., stone coring) or builder’s works</li>
                  <li>Third-party monitoring fees or cloud storage subscriptions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ev-card" style={{marginTop:16}}>
            <p className="ev-strong">Quick coverage check</p>
            <form className="ev-row" style={{marginTop:8}} onSubmit={checkPostcode} aria-label="Coverage checker">
              <input className="ev-input" placeholder="Enter your postcode (e.g., E1 6AN)" value={postcode} onChange={(e)=>setPostcode(e.target.value)} aria-label="Postcode"/>
              <button className="ev-btn ev-btnOutline" type="submit">Check</button>
            </form>
            <div className="ev-meta" style={{marginTop:8}} aria-live="polite">{pcResult}</div>
          </div>
        </div>
      </section>

      <section id="compliance" className="ev-section">
        <div className="ev-container">
          <h2 className="ev-h2">Compliance & good practice (UK)</h2>
          <div className="ev-grid ev-grid-2" style={{gap:16, marginTop:16}}>
            <div className="ev-card"><p className="ev-strong">Signage & privacy</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Clear CCTV signage where recording occurs</li>
                <li>Privacy masks for neighbours/public areas where appropriate</li>
                <li>Limit access to authorised users; keep access logs where needed</li>
              </ul>
            </div>
            <div className="ev-card"><p className="ev-strong">Data protection (business)</p>
              <ul className="ev-list ev-list--disc" style={{marginTop:8}}>
                <li>Define purpose, retention period & lawful basis</li>
                <li>Consider ICO registration if required (business use)</li>
                <li>Provide subject access procedures and secure storage controls</li>
              </ul>
              <p className="ev-meta" style={{marginTop:8}}>Domestic users often fall under the “household exemption”; we still set privacy masks and good practices.</p>
            </div>
          </div>
          <p className="ev-meta" style={{marginTop:8}}>General information only — specifics confirmed on survey. Not legal advice.</p>
        </div>
      </section>

      <section id="faqs" className="ev-section ev-soft">
        <div className="ev-container">
          <h2 className="ev-h2">CCTV FAQs</h2>
          <div className="ev-grid ev-grid-2" style={{gap:16, marginTop:16}}>
            {[["Do I need internet for remote viewing?","Yes — the NVR connects to your router. We configure secure app/web access and show you how it works."],["How long can I keep footage?","Homes: 14–30 days. Businesses: 30–60+ days. We size storage to suit your policy."],["Can I record audio?","Some cameras support audio. You must comply with privacy rules and provide clear signage; we’ll advise what’s appropriate."],["What happens if a camera goes offline?","We can set up health alerts where supported. Our maintenance plans include remote checks and on-site visits."],["Will the install be neat?","Yes — we plan routes, use tidy trunking/containment, label equipment, and clean up."],["Can you integrate with alarms or access control?","Yes — on compatible models we can link triggers for events and notifications."]].map(([q,a])=> (
              <details key={q} className="ev-card"><summary className="ev-strong">{q}</summary><p style={{marginTop:8}}>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      

      

      
    </main>
    <Footer />
    </>
  );
}
