
//let iframeName1
export class homePage{

 weblocators={
//flashSaleLink: "(//div[contains(@class, 'flash-sale-outer-container')]//a)[1]",
flashSaleName:"(//div[contains(@class, 'flash-sale-outer-container')]//a)[1]",
flashSalePromoMessage:"(//div[contains(@class, 'product-label')])[1]",  // xpath to locate next day delivery available
flashSaleDescription:"(//p[contains(@class, 'text-base font-medium')])[1]", // xpath to locate description mension on flash sale
flashSaleDeliveryDates:"(//p[contains(@class, 'text-xs font-medium text-gray-800 whitespace-nowrap')])[1]", // xpath to locate shows with small truck icon
plpPageFlashSaleName:"//h1[contains(@class, 'title font-semibold text-3xl  leading-none')]",

//Main category locators
womenCategory:"(//div[contains(@x-data, 'menu_item')])[1]",
womenCategoryClothing:"(//li[a[contains(text(),'Clothing')]])[1]",
productLinkOfWomenCate:"(//li[@class='ais-Hits-item relative'])[8]",


//Plp page locators
firstProductLink:"(//li[@class='ais-Hits-item relative'])[1]",
brandNamePlp:"(//span[contains(@class, 'notranslate')])[1]",
productNamePlp:"(//span[contains(@itemprop, 'name')])[1]",
productPricePlp:"(//li[@class='ais-Hits-item'])[1]//span[@data-price-type='finalPrice']/span",

//PDP page locators
productNamePdp:"//span[contains(@itemprop, 'name')]",
productBrandPdp:"//span[contains(@itemprop, 'manufacturer')]",
productDiscountedPricePdp:"(//span[@id='product-price-249219']//span[@class='price'])[1]",
productActualPricePdp:"(//span[@id='product-price-249219']//span[@class='price'])[2]",
productSize:"(//label[input[@name='super_attribute[296]']])[1]", // This xpath is working for staging only not for production
addToBasketBtn:"//button[contains(@id, 'product-addtocart-button')]",
productCart:"//span[contains(@x-text, 'cart.summary_count')]",
viewBasketBtn:"//a[contains(text(), 'View Basket')]",
checkOutBtn:"//a[contains(text(), 'Checkout')]", // this xpath is for checkput button of mimi bakstet

// View basket locators
addPromotionCodeLink:"//span[contains(text(), 'Add promotional code')]",
enterCouponCode:"//input[contains(@id, 'coupon_code')]",
addCouponBtn:"//div[contains(@class, 'primary h-full')]",
proceedToCheckOutBtn:"//a[contains(@title, 'Proceed to Checkout')]",

// Checkout page locators
shippingAddress:"(//div[contains(@class, 'shipping-address-item')])[13]",
shippingMethodRadioBtn:"(//span[@class='price']//span[@class='price'])[1]",
proceedToPaymentBtn:"//span[contains(text(), 'Proceed To Payment')]",
creditCardRadioBtn:"//div[contains(@data-value, 'card')]",
payPalRadioBtn:"//div[contains(@data-value, 'paypal')]",
creditCardNumber:"//input[@id='Field-numberInput']",
expiryDate:"//input[@id='Field-expiryInput']",
cvcNumber:"//input[@id='Field-cvcInput']",
payNowBtn:"//span[contains(text(), 'Pay Now')]",
complete3DSPaymentBtn:"//button[@id='test-source-authorize-3ds']",
authTestPayment:"//a[contains(text(), 'Authorize Test Payment')]",

// Confirmation page locators
orderConfirmationMsg:"//h2[contains(text(), 'Order Confirmed!')]",
orderIdOnConfirmation:"(//span[contains(@class, 'order-details__details')])[1]",

}

//Homepage actions
verifyFlashSaleNameOnHomePage(FlashSaleName){
        cy.xpath(this.weblocators.flashSaleName).invoke('attr','title').then((saleName) => {
            cy.log('Flash sale name is - ', saleName)
            Cypress.env('fSaleNameGlobalVariable', saleName.trim())
            expect(saleName.trim()).to.equal(FlashSaleName)
        })
    }

verifyFlashSalePromoMessage(FlashSalePromoText){
        cy.xpath(this.weblocators.flashSalePromoMessage).invoke('text').then((PromoText) => {
        cy.log('Flash sale promo text is - ',PromoText)  // This will print the text to the Cypress console
        expect(PromoText.trim()).to.equal(FlashSalePromoText)
      })

}

verifyFlashSaleDescriptionMessage(FlashSaleDescriptionText){
    cy.xpath(this.weblocators.flashSaleDescription).trigger('mouseover',{ force: true }).invoke('text').then((descriptionnText) => {
        cy.log('Flash sale description is - ',descriptionnText.trim())
        expect(descriptionnText.trim()).to.equal(FlashSaleDescriptionText)
    })
    
}

verifyFlashSaleDeliveryDates(FlashSaleDeliveryText){
    cy.xpath(this.weblocators.flashSaleDeliveryDates).invoke('text').then((deliveryDate) => {
        cy.log('Flash sale delivery date is - ',deliveryDate.trim())
       expect(deliveryDate.trim()).to.equal(FlashSaleDeliveryText)
    })
}


clickOnFlashSale(){
    cy.xpath(this.weblocators.flashSaleName).should('be.visible').click()
}

mouseHoverOnWomenCategory(){
   cy.wait(3000)
    cy.hoverOnCategory(this.weblocators.womenCategory)
    
}

clickOnWomenClothingSubCate(){
     cy.xpath(this.weblocators.womenCategoryClothing).contains('Clothing').click()
     
 }

