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
                .customVerify(test) //the second custom command
        })
    },
    'one fill test': browser =>{
        wizard.fill(array[0])
    },
    'one fill test2': browser => {
        wizard.fill(array2[0])
    }

}