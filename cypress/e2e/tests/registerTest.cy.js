

import {registerPage} from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
import { faker } from '@faker-js/faker';

const registerObj = new registerPage()

describe('Registration Flow Automation', ()=>{

    beforeEach(()=>{
        registerObj.openUrl();
    })

    it("Verify that user can register with valid credentials", ()=>{

        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(faker.internet.email());
        registerObj.enterPassword(registerData.password);
        registerObj.clickSignUpButton();
        registerObj.successfullyRegisteredPageMessage(registerData.successMessage.registerSuccesMessage).should('include.text', registerData.successMessage.registerSuccesMessage);
  })


    it("Verify that unable to register with existing account", ()=>{

        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.password);
        registerObj.clickSignUpButton();
        registerObj.errorForExistingAccount(registerData.errorMessage.existingAccountErrorMessage).should('have.text', registerData.errorMessage.existingAccountErrorMessage);

    })


    it("Verify that proper validation message is displayed if password is provided less 6 charaters", ()=>{

        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.invalidPass);
        registerObj.clickSignUpButton();
        registerObj.errorForPassCharacter(registerData.errorMessage.leastPassChar).should("have.text",registerData.errorMessage.leastPassChar);

    })


    it("Verify that proper validation message is displayed if password is not same", ()=>{

        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterAddress(registerData.address);
        registerObj.enterContact(registerData.contact);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPassword(registerData.password);
        registerObj.enterConfirmPassword(registerData.confirmPassword);
        registerObj.clickSignUpButton();
        registerObj.errorPassCheck(registerData.errorMessage.passWordNotMatchError).should("have.text",registerData.errorMessage.passWordNotMatchError);


    })
})