var wantedMan

var info = {
    wid: "DOJ948763567",
    hdr: "COP-378490098",
    mke: "ABC",
    ori: "364785906",
    nam: "John Doe",
    sex: "Male",
    rac: "Asian / Pacific Islander",
    hgt: "511",
    wgt: "150",
    hai: "black",
    off: "Murder",
    dow: "09/30/2019",
    res: "There is no good Reason",
    dat: "09/30/2019"
}


function errorCheckerEnter(wantedPage, warrantInfo, expectedErrors) {
    wantedPage
        .click('@burger')
        .waitForElementVisible('@enterOption')
        .click('@enterOption')
        .click('@x')
        .waitForElementVisible('@hdr')
        .setValue('@hdr', warrantInfo.hdr)
        .setValue('@mke', warrantInfo.mke)
        .setValue('@ori', warrantInfo.ori)
        .setValue('@nam', warrantInfo.nam)
        .setValue('@sex', warrantInfo.sex)
        .setValue('@rac', warrantInfo.rac)
        .setValue('@hgt', warrantInfo.hgt)
        .setValue('@wgt', warrantInfo.wgt)
        .setValue('@hai', warrantInfo.hai)
        .setValue('@off', warrantInfo.off)
        .setValue('@dow', warrantInfo.dow)
        .click('@save')
        .verify.containsText('@error', expectedErrors)
        .api.pause(1000)
}

function errorCheckerModify(wantedPage, warrantInfo, expectedErrors) {
    wantedPage
        .click('@burger')
        .waitForElementVisible('@modifyOption')
        .click('@modifyOption')
        .click('@x')
        .waitForElementVisible('@hdr')
        .setValue('@wid', warrantInfo.wid)
        .setValue('@hdr', warrantInfo.hdr)
        .setValue('@mke', warrantInfo.mke)
        .setValue('@ori', warrantInfo.ori)
        .setValue('@nam', warrantInfo.nam)
        .setValue('@sex', warrantInfo.sex)
        .setValue('@rac', warrantInfo.rac)
        .setValue('@hgt', warrantInfo.hgt)
        .setValue('@wgt', warrantInfo.wgt)
        .setValue('@hai', warrantInfo.hai)
        .setValue('@off', warrantInfo.off)
        .setValue('@dow', warrantInfo.dow)
        .click('@save')
        .verify.containsText('@error', expectedErrors)
        .api.pause(1000)
}

function errorCheckerCancel(wantedPage, warrantInfo, expectedErrors) {
    wantedPage
        .click('@burger')
        .waitForElementVisible('@cancelOption')
        .click('@cancelOption')
        .click('@x')
        .waitForElementVisible('@wid')
        .setValue('@wid', warrantInfo.wid)
        .setValue('@res', warrantInfo.res)
        .setValue('@dat', warrantInfo.dat)
        .click('@save')
        .verify.containsText('@error', expectedErrors)
        .api.pause(1000)
}

module.exports = {
    beforeEach: browser => {
        wantedMan = browser.page.wantedQueriesPageObject()
        wantedMan.navigate()
    },
    after: browser => {
        wantedMan.end()
    },
    'Enter Wanted': browser => {
        errorCheckerEnter(wantedMan, info, 'No results generated due to error.')
    },

    'Modified Wanted': browser => {
        errorCheckerModify(wantedMan, info, 'No results generated due to error.')
    },

    'Cancel Wanted': browser => {
        errorCheckerCancel(wantedMan, info, 'No results generated due to error.')
    }
    // 'Check the home page': browser => {
    //     wantedMan
    //         .verify.visible('.bm-burger-button')
    //         .verify.containsText('.titleBar', 'Wanted Queries')
    //         .verify.containsText('#welcomeScreen', 'Welcome to "Wanted Queries".')
    //         .verify.containsText('#welcomeScreen', 'Enter Wanted')
    //         .verify.containsText('#welcomeScreen', 'Modify Wanted')
    //         .verify.containsText('#welcomeScreen', 'Cancel Wanted')
    //         .verify.visible('.required')
    //         .verify.visible('.error')
    // },
    // 'Check required fields on warrant': browser => {
    //     wantedMan
    //         .click('.bm-burger-button')
    //         .waitForElementVisible('p[name="enterOption"]')
    //         .click('p[name="enterOption"]')
    //         .waitForElementVisible('[name="hdrInput"]')
    //         .verify.attributeContains('[name="hdrInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="mkeInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="oriInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="namInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="sexInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="racInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="hgtInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="wgtInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="haiInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="offInput"]', 'class', 'required')
    //         .verify.attributeContains('[name="dowInput"]', 'class', 'required')
    //         .api.pause(3000)
    //         browser.getAttribute('[name="olnInput"]', 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute('[name="olsInput"]', 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute('[name="oldInput"]', 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute('[name="licInput"]', 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute('[name="lisInput"]', 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute('[name="lidInput"]', 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    // }
}