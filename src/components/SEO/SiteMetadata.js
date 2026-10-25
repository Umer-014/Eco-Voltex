import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.ecovoltex.co.uk";

const pages = {
  "/": {
    title: "Electricians in London | Eco Voltex",
    description:
      "Eco Voltex provides electrical installation, emergency repairs, fire alarms, CCTV, EV charging and PAT testing for homes and businesses in London.",
  },
  "/about": {
    title: "About Eco Voltex | London Electrical Services",
    description:
      "Meet Eco Voltex, a London electrical services provider focused on safe, reliable electrical work for residential and commercial properties.",
  },
  "/services/pat-testing": {
    title: "PAT Testing in London | Eco Voltex",
    description:
      "Arrange PAT testing in London for homes, landlords and businesses. Get clear results, appliance records and practical scheduling from Eco Voltex.",
  },
  "/services/fire-alarms": {
    title: "Fire Alarm Installation & Maintenance London",
    description:
      "Fire alarm design, installation, commissioning and maintenance across London. Eco Voltex supports domestic and commercial systems to relevant standards.",
  },
  "/services/cctv": {
    title: "CCTV Installation in London | Eco Voltex",
    description:
      "Explore CCTV installation for London homes and businesses, with camera planning, secure recording and clear remote viewing options.",
  },
  "/contact": {
    title: "Contact Eco Voltex | London Electricians",
    description:
      "Contact Eco Voltex about electrical work, fire alarms, CCTV, EV charging or testing in London. Tell us about your property and requirements.",
  },
  "/faq": {
    title: "Electrical & Safety Services FAQs | Eco Voltex",
    description:
      "Find answers about Eco Voltex electrical, inspection, PAT testing, fire alarm and security services for properties in London and nearby areas.",
  },
  "/services/electrical-installation-maintenance": {
    title: "Electrical Installation & Maintenance London",
    description:
      "Electrical installation and maintenance in Greater London, including lighting, rewiring, consumer unit upgrades and electrical repairs.",
  },
  "/services/emergency-electrical": {
    title: "Emergency Electrician in London | Eco Voltex",
    description:
      "Need an emergency electrician in London? Contact Eco Voltex about urgent electrical faults, power loss and tripping circuits.",
  },
  "/services/it-digital-services": {
    title: "IT & Digital Services for Businesses | Eco Voltex",
    description:
      "Explore Eco Voltex IT and digital services for businesses, including websites, software, cloud, IT support and digital marketing.",
  },
  "/services/ev-charging": {
    title: "EV Charger Installation in London | Eco Voltex",
    description:
      "Plan home or workplace EV charger installation in London with an assessment of your electrical supply, parking and installation requirements.",
  },
  "/areas-we-cover": {
    title: "Areas We Cover | London & Surrounding Areas",
    description:
      "Check the London and surrounding areas served by Eco Voltex for electrical installation, emergency repairs, fire alarms, CCTV and testing.",
  },
  "/book now": {
    title: "Book Electrical Services | Eco Voltex London",
    description:
      "Choose a service and request a booking with Eco Voltex for electrical testing, installation, fire safety and other property services in London.",
  },
  "/feedback": {
    title: "Customer Feedback | Eco Voltex",
    description: "Read and share feedback about Eco Voltex services.",
    noIndex: true,
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

export default function SiteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    let decodedPath = pathname;
    try {
      decodedPath = decodeURIComponent(pathname);
    } catch (error) {
      console.error("Unable to decode the current URL for page metadata.", error);
    }

    const page = pages[decodedPath.toLowerCase()] || {
      title: "Page Not Found | Eco Voltex",
      description: "The requested Eco Voltex page could not be found.",
      noIndex: true,
    };
    const canonicalPath = decodedPath
      .toLowerCase()
      .split("/")
      .map(encodeURIComponent)
      .join("/");
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.noIndex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:image", `${SITE_URL}/logo1.png`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", canonicalUrl);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", `${SITE_URL}/logo1.png`);
    setCanonical(canonicalUrl);

    let structuredData = document.getElementById("ev-page-jsonld");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "ev-page-jsonld";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Eco Voltex",
        url: `${SITE_URL}/`,
      },
    });
  }, [pathname]);

  return null;
}
