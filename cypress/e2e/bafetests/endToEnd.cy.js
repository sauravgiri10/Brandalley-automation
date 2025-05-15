import { homePage } from "../../baFePages/homePage"
import { loginPage } from "../../baFePages/loginPage"
import login from '../../fixtures/loginData.json'
const  homeObj= new homePage()
const loginObj = new loginPage()

describe('Checkout flow - mocked Stripe', () => {

beforeEach(' Login before each test ',()=>{
            loginObj.openURL()
            loginObj.clickOnMyAccountIcon()
            loginObj.clickOnContinueWithEmailIdOption()    
            loginObj.enterEmail(login.Emailid)
            loginObj.enterPassword(login.Password)
            loginObj.clickOnLoginButton()
            loginObj.successfullLoginCheck()
         })

    it('successfully completes a payment with mocked Stripe response', () => {



      // Intercept your real backend endpoint and mock a success response
      cy.intercept('POST', '/rest/default/V1/carts/mine/payment-information', {
        statusCode: 200,
        body: {
          message: 'Payment successful',
          // Add more fields if your app expects them
        },
      }).as('mockStripePayment');
  
      // Visit checkout
     // cy.visit('/checkout');
        homeObj.clickOnFirstProductOfPlp()
        homeObj.selectSizeOnPdp()
        homeObj.clickOnAddToBasketBtn()
        homeObj.clickOnCartIcon()
        homeObj.clickOnViewBasketBtn()
        homeObj.addCouponOnBasketPage(login.CouponCode)
        homeObj.proceedToCheckOut()
        homeObj.selectPaymentMethod()
        homeObj.clickOnProceedToPayment()
  
      // Fill in basic form fields (email, name, etc.)
      //cy.get('input[name="email"]').type('test@example.com');
      //cy.get('input[name="name"]').type('Test User');
  
      // Click the "Place Order" or "Pay" button
      //cy.get('button[type="submit"]').click();
      homeObj.clickOnPayNowBtn()
  
      // Wait for the mocked payment request
      cy.wait('@mockStripePayment');
  
      // Check that the success message or redirect happens
      cy.contains('Order Confirmed! Thank you').should('be.visible');
    });
  });