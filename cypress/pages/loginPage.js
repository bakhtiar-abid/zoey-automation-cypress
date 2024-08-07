export class loginPage {


    loginPageWebLocators = {
      emailField: "//input[@placeholder='name@email.com']",
        passwordField: "//input[@id='pass']",
        signInButton: "//button[@class='text-white']",
        successLoginMessage: "//span[normalize-space()='Dashboard']",
        invalidEmailErrorMessage: "//div[contains(text(),'The email address is badly formatted.')]",
        invalidLoginCredentials: "//div[contains(text(),'There is no user record corresponding to this identifier. The user may have been deleted')]"

}



    openUrl(){
        cy.visit(Cypress.env('loginUrl')).then(()=>{
            cy.url().should('include', '/login');
        })
    }


    enterEmail(email){

        if(!email){
            return  (cy.xpath(this.loginPageWebLocators.emailField))
        }else{
            cy.xpath(this.loginPageWebLocators.emailField).type(email);
        }

    }



    enterPassWord(pass){
        if(!pass){
            return cy.xpath(this.loginPageWebLocators.passwordField)
        }else{
            cy.xpath(this.loginPageWebLocators.passwordField).type(pass)
        }
    }

    loginSuccessMessage(){
        return cy.xpath(this.loginPageWebLocators.successLoginMessage)
    }

    errorMessageWithInvalidEmail(){
      return  cy.xpath(this.loginPageWebLocators.invalidEmailErrorMessage)
    }

    errorMessageWithInvalidCredentials(){
        return cy.xpath(this.loginPageWebLocators.invalidLoginCredentials)
    }

    clickSignInButton(){
        cy.xpath(this.loginPageWebLocators.signInButton).click();
    }







}