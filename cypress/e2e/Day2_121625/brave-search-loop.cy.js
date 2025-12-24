//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    let keywords = []
    keywords.push('Javascript')
    keywords.push('Typescript')
    keywords.push('Cypress Testing Framework')
    it('Search for a keyword and verify the search url contains the keyword', () => {
        keywords.forEach((keyValue) => {
            // Visit Brave Search homepage
            cy.visit('https://search.brave.com/')
   // type cypress testing in your search field and submit
            cy.get('[id=searchbox]').type(`${keyValue}{enter}`);
            // capture the current url and verify it contains Cypress+testing
            cy.url().should('contain', `${keyValue.replace(/ /g, '+')}`);        
        }) //end of forEach
    })//end of test 2


})//end of describe suite




