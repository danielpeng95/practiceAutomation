
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Test Name': browser => {
        browser
            

    },

}

