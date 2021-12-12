export class BasePage {

    getPageTitle(){
        return cy.title();
    }

    getPageURL(){
        return cy.url();
    }

}