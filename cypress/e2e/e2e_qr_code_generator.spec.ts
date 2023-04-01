import { generateTestData } from "../support/generatesTestData"

describe("The qr-code generator", () => {
  beforeEach(() => {
    cy.visit("/")
  }),
  it("should generate a qr-code", () => {
    cy.get("[data-cy=qr-code-input]").type(generateTestData({ type: "phone"}));
    cy.get("[data-cy=qr-code-submit]").click();
    cy.get("[data-cy=qr-code-image]").should('be.visible');
  }),
  it("should input type validation", () => {
    cy.get("[data-cy=qr-code-input]").type(generateTestData({ type: "text"}));
    cy.get("[data-cy=qr-code-submit]").should('be.enabled');
  }),
  it("large input data", () => {
    cy.get("[data-cy=qr-code-input]").type(generateTestData({type: "text", length: 5000}))
  }),
  it("Ensure the generated QR Code is scannable", () => {
    cy.get("[data-cy=qr-code-input]")
      .invoke('attr', 'src')
      .then(qrCodeUrl => {
        return cy.task('decodeQrCode', qrCodeUrl);
      })
      .then(qrCodeData => {
        expect(qrCodeData).to.equal('expected data');
      });
  });
});