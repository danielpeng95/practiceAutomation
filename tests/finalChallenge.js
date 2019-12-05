var info = [
    {
        name: "Bernie Ortiz",
        phone: "4824931093",
        title: "CEO",
    },
    {
        name: "Marnie Barnett",
        phone: "3094812387",
        title: "CTO",
    },
    {
        name: "Phillip Weaver",
        phone: "7459831843",
        title: "Manager",
    },
    {
        name: "Teresa Osborne",
        phone: "3841238745",
        title: "Director of Engineering",
    },
    {
        name: "Dollie Berry",
        phone: "4873459812",
        title: "Front-End Developer",
    },
    {
        name: "Harriett Williamson",
        phone: "6571249801",
        title: "Front-End Developer",
    },
    {
        name: "Ruby Estrada",
        phone: "5740923478",
        title: "Back-End Developer",
    },
    {
        name: "Lou White",
        phone: "8727813498",
        title: "Full-Stack Developer",
    },
    {
        name: "Eve Sparks",
        phone: "8734567810",
        title: "Product Manager",
    },
    {
        name: "Lois Brewer",
        phone: "8749823456",
        title: "Sales Manager",
    },
]
function employee(browser, info) {
    for (i = 1; i <= 10; i++) {
        browser
            .waitForElementPresent(`[name="employee${i}"]`)
        browser
            .click(`[name="employee${i}"]`)
            .waitForElementPresent('[name="nameEntry"]')
        browser.expect.element('[name="nameEntry"]').to.be.visible
        browser.expect.element('[name="phoneEntry"]').to.be.visible
        browser.expect.element('[name="titleEntry"]').to.be.visible
        .verify.containsText('[name="nameEntry"]', info.name)
    }
}


module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Test Name': browser => {
        browser
        // employee(browser)
        info.forEach(test => {
            employee(browser, test)
        })
    }
}
