var typo
module.exports = {
    beforeEach: browser => {
        typo = browser.page.typeTestPageObject()
        typo.navigate()
    },
    after: browser => {
        typo.end()
    },
    'Test name': browser => {
        typo
            .waitForElementVisible('@start')
            .click('@start')
            .waitForElementVisible('@current')
            .getText('@current', function (word) {
                console.log(word.value)
                let t = console.log(word.value)
                typo.waitForElementVisible('@input')
                typo.setValue('@input', t)
                typo.pause(10000)
            })
    }
}