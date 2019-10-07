var wizard
/*var addFromEditTest = */require('../testAssets/homeLoanWizardEditTest') //"require" from another folder/file
module.exports = {
    beforeEach: browser => {
        wizard = browser.page.homeLoanWizardPageObject()
        wizard.navigate()
    },
    after: browser => {
        wizard.end()
    },
    // 'fill test': browser => {
    //     addFromEditTest.forEach(test => {
    //         wizard.fill(test)
    //             .customVerify(test) //the second custom command
    //     })
    // },
    'fill test': browser => {
        array1.forEach(test => {
            wizard.fill(test)
                .customVerify(test) //the second custom command
        })
    },
    'one fill test': browser => {
        wizard.fill(array1[0]) //this is from test asset folder
    },
    'one fill test2': browser => {
        wizard.fill(array2[0]) //this is the second array from test asset folder
    }
}