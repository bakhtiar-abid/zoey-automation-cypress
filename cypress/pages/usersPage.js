export class usersPage {

    weblocatorsUsersPage = {
        usersTab: "//a[contains(@href,'/users')]",
        userPageTitle: "//h1[normalize-space()='Users']",
        userInTheTable: "//td[normalize-space()='Test User']",
        userTableNameColumn: "table>tr>td:nth-child(1)",
        userUserIDColumn: "table>tr>td:nth-child(2)",
        userEmailColumn: "table>tr>td:nth-child(3)",
        userContactColumn: "table>tr>td:nth-child(4)",
        filterButton: "//button[@class='filter text-white']",
        userIdFilterField: "//input[@name='uid']",
        userContactNoField: "//input[@name='contactNo']",
        activeStatusField: "//div[@class=' css-19bb58m']",
        applyFilterButton: "//button[@class='apply-filter text-white']",
        removeFilterButton: "//button[@class='remove-filter']",


    }

    userDetailsPage(){
      return   cy.xpath(this.weblocatorsUsersPage.userPageTitle)
    }

    gotoUserTab() {
        cy.xpath(this.weblocatorsUsersPage.usersTab).click()


    }

    getUserWithId(_id, userName) {


        cy.get(this.weblocatorsUsersPage.userTableNameColumn).each(($elm, index, $list) => {

            const t = $elm.text();


            if (t.includes(userName)) {

                cy.get(this.weblocatorsUsersPage.userTableNameColumn)
                    .eq(index).next().then(function (d) {

                    const userId = d.text()

                    expect(userId).to.contains(_id);
                })
            }
        })
    }


    getUserEmailFromTable(_id, userEmail) {


        cy.get(this.weblocatorsUsersPage.userUserIDColumn).each(($elm, index, $list) => {

            const t = $elm.text();


            if (t.includes(_id)) {

                cy.get(this.weblocatorsUsersPage.userEmailColumn)
                    .eq(index).then(function (d) {

                    const email = d.text()

                    expect(email).to.contains(userEmail);
                })
            }
        })

    }


    getUserContactFromTable(_id, contactNo) {


        cy.get(this.weblocatorsUsersPage.userUserIDColumn).each(($elm, index, $list) => {

            const t = $elm.text();


            if (t.includes(_id)) {

                cy.get(this.weblocatorsUsersPage.userContactColumn)
                    .eq(index).then(function (d) {

                    const contact = d.text()

                    expect(contact).to.contains(contactNo);
                })
            }
        })


    }

    selectFilterButton() {
        cy.xpath((this.weblocatorsUsersPage.filterButton)).click()
    }


    enterUserID(userId) {
        cy.xpath(this.weblocatorsUsersPage.userIdFilterField).type(userId)
    }

    enterContactNo(contactNo) {
        cy.xpath(this.weblocatorsUsersPage.userContactNoField).type(contactNo)
    }

    enterActiveStatus(activeStatus) {
        if(activeStatus === true){
            cy.get("#react-select-2-input").type("Active")
            cy.get("#react-select-2-input").type('{enter}')
        }




    }

    verifyUserInfo(_id, userName){
        cy.get(this.weblocatorsUsersPage.userTableNameColumn).each(($elm, index, $list) => {

            const t = $elm.text();


            if (t.includes(userName)) {

                cy.get(this.weblocatorsUsersPage.userTableNameColumn)
                    .eq(index).next().then(function (d) {

                    const userId = d.text()

                    expect(userId).to.contains(_id);
                })
            }
        })
    }

    applyFilter() {
        cy.xpath(this.weblocatorsUsersPage.applyFilterButton).click({force:true}).scrollIntoView().should('be.visible')
    }

    removeFilter() {
        cy.xpath(this.weblocatorsUsersPage.removeFilterButton).click()
    }


}