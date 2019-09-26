var moreEmployee
module.exports = {
    beforeEach: browser => {
        moreEmployee = browser.page.employeePractice()
        moreEmployee.navigate()
        moreEmployee
            .waitForElementPresent('body', 8000)
            .verify.urlContains("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
            .waitForElementVisible('.main-container')
    },
    after: browser => {
        moreEmployee.end()
    },
    'Check for change, save, and cancel button. Change, Save, and cancel all entries': browser => {
        var employee1 = {
            Name: 'Ortiz Barnie',
            Phone: '1234567890',
            Title: 'OEC'
        } //you can also declare this above module.exports

        var employee2 = {
            Name: 'Barn Man',
            Phone: '2637849863',
            Title: 'OTTC'
        }
        var employee3 = {
            Name: 'Weaver PHILY',
            Phone: '8755473849',
            Title: 'GerMan'
        }
        var employee4 = {
            Name: 'Osbone T-bone',
            Phone: '8376453674',
            Title: 'Eng DD'
        }
        var employee5 = {
            Name: 'BER Dollie',
            Phone: '9876543456',
            Title: 'Front Dev'
        }
        var employee6 = {
            Name: 'Will Harry',
            Phone: '0987656789',
            Title: 'Dev Fronty'
        }
        var employee7 = {
            Name: 'Estrada Rude man',
            Phone: '7836746356',
            Title: 'Back Dev'
        }
        var employee8 = {
            Name: 'White Louis',
            Phone: '9878976432',
            Title: 'Full Dev'
        }
        var employee9 = {
            Name: 'Sparky Eve',
            Phone: '7867564567',
            Title: 'Manage Product person'
        }
        var employee10 = {
            Name: 'Brewer Person',
            Phone: '0909878786',
            Title: 'Manage Sales man'
        }

        moreEmployee
        
            .click('[name="employee1"]')
            .clearValue('@Name')
            .setValue('@Name', employee1.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee1.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee1.Title)
            .click('@Save')
            .verify.value('@Name', employee1.Name)
            .verify.value('@Phone', employee1.Phone)
            .verify.value('@Title', employee1.Title)
            .clearValue('@Name')
            .setValue('@Name', 'Ortie')
            .clearValue('@Phone')
            .setValue('@Phone', '123890')
            .clearValue('@Title')
            .setValue('@Title', 'OECCOE')
            .click('[name="cancel"]')
            .verify.value('@Name', employee1.Name)
            .verify.value('@Phone', employee1.Phone)
            .verify.value('@Title', employee1.Title)

            .click('[name="employee2"]')
            .clearValue('@Name')
            .setValue('@Name', employee2.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee2.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee2.Title)
            .click('@Save')
            .verify.value('@Name', employee2.Name)
            .verify.value('@Phone', employee2.Phone)
            .verify.value('@Title', employee2.Title)
            .clearValue('@Name')
            .setValue('@Name', 'man')
            .clearValue('@Phone')
            .setValue('@Phone', 'yolo')
            .clearValue('@Title')
            .setValue('@Title', 'haha')
            .click('[name="cancel"]')
            .verify.value('@Name', employee2.Name)
            .verify.value('@Phone', employee2.Phone)
            .verify.value('@Title', employee2.Title)

            .click('[name="employee3"]')
            .clearValue('@Name')
            .setValue('@Name', employee3.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee3.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee3.Title)
            .click('@Save')
            .verify.value('@Title', employee3.Title)
            .verify.value('@Phone', employee3.Phone)
            .verify.value('@Name', employee3.Name)
            .clearValue('@Name')
            .setValue('@Name', 'man')
            .clearValue('@Phone')
            .setValue('@Phone', 'yolo')
            .clearValue('@Title')
            .setValue('@Title', 'haha')
            .click('[name="cancel"]')
            .verify.value('@Name', employee3.Name)
            .verify.value('@Phone', employee3.Phone)
            .verify.value('@Title', employee3.Title)

            .click('[name="employee4"]')
            .clearValue('@Name')
            .setValue('@Name', employee4.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee4.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee4.Title)
            .click('@Save')
            .verify.value('@Title', employee4.Title)
            .verify.value('@Phone', employee4.Phone)
            .verify.value('@Name', employee4.Name)


            .click('[name="employee5"]')
            .clearValue('@Name')
            .setValue('@Name', employee5.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee5.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee5.Title)
            .click('@Save')
            .verify.value('@Title', employee5.Title)
            .verify.value('@Phone', employee5.Phone)
            .verify.value('@Name', employee5.Name)


            .click('[name="employee6"]')
            .clearValue('@Name')
            .setValue('@Name', employee6.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee6.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee6.Title)
            .click('@Save')
            .verify.value('@Title', employee6.Title)
            .verify.value('@Phone', employee6.Phone)
            .verify.value('@Name', employee6.Name)


            .click('[name="employee7"]')
            .clearValue('@Name')
            .setValue('@Name', employee7.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee7.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee7.Title)
            .click('@Save')
            .verify.value('@Title', employee7.Title)
            .verify.value('@Phone', employee7.Phone)
            .verify.value('@Name', employee7.Name)


            .click('[name="employee8"]')
            .clearValue('@Name')
            .setValue('@Name', employee8.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee8.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee8.Title)
            .click('@Save')
            .verify.value('@Title', employee8.Title)
            .verify.value('@Phone', employee8.Phone)
            .verify.value('@Name', employee8.Name)


            .click('[name="employee9"]')
            .clearValue('@Name')
            .setValue('@Name', employee9.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee9.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee9.Title)
            .click('@Save')
            .verify.value('@Title', employee9.Title)
            .verify.value('@Phone', employee9.Phone)
            .verify.value('@Name', employee9.Name)


            .click('[name="employee10"]')
            .clearValue('@Name')
            .setValue('@Name', employee10.Name)
            .clearValue('@Phone')
            .setValue('@Phone', employee10.Phone)
            .clearValue('@Title')
            .setValue('@Title', employee10.Title)
            .click('@Save')
            .verify.value('@Title', employee10.Title)
            .verify.value('@Phone', employee10.Phone)
            .verify.value('@Name', employee10.Name)


    },
    'Add Employee': browser => {
        var newEmployee1 = {
            Name: 'Funny Person',
            Phone: '8498760987',
            Title: 'Jobless'
        }

        var newEmployee2 = {
            Name: 'Crazy Dude',
            Phone: '1567489374',
            Title: 'has one job'
        }
        moreEmployee
            .click('[name="addEmployee"]')
            .click('[name="employee11"]')
            .clearValue('@Name')
            .setValue('@Name', newEmployee1.Name)
            .clearValue('@Phone')
            .setValue('@Phone', newEmployee1.Phone)
            .clearValue('@Title')
            .setValue('@Title', newEmployee1.Title)
            .click('@Save')
            .verify.value('@Title', newEmployee1.Title)
            .verify.value('@Phone', newEmployee1.Phone)
            .verify.value('@Name', newEmployee1.Name)

            .click('[name="addEmployee"]')
            .click('[name="employee12"]')
            .clearValue('@Name')
            .setValue('@Name', newEmployee2.Name)
            .clearValue('@Phone')
            .setValue('@Phone', newEmployee2.Phone)
            .clearValue('@Title')
            .setValue('@Title', newEmployee2.Title)
            .click('@Save')
            .verify.value('@Title', newEmployee2.Title)
            .verify.value('@Phone', newEmployee2.Phone)
            .verify.value('@Name', newEmployee2.Name)

    },
    'Check for errors': browser => {
        moreEmployee
            .click('[name="employee1"]')
            .clearValue('@Name')
            .setValue('@Name', 'Ortiz Barniejfisla;jifdl;aisjdifl;dsajifd')
            .clearValue('@Phone')
            .setValue('@Phone', '1234567890sdajfildsa')
            .clearValue('@Title')
            .setValue('@Title', '12C382938@#$#@EWF')
            .click('@Save')
            .verify.visible(".errorCard")
            .verify.elementPresent(".invalidInfo")
            .verify.elementNotPresent(".hidden")
            .click('[name="cancel"]')
            .verify.elementPresent(".hidden")
            .verify.elementNotPresent(".invalidInfo")
    },
    'no entry errors': browser => {
        moreEmployee
            .click('[name="employee1"]')
            .clearValue('@Name')
            .setValue('@Name', '')
            .clearValue('@Phone')
            .setValue('@Phone', ' ')
            .clearValue('@Title')
            .setValue('@Title', '')
            .click('@Save')
            .verify.visible(".errorCard")
            .verify.elementPresent(".invalidInfo")
            .verify.elementNotPresent(".hidden")
            .click('[name="cancel"]')
            .verify.elementPresent(".hidden")
            .verify.elementNotPresent(".invalidInfo")

    }

}