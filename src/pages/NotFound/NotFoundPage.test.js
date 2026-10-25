import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

test("shows a helpful not-found message and routes users to useful pages", () => {
  render(
    <MemoryRouter initialEntries={["/missing-page"]}>
      <NotFoundPage />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: "Looks like this page took a wrong turn.",
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute(
    "href",
    "/"
  );
  expect(
    screen.getByRole("link", { name: /contact our team/i })
  ).toHaveAttribute("href", "/contact");
  expect(
    screen.getByRole("navigation", { name: "Popular pages" })
  ).toBeInTheDocument();
});
