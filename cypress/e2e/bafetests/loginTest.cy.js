import { loginPage } from "../../baFePages/loginPage"
const loginObj = new loginPage()
import login from '../../fixtures/loginData.json'

describe(' Test automation', ()=>{
    
    beforeEach(' Login before each test ',()=>{
        loginObj.openURL()
        loginObj.clickOnMyAccountIcon()
        loginObj.clickOnContinueWithEmailIdOption()    
        loginObj.enterEmail(login.Emailid)
        loginObj.enterPassword(login.Password)

        loginObj.clickOnLoginButton()
        loginObj.successfullLoginCheck()
     })

     afterEach(' Logout after each test ',()=>{
        loginObj.clickOnLogoutButton()
        loginObj.successfullLogoutCheck()

     })

    it(' IT 1 ', ()=>{
        cy.log('it 1')
        
    })

    it(' IT 2 ', ()=>{
        cy.log('it 2')
        
    })



})