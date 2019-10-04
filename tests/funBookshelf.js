
module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    'Check the entered name': browser => {
        browser
            .setAlertText('Daniel')
            .acceptAlert()
            .useXpath()
            .waitForElementVisible('(//h2)[1]')
            .verify.containsText('(//h2)[1]', 'Daniel')
    },
    'Cancel works right': browser => {
        browser
            .dismissAlert()
    },
    'Does not acceept blank entries': browser => {
        browser
            .acceptAlert()
    }
}