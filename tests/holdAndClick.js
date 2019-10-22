module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Test Name': browser => {
        browser
            .setValue('[name="q"]', ["Wikipedia", browser.Keys.ENTER])
            .useXpath()
            .waitForElementPresent('(//h3[@class="LC20lb"])[1]')
        browser.keys([browser.Keys.CONTROL], function () {
            browser.click('(//h3[@class="LC20lb"])[1]')
        })
        browser.windowHandles(function (results) {
            var wikiWindow = results.value[1]
            browser.switchWindow(wikiWindow)
            browser.closeWindow()
        })


    },

}


