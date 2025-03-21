/// <reference types="cypress" />

export class CheckoutFormPage {
    // Page elements
    private firstName = '#first-name';
    private lastName ='#last-name';
    private zipCode = '#postal-code';
    private checkoutFormContainer = '#checkout_info_container';
    private continueBtn = '#continue'

    //Verify checkout form is loaded
    isCheckoutFormLoaded(){
        return cy
      .get(this.checkoutFormContainer)
      .should("exist")
      .then(() => {
        return cy
          .url()
          .should("include", "/checkout-step-one.html")
          .then(() => true);
      });
    }

    //Fill in firstName
    fillFirstName(name: string) {
        return cy.get(this.firstName).type(name);
    }

    //Fill in lastName
    fillLastName(name: string) {
        return cy.get(this.lastName).type(name);
    }
    
    //Fill in zipcode
    fillZipCode(code: string) {
        return cy.get(this.zipCode).type(code);
    }   
    
    //Click Continue
    clickContinueBtn() {
        return cy.get(this.continueBtn).click();
    }
}