
import loginTestData from "../../fixtures/loginData.json"
import {loginPage} from "../../pages/loginPage";


const loginObj = new loginPage();

describe.only('Login Data Flow Automation', ()=>{



    beforeEach(()=>{
        loginObj.openUrl();
    })

    it('Verify that proper validation message is displayed if no email is given', ()=>{

        loginObj.enterEmail() .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.');
        loginObj.enterPassWord(loginTestData.login.password)
        loginObj.clickSignInButton()


    })

    it('Verify that proper validation message is displayed if no password is given', ()=>{

        loginObj.enterEmail(loginTestData.login.email)
        loginObj.enterPassWord().invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.');
        loginObj.clickSignInButton()


    })

    it('Verify that if an invalid email is given showing validation error message', ()=>{
        loginObj.enterEmail(loginTestData.invalidLoginCredentials.invalidEmail);
        loginObj.enterPassWord(loginTestData.login.password);
        loginObj.clickSignInButton()
        loginObj.errorMessageWithInvalidEmail().should('have.text', loginTestData.errorMessage.emailErrorMessage)

    })


    it('Verify that if user enter invalid credentials, showing proper validation error message', ()=>{
        loginObj.enterEmail(loginTestData.invalidLoginCredentials.email);
        loginObj.enterPassWord(loginTestData.invalidLoginCredentials.password);
        loginObj.clickSignInButton()
        loginObj.errorMessageWithInvalidCredentials().should('have.text', loginTestData.errorMessage.noAccountErrorMessage)

    })

    it('Verify that if user enter valid credentials successfully can login into the account', ()=>{
        loginObj.enterEmail(loginTestData.login.email);
        loginObj.enterPassWord(loginTestData.login.password);
        loginObj.clickSignInButton()
        loginObj.loginSuccessMessage().should('have.text', loginTestData.successMessage.successLoginMessage)

    })


})