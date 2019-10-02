let manager = {}

var addFromEditTest = require('../testAssets/EmployeeManagerEditTest')  //require from another folder/file

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'Edits an employee and checks that the edit stuck.': browser => {
        manager
            .editTest('Dollie Berry',
                { name: 'Dollie Berry', phone: '1234567890', title: 'good person' },
                'Bernice Ortiz') //running the function from the required folder/file
    },
    'It can add an employee': browser => {
        manager
            .click('@addButton')
            .clickEmployee('New Employee')
            .expect.element('@cardTitle').text.to.equal('New Employee')
    },
    'It can edit a new employee': browser => {
        manager
            .click('@addButton')
            .clickEmployee('New Employee')
            .editEmployee({ name: 'Hank Hill', phone: '0000000000' })
            .click('@saveButton')
            .expect.element('@cardTitle').text.to.equal('Hank Hill')
        manager
            .clickEmployee('Dollie Berry')
            .expect.element('@cardTitle').text.to.equal('Dollie Berry')
        manager
            .clickEmployee('Hank Hill')
            .expect.element('@cardTitle').text.to.equal('Hank Hill')
    },
    'It can edit an existing employee': browser => {
        manager
            .clickEmployee('Dollie Berry')
            .editEmployee({ title: 'Master and Commander' })
            .click('@saveButton')
            .clickEmployee('Bernice Ortiz')
            .expect.element('@cardTitle').text.to.equal('Bernice Ortiz')
        manager
            .clickEmployee('Dollie Berry')
            .expect.element('@titleField').value.to.equal('Master and Commander')
    }

}