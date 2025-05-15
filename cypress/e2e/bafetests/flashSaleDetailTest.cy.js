import { homePage } from "../../baFePages/homePage"
import { loginPage } from "../../baFePages/loginPage"
import login from '../../fixtures/loginData.json'
const  homeObj= new homePage()
const loginObj = new loginPage()


describe (' Flash sale detail testing ', ()=>{


    beforeEach(' Login before each test ',()=>{
            loginObj.openURL()
            loginObj.clickOnMyAccountIcon()
            loginObj.clickOnContinueWithEmailIdOption()    
            loginObj.enterEmail(login.Emailid)
            loginObj.enterPassword(login.Password)
            loginObj.clickOnLoginButton()
            loginObj.successfullLoginCheck()
         })
    
         // afterEach(' Logout after each test ',()=>{
         //    loginObj.clickOnLogoutButton()
         //    loginObj.successfullLogoutCheck()
    
         // })


    // it(' Verify flash sale name of fisrt flash sale showing on home page ', ()=>{
    //     homeObj.verifyFlashSaleNameOnHomePage(login.FlashSaleName)
     
    // })     

    // it(' Verify flash sale promo message of fisrt flash sale showing on home page ', ()=>{
    //    homeObj.verifyFlashSalePromoMessage(login.FlashSalePromoText)

    // })

    // it(' Verify flash sale description message of fisrt flash sale showing on home page ', ()=>{
        
    //     homeObj.verifyFlashSaleDescriptionMessage(login.FlashSaleDescriptionText)
 
    //  })

    //  it(' Verify flash sale delivery dates of fisrt flash sale showing on home page ', ()=>{
        
    //     homeObj.verifyFlashSaleDeliveryDates(login.FlashSaleDeliveryText)
 
    //  })

    // it(' Click on flash sale and navigate to PLP page', ()=>{
       // homeObj.verifyFlashSaleNameOnPlp()

    // })

    // it(' Verify first product name of flash sale ', ()=>{
    //     homeObj.verifyProductName(login.ProductName)

    // })

    // it(' Verify brand name of first product of flash sale product ', ()=>{
    //     homeObj.verifyProductBrand(login.BrandName)

    // })

    // it('  Verify product price of first product name of the flash sale ', ()=>{
    //     homeObj.verifyProductPrice(login.ProductPrice)

    // })


    // PDP page test case

    // it(' Product details test on PLP  ', ()=>{
    //     homeObj.clickOnFlashSale()
    //     homeObj.verifyFlashSaleNameOnPlp()
    //     homeObj.verifyProductNameOnPlp(login.ProductName)
    //     homeObj.verifyProductBrandOnPlp(login.BrandName)
    //     homeObj.verifyProductPriceOnPlp(login.ProductPrice)

    // })

    // it(' Verify product details on PDP, Select size on PDP, Add product quantity 1 in Basket ', ()=>{
    //     homeObj.clickOnFirstProductOfPlp()
    //     homeObj.verifyProductNameOnPdp()
    //     homeObj.verifyProductBrandOnPdp()
    //     homeObj.verifyProductPriceOnPdp()
    //     homeObj.selectSizeOnPdp()
    //     homeObj.clickOnAddToBasket()
    //     homeObj.verifyCartCount()

    // })

    it(' Click on view basket, add coupon code and click on proceed to checkout button ', ()=>{
        homeObj.clickOnFirstProductOfPlp()
        homeObj.selectSizeOnPdp()
        homeObj.clickOnAddToBasketBtn()
        homeObj.verifyCartCount()
        homeObj.clickOnCartIcon()
        homeObj.clickOnViewBasketBtn()
        homeObj.addCouponOnBasketPage(login.CouponCode)
        homeObj.proceedToCheckOut()
       // homeObj.selectShippingAddress()
        homeObj.selectPaymentMethod()
        homeObj.clickOnProceedToPayment()
       // homeObj.selectCreditCardRadioBtn()
       // homeObj.selectPayPalRadioBtn()
        homeObj.enterCreditCardNumber(login.CCNumber)
      homeObj.enterExpiryDate(login.ExDate)
      homeObj.enterCvcNumber(login.CvcNumber)
       homeObj.clickOnPayNowBtn()
      // homeObj.clickOnAuthPaymentBtn()
       //homeObj.clickOn3DSCompleteBtn()
       homeObj.orderConfirmationCheck(login.ConfirmationMsg)
       homeObj.getOrderId()

    })


    // it(' Click on clothing sub cate, add coupon code and click on proceed to checkout button ', ()=>{
    //     homeObj.mouseHoverOnWomenCategory()
    //     homeObj.clickOnWomenClothingSubCate()
    //     homeObj.clickOnWomenCateProduct()
    //     homeObj.selectSizeOnPdp()
    //     homeObj.clickOnAddToBasketBtn()
    //     homeObj.verifyCartCount()
    //     homeObj.clickOnCartIcon()
    //     homeObj.clickOnViewBasketBtn()
    //     homeObj.addCouponOnBasketPage(login.CouponCode)
    //     homeObj.proceedToCheckOut()
    //    // homeObj.selectShippingAddress()
    //     homeObj.selectPaymentMethod()
    //     homeObj.clickOnProceedToPayment()
    //    // homeObj.selectCreditCardRadioBtn()
    //    // homeObj.selectPayPalRadioBtn()
    //     homeObj.enterCreditCardNumber(login.CCNumber)
    //   homeObj.enterExpiryDate(login.ExDate)
    //   homeObj.enterCvcNumber(login.CvcNumber)
    //    homeObj.clickOnPayNowBtn()
    //   // homeObj.clickOnAuthPaymentBtn()
    //    //homeObj.clickOn3DSCompleteBtn()
    //    homeObj.orderConfirmationCheck(login.ConfirmationMsg)
    //    homeObj.getOrderId()

    // })



})