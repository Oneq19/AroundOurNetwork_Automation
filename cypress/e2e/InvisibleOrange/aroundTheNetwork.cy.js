/// <reference types="cypress" />
describe('Check the contents in the aound the networks section ', () => {

	it.only('Check content', ()=> {
        //Visit the website
		cy.visit('https://www.invisibleoranges.com/grindcore-2023-q1/')

		//Check if 'Around Our Network' section is present 
		cy.get('.module-header').contains('Around Our Network ').should('exist')

        //Check if the Image section is present
		cy.get('.card-row').should('be.visible')

        //Check if there are images present in the Image section
		cy.get(".w-around-our-network .card-row").should('be.visible').then($card => {
		    if ($card.find(".card").length > 0) {   
		    	console.log($card[0])
		    	assert.isOk('everything','everything is OK')
		    } else {
		       assert.isNotOk('everything', 'this will fail')
		    }
		})

        //Check if the image cards have links attached to it
		const selector = ".w-around-our-network .card-row"
	    cy.get(selector)
	    .find(".card a").each(($ele, index) => {
		  cy.wrap($ele)
		    .should('have.attr', 'href')
		})

	 	//Check if the Images have width. Otherwise we can come to conclusion that the images didn't load
	    cy.get('.w-around-our-network .card-row .card a img').should('be.visible').then(($img) => {
	  	    cy.wrap($img[0]).should('have.prop', 'naturalWidth')
		});

        //Store the image section screenshot for visual testing
        cy.get('.w-around-our-network').screenshot("Around Our network")	
        
	 })

})