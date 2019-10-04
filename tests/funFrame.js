module.exports = {
    'Get into the frame, check for the uneditable body':browser=>{
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
            .waitForElementVisible('#tryhome')
            .expect.element('body[contenteditable="false"]').not.to.be.present

            // swap your context here!
        browser
            .frame('#iframeResult')
            .verify.containsText('[class="w3schools-logo"]', "w3schools")

        browser
            .expect.element('[body[contenteditable="false"]').to.be.present.before(5000)
    }
}