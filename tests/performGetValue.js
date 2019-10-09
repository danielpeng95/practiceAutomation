var myInfo = ""
module.exports = {
    "pull text": browser => {
        console.log(`At the start of the test, myInfo has: "${myInfo}"`)
        browser.url("http://www.google.com")
            .waitForElementVisible('#gbqfbb', 20000)
            .getValue('#gbqfbb', result => {
                console.log(`in the getText, the button had text: "${result.value}"`)
                myInfo = result.value
                console.log(`At the end of the getText, myInfo has: "${myInfo}"`)
            })
            .perform(() => { console.log(`After the getText myInfo has: "${myInfo}"`) })
        console.log(`At the end of the test, but not in a perform myInfo has: "${myInfo}"`)
    }
}