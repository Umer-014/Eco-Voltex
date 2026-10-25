import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SiteMetadata from "./SiteMetadata";

function renderMetadata(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <SiteMetadata />
      <main>Page content</main>
    </MemoryRouter>
  );
}

test("sets unique metadata and a canonical URL for a service page", () => {
  renderMetadata("/services/EV-Charging");

  expect(document.title).toBe("EV Charger Installation in London | Eco Voltex");
  expect(
    document
      .querySelector('meta[name="description"]')
      .getAttribute("content")
  ).toContain("EV charger installation in London");
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.ecovoltex.co.uk/services/ev-charging"
  );
  expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
    "content",
    document.title
  );
});

test("marks the feedback page as non-indexable", () => {
  renderMetadata("/feedback");

  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow"
  );
});
