import { demoFormLocators } from '../support/locators';

export class DemoFormPage {
  visit() {
    cy.visit('/');
  }

  fillEmail(email) {
    cy.get(demoFormLocators.email).clear().type(email);
  }

  fillFullName(name) {
    cy.get(demoFormLocators.fullName).clear().type(name);
  }

  fillCompanyName(company) {
    cy.get(demoFormLocators.companyName).clear().type(company);
  }

  fillPhone(phone) {
    cy.get(demoFormLocators.phone).clear().type(phone);
  }

  clickSubmit() {
    cy.get(demoFormLocators.submitButton).click();
  }

  fillPrerequisiteSteps() {
  // Step 1: Asset Type - Select "Heavy Trucks" and click Next
  cy.contains('Heavy Trucks').click();
  cy.get('button').contains('Next').click();

  // Step 2: Asset Count - Select "1-4" and click Next
  cy.contains('1-4').click();
  cy.get('button').contains('Next').click();

  // Step 3: Feature Selection - Select "Indoor Tracking" and click Next
  cy.contains('Fleet Tracking').click();
  cy.get('button').contains('Next').click();
}

}
