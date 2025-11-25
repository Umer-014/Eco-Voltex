import React, { useMemo, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../Services/CCTV/CCTV.css";

const PRICING = {
  meta: { currency: "GBP", vatRate: 0.0, companyPhone: "+44 7930 558824" },
  domains: ["Select the Domain first", "Residential", "Commercial"],
  services: {
    EICR_Residential: {
      name: "EICR (BS 7671)",
      domain: "Residential",
      model: "select_banded",
      bands: [
        { key: "studio", label: "Studio Flat", price: 89 },
        { key: "1-2", label: "1–2 Bedrooms", price: 99 },
        { key: "3-4", label: "3–4 Bedrooms", price: 129 },
        { key: "5-6", label: "5–6 Bedrooms", price: 159 },
      ],
      addons: [],
    },
    EICR_Commercial: {
      name: "EICR Per Circuit",
      domain: "Commercial",
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
        {
          key: "out_of_hours",
          label: "Out-of-hours testing",
          type: "toggle",
          price: 80,
        },
      ],
    },
    PAT_Residential: {
      name: "PAT Testing – Residential",
      domain: "Residential",
      model: "quantity_banded_with_extra",
      unit: "appliances",
      quantityKey: "devices",
      bands: [
        { upTo: 10, price: 69 },
        { upTo: 20, price: 99 },
        { upTo: 40, price: 149 },
      ],

      addons: [],
    },
    PAT_Commercial: {
      name: "PAT Testing – Commercial",
      domain: "Commercial",
      model: "quantity_banded_with_extra",
      unit: "appliances",
      quantityKey: "devices",
      bands: [
        { upTo: 10, price: 69 },
        { upTo: 20, price: 99 },
        { upTo: 40, price: 149 },
      ],

      addons: [],
    },
    EmergencyLighting_Commercial: {
      name: "Emergency Lighting Testing (BS 5266-1)",
      domain: "Commercial",
      model: "quantity_banded",
      unit: "lights",
      quantityKey: "lights",
      bands: [
        { upTo: 3, price: 59 },
        { upTo: 6, price: 79 },
        { upTo: 12, price: 129 },
      ],
      addons: [],
    },
    EmergencyLighting_Residential: {
      name: "Emergency Lighting Testing (BS 5266-1)",
      domain: "Residential",
      model: "quantity_banded",
      unit: "lights",
      quantityKey: "lights",
      bands: [
        { upTo: 3, price: 59 },
        { upTo: 6, price: 79 },
        { upTo: 12, price: 129 },
      ],
      addons: [],
    },
    Part_P: {
      name: "Part P – Certificate & LABC Notification",
      domain: "",
      model: "select_banded",
      bands: [{ key: "reissue", label: "Reissue of certificate", price: 85 }],
      addons: [],
    },
    Third_Party_Certification: {
      name: "Third-Party Certification (TPC)",
      domain: "Commercial",
      model: "option_range",
      options: [
        {
          key: "small",
          label: "Small job (1 new/altered circuit)",
          min: 110,
          max: 130,
        },
        { key: "medium", label: "Medium (2–4 circuits)", min: 140, max: 170 },
        {
          key: "large",
          label: "Larger (5–8 circuits or CU change)",
          min: 180,
          max: 220,
        },
      ],
      addons: [],
    },
    Fire_Alarm_Residential: {
      name: "Fire Alarm Certificate – Residential (BS 5839-6)",
      domain: "Residential",
      model: "quantity_banded_with_extra",
      unit: "detectors",
      quantityKey: "detectors",
      bands: [
        { upTo: 3, price: 69 },
        { upTo: 6, price: 89 },
        { upTo: 12, price: 119 },
      ],

      addons: [],
    },
    Fire_Alarm_Commercial: {
      name: "Fire Alarm Certificate – Commercial (BS 5839-1)",
      domain: "Commercial",
      model: "quantity_banded",
      unit: "detectors",
      quantityKey: "detectors",
      bands: [
        { upTo: 3, price: 79 },
        { upTo: 5, price: 99 },
        { upTo: 10, price: 129 },
      ],
      addons: [],
    },
  },
};

