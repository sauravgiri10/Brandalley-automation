export class loginPage{

weblocators={
    myAccountIconButton: 'a#customer-menu',
    myCartButton: 'a#menu-cart-icon',
    searchBar: 'input#autocomplete-0-input',
    brandalleyLogo: "(//div[contains(@class, 'logo')]//a)[1]",
    continueWithGmailButton: 'div.flex.flex-col > button.btn.btn-icon-left.btn-outline.cursor-pointer:nth-of-type(1)',
    continueWithFacebookButton: 'div.flex.flex-col > button.btn.btn-icon-left.btn-outline.cursor-pointer:nth-of-type(2)',
    continueWithEmailIdButton: 'div.flex.flex-col > button.btn.btn-icon-left.btn-outline.cursor-pointer:nth-of-type(3)',
    emailId:'input#develo_login_email',
    password:'input#develo_login_password',
    loginButton:'button.btn.btn-primary.mt-1',
    logoutButton:"//a[text()[normalize-space()='Logout']]", // this locator is for account dropdown logout option
    logoutButtonUnderAccountSummery:"//li[a[contains(normalize-space(.), 'Logout')]]", // this locator is for my account page logout option
    accountSummeryButton:"//a[text()[normalize-space()='Account Summary']]",
    helloNameText: "//span[contains(text(), 'Hello')]"
    
}

openURL(){
cy.clearCookies()   // Clear cookies
cy.clearLocalStorage()
cy.visit(Cypress.env('URL'),{ timeout: 120000 })
cy.viewport(1280, 800)

}

clickOnMyAccountIcon(){
    cy.get(this.weblocators.myAccountIconButton).should('be.visible').click()
}

clickOnContinueWithEmailIdOption(){
    cy.get(this.weblocators.continueWithEmailIdButton).should('be.visible').click()
}

enterEmail(Emailid){
    cy.get(this.weblocators.emailId).should('be.visible').type(Emailid)
}

enterPassword(Password){
    cy.get(this.weblocators.password).should('be.visible').type(Password)
}

clickOnLoginButton(){
    cy.get(this.weblocators.loginButton).should('be.visible').click()
    cy.wait(13000)
}
successfullLoginCheck(){
    cy.get(this.weblocators.myAccountIconButton).should('be.visible').click()
    cy.xpath(this.weblocators.helloNameText).should('contain','Hello')
    cy.xpath(this.weblocators.accountSummeryButton).should('be.visible').click()
    cy.xpath(this.weblocators.brandalleyLogo).should('be.visible').click()
    cy.wait(6000)
}

clickOnLogoutButton(){
   // cy.wait(5000)
    cy.get(this.weblocators.myAccountIconButton).should('be.visible').click()
    cy.xpath(this.weblocators.accountSummeryButton).should('be.visible').click()
    cy.xpath(this.weblocators.logoutButtonUnderAccountSummery).should('be.visible').click()

}

    successfullLogoutCheck(){
        cy.url().should('contain','/customer/account/logoutSuccess/')
        window.close()
        
    }

}