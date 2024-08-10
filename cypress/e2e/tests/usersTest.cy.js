import userData from "../../fixtures/users.json"
import loginTestData from "../../fixtures/loginData.json"
import {usersPage} from "../../pages/usersPage";

const usersObj = new usersPage()

describe('Users', () => {

    beforeEach(() => {
        cy.login(loginTestData.login.email, loginTestData.login.password);
    })

    it("Verify that Admin can redirect to the users details page from dashboard ", () => {
        usersObj.gotoUserTab()
        usersObj.userDetailsPage().should("have.text", "Users")
    })

    it("Verify that registered users are showing in the list", () => {
        usersObj.gotoUserTab()
        usersObj.getUserWithId(userData._id, userData.userName);

    })

    it("Verify that registered users showing desired email", () => {
        usersObj.gotoUserTab()
        usersObj.getUserEmailFromTable(userData._id, userData.email);

    })

    it("Verify that registered users showing desired contact no", () => {
        usersObj.gotoUserTab()
        usersObj.getUserContactFromTable(userData._id, userData.contactNo);

    })

    it("Very that Admin successfully can apply filter to search users ", () => {
        cy.viewport(1280, 720);
        usersObj.gotoUserTab()
        usersObj.selectFilterButton()
        usersObj.enterUserID(userData._id)
        usersObj.enterContactNo(userData.contactNo)
        usersObj.enterActiveStatus(userData.isActive)
        usersObj.applyFilter()
        usersObj.verifyUserInfo(userData._id, userData.userName);
        usersObj.selectFilterButton()
        usersObj.removeFilter()

    })

})