// ---------- helpers ----------
const currency = (n) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    Number(n || 0)
  );
const stripPhone = (s) => (s || "").replace(/[^\d]/g, "");
const isUKMobile = (s) =>
  /^[+]?\d{0,2}\s?0?7\d{9}$/.test((s || "").replace(/\s+/g, ""));

export default function PricingWizardLayout() {
  const [audience, setAudience] = useState("home");

  // Domain & multi-service selections
  const [domain, setDomain] = useState(PRICING.domains[0]);
  const [selectedServices, setSelectedServices] = useState(() => []);

  // Per-service inputs and addons stored keyed by serviceKey
  const [serviceInputs, setServiceInputs] = useState({});
  const [serviceAddons, setServiceAddons] = useState({});

  // Customer details
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    address: false,
  });

  // Keep per-service state in sync when selection changes
  useEffect(() => {
    // initialize inputs/addons for newly selected services
    setServiceInputs((prev) => {
      const copy = { ...prev };
      selectedServices.forEach((k) => {
        const svc = PRICING.services[k];
        if (!copy[k]) {
          // init inputs default values
          copy[k] = Object.fromEntries(
            (svc.inputs || []).map((i) => [i.key, i.min ?? 0])
          );
          // special keys used by models
          if (svc.model === "select_banded")
            copy[k]._band = svc.bands?.[0]?.key;
          if (svc.model === "option_range")
            copy[k]._option = svc.options?.[0]?.key;
          if (svc.quantityKey) copy[k][svc.quantityKey] = 0;
        }
      });
      // remove unselected
      Object.keys(copy).forEach((k) => {
        if (!selectedServices.includes(k)) delete copy[k];
      });
      return copy;
    });

    setServiceAddons((prev) => {
      const copy = { ...prev };
      selectedServices.forEach((k) => {
        const svc = PRICING.services[k];
        if (!copy[k]) {
          copy[k] = Object.fromEntries(
            (svc.addons || []).map((a) => [
              a.key,
              a.type === "stepper" ? a.min ?? 0 : false,
            ])
          );
        }
      });
      Object.keys(copy).forEach((k) => {
        if (!selectedServices.includes(k)) delete copy[k];
      });
      return copy;
    });
  }, [selectedServices]);

  // selectors
  const toggleServiceSelection = (key) => {
    setSelectedServices((prev) => {
      if (prev.includes(key)) {
        // remove service
        const newSelected = prev.filter((k) => k !== key);
        setServiceInputs((inputs) => {
          const copy = { ...inputs };
          delete copy[key]; // remove its inputs
          return copy;
        });
        setServiceAddons((adds) => {
          const copy = { ...adds };
          delete copy[key];
          return copy;
        });
        return newSelected;
      } else {
        // add service
        setServiceInputs((inputs) => {
          const svc = PRICING.services[key];
          const defaultInput = {};

          if (svc.model === "select_banded") {
            defaultInput._band = svc.bands?.[0]?.key; // set default band
          }

          if (svc.model === "option_range") {
            defaultInput._option = svc.options?.[0]?.key; // set default option
          }

          if (
            svc.model === "quantity_banded" ||
            svc.model === "quantity_banded_with_extra"
          ) {
            defaultInput[svc.quantityKey] = 0; // default quantity 0
          }

          return { ...inputs, [key]: defaultInput };
        });

        setServiceAddons((prevAdds) => {
          const svc = PRICING.services[key];
          const obj = Object.fromEntries(
            (svc.addons || []).map((a) => [
              a.key,
              a.type === "stepper" ? a.min ?? 0 : false,
            ])
          );
          return { ...prevAdds, [key]: obj };
        });

        return [...prev, key];
      }
    });
  };

  // ---------- FIXED handleServiceNumber ----------
  // Accepts both string values (for _band/_option) and numeric values for quantities.
  const handleServiceNumber = (svcKey, key, v) =>
    setServiceInputs((prev) => {
      const cur = prev[svcKey] || {};
      let value;
      // keep band/option values as strings
      if (
        typeof v === "string" &&
        (key === "_band" || key === "_option" || key.startsWith("_"))
      ) {
        value = v;
      } else if (key === "_band" || key === "_option") {
        // still accept non-string but coerce to string
        value = String(v);
      } else {
        // numeric field (quantity, etc.)
        const n = Number(v);
        value = Number.isFinite(n) ? Math.max(0, n) : 0;
      }
      return { ...prev, [svcKey]: { ...cur, [key]: value } };
    });

  const toggleServiceAddon = (svcKey, aKey) =>
    setServiceAddons((prev) => {
      const svcAdds = { ...(prev[svcKey] || {}) };
      const def = (PRICING.services[svcKey].addons || []).find(
        (a) => a.key === aKey
      );
      if (!def) return prev;
      if (def.type === "stepper") return prev; // handled elsewhere
      svcAdds[aKey] = !svcAdds[aKey];
      return { ...prev, [svcKey]: svcAdds };
    });

  // compute per-service breakdown
  const computeServiceBreakdown = (svcKey) => {
    const svc = PRICING.services[svcKey];
    const inputs = serviceInputs[svcKey] || {};
    const addons = serviceAddons[svcKey] || {};

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
      const band =
        (svc.bands || []).find((b) => b.key === selectedKey) || svc.bands?.[0];
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
      const opt =
        (svc.options || []).find((o) => o.key === optKey) || svc.options?.[0];
      base = opt ? (opt.min + opt.max) / 2 : 0; // midpoint
    } else {
      base = svc.basePrice || 0;
      (svc.inputs || []).forEach((i) => {
        const val = Number(inputs[i.key] || 0);
        const beyond = Math.max(0, val - (i.baseIncludes || 0));
        variable += beyond * (i.perUnitPrice || 0);
      });
    }

    const subtotal = base + variable + addonTotal;
    const vat = subtotal * (PRICING.meta.vatRate || 0);
    const total = subtotal + vat;

    return { base, variable, addonTotal, subtotal, vat, total, notes };
  };

  // aggregate breakdown for all selected services
  const breakdown = useMemo(() => {
    const perService = {};
    let grandSubtotal = 0;
    let grandVat = 0;
    let grandTotal = 0;

    selectedServices.forEach((k) => {
      const b = computeServiceBreakdown(k);
      perService[k] = b;
      grandSubtotal += b.subtotal;
      grandVat += b.vat;
      grandTotal += b.total;
    });

    return { perService, grandSubtotal, grandVat, grandTotal };
  }, [selectedServices, serviceInputs, serviceAddons]);

  // Validation
  const [sending, setSending] = useState(false);
  const nameOk = customer.name.trim().length >= 2;
  const phoneOk = isUKMobile(customer.phone);
  const addressOk = customer.address.trim().length >= 5;
  const allOk = nameOk && phoneOk && addressOk && selectedServices.length > 0;

  // WhatsApp message (lists all selected services)
  const waMsg = encodeURIComponent(
    [
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Address: ${customer.address}`,
      `Eco Voltex – Booking Request`,
      `Domain: ${domain}`,
      `Services:`,
      ...selectedServices.flatMap((k) => {
        const svc = PRICING.services[k];
        const inputs = serviceInputs[k] || {};
        const adds = serviceAddons[k] || {};
        const lines = [];
        lines.push(`- ${k}`);
        (svc.inputs || []).forEach((i) =>
          lines.push(`${i.label}: ${inputs[i.key] || 0}`)
        );
        if (svc.model === "select_banded")
          lines.push(
            `Type: ${
              svc.bands?.find((b) => b.key === inputs._band)?.label || ""
            }`
          );
        if (
          svc.model === "quantity_banded" ||
          svc.model === "quantity_banded_with_extra"
        )
          lines.push(`Qty (${svc.unit}): ${inputs[svc.quantityKey] || 0}`);
        if (svc.model === "option_range")
          lines.push(
            `Option: ${
              svc.options?.find((o) => o.key === inputs._option)?.label || ""
            }`
          );

        const enabled = (svc.addons || [])
          .filter(
            (a) =>
              (a.type === "toggle" && adds[a.key]) ||
              (a.type === "stepper" && Number(adds[a.key]) > 0)
          )
          .map((a) =>
            a.type === "stepper"
              ? `${a.label} × ${Number(adds[a.key])} (${currency(
                  (a.unitPrice || 0) * Number(adds[a.key])
                )})`
              : a.label
          );
        if (enabled.length) lines.push(`Add-ons: ${enabled.join(", ")}`);

        const b = breakdown.perService[k] || { subtotal: 0, vat: 0, total: 0 };
        lines.push(`Total for ${k}: ${currency(b.total)}`);
        return lines;
      }),
      `Estimated total: ${currency(breakdown.grandTotal)}`,
      "Price shown in total is the mid-point. Final invoice will be within the displayed range after site review.",
      "Please confirm my booking and availability.",
    ]
      .filter(Boolean)
      .join("\n")
  );

  const waHref = `https://wa.me/${stripPhone(
    PRICING.meta.companyPhone
  )}?text=${waMsg}`;

  return (
    <>
      <Header />
      <main className="cctv cctv--page">
        {/* HERO omitted (unchanged) */}

        <section className="cctv-section cctv-hero" aria-labelledby="hero-title">
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              
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
                <img src="https://res.cloudinary.com/dug1siluu/image/upload/v1764085502/20251125_2042_Modern_Electrical_Workspace_Banner_simple_compose_01kaxtree2fykv11a2qkc4ar7z_rvc6l6.png" alt="Eco Voltex price wizard preview" className="cctv-img" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        <section id="wizard" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <div className="cctv-progress" aria-hidden>
              <span className="cctv-progress__bar" style={{ width: "100%" }} />
            </div>
            <h2 className="cctv-h2" style={{ textAlign: "center" }}>
              Configure Your Quote
            </h2>
            <p className="cctv-meta" style={{ textAlign: "center" }}>
              Fill the three steps below. Fields marked <b>*</b> are required to
              book.
            </p>

            <div className="cctv-grid cctv-grid-3 cctv-mt-16">
              {/* Column 1 – Step 1 */}
              <div className="cctv-card" aria-labelledby="step1-title">
                <div className="cctv-step">
                  <span>1</span> Select
                </div>
                <p className="cctv-meta">
                  Pick your domain and the services you need (multiple selection
                  supported).
                </p>

                <label className="cctv-label cctv-mt-8" id="step1-title">
                  Domain
                </label>
                <select
                  className="cctv-input"
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    // optionally reset selections when domain changes:
                    setSelectedServices([]);
                  }}
                >
                  {PRICING.domains.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>

                <label className="cctv-label cctv-mt-8">Services</label>
                <div className="cctv-mt-8" style={{ display: "grid", gap: 8 }}>
                  {Object.entries(PRICING.services)
                    .filter(([key, service]) => service.domain === domain)
                    .map(([key, service]) => (
                      <label
                        key={key}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(key)}
                          onChange={() => toggleServiceSelection(key)}
                        />
                        <span>{service.name}</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Column 2 – Step 2 */}
              <div className="cctv-card" aria-labelledby="step2-title">
                <div className="cctv-step">
                  <span>2</span> Configure
                </div>
                <p className="cctv-meta">
                  Configure each selected service. All selected services are
                  shown below.
                </p>

                {selectedServices.length === 0 && (
                  <p className="cctv-meta">
                    No services selected yet. Choose services in Step 1.
                  </p>
                )}

                {selectedServices.map((k) => {
                  const svc = PRICING.services[k];
                  const inputs = serviceInputs[k] || {};
                  const adds = serviceAddons[k] || {};

                  // Use breakdown (includes add-ons) when available
                  const svcBreak =
                    breakdown.perService[k] || computeServiceBreakdown(k);
                  const totalPrice = svcBreak.total;

                  return (
                    <div
                      key={k}
                      style={{
                        border: "1px solid #eef3f8",
                        padding: 12,
                        marginBottom: 12,
                        borderRadius: 8,
                      }}
                    >
                      <p className="cctv-strong">{svc.name}</p>

                      {/* Property Type / Band selection */}
                      {svc.model === "select_banded" && (
                        <div className="cctv-mt-8">
                          {/* If ONLY ONE band → auto-select and HIDE dropdown */}
                          {svc.bands.length === 1 ? (
                            <>
                              <p className="cctv-label">
                                {svc.bands[0].label} —{" "}
                                {currency(svc.bands[0].price)}
                              </p>

                              {/* Ensure value is stored automatically */}
                              {inputs._band !== svc.bands[0].key &&
                                handleServiceNumber(
                                  k,
                                  "_band",
                                  svc.bands[0].key
                                )}
                            </>
                          ) : (
                            <>
                              <label className="cctv-label">
                                Property Type
                              </label>
                              <select
                                className="cctv-input"
                                value={inputs._band || svc.bands[0].key}
                                onChange={(e) =>
                                  handleServiceNumber(
                                    k,
                                    "_band",
                                    e.target.value
                                  )
                                }
                              >
                                {svc.bands.map((b) => (
                                  <option key={b.key} value={b.key}>
                                    {b.label} — {currency(b.price)}
                                  </option>
                                ))}
                              </select>
                            </>
                          )}
                        </div>
                      )}
                      {/* Quantity based services */}

                      {(svc.model === "quantity_banded" ||
                        svc.model === "quantity_banded_with_extra") && (
                        <div className="cctv-mt-8">
                          <label className="cctv-label">
                            Number of {svc.unit}
                          </label>
                          <input
                            type="number"
                            min={0}
                            step={1}
                            className="cctv-input"
                            value={
                              inputs[svc.quantityKey] === undefined
                                ? 1
                                : inputs[svc.quantityKey]
                            }
                            onInput={(e) => {
                              let v = e.target.value;
                              v = v.replace(/^0+(?=\d)/, ""); // remove leading zeros
                              e.target.value = v;
                              handleServiceNumber(k, svc.quantityKey, v);
                            }}
                          />

                          {/* Show warning message if value exceeds last band */}
                          {(() => {
                            const maxBand =
                              svc.bands[svc.bands.length - 1]?.upTo || 0;
                            const currentValue = Number(
                              inputs[svc.quantityKey] || 0
                            );
                            if (currentValue > maxBand) {
                              return (
                                <p
                                  className="cctv-meta"
                                  style={{ color: "red" }}
                                >
                                  You have entered more than the typical maximum
                                  of {maxBand} {svc.unit}. Extra units will be
                                  included in your final quote.
                                </p>
                              );
                            }
                            return null;
                          })()}

                          <p className="cctv-meta">
                            Pricing bands:{" "}
                            {(svc.bands || [])
                              .map((b) => `${b.upTo} → ${currency(b.price)}`)
                              .join(", ")}
                          </p>
                        </div>
                      )}

                      {/* Option range */}
                      {svc.model === "option_range" && (
                        <div className="cctv-mt-8">
                          <label className="cctv-label">Select scope</label>
                          <select
                            className="cctv-input"
                            value={inputs._option ?? ""}
                            onChange={(e) =>
                              handleServiceNumber(k, "_option", e.target.value)
                            }
                          >
                            {svc.options.map((o) => (
                              <option key={o.key} value={o.key}>
                                {o.label} — {currency(o.min)}–{currency(o.max)}
                              </option>
                            ))}
                          </select>

                          <p className="cctv-meta">
                            Price shown in total is the mid-point. Final invoice
                            will be within the displayed range after site
                            review.
                          </p>
                        </div>
                      )}

                      {/* Add-ons */}
                      {svc.addons && svc.addons.length > 0 && (
                        <div className="cctv-mt-12">
                          <p className="cctv-strong">Add-ons</p>
                          <div
                            className="cctv-mt-8"
                            style={{ display: "grid", gap: "8px" }}
                          >
                            {svc.addons.map((a) => (
                              <div
                                key={a.key}
                                className="cctv-row"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: 8,
                                }}
                              >
                                <span>{a.label}</span>
                                {a.type === "info" ? (
                                  <span className="cctv-meta">
                                    {a.price
                                      ? `+ ${currency(a.price)}`
                                      : "Included"}
                                  </span>
                                ) : a.type === "toggle" ? (
                                  <>
                                    <span className="cctv-meta">
                                      + {currency(a.price || 0)}
                                    </span>
                                    <input
                                      type="checkbox"
                                      checked={!!adds[a.key]}
                                      onChange={() =>
                                        toggleServiceAddon(k, a.key)
                                      }
                                      aria-label={`Toggle ${a.label}`}
                                    />
                                  </>
                                ) : (
                                  // stepper
                                  <>
                                    <span className="cctv-meta">
                                      {currency(a.unitPrice || 0)} each
                                    </span>
                                    <input
                                      type="number"
                                      min={a.min ?? 0}
                                      max={a.max ?? 99}
                                      step={1}
                                      className="cctv-input"
                                      style={{ width: 90 }}
                                      value={Number(adds[a.key] ?? 0)}
                                      onChange={(e) =>
                                        setServiceAddons((prev) => ({
                                          ...prev,
                                          [k]: {
                                            ...(prev[k] || {}),
                                            [a.key]: Math.max(
                                              a.min ?? 0,
                                              Math.min(
                                                a.max ?? 99,
                                                Number(e.target.value || 0)
                                              )
                                            ),
                                          },
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
                      )}

                      {/* Estimated total */}
                      <div style={{ marginTop: 8 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="cctv-meta">Estimated total</div>
                          <div className="cctv-strong">
                            {currency(totalPrice)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Column 3 – Step 3 (unchanged) */}
              <div
                className="cctv-card cctv-summary"
                aria-labelledby="step3-title"
                style={{ position: "sticky", top: "2rem" }}
              >
                <div className="cctv-step">
                  <span>3</span> Your Details & Summary
                </div>
                <p id="step3-title" className="cctv-meta">
                  Add your details so we can confirm your booking instantly.
                </p>

                <label className="cctv-label cctv-mt-8">
                  Full Name <b>*</b>
                </label>
                <input
                  className={`cctv-input ${
                    touched.name && !nameOk ? "cctv-input--error" : ""
                  }`}
                  placeholder="e.g., Mudassar Riaz"
                  value={customer.name}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  onChange={(e) =>
                    setCustomer((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                {touched.name && !nameOk && (
                  <p style={{ color: "red" }}>Please enter your name.</p>
                )}

                <label className="cctv-label cctv-mt-8">
                  Phone <b>*</b>
                </label>
                <input
                  className={`cctv-input ${
                    touched.phone && !phoneOk ? "cctv-input--error" : ""
                  }`}
                  placeholder="07XXXXXXXXX"
                  value={customer.phone}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  onChange={(e) =>
                    setCustomer((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
                {touched.phone && !phoneOk && (
                  <p style={{ color: "red" }}>
                    Enter a UK mobile (07XXXXXXXXX).
                  </p>
                )}

                <label className="cctv-label cctv-mt-8">
                  Address <b>*</b>
                </label>
                <textarea
                  className={`cctv-input ${
                    touched.address && !addressOk ? "cctv-input--error" : ""
                  }`}
                  rows={3}
                  placeholder="House/Flat, Street, Town, Postcode"
                  value={customer.address}
                  onBlur={() => setTouched((t) => ({ ...t, address: true }))}
                  onChange={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                />
                {touched.address && !addressOk && (
                  <p style={{ color: "red" }}>
                    Please include house/flat, street and postcode.
                  </p>
                )}

                <div className="cctv-divider cctv-mt-12" />

                <p className="cctv-strong">Selected Services</p>
                {selectedServices.length === 0 && (
                  <p className="cctv-meta">No services selected.</p>
                )}

                {selectedServices.map((k) => (
                  <div
                    key={k}
                    className="cctv-mt-8"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 6,
                    }}
                  >
                    <div className="cctv-meta">{k}</div>
                    <div className="cctv-strong">
                      {currency(breakdown.perService[k]?.total || 0)}
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    gridColumn: "1 / -1",
                    borderTop: "1px solid #E6EDF3",
                    margin: "6px 0",
                  }}
                />
                <div
                  className="cctv-row"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>Grand total</div>
                  <div className="cctv-h3">
                    {currency(breakdown.grandTotal)}
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (selectedServices.length === 0) {
                      alert("Please select at least one service.");
                      return;
                    }
                    if (!nameOk) {
                      alert("Please enter your name.");
                      return;
                    }
                    if (!phoneOk) {
                      alert("Enter a valid UK mobile number (07XXXXXXXXX).");
                      return;
                    }
                    if (!addressOk) {
                      alert("Please enter your full address.");
                      return;
                    }

                    // All fields ok, proceed
                    setSending(true);
                    setTimeout(() => {
                      window.open(waHref, "_blank");
                      setSending(false);
                    }, 500);
                  }}
                  className="cctv-btn cctv-btnPrimary cctv-btn--block cctv-mt-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                  }}
                  aria-label="Send booking details on WhatsApp"
                >
                  {sending ? (
                    <span
                      style={{
                        display: "inline-block",
                        animation: "spin 1s linear infinite",
                        fontSize: "1.2em",
                      }}
                    >
                      🔄
                    </span>
                  ) : (
                    "Send on WhatsApp"
                  )}

                  {/* Inline keyframes for spinner rotation */}
                  <style>
                    {`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
                  </style>
                </button>
              </div>
            </div>

            <p
              className="cctv-strong"
              style={{ textAlign: "center", fontSize: "1.1rem" }}
            >
              All prices shown are guide estimates. You’ll receive a clear,
              confirmed quote before any work begins.
            </p>
          </div>
        </section>

        <section className="cctv-section">
          <div className="cctv-container cctv-grid cctv-grid-2 cctv-mt-16">
            <div className="cctv-card">
              <p className="cctv-strong" style={{ fontSize: "1.1rem" }}>
                Deliverables & Turnaround
              </p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>
                  PDF certificates and reports with clear supporting photos.
                </li>
                <li>
                  Remedial schedule when needed (EICR codes C1, C2, C3 or FI).
                </li>
                <li>
                  Building Control notifications for all Part P and Third-Party
                  certified work.
                </li>
                <li>
                  Turnaround: usually within 24 hours for single-system tests,
                  or 48 hours for multi-system visits.
                </li>
              </ul>
            </div>

            <div className="cctv-card">
              <p className="cctv-strong" style={{ fontSize: "1.1rem" }}>
                General Terms
              </p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>All estimates are shared before any work begins.</li>
                <li>
                  Prices exclude parking, congestion zones and any required
                  materials.
                </li>
                <li>Payment is due upon invoice.</li>
                <li>
                  Cancellations made within 24 hours of a confirmed visit may
                  incur a charge.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
