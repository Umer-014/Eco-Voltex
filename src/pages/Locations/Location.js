import React, { useMemo, useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

export default function LocationsPreview() {
  const [active, setActive] = useState("central");
  const [query, setQuery] = useState("");
  const [postcode, setPostcode] = useState("");
  const [pcResult, setPcResult] = useState(null);

  // Modal state
  const [modal, setModal] = useState({
    open: false,
    type: "found", // 'found' | 'not-found'
    title: "",
    message: "",
    region: "",
  });

  const contactHref = "/contact"; // change if your contact page path differs
  const mapImageUrl =
    "https://res.cloudinary.com/dug1siluu/image/upload/v1757605665/ChatGPT_Image_Sep_11_2025_08_47_34_PM_ntffio.png";

  const palette = {
    central: "#16a34a",
    north: "#0ea5e9",
    east: "#f59e0b",
    west: "#8b5cf6",
    se: "#ef4444",
    sw: "#22c55e",
    greater: "#14b8a6",
    counties: "#64748b",
  };

  // ------- Postcode coverage (expanded outward codes) -------
  const postcodeIndex = useMemo(
    () => ({
      // EAST (E, IG, RM)
      E1: { area: "Whitechapel / Aldgate", region: "East London", id: "east" },
      E2: { area: "Bethnal Green / Shoreditch", region: "East London", id: "east" },
      E3: { area: "Bow / Mile End", region: "East London", id: "east" },
      E4: { area: "Chingford", region: "East London", id: "east" },
      E5: { area: "Clapton", region: "East London", id: "east" },
      E6: { area: "East Ham / Beckton", region: "East London", id: "east" },
      E7: { area: "Forest Gate", region: "East London", id: "east" },
      E8: { area: "Dalston / Haggerston", region: "East London", id: "east" },
      E9: { area: "Homerton / Hackney", region: "East London", id: "east" },
      E10: { area: "Leyton", region: "East London", id: "east" },
      E11: { area: "Leytonstone / Wanstead", region: "East London", id: "east" },
      E12: { area: "Manor Park", region: "East London", id: "east" },
      E13: { area: "Plaistow / Upton Park", region: "East London", id: "east" },
      E14: { area: "Canary Wharf / Poplar", region: "East London", id: "east" },
      E15: { area: "Stratford / West Ham", region: "East London", id: "east" },
      E16: { area: "Canning Town / Royal Docks", region: "East London", id: "east" },
      E17: { area: "Walthamstow", region: "East London", id: "east" },
      E18: { area: "South Woodford", region: "East London", id: "east" },
      IG1: { area: "Ilford", region: "East London", id: "east" },
      IG2: { area: "Gants Hill / Newbury Park", region: "East London", id: "east" },
      IG3: { area: "Seven Kings", region: "East London", id: "east" },
      IG4: { area: "Redbridge", region: "East London", id: "east" },
      IG5: { area: "Clayhall", region: "East London", id: "east" },
      IG6: { area: "Barkingside / Fairlop", region: "East London", id: "east" },
      IG7: { area: "Chigwell", region: "East London", id: "east" },
      IG8: { area: "Woodford Green", region: "East London", id: "east" },
      IG9: { area: "Buckhurst Hill", region: "East London", id: "east" },
      IG10: { area: "Loughton", region: "East London", id: "east" },
      IG11: { area: "Barking", region: "East London", id: "east" },
      RM1: { area: "Romford", region: "East London", id: "east" },
      RM2: { area: "Gidea Park", region: "East London", id: "east" },
      RM3: { area: "Harold Wood", region: "East London", id: "east" },
      RM5: { area: "Collier Row", region: "East London", id: "east" },
      RM6: { area: "Chadwell Heath", region: "East London", id: "east" },
      RM7: { area: "Rush Green", region: "East London", id: "east" },
      RM8: { area: "Dagenham (north)", region: "East London", id: "east" },
      RM9: { area: "Dagenham (central)", region: "East London", id: "east" },
      RM10: { area: "Dagenham (south)", region: "East London", id: "east" },

      // WEST (W, UB, TW)
      W1: { area: "Marylebone / Soho", region: "Central London", id: "central" },
      W2: { area: "Paddington / Bayswater", region: "West London", id: "west" },
      W3: { area: "Acton", region: "West London", id: "west" },
      W4: { area: "Chiswick", region: "West London", id: "west" },
      W5: { area: "Ealing", region: "West London", id: "west" },
      W6: { area: "Hammersmith", region: "West London", id: "west" },
      W7: { area: "Hanwell", region: "West London", id: "west" },
      W8: { area: "Kensington", region: "West London", id: "west" },
      W9: { area: "Maida Vale", region: "West London", id: "west" },
      W10: { area: "Ladbroke Grove", region: "West London", id: "west" },
      W11: { area: "Notting Hill", region: "West London", id: "west" },
      W12: { area: "Shepherd’s Bush", region: "West London", id: "west" },
      W13: { area: "West Ealing", region: "West London", id: "west" },
      W14: { area: "West Kensington", region: "West London", id: "west" },
      UB1: { area: "Southall", region: "West London", id: "west" },
      UB2: { area: "Southall (Norwood Green)", region: "West London", id: "west" },
      UB3: { area: "Hayes", region: "West London", id: "west" },
      UB4: { area: "Yeading", region: "West London", id: "west" },
      UB5: { area: "Northolt", region: "West London", id: "west" },
      UB6: { area: "Greenford / Perivale", region: "West London", id: "west" },
      UB7: { area: "West Drayton", region: "West London", id: "west" },
      UB8: { area: "Uxbridge", region: "West London", id: "west" },
      UB9: { area: "Denham / Harefield", region: "West London", id: "west" },
      UB10: { area: "Ickenham / Hillingdon", region: "West London", id: "west" },
      UB11: { area: "Stockley Park", region: "West London", id: "west" },
      TW1: { area: "Twickenham", region: "Greater London", id: "greater" },
      TW2: { area: "Whitton", region: "Greater London", id: "greater" },
      TW3: { area: "Hounslow", region: "West London", id: "west" },
      TW4: { area: "Hounslow West", region: "West London", id: "west" },
      TW5: { area: "Heston", region: "West London", id: "west" },
      TW7: { area: "Isleworth", region: "West London", id: "west" },
      TW8: { area: "Brentford", region: "West London", id: "west" },

      // NORTH / NORTH-WEST (N, NW, HA, EN)
      N1: { area: "Islington", region: "North & North-West London", id: "north" },
      N2: { area: "East Finchley", region: "North & North-West London", id: "north" },
      N3: { area: "Finchley Central", region: "North & North-West London", id: "north" },
      N4: { area: "Finsbury Park", region: "North & North-West London", id: "north" },
      N5: { area: "Highbury", region: "North & North-West London", id: "north" },
      N6: { area: "Highgate", region: "North & North-West London", id: "north" },
      N7: { area: "Holloway", region: "North & North-West London", id: "north" },
      N8: { area: "Crouch End", region: "North & North-West London", id: "north" },
      N9: { area: "Lower Edmonton", region: "North & North-West London", id: "north" },
      N10: { area: "Muswell Hill", region: "North & North-West London", id: "north" },
      N11: { area: "New Southgate", region: "North & North-West London", id: "north" },
      N12: { area: "North Finchley", region: "North & North-West London", id: "north" },
      N13: { area: "Palmers Green", region: "North & North-West London", id: "north" },
      N14: { area: "Southgate", region: "North & North-West London", id: "north" },
      N15: { area: "Seven Sisters", region: "North & North-West London", id: "north" },
      N16: { area: "Stoke Newington", region: "North & North-West London", id: "north" },
      N17: { area: "Tottenham", region: "North & North-West London", id: "north" },
      N18: { area: "Upper Edmonton", region: "North & North-West London", id: "north" },
      N19: { area: "Archway", region: "North & North-West London", id: "north" },
      N20: { area: "Whetstone", region: "North & North-West London", id: "north" },
      N21: { area: "Winchmore Hill", region: "North & North-West London", id: "north" },
      N22: { area: "Wood Green", region: "North & North-West London", id: "north" },
      NW1: { area: "Camden Town / Regent’s Park", region: "North & North-West London", id: "north" },
      NW2: { area: "Cricklewood / Dollis Hill", region: "North & North-West London", id: "north" },
      NW3: { area: "Hampstead", region: "North & North-West London", id: "north" },
      NW4: { area: "Hendon", region: "North & North-West London", id: "north" },
      NW5: { area: "Kentish Town / Gospel Oak", region: "North & North-West London", id: "north" },
      NW6: { area: "Kilburn / West Hampstead", region: "North & North-West London", id: "north" },
      NW7: { area: "Mill Hill", region: "North & North-West London", id: "north" },
      NW8: { area: "St John’s Wood", region: "North & North-West London", id: "north" },
      NW9: { area: "Colindale / Kingsbury", region: "North & North-West London", id: "north" },
      NW10: { area: "Willesden / Harlesden / Park Royal", region: "North & North-West London", id: "north" },
      NW11:{ area: "Golders Green", region: "North & North-West London", id: "north" },
      HA0: { area: "Wembley Central", region: "North & North-West London", id: "north" },
      HA1: { area: "Harrow", region: "North & North-West London", id: "north" },
      HA2: { area: "South Harrow", region: "North & North-West London", id: "north" },
      HA3: { area: "Harrow / Wealdstone", region: "North & North-West London", id: "north" },
      HA4: { area: "Ruislip", region: "North & North-West London", id: "north" },
      HA5: { area: "Pinner", region: "North & North-West London", id: "north" },
      HA6: { area: "Northwood", region: "North & North-West London", id: "north" },
      HA7: { area: "Stanmore", region: "North & North-West London", id: "north" },
      HA8: { area: "Edgware", region: "North & North-West London", id: "north" },
      HA9: { area: "Wembley Stadium", region: "North & North-West London", id: "north" },
      EN1: { area: "Enfield Town", region: "North & North-West London", id: "north" },
      EN2: { area: "Enfield Chase", region: "North & North-West London", id: "north" },
      EN3: { area: "Ponders End", region: "North & North-West London", id: "north" },

      // SOUTH-EAST (SE, BR, DA)
      SE1: { area: "Waterloo / London Bridge", region: "South-East London", id: "se" },
      SE2: { area: "Abbey Wood", region: "South-East London", id: "se" },
      SE3: { area: "Blackheath", region: "South-East London", id: "se" },
      SE4: { area: "Brockley", region: "South-East London", id: "se" },
      SE5: { area: "Camberwell", region: "South-East London", id: "se" },
      SE6: { area: "Catford / Hither Green", region: "South-East London", id: "se" },
      SE7: { area: "Charlton", region: "South-East London", id: "se" },
      SE8: { area: "Deptford", region: "South-East London", id: "se" },
      SE9: { area: "Eltham", region: "South-East London", id: "se" },
      SE10:{ area: "Greenwich", region: "South-East London", id: "se" },
      SE12:{ area: "Lee / Grove Park", region: "South-East London", id: "se" },
      SE13:{ area: "Lewisham", region: "South-East London", id: "se" },
      SE14:{ area: "New Cross", region: "South-East London", id: "se" },
      SE15:{ area: "Peckham / Nunhead", region: "South-East London", id: "se" },
      SE16:{ area: "Surrey Quays / Rotherhithe", region: "South-East London", id: "se" },
      SE17:{ area: "Walworth / Elephant", region: "South-East London", id: "se" },
      SE18:{ area: "Woolwich / Plumstead", region: "South-East London", id: "se" },
      SE23:{ area: "Forest Hill", region: "South-East London", id: "se" },
      SE26:{ area: "Sydenham", region: "South-East London", id: "se" },
      BR1: { area: "Bromley", region: "South-East London", id: "se" },
      BR2: { area: "Bromley Common / Keston", region: "South-East London", id: "se" },
      BR3: { area: "Beckenham", region: "South-East London", id: "se" },
      BR7: { area: "Chislehurst", region: "South-East London", id: "se" },
      DA1: { area: "Dartford", region: "South-East London", id: "se" },
      DA5: { area: "Bexley", region: "South-East London", id: "se" },
      DA6: { area: "Bexleyheath", region: "South-East London", id: "se" },

      // SOUTH-WEST (SW, KT, CR slice)
      SW1: { area: "Westminster / Victoria", region: "Central London", id: "central" },
      SW2: { area: "Brixton", region: "South-West London", id: "sw" },
      SW3: { area: "Chelsea", region: "South-West London", id: "sw" },
      SW4: { area: "Clapham", region: "South-West London", id: "sw" },
      SW5: { area: "Earls Court", region: "South-West London", id: "sw" },
      SW6: { area: "Fulham", region: "South-West London", id: "sw" },
      SW7: { area: "South Kensington", region: "South-West London", id: "sw" },
      SW8: { area: "Nine Elms / Vauxhall", region: "South-West London", id: "sw" },
      SW9: { area: "Stockwell", region: "South-West London", id: "sw" },
      SW10:{ area: "West Brompton / World’s End", region: "South-West London", id: "sw" },
      SW11:{ area: "Battersea", region: "South-West London", id: "sw" },
      SW12:{ area: "Balham", region: "South-West London", id: "sw" },
      SW13:{ area: "Barnes", region: "South-West London", id: "sw" },
      SW14:{ area: "Mortlake / East Sheen", region: "South-West London", id: "sw" },
      SW15:{ area: "Putney / Roehampton", region: "South-West London", id: "sw" },
      SW16:{ area: "Streatham", region: "South-West London", id: "sw" },
      SW17:{ area: "Tooting", region: "South-West London", id: "sw" },
      SW18:{ area: "Wandsworth / Earlsfield", region: "South-West London", id: "sw" },
      SW19:{ area: "Wimbledon", region: "South-West London", id: "sw" },
      SW20:{ area: "Raynes Park", region: "South-West London", id: "sw" },
      KT1: { area: "Kingston upon Thames", region: "South-West London", id: "sw" },
      KT2: { area: "Kingston (North)", region: "South-West London", id: "sw" },
      KT3: { area: "New Malden", region: "South-West London", id: "sw" },
      KT4: { area: "Worcester Park", region: "South-West London", id: "sw" },
      KT5: { area: "Surbiton (Berrylands)", region: "South-West London", id: "sw" },
      KT6: { area: "Surbiton", region: "South-West London", id: "sw" },
      KT7: { area: "Thames Ditton", region: "South-West London", id: "sw" },
      CR0: { area: "Croydon", region: "Greater London", id: "greater" },
      CR4: { area: "Mitcham", region: "South-West London", id: "sw" },

      // CENTRAL (WC, EC)
      WC1: { area: "Bloomsbury", region: "Central London", id: "central" },
      WC2: { area: "Covent Garden / Strand", region: "Central London", id: "central" },
      EC1: { area: "Clerkenwell / Farringdon", region: "Central London", id: "central" },
      EC1A: { area: "Smithfield", region: "Central London", id: "central" },
      EC2: { area: "Bank / Moorgate", region: "Central London", id: "central" },
      EC3: { area: "Monument / Tower", region: "Central London", id: "central" },
      EC4: { area: "St Paul’s / Blackfriars", region: "Central London", id: "central" },
    }),
    []
  );

  // Extract outward code: A9, A99, AA9, AA99, A9A, AA9A
  const outward = (pc) => {
    const n = pc.toUpperCase().replace(/[^A-Z0-9]/g, "");
    const m = n.match(/^([A-Z]{1,2}\d[A-Z\d]?)/);
    return m ? m[1] : "";
  };

  // Smart postcode search with regional fallback
  const searchPostcode = () => {
    const key = outward(postcode);
    if (!key) {
      setPcResult({ status: "invalid" });
      openNotFoundModal("Invalid postcode", "Please enter a valid UK postcode (e.g. E13 9AB or UB8).");
      return;
    }
    const hit = postcodeIndex[key];
    if (hit) {
      setPcResult({ status: "covered", ...hit });
      setActive(hit.id);
      setTimeout(() => {
        document.getElementById(`region-${hit.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
      openFoundModal(hit.region, `We found your area (${hit.area}) in this region.`);
      return;
    }
    const prefix = key.replace(/\d.*$/, "").toUpperCase();
    const heur = {
      EC: { region: "Central London", id: "central" },
      WC: { region: "Central London", id: "central" },
      E: { region: "East London", id: "east" }, IG: { region: "East London", id: "east" }, RM: { region: "East London", id: "east" },
      SE: { region: "South-East London", id: "se" }, BR: { region: "South-East London", id: "se" }, DA: { region: "South-East London", id: "se" },
      SW: { region: "South-West London", id: "sw" }, KT: { region: "South-West London", id: "sw" }, CR: { region: "Greater London", id: "greater" },
      W: { region: "West London", id: "west" }, UB: { region: "West London", id: "west" }, TW: { region: "West London", id: "west" },
      N: { region: "North & North-West London", id: "north" }, EN: { region: "North & North-West London", id: "north" },
      NW: { region: "North & North-West London", id: "north" }, HA: { region: "North & North-West London", id: "north" },
    };
    const h = heur[prefix];
    if (h) {
      setPcResult({ status: "covered", area: key, region: h.region, id: h.id });
      setActive(h.id);
      setTimeout(() => {
        document.getElementById(`region-${h.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
      openFoundModal(h.region, `We found your area (${key}) in this region.`);
    } else {
      setPcResult({ status: "unknown", key });
      openNotFoundModal(
        "Area not found",
        `We couldn't match "${key}". Please contact us and we'll confirm coverage immediately.`
      );
    }
  };

  // ------- Regions (for display + area search) -------
  const regions = useMemo(() => [
    {
      id: "central",
      title: "Central London",
      blurb: "Fast, precise, and discreet services for apartments, offices, and businesses in the heart of the city.",
      areas: [
        "Aldgate","Bank","Barbican","Belgravia","Bloomsbury","Charing Cross","Covent Garden","Euston","Farringdon","Fitzrovia","Holborn","King's Cross","Marylebone","Mayfair","Oxford Circus","Paddington","Soho","South Bank","St James's","Strand","Victoria","Westminster"
      ]
    },
    {
      id: "north",
      title: "North & North-West London",
      blurb: "Trusted for residential upgrades, commercial installations, and 24/7 emergency call-outs across North and North-West London.",
      areas: [
        "Archway","Arsenal","Barnet","Baker Street","Brent Cross","Camden Town","Colindale","Crouch End","Cricklewood","Edgware","Edmonton","Enfield","Finchley","Finsbury Park","Golders Green","Gospel Oak","Hampstead","Harringay","Harrow","Hendon","Highbury","Highgate","Holloway","Islington","Kentish Town","Kilburn","Mill Hill","Muswell Hill","Palmers Green","Park Royal","Seven Sisters","Southgate","Stoke Newington","Tottenham","Wembley","West Hampstead","Winchmore Hill","Wood Green"
      ]
    },
    {
      id: "east",
      title: "East London",
      blurb: "Modern, energy-saving installations and reliable electrical maintenance for homes and businesses across East London.",
      areas: [
        "Aldgate East","Beckton","Bethnal Green","Bow","Canning Town","Canary Wharf","Chadwell Heath","Clapton","Dagenham","East Ham","Forest Gate","Hackney","Homerton","Hoxton","Ilford","Leyton","Leytonstone","Limehouse","Manor Park","Mile End","Newham","Old Street","Plaistow","Poplar","Shoreditch","Stepney","Stratford","Tower Hamlets","Tower Hill","Upton Park","Walthamstow","Wanstead","Wapping","West Ham","Whitechapel","Woodford"
      ]
    },
    {
      id: "west",
      title: "West London",
      blurb: "Premium, high-standard electrical services for West London’s homes, businesses, and landmarks.",
      areas: [
        "Acton","Bayswater","Brentford","Chiswick","Ealing","Ealing Broadway","Edgware Road","Greenford","Gunnersbury","Hammersmith","Hanwell","Holland Park","Hounslow","Isleworth","Kensal Rise","Kensington","Kew","Knightsbridge","Ladbroke Grove","Lancaster Gate","Maida Vale","Notting Hill","Northfields","Northolt","Paddington","Perivale","Richmond","Shepherd’s Bush","Southall","Uxbridge","West Drayton","West Ealing","White City"
      ]
    },
    {
      id: "se",
      title: "South-East London",
      blurb: "Expert electrical solutions for residential and commercial properties across South-East London.",
      areas: [
        "Abbey Wood","Beckenham","Bellingham","Bermondsey","Blackheath","Brockley","Bromley","Camberwell","Catford","Charlton","Crystal Palace","Deptford","Dulwich","Elephant & Castle","Eltham","Forest Hill","Greenwich","Hither Green","Kidbrooke","Lee","Lewisham","London Bridge","New Cross","Nunhead","Orpington","Peckham","Penge","Plumstead","Sidcup","Southwark","Surrey Quays","Sydenham","Thamesmead","Waterloo","Welling","Woolwich"
      ]
    },
    {
      id: "sw",
      title: "South-West London",
      blurb: "From riverside apartments to commercial hubs, we provide fast, reliable services with a focus on sustainability and safety.",
      areas: [
        "Balham","Barnes","Battersea","Brixton","Chelsea","Clapham","Colliers Wood","Earls Court","Earlsfield","Fulham","Hampton","Hampton Wick","Kew Bridge","Kingston upon Thames","Mitcham","Morden","New Malden","Nine Elms","Parsons Green","Putney","Richmond","Roehampton","Southfields","Stockwell","Streatham","Surbiton","Tooting","Vauxhall","Wandsworth","Wimbledon"
      ]
    },
    {
      id: "greater",
      title: "Greater London",
      blurb: "Extending our expertise to Greater London — the same professional service just outside the city centre.",
      areas: [
        "Bromley (borough-wide)","Croydon","Edgware (edge NW)","Hayes","Heathrow","Hillingdon","Hounslow (borough-wide)","Ickenham","Ilford (Redbridge)","Isleworth","Northolt","Pinner","Ruislip","Sidcup","Sutton","Twickenham","Watford","Wembley","Worcester Park"
      ]
    },
    {
      id: "counties",
      title: "Surrounding Areas & Counties",
      blurb: "We also serve neighbouring counties with the same eco-friendly, professional approach.",
      areas: [
        "Surrey — Guildford, Epsom, Weybridge, Walton-on-Thames, Esher",
        "Berkshire — Reading, Slough, Windsor, Ascot",
        "Hampshire — Basingstoke, Farnborough, Aldershot",
        "Essex — Romford, Brentwood, Chigwell, Loughton",
        "Kent — Dartford, Sevenoaks, Orpington borders",
        "Hertfordshire — Watford, Bushey, Borehamwood"
      ]
    }
  ], []);

  const allAreas = useMemo(
    () => regions.flatMap((r) => r.areas.map((a) => ({ area: a, region: r.title, id: r.id }))),
    [regions]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allAreas.filter(({ area }) => area.toLowerCase().includes(q)).slice(0, 40);
  }, [query, allAreas]);

  // --- Modal helpers
  const openFoundModal = (region, prefixMessage = "We found your area in this region.") => {
    setModal({
      open: true,
      type: "found",
      title: "Area Found",
      message: `${prefixMessage} Please contact us for the work.`,
      region,
    });
  };
  const openNotFoundModal = (
    title = "Area Not Found",
    message = "We couldn’t find your area. Please contact us and we’ll confirm coverage right away."
  ) => {
    setModal({
      open: true,
      type: "not-found",
      title,
      message,
      region: "",
    });
  };
  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  // Press Enter inside the area search to trigger modal if no results
  const areaInputRef = useRef(null);
  const onAreaKeyDown = (e) => {
    if (e.key === "Enter") {
      if (filtered.length > 0) {
        const first = filtered[0];
        setActive(first.id);
        document.getElementById(`region-${first.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
        openFoundModal(first.region, `We found your area (${first.area}) in this region.`);
      } else {
        openNotFoundModal("Area Not Found", "We couldn’t find a match. Please contact us and we’ll confirm right away.");
      }
    }
  };

  return (
    <>
      <Header />

      <div className="ev-wrap">
        <style>{styles(palette)}</style>

        {/* HERO GRID: left = search; right = image (desktop). On mobile it stacks and image goes under search. */}
        <header className="hero">
          <div className="hero-grid">
            <div className="hero-left">
              <h1>Proudly Serving London & Surrounding Areas</h1>
              <p>
                Eco Voltex delivers reliable, professional, and sustainable electrical solutions across
                Greater London and neighbouring counties. Our certified electricians are ready to power your
                projects with precision — wherever you are.
              </p>

              {/* Area search */}
              <div className="search">
                <label htmlFor="area-search">Find your area</label>
                <input
                  id="area-search"
                  type="text"
                  inputMode="search"
                  placeholder="Type a borough, town, or landmark (e.g. Upton Park, Uxbridge, Southall)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onAreaKeyDown}
                  aria-autocomplete="list"
                  aria-controls="results"
                  ref={areaInputRef}
                />
                {query && (
                  <div id="results" className="search-results" role="listbox">
                    {filtered.length === 0 ? (
                      <div className="empty">
                        No matches found. <strong>If you don’t see your area, please contact our team.</strong>
                        <div className="inline-actions">
                          <a className="btn ghost" href="mailto:info@ecovoltex.co.uk">Email us</a>
                          <a className="btn ghost" href="tel:07930558824">Call 07930 558824</a>
                          <button className="btn ghost" onClick={() => openNotFoundModal()}>
                            Open contact dialog
                          </button>
                        </div>
                      </div>
                    ) : (
                      filtered.map((item, i) => (
                        <button
                          key={`${item.area}-${i}`}
                          className="result"
                          onClick={() => {
                            setActive(item.id);
                            document.getElementById(`region-${item.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                            openFoundModal(item.region, `We found your area (${item.area}) in this region.`);
                          }}
                          role="option"
                        >
                          <span className="area">{item.area}</span>
                          <span className="region">{item.region}</span>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Postcode checker */}
              <div className="postcode">
                <label htmlFor="pc">Or check by postcode</label>
                <div className="pc-row">
                  <input
                    id="pc"
                    type="text"
                    placeholder="e.g. E13 9AB, UB8 1, SE16"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                  <button className="btn" onClick={searchPostcode}>Check coverage</button>
                </div>
                {pcResult && (
                  <div className={`pc-result ${pcResult.status}`}>
                    {pcResult.status === "invalid" && (
                      <span>Please enter a valid UK postcode (e.g. E13 9AB or UB8).</span>
                    )}
                    {pcResult.status === "covered" && (
                      <span>
                        
                        <button
                          className="link"
                          onClick={() => {
                            setActive(pcResult.id);
                            document.getElementById(`region-${pcResult.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                        ></button>
                      </span>
                    )}
                    {pcResult.status === "unknown" && (
                      <span>
                        Likely covered near <strong>{pcResult.key}</strong>. If you don’t see your exact area,
                        <a className="link" href={contactHref}> contact us</a> and we’ll confirm.
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT IMAGE (desktop). On mobile it appears under the search section. */}
            <figure className="hero-map">
              <img
                src={mapImageUrl}
                alt="Eco Voltex coverage—London map with company logo"
                loading="eager"
              />
              
            </figure>
          </div>
        </header>

        <main className="container">
          {regions.map((r) => (
            <section key={r.id} id={`region-${r.id}`} className="accordion">
              <button
                className={`accordion-title ${active === r.id ? "open" : ""}`}
                onClick={() => setActive(active === r.id ? null : r.id)}
                aria-expanded={active === r.id}
                style={{ borderLeftColor: palette[r.id] }}
              >
                <span className="dot" style={{ background: palette[r.id] }} />
                {r.title}
                <span className="chev" aria-hidden>▾</span>
              </button>
              <div className={`accordion-panel ${active === r.id ? "show" : ""}`}>
                <p className="blurb">{r.blurb}</p>
                <ul className="grid">
                  {r.areas.map((a) => (
                    <li key={a} className="chip" style={{ borderColor: palette[r.id] }}>{a}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </main>

        {/* Modal dialog */}
        {modal.open && (
          <Modal onClose={closeModal}>
            <div className="modal-header">
              <h3>{modal.title}</h3>
            </div>
            <div className="modal-body">
              <p>{modal.message}</p>
              {modal.region && <p className="modal-region"><strong>Region:</strong> {modal.region}</p>}
            </div>
            <div className="modal-footer">
              <a className="btn" href={contactHref}>Contact Us</a>
              <button className="btn ghost" onClick={closeModal}>Cancel</button>
            </div>
          </Modal>
        )}
      </div>

      <Footer />
    </>
  );
}

/** Accessible modal component (no external libs) */
function Modal({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="ev-modal" role="dialog" aria-modal="true">
      <style>{modalStyles}</style>
      <div className="ev-modal-backdrop" onClick={onClose} />
      <div className="ev-modal-card" role="document">
        {children}
      </div>
    </div>
  );
}

function styles(palette) {
  return `
  :root { --text:#111827; --muted:#4b5563; --line:#e5e7eb; --bg:#f6faf7; --chip:#ffffff; }
  * { box-sizing: border-box; }
  .ev-wrap { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: var(--text); }

  .hero { padding: 40px 16px 28px; background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 60%); }
  .hero-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 28px; align-items: center; }
  .hero-left { text-align: left; }
  .hero h1 { margin: 0 0 10px; font-size: clamp(28px, 4vw, 42px); font-weight: 800; letter-spacing: -0.02em; }
  .hero p { margin: 0 0 12px; max-width: 900px; color: var(--muted); font-size: clamp(16px, 2.4vw, 18px); }

  /* Right-side image on desktop, stacks below on mobile */
  .hero-map { margin: 0; }
  .hero-map img { width: 100%; height: auto; display: block; border-radius: 18px; box-shadow: 0 18px 36px rgba(0,0,0,0.12); border: 1px solid #e5e7eb; background:#fff; }

  .search { margin-top: 16px; position: relative; text-align: left; }
  .search label { display: block; font-size: 13px; color: var(--muted); margin-bottom: 6px; }
  .search input { width: 100%; padding: 14px; border: 1px solid var(--line); border-radius: 14px; font-size: 16px; outline: none; background: #fff; }
  .search input:focus { border-color: ${palette.central}; box-shadow: 0 0 0 4px rgba(22,163,74,0.15); }
  .search-results { position: absolute; top: 82px; left: 0; right: 0; background: #fff; border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 16px 32px rgba(0,0,0,0.08); padding: 8px; max-height: 360px; overflow: auto; z-index: 10; }
  .search-results .empty { padding: 12px; color: var(--muted); font-size: 14px; }
  .inline-actions { margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap; }
  .result { width: 100%; text-align: left; display: flex; justify-content: space-between; gap: 12px; border: none; background: transparent; padding: 10px 12px; border-radius: 10px; font-size: 15px; cursor: pointer; }
  .result:hover { background: #f0fdf4; }
  .result .area { font-weight: 600; }
  .result .region { color: var(--muted); font-size: 13px; }

  .postcode { margin-top: 18px; text-align: left; }
  .postcode label { display: block; font-size: 13px; color: var(--muted); margin-bottom: 6px; }
  .pc-row { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
  .pc-row input { padding: 14px; border: 1px solid var(--line); border-radius: 14px; font-size: 16px; }
  .btn { padding: 12px 16px; border-radius: 12px; border: 1px solid ${palette.central}; background: ${palette.central}; color: #fff; font-weight: 700; cursor: pointer; }
  .btn.ghost { background: transparent; color: ${palette.central}; border-color: ${palette.central}; }
  .btn:hover { filter: brightness(0.95); }
  .link { background: none; border: none; color: ${palette.central}; font-weight: 700; cursor: pointer; margin-left: 6px; }

  .pc-result { margin-top: 10px; font-size: 14px; }
  .pc-result.invalid { color: #b91c1c; }
  .pc-result.unknown { color: #92400e; }
  .pc-result.covered { color: #065f46; }

  .container { max-width: 1120px; margin: 0 auto; padding: 32px 16px 64px; }

  .accordion { border: 1px solid var(--line); border-radius: 18px; margin-bottom: 16px; overflow: hidden; background: #fff; }
  .accordion-title { width: 100%; padding: 16px 18px; font-size: 18px; font-weight: 800; text-align: left; background: #fff; border: none; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; cursor: pointer; border-left: 6px solid transparent; }
  .accordion-title:hover { background: #f9fafb; }
  .accordion-title.open { border-bottom: 1px solid var(--line); }
  .dot { width: 12px; height: 12px; border-radius: 999px; }
  .chev { transition: transform .25s ease; }
  .accordion-title.open .chev { transform: rotate(180deg); }

  .accordion-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .25s ease; }
  .accordion-panel.show { grid-template-rows: 1fr; }
  .accordion-panel > * { overflow: hidden; }
  .blurb { padding: 14px 18px 0; color: var(--muted); }

  .grid { list-style: none; margin: 10px 0 18px; padding: 0 12px 16px; display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; }
  .chip { background: #fff; padding: 10px 12px; border: 1px solid var(--line); border-radius: 999px; text-align: center; font-size: 14px; }

  .mini-footer { text-align: center; padding: 28px 12px; color: var(--muted); }

  /* Mobile tweaks */
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; gap: 18px; }
    .search-results { top: 78px; }
    .pc-row { grid-template-columns: 1fr; }
  }
  `;
}

const modalStyles = `
.ev-modal { position: fixed; inset: 0; z-index: 50; }
.ev-modal-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.45); }
.ev-modal-card {
  position: relative;
  max-width: 560px;
  margin: 10vh auto 0;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 24px 48px rgba(0,0,0,0.2);
  padding: 18px;
  display: grid;
  gap: 12px;
}
.modal-header h3 { margin: 0; font-size: 20px; font-weight: 800; }
.modal-body p { margin: 0 0 6px; color: #374151; }
.modal-region { color: #111827; }
.modal-footer { display: flex; gap: 10px; justify-content: flex-end; margin-top: 8px; }
.modal-footer .btn { padding: 10px 14px; border-radius: 10px; }
.modal-footer .btn.ghost { border: 1px solid #e5e7eb; color: #111827; }
`;
