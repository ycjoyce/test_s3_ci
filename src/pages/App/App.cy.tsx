import { composeStories } from "@storybook/react";
import * as stories from "./App.stories";

const { Basic } = composeStories(stories);

describe("<App />", () => {
  it("mounts", () => {
    cy.mount(<Basic />);
    cy.get("div").should("contain.text", "Hello mooBiz");

    cy.get("[data-cy='btn-test']").click();
    cy.get("div").should("contain.text", "Hello Readmoo");

    cy.get("[data-cy='btn-test']").click();
    cy.get("div").should("contain.text", "Hello mooBiz");
  });
});
