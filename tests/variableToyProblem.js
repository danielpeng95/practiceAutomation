
module.exports = {
    after: browser => {
        browser.end()
    },
    'Selectors': browser => {
        
        var searchBar = '//input[@class="enter-location__input"]'
        var submitButton = '//button[@class="enter-location__submit"]'
        var resultingCity = '//h3[@class="current-weather__location"]'
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .useXpath()
            .setValue(searchBar, 'San Diego')
            .click(submitButton)
            .waitForElementVisible(resultingCity)
            .verify.containsText(resultingCity, 'San Diego')
    },
    'Test data': browser => {
        var newEmployeeName = 'Daniel'
        var newEmployeePhone = '8475867584'
        var newEmployeeTitle = 'SWAG'
        browser
            
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .useCss()
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', newEmployeeName)
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newEmployeePhone)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newEmployeeTitle)
            .click('#saveBtn')
            .click('li[name="employee1"]')
            .expect.element('input[name="nameEntry"]').value.not.to.equal(newEmployeeName)
        browser
            .click('li[name="employee11"]')
            .expect.element('input[name="nameEntry"]').value.to.equal(newEmployeeName)
        browser.expect.element('input[name="phoneEntry"]').value.to.equal(newEmployeePhone)
        browser.expect.element('input[name="titleEntry"]').value.to.equal(newEmployeeTitle)
    }
}