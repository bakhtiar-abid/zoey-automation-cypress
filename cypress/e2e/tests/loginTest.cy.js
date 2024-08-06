
import loginTestData from "../../fixtures/loginData.json"


describe('Login Data Flow Automation', ()=>{

    beforeEach(()=>{
        cy.login(loginTestData.login.email, loginTestData.login.password);
    })


    it('Verify that user can login with valid credentials', ()=>{

    })


})