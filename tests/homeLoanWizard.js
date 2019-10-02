var wizard
var addFromEditTest = require('../testAssets/homeLoanWizardEditTest') //"require" from another folder/file
module.exports = {
    beforeEach: browser => {
        wizard = browser.page.homeLoanWizardPageObject()
        wizard.navigate()
    },
    after: browser => {
        wizard.end()
    },
    'fill test': browser => {
        addFromEditTest.forEach(test => {
            wizard.fill(test)
        })
    }
}