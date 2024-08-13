export class incomingEventsPage {

    weblocatorsIncomingsPage = {

     revenuesRoute : "//span[normalize-space()='Revenues']",
        incomingTab: "//span[normalize-space()='Incoming']",
        incomingPageDetails: "//h1[normalize-space()='Incoming']",
        incomingIdColumn: "table > tr > td:nth-child(7)",
        incomingExperienceNameColumn: "table > tr > td:nth-child(1)",
        incomingTotalMoneyReceived: "table > tr > td:nth-child(2)",
        experienceCategory: "table > tr > td:nth-child(3)",
        experienceSubCategoryColumn: "table > tr > td:nth-child(5)"

    }


    redirectToIncomingDetailPage(){
        cy.xpath(this.weblocatorsIncomingsPage.revenuesRoute).click();
        cy.xpath(this.weblocatorsIncomingsPage.incomingTab).click()
        return cy.xpath(this.weblocatorsIncomingsPage.incomingPageDetails);
    }

    incomingIdWithTitle(_id, expName){
        cy.viewport(1900, 700);



        cy.get(this.weblocatorsIncomingsPage.incomingIdColumn).should("be.visible")

        cy.get(this.weblocatorsIncomingsPage.incomingIdColumn).each(($elm, index, $list) => {

            const t = $elm.text();


            if (t.includes(_id)) {

                cy.get(this.weblocatorsIncomingsPage.incomingExperienceNameColumn)
                    .eq(index).then(function (d) {

                    const experienceTitile = d.text()

                    expect(experienceTitile).to.contains(expName);
                })
            }
        })
    }




}