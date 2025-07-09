import { DemoFormPage } from '../pages/DemoFormPage';
import testData from '../fixtures/testData.json'
import { demoFormLocators } from '../support/locators';

const form = new DemoFormPage();

describe('GoFleet Demo Form Tests', () => {
  beforeEach(() => {
    form.visit();
    form.fillPrerequisiteSteps();
  });

  it('TC001 - Submit with all valid inputs', () => {
    form.fillEmail(testData.valid.email);
    form.fillFullName(testData.valid.fullName);
    form.fillCompanyName(testData.valid.company);
    form.fillPhone(testData.valid.phone);
    form.clickSubmit();
  });

  it("TC003 - Email without '@'", () => {
    form.fillEmail(testData.invalid.emailNoAt);
    form.fillFullName(testData.valid.fullName);
    form.fillCompanyName(testData.valid.company);
    form.fillPhone(testData.valid.phone);
    form.clickSubmit();
    cy.get(demoFormLocators.emailError).should('be.visible');
  });

  it('TC004 - Empty full name', () => {
    form.fillEmail(testData.valid.email);
    form.fillFullName('');
    form.fillCompanyName(testData.valid.company);
    form.fillPhone(testData.valid.phone);
    form.clickSubmit();
    cy.get(demoFormLocators.fullNameError).should('be.visible');
  });

  it('TC005 - Phone number with letters', () => {
    form.fillEmail(testData.valid.email);
    form.fillFullName(testData.valid.fullName);
    form.fillCompanyName(testData.valid.company);
    form.fillPhone(testData.invalid.phoneWithLetters);
    form.clickSubmit();
    cy.get(demoFormLocators.phoneError).should('be.visible');
  });

  it('TC006 - Long company name', () => {
    form.fillEmail(testData.valid.email);
    form.fillFullName(testData.valid.fullName);
    form.fillCompanyName(testData.edge.longCompany);
    form.fillPhone(testData.valid.phone);
    form.clickSubmit();
  });
});