 clickOnWomenCateProduct(){
    cy.xpath(this.weblocators.productLinkOfWomenCate).click()
 }


//Plp page actions

verifyFlashSaleNameOnPlp(){
    const savedName = Cypress.env('fSaleNameGlobalVariable')
    cy.xpath(this.weblocators.plpPageFlashSaleName).invoke('text').then((plpSaleName)=>{
        cy.log('Flash sale name on PLP page - ', plpSaleName)
        cy.log('Flash sale name on home page - ', savedName)
        expect(plpSaleName.trim()).to.equal(savedName)
    })

}

verifyProductNameOnPlp(ProductName){
    cy.xpath(this.weblocators.productNamePlp).invoke('text').then((pNameText)=>{
        cy.log(' Name of fisrt product of flash sale is ', pNameText)
        Cypress.env('productNameGlobalVariablePlp', pNameText.trim())
        expect(pNameText.trim()).to.equal(ProductName)
    })

}

verifyProductBrandOnPlp(BrandName){
    
    cy.xpath(this.weblocators.brandNamePlp).invoke('text').then((bName)=>{
        cy.log(' Brand name of first product of flash sale is ', bName)
        Cypress.env('brandNameGlobalVariablePlp', bName.trim())
        expect(bName.trim()).to.equal(BrandName)
    })
}

verifyProductPriceOnPlp(ProductPrice){
   
    cy.xpath(this.weblocators.productPricePlp).invoke('text').then((pPrice)=>{
        cy.log(' Price of first product of flash sale is ', pPrice)
        Cypress.env('productPriceGlobalVariablePlp', pPrice.trim())
        expect(pPrice.trim()).to.equal(ProductPrice)
    })
}

clickOnFirstProductOfPlp(){
    cy.xpath(this.weblocators.flashSaleName).click()
    cy.wait(5000)
    cy.xpath(this.weblocators.firstProductLink).click()
    cy.wait(5000)

}

// PDP page action

verifyProductNameOnPdp(){
    const savedProductNameOnPlP = Cypress.env('productNameGlobalVariablePlp')
    cy.xpath(this.weblocators.productNamePdp).invoke('text').then((pNamePdp)=>{
        cy.log(' Product name on PDP is - ', pNamePdp)
        cy.log(' Product name on PLP is - ', savedProductNameOnPlP)
        expect(pNamePdp.trim()).to.equal(savedProductNameOnPlP)

    })
    
    }

    verifyProductBrandOnPdp(){
        const savedProductBrandOnPlp= Cypress.env('brandNameGlobalVariablePlp')
        cy.xpath(this.weblocators.productBrandPdp).invoke('text').then((pBrandPdp)=>{
            cy.log(' Product Brand on PDP is - ', pBrandPdp)
            cy.log(' Product Brand on PLP is - ', savedProductBrandOnPlp)
            expect(pBrandPdp.trim()).to.equal(savedProductBrandOnPlp)
    
        })
    }

    verifyProductPriceOnPdp(){
        const savedProductPriceOnPlp= Cypress.env('productPriceGlobalVariablePlp')
        cy.xpath(this.weblocators.productDiscountedPricePdp).invoke('text').then((pPricePdp)=>{
            cy.log(' Product Price on PDP is - ', pPricePdp)
            cy.log(' Product Price on PLP is - ', savedProductPriceOnPlp)
            expect(pPricePdp.trim()).to.equal(savedProductPriceOnPlp)
    
        })
    }

    selectSizeOnPdp(){
        cy.xpath(this.weblocators.productSize).should('be.visible').click()

    }

    clickOnAddToBasketBtn(){
        cy.xpath(this.weblocators.addToBasketBtn).should('be.visible').click()
        cy.wait(5000)

    }

    verifyCartCount(){
        cy.xpath(this.weblocators.productCart).should('be.visible').invoke('text').then((pCount)=>{
            cy.log(' Product quantity added in basket is - ', pCount)
            expect(pCount.trim()).to.equal('1')
        })
        
    }

    clickOnCartIcon(){
        cy.xpath(this.weblocators.productCart).should('be.visible').click()
    
    }

    clickOnViewBasketBtn(){
        cy.xpath(this.weblocators.viewBasketBtn).should('be.visible').click()
        cy.wait(3000)
    
    }

    clickOnCheckOut(){
        cy.xpath(this.weblocators.checkOutBtn).should('be.visible').click()
    
    }

 // Veiw basket actions
 
