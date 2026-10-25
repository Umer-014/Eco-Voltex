import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, SearchX } from "lucide-react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NotFoundPage.css";

const NotFoundPage = () => (
  <>
    <Header />
    <main className="not-found">
      <section className="not-found__content" aria-labelledby="not-found-title">
        <div className="not-found__icon" aria-hidden="true">
          <SearchX size={34} strokeWidth={1.7} />
        </div>
        <p className="not-found__eyebrow">404 · Page not found</p>
        <h1 id="not-found-title">Looks like this page took a wrong turn.</h1>
        <p className="not-found__description">
          The link may be outdated, or the page may have moved. Let’s get you
          back to the right place.
        </p>
        <div className="not-found__actions">
          <Link className="not-found__button not-found__button--primary" to="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </Link>
          <Link className="not-found__button not-found__button--secondary" to="/contact">
            Contact our team
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <nav className="not-found__links" aria-label="Popular pages">
          <span>Or explore:</span>
          <Link to="/services/Electrical-Installation-Maintenance">Electrical services</Link>
          <Link to="/services/EV-Charging">EV charger installation</Link>
          <Link to="/areas-we-cover">Areas we cover</Link>
        </nav>
      </section>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;
