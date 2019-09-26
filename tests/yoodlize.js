
module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com')
            //.waitForElementPresent('body', 10000)
    },
    after: browser => {
        browser.end()
    },
    'see all/home/browse': browser => {
        browser
            .useXpath()
            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]', 10000) //see all RV
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]') //see all RV
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Recreational Vehicles")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]', 10000) //see all
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]') //see all
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Outdoor Gear")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]', 10000) //see all
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]') //see all
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Electronics")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]', 10000) //see all
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]') //see all
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Party")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]', 10000) //see all
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]') //see all
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Tools")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]', 10000) //see all
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]') //see all
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Clothing")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]', 10000) //see all
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]') //see all
            .waitForElementPresent('//div[@class="sc-jKVCRD jSqgxr"]', 10000)
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Home")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]') //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img


            //Browse Categories
            .waitForElementPresent('(//a[@class="sc-esjQYD cZSeUZ"])[16]', 10000) //Browse Categories
            .click('(//a[@class="sc-esjQYD cZSeUZ"])[16]') //Browse Categories
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Tools")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]', 10000) //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//a[@class="sc-esjQYD cZSeUZ"])[17]', 10000) //Browse Categories
            .click('(//a[@class="sc-esjQYD cZSeUZ"])[17]') //Browse Categories
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Outdoor")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]', 10000) //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//a[@class="sc-esjQYD cZSeUZ"])[18]', 10000) //Browse Categories
            .click('(//a[@class="sc-esjQYD cZSeUZ"])[18]') //Browse Categories
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Electronics")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]', 10000) //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            .waitForElementPresent('(//a[@class="sc-esjQYD cZSeUZ"])[19]', 10000) //Browse Categories
            .click('(//a[@class="sc-esjQYD cZSeUZ"])[19]') //Browse Categories
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Party")
            .waitForElementPresent('//img[@src="/images/logo/blueRaw.png"]', 10000) //home img
            .click('//img[@src="/images/logo/blueRaw.png"]') //home img

            //.pause(3000)

    },
    'Search Function': browser => {
        browser
            .useXpath()
            .waitForElementPresent('//input[@placeholder="Search for an item"]', 10000) //search bar
            .setValue('//input[@placeholder="Search for an item"]', ['DVD', browser.Keys.ENTER])
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "DVD")
            .waitForElementPresent('(//a[@class="rc-pagination-item-link"])[2]' , 10000)
            .click('(//a[@class="rc-pagination-item-link"])[2]') //forward arrow key
            .waitForElementPresent('(//a[@class="rc-pagination-item-link"])[1]', 10000)
            .click('(//a[@class="rc-pagination-item-link"])[1]') //backward arrow key
            .waitForElementPresent('(//div[@class="_1WAWo"])[1]', 10000) //first image of DVD result
            .click('(//div[@class="_1WAWo"])[1]')
            //.pause(1000)
            .verify.containsText('//div[@class="sc-bdVaJa iyjQMV"]', "DVD")
            .verify.containsText('//div[@class="sc-bdVaJa iyjQMV"]', "Description")
            .verify.containsText('//div[@class="sc-bdVaJa iyjQMV"]', "Rental Rules")
            .verify.visible('//div[@headerdetails="true"]')
            .verify.visible('(//div[@emphasis="true"])[1]')
            //.pause(3000)
        
    }
}

