export class registerPage {

    weblocatorsRegisterPage = {
        firstName: "//input[@name='firstName']",
        lastName: '//input[@name="lastName"]',
        address: '//input[@name="address"]',
        contact: '//input[@name="contact"]',
        email: '//input[@name="email"]',
        password: '//input[@name="password"]',
        confirmPass: '//input[@name="confpass"]',
        signUpButton: '//button[normalize-space()="Sign Up"]',
        registerPageSuccess: '//*[contains(text(),"THIS PAGE IS UNDER MAINTENANCE")]',
        existingAccountErrorMesage: '//*[contains(text(),"The email address is already in use by another account.")]',
        passCharaterErr: '//*[contains(text(),"Password should be at least 6 characters")]',
        passWordNotMatch: '//*[contains(text(),"Passwords didn\'t match!")]'
    }

    openUrl(){
        cy.visit(Cypress.env('URL')).then(()=>{
            cy.url().should('include', '/register');
        })
    }

   enterFirstName(FName){
        cy.xpath(this.weblocatorsRegisterPage.firstName, { timeout: 10000 }).type(FName)
   }

    enterLastName(LName){
        cy.xpath(this.weblocatorsRegisterPage.lastName).type(LName)
    }

    enterAddress(Address){
        cy.xpath(this.weblocatorsRegisterPage.address).type(Address)
    }

    enterContact(Contact){
        cy.xpath(this.weblocatorsRegisterPage.contact).type(Contact)
    }

    enterEmail(Email){
        cy.xpath(this.weblocatorsRegisterPage.email).type(Email)
    }

    enterPassword(password){
        cy.xpath(this.weblocatorsRegisterPage.password).type(password)
        cy.xpath(this.weblocatorsRegisterPage.confirmPass).type(password)
    }

    enterConfirmPassword(confPass){
        cy.xpath(this.weblocatorsRegisterPage.confirmPass).type(confPass)
    }
    clickSignUpButton(){
        cy.xpath(this.weblocatorsRegisterPage.signUpButton).click()

    }

    successfullyRegisteredPageMessage(successMessage){

        cy.xpath(this.weblocatorsRegisterPage.registerPageSuccess).should('include.text', successMessage)


    }

    errorForExistingAccount(errMsg){
        cy.xpath(this.weblocatorsRegisterPage.existingAccountErrorMesage).should("have.text",errMsg)
    }

    errorForPassCharacter(errMsg){
        cy.xpath(this.weblocatorsRegisterPage.passCharaterErr).should("have.text",errMsg)
    }

    errorPassCheck(errMsg){
        cy.xpath(this.weblocatorsRegisterPage.passWordNotMatch).should("have.text",errMsg)
    }

}