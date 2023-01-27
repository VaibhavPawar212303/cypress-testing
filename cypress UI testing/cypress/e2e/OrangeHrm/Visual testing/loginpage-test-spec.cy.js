import { loginpage } from "../../../support/PageObjects/loginPage";
import { utilities } from "../../../support/utilities/utilities";

beforeEach(() => {
  cy.reload();
  cy.visit("/login");
});

describe("Validate the login page", () => {
  it("Verify the login page", () => {
    cy.wait(4000);
    // snapshot name will be the test title
    cy.matchImageSnapshot("loginPage");
  });
  it("Verify the login page by adding username", () => {
    cy.wait(4000);
    utilities.getElement(loginpage.usernameField).type("userName");
    utilities.clickOn(loginpage.loginButton);
    // snapshot name will be the test title
    cy.matchImageSnapshot("add username");
  });
  it("Verify the login page by click on login button", () => {
    cy.wait(4000);
    utilities.clickOn(loginpage.loginButton);
    // snapshot name will be the test title
    cy.matchImageSnapshot("click login Button");
  });
});
