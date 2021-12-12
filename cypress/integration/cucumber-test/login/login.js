import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from "../../../page-objects/login-page"

const loginPage = new LoginPage();

Given("the user is on the login page", () => {
    loginPage.openLoginPage();
});

When("the user logs in with {string} as username and {string} as password", (username, password) => {
    loginPage.login(username,password);
})

Then("the user is shown an error message", () => {
    loginPage.getWarning().should('be.visible');
})

Then("the user logs in successfully", () => {
    loginPage.getPageTitle().should('equal','My Account');
})