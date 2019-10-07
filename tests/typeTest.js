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
            .api.pause(1000) //remember to have .api in front when working with page objects
        typo
            .getText('@current', function (word) {
                let t = word.value
                console.log(t)
                typo.waitForElementVisible('@input')
                typo.setValue('@input', t)
            })
            .api.pause(1000)
            
        // typo.waitForElementVisible('@WPM')
        //     .getText('@WPM', function (result) {
        //         console.log('Speed: ' + result.value + ' WPM')
        //     })
        // typo.waitForElementVisible('@Accuracy')
        //     .getText('@Accuracy', function (result) {
        //         console.log('Accuracy: ' + result.value + ' %')
        //     })
    }
}