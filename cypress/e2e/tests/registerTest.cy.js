

import {registerPage} from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()

describe('Register Page Automation', ()=>{


    it("Verify that user can register with valid credentials", ()=>{
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.password);
        registerObj.clickSignUpButton();
        registerObj.successfullyRegisteredPageMessage(registerData.successMessage.registerSuccesMessage);
  })


    it("Verify that unable to register with existing account", ()=>{
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.password);
        registerObj.clickSignUpButton();
        registerObj.errorForExistingAccount(registerData.errorMessage.existingAccountErrorMessage);

    })


    it("Verify that proper validation message is displayed if password is provided less 6 charaters", ()=>{
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.invalidPass);
        registerObj.clickSignUpButton();
        registerObj.errorForPassCharacter(registerData.errorMessage.leastPassChar);

    })


    it("Verify that proper validation message is displayed if password is not same", ()=>{
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.password);
        registerObj.enterConfirmPassword(registerData.confirmPassword);
        registerObj.clickSignUpButton();
        registerObj.errorPassCheck(registerData.errorMessage.passWordNotMatchError);

    })
})