
module.exports = {
    beforeEach: browser => {
        browser.url('https://')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Test Name': browser => {
        browser
            

    }
}