    addCouponOnBasketPage(CouponCode){
        cy.xpath(this.weblocators.addPromotionCodeLink).should('be.visible').click()
        cy.xpath(this.weblocators.enterCouponCode).type(CouponCode, { force: true })
        cy.xpath(this.weblocators.addCouponBtn).should('be.visible').click()
        cy.wait(3000)

        }
    
    proceedToCheckOut(){
        cy.xpath(this.weblocators.proceedToCheckOutBtn).click()
        cy.wait(5000)
    }
 
// Checkout page actions

    selectShippingAddress(){
        cy.xpath(this.weblocators.shippingAddress).should('be.visible').click()

    }

    selectPaymentMethod(){
        cy.xpath(this.weblocators.shippingMethodRadioBtn).should('be.visible').click()
    
    }

    clickOnProceedToPayment(){
        cy.xpath(this.weblocators.proceedToPaymentBtn).should('be.visible').click()
        cy.wait(15000)
        
    }

    selectCreditCardRadioBtn(){
        cy.xpath(this.weblocators.creditCardRadioBtn).should('be.visible').click()
    }

    selectPayPalRadioBtn(){
       //cy.xpath(this.weblocators.payPalRadioBtn).click()
        cy.get('iframe[name^="__privateStripeFrame"]')
        .eq(1)
        .then(($iframe) => {
          // Get the iframe DOM element
          const iframeNamePayPal = $iframe.attr('name')
         // iframeName1 = $iframe.attr('name');
            cy.log(iframeNamePayPal)
          // Use the exact iframe name to avoid matching multiple
          cy.frameLoaded(`iframe[name="${iframeNamePayPal}"]`)
      
          cy.iframe(`iframe[name="${iframeNamePayPal}"]`)
            .xpath(this.weblocators.payPalRadioBtn)
            .should('be.visible')
            .click()
        })
    }
   
    enterCreditCardNumber(CCNumber){
        cy.get('iframe[name^="__privateStripeFrame"]')
        .eq(1)
        .then(($iframe) => {
          // Get the iframe DOM element
          const iframeName = $iframe.attr('name')
         // iframeName1 = $iframe.attr('name');
            cy.log(iframeName)
          // Use the exact iframe name to avoid matching multiple
          cy.frameLoaded(`iframe[name="${iframeName}"]`)
      
          cy.iframe(`iframe[name="${iframeName}"]`)
            .xpath(this.weblocators.creditCardNumber)
            .should('be.visible')
            .type(CCNumber)
        })
    }

    enterExpiryDate(ExDate){
        cy.get('iframe[name^="__privateStripeFrame"]')
        .eq(1)
        .then(($iframe) => {
          // Get the iframe DOM element
          const iframeName1 = $iframe.attr('name')
          //iframeName1 = $iframe.attr('name');
            cy.log(iframeName1)
          // Use the exact iframe name to avoid matching multiple
          cy.frameLoaded(`iframe[name="${iframeName1}"]`)
      
          cy.iframe(`iframe[name="${iframeName1}"]`)
            .xpath(this.weblocators.expiryDate)
            .should('be.visible')
            .type(ExDate)
        })

            
    }

    enterCvcNumber(CvcNumber){
        cy.get('iframe[name^="__privateStripeFrame"]')
        .eq(1)
        .then(($iframe) => {
          // Get the iframe DOM element
          const iframeName2 = $iframe.attr('name')
          //iframeName1 = $iframe.attr('name');
            cy.log(iframeName2)
          // Use the exact iframe name to avoid matching multiple
          cy.frameLoaded(`iframe[name="${iframeName2}"]`)
      
          cy.iframe(`iframe[name="${iframeName2}"]`)
            .xpath(this.weblocators.cvcNumber)
            .should('be.visible')
            .type(CvcNumber)
        })

    }

    clickOnPayNowBtn(){
        cy.wait(2000)
        cy.xpath(this.weblocators.payNowBtn).should('be.visible').click()
        cy.wait(10000)
    
    }

    clickOnAuthPaymentBtn(){
        cy.xpath(this.weblocators.authTestPayment).invoke('text').then((authtext)=>{
            cy.log(authtext)
        })
        
    
    }

    // Confirmation actions

    orderConfirmationCheck(ConfirmationMsg){
        cy.xpath(this.weblocators.orderConfirmationMsg).should('be.visible').invoke('text').then((oConMsg)=>{
            const newConfirmMsg = oConMsg.replace(/\s+/g, ' ').trim();
            cy.log(' Order confirmation message on confirmation page is - ', newConfirmMsg)
            expect(newConfirmMsg).to.equal(ConfirmationMsg)
        })
        
    }

    getOrderId(){
        cy.xpath(this.weblocators.orderIdOnConfirmation).should('be.visible').invoke('text').then((oId)=>{
            cy.log(' Order id number on confirmation page is - ', oId)
            cy.scrollTo('topLeft');
            cy.wait(500)
            //cy.xpath(this.weblocators.orderIdOnConfirmation).screenshot('order-id-element')
        })
        
    }

}