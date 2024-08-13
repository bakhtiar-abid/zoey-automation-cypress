import incomingsData from "../../fixtures/incomingsData.json"
import loginTestData from "../../fixtures/loginData.json"
import {incomingEventsPage} from "../../pages/IncomingsPage";


const incomingObj = new incomingEventsPage();

describe('Users', () => {

    beforeEach(() => {
        cy.login(loginTestData.login.email, loginTestData.login.password);
    })

     it("Verify that Admin can redirect to the incoming events details page", ()=>{
       incomingObj.redirectToIncomingDetailPage().should('have.text', "Incoming")
     })

    it("Verify that Incoming events are showing appropriately in the list", ()=>{
        incomingObj.redirectToIncomingDetailPage();
        incomingObj.incomingIdWithTitle(incomingsData._id, incomingsData.experienceName)
    })


})