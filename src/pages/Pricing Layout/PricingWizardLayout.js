import React, { useMemo, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../Services/CCTV/CCTV.css";

/**
 * Eco Voltex – Pricing & Booking Wizard (Polished UX)
 */

const PRICING = {
  meta: {
    currency: "GBP",
    vatRate: 0.0, // update to 0.2 if VAT-registered later
    companyPhone: "+44 7930 558824",
  },
  domains: ["Residential", "Commercial", "Industrial"],
  travelZones: [
    { key: "z12", label: "London Zones 1–2", surcharge: 0 },
    { key: "z345", label: "Zones 3–5", surcharge: 12 },
    { key: "outside", label: "> 20 miles from M25", surcharge: 25 },
  ],
  discounts: [
    { label: "No discount", value: 0 },
    { label: "5% loyalty", value: 5 },
    { label: "10% multi-service", value: 10 },
  ],
  services: {
    "EICR – Domestic (BS 7671)": {
      code: "eicr_domestic",
      model: "select_banded",
      bands: [
        { key: "studio", label: "Studio Flat", price: 89 },
        { key: "1_2_bed", label: "1–2 Bedrooms", price: 99 },
        { key: "3_4_bed", label: "3–4 Bedrooms", price: 129 },
        { key: "5_6_bed", label: "5–6 Bedrooms", price: 159 },
      ],
      notes: [
        "Based on a single consumer unit (extra boards £79–£85 each).",
        "Digital report typically within 24 hours.",
      ],
      addons: [
        { key: "extra_board", label: "Additional consumer unit", type: "stepper", unitPrice: 82, min: 0, max: 5 },
        { key: "out_of_hours", label: "Out-of-hours testing", type: "toggle", price: 60 },
      ],
    },

    "EICR – Commercial / Business (per circuit)": {
      code: "eicr_commercial",
      model: "quantity_banded",
      unit: "circuits",
      quantityKey: "circuits",
      bands: [
        { upTo: 5, price: 149 },
        { upTo: 10, price: 199 },
        { upTo: 15, price: 249 },
      ],
      maxHandled: 15,
      addons: [
        { key: "extra_board", label: "Additional consumer unit", type: "stepper", unitPrice: 75, min: 0, max: 5 },
        { key: "out_of_hours", label: "Out-of-hours testing", type: "toggle", price: 80 },
      ],
    },

    "PAT Testing (Residential)": {
      code: "pat_res",
      model: "quantity_banded_with_extra",
      unit: "appliances",
      quantityKey: "devices",
      bands: [
        { upTo: 10, price: 69 },
        { upTo: 20, price: 99 },
        { upTo: 40, price: 149 },
      ],
      extraPerUnit: 2.99,
      addons: [
        { key: "labels", label: "Labels & electronic records (included)", type: "info", price: 0 },
        { key: "urgent", label: "Urgent / weekend", type: "toggle", price: 35 },
      ],
    },

    "Emergency Lighting Test (BS 5266-1)": {
      code: "em_lighting",
      model: "quantity_banded",
      unit: "emergency lights",
      quantityKey: "lights",
      bands: [
        { upTo: 3, price: 59 },
        { upTo: 6, price: 79 },
        { upTo: 12, price: 129 },
      ],
      addons: [
        { key: "logbook", label: "Provide/update logbook", type: "toggle", price: 12 },
      ],
    },

    "Part P – Certificate & LABC notification (for our installs)": {
      code: "partp_included",
      model: "info_only",
      info: "Included in installation quotes (no extra charge).",
      addons: [{ key: "reissue", label: "Reissue of certificate (lost/admin)", type: "toggle", price: 85 }],
    },

    "Third-Party Certification (inspect & notify work by others)": {
      code: "tpc",
      model: "option_range",
      options: [
        { key: "small", label: "Small job (1 new/altered circuit)", min: 110, max: 130 },
        { key: "medium", label: "Medium (2–4 circuits)", min: 140, max: 170 },
        { key: "large", label: "Larger (5–8 circuits or CU change)", min: 180, max: 220 },
      ],
      addons: [],
    },

    "Smoke Detector Certificate – Residential (BS 5839-6)": {
      code: "smoke_res",
      model: "quantity_banded_with_extra",
      unit: "detectors",
      quantityKey: "detectors",
      bands: [
        { upTo: 3, price: 69 },
        { upTo: 6, price: 89 },
        { upTo: 12, price: 119 },
      ],
      extraPerUnit: 9.0,
      addons: [],
    },

    "Smoke Detector Certificate – Commercial (BS 5839-1)": {
      code: "smoke_comm",
      model: "quantity_banded",
      unit: "detectors",
      quantityKey: "detectors",
      bands: [
        { upTo: 3, price: 79 },
        { upTo: 5, price: 99 },
        { upTo: 10, price: 129 },
      ],
      addons: [
        { key: "zone_chart", label: "Zone chart update (on request)", type: "info", price: 0 },
        { key: "panel_support", label: "Panel disable/enable support (on request)", type: "info", price: 0 },
      ],
    },
  },
};

// ---------- helpers ----------
const currency = (n) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(Number(n || 0));
const stripPhone = (s) => (s || "").replace(/[^\d]/g, "");
const isUKMobile = (s) => /^[+]?\d{0,2}\s?0?7\d{9}$/.test((s || "").replace(/\s+/g, ""));

export default function PricingWizardLayout() {
  const [audience, setAudience] = useState("home");

  // Wizard selections
  const [domain, setDomain] = useState(PRICING.domains[0]);
  const [serviceKey, setServiceKey] = useState(Object.keys(PRICING.services)[0]);
  const svc = PRICING.services[serviceKey];
  const [zoneKey, setZoneKey] = useState(PRICING.travelZones[0].key);
  const [discountPct, setDiscountPct] = useState(PRICING.discounts[0].value);

  // Inputs & Addons
  const [inputs, setInputs] = useState(() =>
    Object.fromEntries((svc.inputs || []).map((i) => [i.key, i.min ?? 0]))
  );
  const [addons, setAddons] = useState(() =>
    Object.fromEntries((svc.addons || []).map((a) => [a.key, a.type === "stepper" ? (a.min ?? 0) : false]))
  );

  // Customer details
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });
  const [touched, setTouched] = useState({ name: false, phone: false, address: false });

  useEffect(() => {
    const s = PRICING.services[serviceKey];
    setInputs(Object.fromEntries((s.inputs || []).map((i) => [i.key, i.min ?? 0])));
    setAddons(
      Object.fromEntries((s.addons || []).map((a) => [a.key, a.type === "stepper" ? (a.min ?? 0) : false]))
    );
  }, [serviceKey]);

  const handleNumber = (key, v) =>
    setInputs((prev) => ({ ...prev, [key]: Math.max(0, Number(v || 0)) }));

  const toggleAddon = (key) =>
    setAddons((prev) => {
      const def = (svc.addons || []).find((a) => a.key === key);
      if (!def) return prev;
      if (def.type === "stepper") return prev; // handled by number input below
      return { ...prev, [key]: !prev[key] };
    });

  // Pricing calculation
  const breakdown = useMemo(() => {
    const zone = PRICING.travelZones.find((z) => z.key === zoneKey) || PRICING.travelZones[0];
    const travel = zone.surcharge || 0;

    let base = 0;
    let variable = 0;
    let addonTotal = 0;
    let notes = [];

    // addons
    (svc.addons || []).forEach((a) => {
      if (a.type === "toggle" && addons[a.key]) addonTotal += a.price || 0;
      if (a.type === "stepper") {
        const count = Number(addons[a.key] || 0);
        addonTotal += (a.unitPrice || 0) * count;
      }
    });

    // models
    if (svc.model === "select_banded") {
      const selectedKey = inputs._band || svc.bands?.[0]?.key;
      const band = (svc.bands || []).find((b) => b.key === selectedKey) || svc.bands?.[0];
      base = band?.price || 0;
      notes = svc.notes || [];
    } else if (
      svc.model === "quantity_banded" ||
      svc.model === "quantity_banded_with_extra"
    ) {
      const qtyKey = svc.quantityKey;
      const qty = Number(inputs[qtyKey] || 0);
      const band =
        (svc.bands || []).find((b) => qty <= b.upTo) ||
        svc.bands?.[svc.bands.length - 1];
      base = band ? band.price : 0;
      if (
        svc.model === "quantity_banded_with_extra" &&
        qty > (svc.bands?.[svc.bands.length - 1]?.upTo || 0)
      ) {
        const beyond = qty - (svc.bands?.[svc.bands.length - 1]?.upTo || 0);
        variable += beyond * (svc.extraPerUnit || 0);
      }
    } else if (svc.model === "option_range") {
      const optKey = inputs._option || svc.options?.[0]?.key;
      const opt = (svc.options || []).find((o) => o.key === optKey) || svc.options?.[0];
      base = opt ? (opt.min + opt.max) / 2 : 0; // midpoint
    } else {
      base = svc.basePrice || 0;
      (svc.inputs || []).forEach((i) => {
        const val = Number(inputs[i.key] || 0);
        const beyond = Math.max(0, val - (i.baseIncludes || 0));
        variable += beyond * (i.perUnitPrice || 0);
      });
    }

    const subtotal = base + variable + addonTotal + travel;
    const discount = (subtotal * (Number(discountPct) || 0)) / 100;
    const afterDiscount = Math.max(0, subtotal - discount);
    const vat = afterDiscount * (PRICING.meta.vatRate || 0);
    const total = afterDiscount + vat;

    return { base, variable, addonTotal, travel, subtotal, discount, afterDiscount, vat, total, notes };
  }, [svc, inputs, addons, zoneKey, discountPct]);

  // Validation
  const nameOk = customer.name.trim().length >= 2;
  const phoneOk = isUKMobile(customer.phone);
  const addressOk = customer.address.trim().length >= 5;
  const allOk = nameOk && phoneOk && addressOk;

  // WhatsApp message
  const waMsg = encodeURIComponent(
    [
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Address: ${customer.address}`,
      `Eco Voltex – Booking Request`,
      `Domain: ${domain}`,
      `Service: ${serviceKey}`,
      ...((svc.inputs || []).map((i) => `${i.label}: ${inputs[i.key] || 0}`)),
      (() => {
        const enabled = (svc.addons || [])
          .filter((a) => (a.type === "toggle" && addons[a.key]) || (a.type === "stepper" && Number(addons[a.key]) > 0))
          .map((a) =>
            a.type === "stepper"
              ? `${a.label} × ${Number(addons[a.key])} (${currency((a.unitPrice || 0) * Number(addons[a.key]))})`
              : a.label
          );
        return enabled.length ? `Add-ons: ${enabled.join(", ")}` : null;
      })(),
      `Travel zone: ${(PRICING.travelZones.find((z) => z.key === zoneKey) || {}).label}`,
      `Discount: ${discountPct}%`,
      `Subtotal: ${currency(breakdown.subtotal)}`,
      `Discount: -${currency(breakdown.discount)}`,
      `VAT (${(PRICING.meta.vatRate * 100).toFixed(0)}%): ${currency(breakdown.vat)}`,
      `Total: ${currency(breakdown.total)}`,
      "Please confirm my booking and availability.",
    ]
      .filter(Boolean)
      .join("\n")
  );
  const waHref = `https://wa.me/${stripPhone(PRICING.meta.companyPhone)}?text=${waMsg}`;

  return (
    <>
      <Header />
      <main className="cctv cctv--page">
        {/* HERO */}
        <section className="cctv-section cctv-hero" aria-labelledby="hero-title">
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              <div className="cctv-badge">New</div>
              <h1 id="hero-title" className="cctv-h1">Instant Quote & Booking</h1>
              <p className="cctv-hero-sub">Three quick steps. Clear pricing. WhatsApp confirmation in one tap.</p>
              <div className="cctv-row" role="tablist" aria-label="Audience selector">
                <button className={`cctv-chip ${audience === "home" ? "cctv-chip--active" : ""}`} onClick={() => setAudience("home")} role="tab" aria-selected={audience === "home"}>Home</button>
                <button className={`cctv-chip ${audience === "business" ? "cctv-chip--active" : ""}`} onClick={() => setAudience("business")} role="tab" aria-selected={audience === "business"}>Business</button>
              </div>
              <ul className="cctv-hero-bullets">
                {(audience === "home"
                  ? ["EICR, PAT, fire alarms", "Neat, certified installations", "1-hour response on emergencies"]
                  : ["PPM programmes & remedials", "Distribution & containment", "Asset lists, certs, reports"]
                ).map((x) => <li key={x}>{x}</li>)}
              </ul>
              <div className="cctv-row cctv-hero-ctas">
                <a href="#wizard" className="cctv-btn cctv-btnPrimary">Start in 10 seconds</a>
                <a href="/contact" className="cctv-btn cctv-btnOutline">Talk To Us</a>
              </div>
            </div>
            <div className="cctv-col-5">
              <div className="cctv-figure">
                <img src="https://res.cloudinary.com/dug1siluu/image/upload/v1758040001/ev_electrical_install_hero_placeholder.png" alt="Eco Voltex price wizard preview" className="cctv-img" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* WIZARD */}
        <section id="wizard" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <div className="cctv-progress" aria-hidden>
              <span className="cctv-progress__bar" style={{ width: "100%" }} />
            </div>
            <h2 className="cctv-h2" style={{ textAlign: "center" }}>Configure Your Quote</h2>
            <p className="cctv-meta" style={{ textAlign: "center" }}>Fill the three steps below. Fields marked <b>*</b> are required to book.</p>

            <div className="cctv-grid cctv-grid-3 cctv-mt-16">
              {/* Column 1 – Step 1 */}
              <div className="cctv-card" aria-labelledby="step1-title">
                <div className="cctv-step"><span>1</span> Select</div>
                <p className="cctv-meta">Pick your domain and the service you need.</p>

                <label className="cctv-label cctv-mt-8" id="step1-title">Domain</label>
                <select className="cctv-input" value={domain} onChange={(e) => setDomain(e.target.value)}>
                  {PRICING.domains.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>

                <label className="cctv-label cctv-mt-8">Service</label>
                <select className="cctv-input" value={serviceKey} onChange={(e) => setServiceKey(e.target.value)}>
                  {Object.keys(PRICING.services).map((k) => <option key={k} value={k}>{k}</option>)}
                </select>

                <div className="cctv-divider cctv-mt-12" />

                <label className="cctv-label cctv-mt-8">Travel Zone</label>
                <select className="cctv-input" value={zoneKey} onChange={(e) => setZoneKey(e.target.value)}>
                  {PRICING.travelZones.map((z) => (
                    <option key={z.key} value={z.key}>{z.label}{z.surcharge ? ` (+${currency(z.surcharge)})` : ""}</option>
                  ))}
                </select>

                <label className="cctv-label cctv-mt-8">Discount</label>
                <select className="cctv-input" value={discountPct} onChange={(e) => setDiscountPct(Number(e.target.value))}>
                  {PRICING.discounts.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
                </select>
              </div>

              {/* Column 2 – Step 2 */}
              <div className="cctv-card" aria-labelledby="step2-title">
                <div className="cctv-step"><span>2</span> Configure</div>
                <p className="cctv-meta">Enter quantities and add options if you need them.</p>

                {svc.model === "select_banded" && (
                  <div className="cctv-mt-8">
                    <label className="cctv-label">Property Type</label>
                    <select
                      className="cctv-input"
                      value={inputs._band || svc.bands?.[0]?.key}
                      onChange={(e) => setInputs((prev) => ({ ...prev, _band: e.target.value }))}
                    >
                      {(svc.bands || []).map((b) => (
                        <option key={b.key} value={b.key}>
                          {b.label} — {currency(b.price)}
                        </option>
                      ))}
                    </select>
                    {(svc.notes || []).length > 0 && (
                      <ul className="cctv-list cctv-list--disc cctv-mt-8">
                        {svc.notes.map((n) => <li key={n}>{n}</li>)}
                      </ul>
                    )}
                  </div>
                )}

                {(svc.model === "quantity_banded" || svc.model === "quantity_banded_with_extra") && (
                  <div className="cctv-mt-8">
                    <label className="cctv-label">Number of {svc.unit}</label>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      className="cctv-input"
                      value={inputs[svc.quantityKey] ?? 0}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          [svc.quantityKey]: Math.max(0, Number(e.target.value || 0)),
                        }))
                      }
                    />
                    <p className="cctv-meta">
                      Pricing bands: {(svc.bands || []).map((b) => `${b.upTo} → ${currency(b.price)}`).join(", ")}
                      {svc.model === "quantity_banded_with_extra"
                        ? `. Extra beyond last band: ${currency(svc.extraPerUnit || 0)} per ${svc.unit.slice(0, -1)}.`
                        : "."}
                    </p>
                  </div>
                )}

                {svc.model === "option_range" && (
                  <div className="cctv-mt-8">
                    <label className="cctv-label">Select scope</label>
                    <select
                      className="cctv-input"
                      value={inputs._option || svc.options?.[0]?.key}
                      onChange={(e) => setInputs((prev) => ({ ...prev, _option: e.target.value }))}
                    >
                      {(svc.options || []).map((o) => (
                        <option key={o.key} value={o.key}>
                          {o.label} — {currency(o.min)}–{currency(o.max)}
                        </option>
                      ))}
                    </select>
                    <p className="cctv-meta">Price shown in total is the mid-point. Final invoice will be within the displayed range after site review.</p>
                  </div>
                )}

                {(svc.inputs || []).length === 0 &&
                  !["select_banded", "quantity_banded", "quantity_banded_with_extra", "option_range"].includes(svc.model) && (
                    <p className="cctv-meta cctv-mt-8">No quantity inputs required for this service.</p>
                  )}

                {/* Custom per-unit inputs for fallback model only */}
                {["select_banded", "quantity_banded", "quantity_banded_with_extra", "option_range"].includes(svc.model)
                  ? null
                  : (svc.inputs || []).map((i) => (
                      <div key={i.key} className="cctv-mt-8">
                        <label className="cctv-label">{i.label}</label>
                        <input
                          type="number"
                          min={i.min}
                          max={i.max}
                          step={i.step}
                          value={inputs[i.key] ?? 0}
                          onChange={(e) => handleNumber(i.key, e.target.value)}
                          className="cctv-input"
                        />
                        <p className="cctv-meta">
                          Includes first {i.baseIncludes} {svc.unit}; then {currency(i.perUnitPrice)} per extra.
                        </p>
                      </div>
                    ))}

                <div className="cctv-mt-12">
                  <p className="cctv-strong">Add-ons</p>
                  <div className="cctv-mt-8" style={{ display: "grid", gap: "8px" }}>
                    {(svc.addons || []).map((a) => (
                      <div key={a.key} className="cctv-row" style={{ alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                        <span>{a.label}</span>
                        {a.type === "info" ? (
                          <span className="cctv-meta">{a.price ? `+ ${currency(a.price)}` : "Included"}</span>
                        ) : a.type === "toggle" ? (
                          <>
                            <span className="cctv-meta">+ {currency(a.price || 0)}</span>
                            <input
                              type="checkbox"
                              checked={!!addons[a.key]}
                              onChange={() => toggleAddon(a.key)}
                              aria-label={`Toggle ${a.label}`}
                            />
                          </>
                        ) : (
                          // stepper
                          <>
                            <span className="cctv-meta">{currency(a.unitPrice || 0)} each</span>
                            <input
                              type="number"
                              min={a.min ?? 0}
                              max={a.max ?? 99}
                              step={1}
                              className="cctv-input"
                              style={{ width: 90 }}
                              value={Number(addons[a.key] ?? 0)}
                              onChange={(e) =>
                                setAddons((prev) => ({
                                  ...prev,
                                  [a.key]: Math.max(a.min ?? 0, Math.min(a.max ?? 99, Number(e.target.value || 0))),
                                }))
                              }
                              aria-label={`${a.label} quantity`}
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3 – Step 3 */}
              <div className="cctv-card cctv-summary" aria-labelledby="step3-title" style={{ position: "sticky", top: "2rem" }}>
                <div className="cctv-step"><span>3</span> Your Details & Summary</div>
                <p id="step3-title" className="cctv-meta">Add your details so we can confirm your booking instantly.</p>

                <label className="cctv-label cctv-mt-8">Full Name <b>*</b></label>
                <input
                  className={`cctv-input ${touched.name && !nameOk ? "cctv-input--error" : ""}`}
                  placeholder="e.g., Mudassar Riaz"
                  value={customer.name}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  onChange={(e) => setCustomer((prev) => ({ ...prev, name: e.target.value }))}
                />
                {touched.name && !nameOk && <p className="cctv-error">Please enter your name.</p>}

                <label className="cctv-label cctv-mt-8">Phone <b>*</b></label>
                <input
                  className={`cctv-input ${touched.phone && !phoneOk ? "cctv-input--error" : ""}`}
                  placeholder="07XXXXXXXXX"
                  value={customer.phone}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  onChange={(e) => setCustomer((prev) => ({ ...prev, phone: e.target.value }))}
                />
                {touched.phone && !phoneOk && <p className="cctv-error">Enter a UK mobile (07XXXXXXXXX).</p>}

                <label className="cctv-label cctv-mt-8">Address <b>*</b></label>
                <textarea
                  className={`cctv-input ${touched.address && !addressOk ? "cctv-input--error" : ""}`}
                  rows={3}
                  placeholder="House/Flat, Street, Town, Postcode"
                  value={customer.address}
                  onBlur={() => setTouched((t) => ({ ...t, address: true }))}
                  onChange={(e) => setCustomer((prev) => ({ ...prev, address: e.target.value }))}
                />
                {touched.address && !addressOk && <p className="cctv-error">Please include house/flat, street and postcode.</p>}

                <div className="cctv-divider cctv-mt-12" />

                <p className="cctv-strong">Price Summary</p>
                <div className="cctv-mt-8" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "6px" }}>
                  <div className="cctv-meta">Base</div><div className="cctv-strong">{currency(breakdown.base)}</div>
                  <div className="cctv-meta">Units beyond base</div><div className="cctv-strong">{currency(breakdown.variable)}</div>
                  <div className="cctv-meta">Add-ons</div><div className="cctv-strong">{currency(breakdown.addonTotal)}</div>
                  <div className="cctv-meta">Travel</div><div className="cctv-strong">{currency(breakdown.travel)}</div>
                  <div style={{ gridColumn: "1 / -1", borderTop: "1px solid #E6EDF3", margin: "6px 0" }} />
                  <div>Subtotal</div><div className="cctv-strong">{currency(breakdown.subtotal)}</div>
                  <div>Discount ({discountPct}%)</div><div className="cctv-strong">- {currency(breakdown.discount)}</div>
                  <div>VAT ({(PRICING.meta.vatRate * 100).toFixed(0)}%)</div><div className="cctv-strong">{currency(breakdown.vat)}</div>
                  <div style={{ gridColumn: "1 / -1", borderTop: "1px solid #E6EDF3", margin: "6px 0" }} />
                  <div className="cctv-h3">Total</div><div className="cctv-h3" style={{ textAlign: "right" }}>{currency(breakdown.total)}</div>
                </div>

                <button
                  disabled={!allOk}
                  onClick={() => {
                    if (allOk) window.open(waHref, "_blank");
                  }}
                  className={`cctv-btn cctv-btnPrimary cctv-btn--block cctv-mt-12 ${!allOk ? "cctv-btn--disabled" : ""}`}
                  aria-disabled={!allOk}
                  aria-label="Send booking details on WhatsApp"
                  title={!allOk ? "Enter name, phone and address to continue" : "Send on WhatsApp"}
                >
                  Send on WhatsApp
                </button>
                <p className="cctv-meta cctv-mt-8">
                  Or email <a href="mailto:info@ecovoltex.co.uk"><b>info@ecovoltex.co.uk</b></a>. We’ll reply with the earliest slot.
                </p>
              </div>
            </div>

            <p className="cctv-meta cctv-mt-16">
              Guide pricing for Greater London. Final quotes depend on routes, heights, fabric, access and specification.
            </p>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="cctv-section">
          <div className="cctv-container cctv-grid cctv-grid-2 cctv-mt-16">
            <div className="cctv-card">
              <p className="cctv-strong">Legislation & Standards</p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>BS 7671: IET Wiring Regulations</li>
                <li>Building Regulations Part P (domestic)</li>
                <li>Electricity at Work Regulations 1989 (EAWR)</li>
              </ul>
            </div>
            <div className="cctv-card">
              <p className="cctv-strong">Certification & Notification</p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>EIC/MEIWC issued on completion</li>
                <li>Circuit schedules & labelling provided</li>
                <li>Part P notification where applicable</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
