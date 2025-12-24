describe('usps invalid tracking number message' , async () => {

it('Usps - verify the url for track a package contains the word track', () => {
    //visit usps website
    cy.visit('https://www.usps.com/');

    //hover over quicktools
    cy.get('[class="qt-nav menuheader"]').realHover();

    //wait 2 seconds
    cy.wait(2000)

    //click on track a package 
    cy.get('[role="menuitem"]').eq(1).click();
  
    //capture the URL and verify it contains the word track
    cy.url().should('contain', 'Track')

    cy.origin('https://tools.usps.com/', () => {
    
        //enter invalid tracking number
        cy.get('[id="tracking-input"]').type('7483927593394678')

        //click on track
        cy.get('[class="button tracking-btn"]').click()

        //capture and verify the error message contains "Currently, we are not able to provide the tracking details"
        cy.get('[class="banner-content"]').invoke('text').then((errorMsg) => {
            expect(errorMsg).to.contain('Tracking is not available for this item.')
        })//end of then

    })//end of origin   
    })//end of test 

})//end of describe