describe("Application", () => {
  before(() => {
    cy.visit("/");
  });
  it("visits 'default' namespace", () => {
    cy.url().should('include', 'overview?namespace=default');
  });

  it("collapses sidebar", () => {
    cy.get("mat-drawer").should("be.visible");
    cy.get("kd-nav-hamburger").click();
    cy.get("mat-drawer").should('not.be.visible');
  });
  it("home logo click overview redirect check", () => {
    cy.get(".kd-toolbar-logo-link").click();
    cy.url().should('include', 'overview')
  });
  it("add resource", () => {
    cy.get("mat-icon.kd-primary-toolbar-icon").contains('add').click();
    cy.url().should('include', 'create')
  });
  it("search", () => {
    cy.visit("/");
    cy.get("input#search").type("test_string{enter}");
    cy.url().should('contain', 'q=test_string');
    cy.visit("/");
  })
});
