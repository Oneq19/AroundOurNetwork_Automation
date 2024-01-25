/// <reference types="cypress" />
describe('Check the contents in the aound the networks section ', () => {

	it.only('Check content', ()=> {
		cy.visit('https://demo.pubportal.io/')
		//cy.get('.module-header').should('have.text', "Read More")
		cy.get('.module-header').contains('Around The Network ').should('exist')
		cy.get('.card-row').should('be.visible')
		// cy.get('.w-around-our-network .card-row .card').its('length').should('gt', 0)
		// cy.get('.w-around-our-network .card-row').find('.card').should('have.length', 6)

		cy.get(".w-around-our-network .card-row").should('be.visible').then($card => {
		    if ($card.find(".card").length > 0) {   
		    	console.log($card[0])
		    	assert.isOk('everything','everything is OK')
		    } else {
		       assert.isNotOk('everything', 'this will fail')
		    }
		})

		// cy.get('img', { includeShadowDom: true })
        // .filter('[src]')
        // .filter(':visible')
        // .should(($imgs) => $imgs.map((i, /* @type {HTMLImageElement} / img) => expect(img.naturalWidth).to.be.greaterThan(0)));*/

        // cy.get(selector)
	    // .find("a")
	    // .should("have.attr", "href", "/path")
	    // .should("have.text", "Alcohol Anonymous");

		const selector = ".w-around-our-network .card-row"
	    // cy.get(selector)
	    // .find("a")
	    // .should("have.attr", "href")

	    cy.get(selector)
	    .find(".card a").each(($ele, index) => {
		  cy.wrap($ele)
		    .should('have.attr', 'href')
		})

	 	// cy.get('.w-around-our-network .card-row .card a img', { includeShadowDom: true })
        //  .filter('[src]')
        //  .filter(':visible').wait(1000)
	   
	   //  .should(($imgs) => $imgs.map((i, img) => expect(img.naturalWidth).to.be.greaterThan(0)));
	 
	    cy.get('.w-around-our-network .card-row .card a img').should('be.visible').then(($img) => {
	  	cy.wrap($img[0]).should('have.prop', 'naturalWidth')
        // cy.screenshot("Pubportal/screenshots")

		});
        cy.get('.w-around-our-network').screenshot("Around the network")
		
        
	 })

})