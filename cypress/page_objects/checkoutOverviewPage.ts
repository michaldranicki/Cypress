/// <reference types="cypress" />

export class CheckoutOverviewPage {
    // Page elements
    private overviewContainer = '#checkout_summary_container';
    private cancelBtn = '#cancel';
    private finishBtn = '#finish';
    private checkoutCompleteContainer = '#checkout_complete_container';
    private backHomeBtn = '#back-to-products';

    isCheckoutOverviewPageLoaded(){
        return cy
        .get(this.overviewContainer)
        .should("exist")
        .then(() => {
          return cy
            .url()
            .should("include", "/checkout-step-two.html")
            .then(() => true);
        });
    }

    clickCancelButton() {
        return cy.get(this.cancelBtn).click();
    }

    clickFinishButton() {
        return cy.get(this.finishBtn).click();
    }

    isPurchaseFinished(){
        return cy
        .get(this.checkoutCompleteContainer)
        .should("exist")
        .then(() => {
          return cy
            .url()
            .should("include", "/checkout-complete.html")
            .then(() => true)
            .then(()=>{
                cy.get(this.backHomeBtn).should('be.visible');
            });
        });
    }

    clickBackHomeButton() {
        return cy.get(this.backHomeBtn).click();
    }
}