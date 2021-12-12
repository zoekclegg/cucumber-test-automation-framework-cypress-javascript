import { BasePage } from "./base-page";

export class LoginPage extends BasePage{

    openLoginPage(){
        cy.visit("https://demo.opencart.com/index.php?route=account/login")
    }

    inputUsername(username){
        if (username === "empty") {
            cy.get('#input-email').type(username);
        }
    }

    inputPassword(password){
        if (password === "empty") {
            cy.get('#input-password').type(password);
        }
    }

    clickLoginButton(){
        cy.get("input[value='Login']").click();
    }

    getWarning(){
        return cy.xpath("//div[contains(@class,'alert')]")
    }

    login(username,password){
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickLoginButton();
    }

}