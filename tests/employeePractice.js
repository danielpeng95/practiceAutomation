var moreEmployee

var info = [{
    number: "1",
    name: "Bernie nah",
    phone: "1234567890",
    title: "Not Real Person",
    number2: "2"
},
{
    number: "2",
    name: "Clark Kent",
    phone: "1234567860",
    title: "SuperMan",
    number2: "1"
},
{
    number: "3",
    name: "YoMaMa PeaMan",
    phone: "1234567899",
    title: "Great Baker",
    number2: "2"
},
{
    number: "4",
    name: "Billy Lanstmane",
    phone: "1904599899",
    title: "Generic",
    number2: "2"
}
]

function idCheck(pageObject) {
    pageObject
        .click('[name="employee1"]')
        .getText('#employeeID', function (result) {
            // console.log(result.value) //this is a callback
            let idNumber = Number(result.value.slice(3)) //.slice(3) gets rid of the first 3 characters
            pageObject
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
}

function changeEmployee(pageObject, change) {
    pageObject
        .click(`[name="employee${change.number}"]`)
        .waitForElementVisible('#employeeTitle')
        .getText('#employeeTitle', function (result) {
            console.log(result.value)
        })
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', change.name)
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', change.phone)
        .clearValue('[name="titleEntry"]')
        .setValue('[name="titleEntry"]', change.title)
        .click('[name="save"]')
        .click(`li[name="employee${change.number2}"]`)
        .expect.element('#employeeTitle').text.not.to.equal(change.name)
    pageObject
        .click(`li[name="employee${change.number}"]`)
        .verify.valueContains('[name="nameEntry"]', change.name)
        .verify.valueContains('[name="phoneEntry"]', change.phone)
        .verify.valueContains('[name="titleEntry"]', change.title)
}

function clickByText(browser, text) { //browser or the page object // text, "Bernice Ortiz"
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`) //make sure you are using ` instead of '.
        .useCss()
}

module.exports = {
    beforeEach: browser => {
        moreEmployee = browser.page.employeePracticePage()
        moreEmployee.navigate()
        moreEmployee
            .waitForElementPresent('body', 8000)
            .verify.urlContains("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
            .waitForElementVisible('.main-container')
    },
    after: browser => {
        moreEmployee.end()
    },
    // 'Change Employee': browser => {
    //     info.forEach(test => {
    //         changeEmployee(moreEmployee, test)
    //     })
    // },
    'Can you edit ID?': browser => {
        moreEmployee
            .click('[name="employee1"]')
            .assert.containsText('#employeeID', "ID", 'ID is not editable') //if text, then ID is not editable.
    }


    // 'test for callback': browser => {
    //     idCheck(moreEmployee)
    // }

    // 'Check for change, save, and cancel button. Change, Save, and cancel all entries': browser => {  

    //     moreEmployee
    //         // .click('[name="employee1"]')
    //         clickByText(moreEmployee, 'Bernice Ortiz')  // calling a function
    //     moreEmployee
    //         .clearValue('@Name')
    //         .setValue('@Name', employee1.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee1.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee1.Title)
    //         .click('@Save')
    //         .verify.value('@Name', employee1.Name)
    //         .verify.value('@Phone', employee1.Phone)
    //         .verify.value('@Title', employee1.Title)
    //         .clearValue('@Name')
    //         .setValue('@Name', 'Ortie')
    //         .clearValue('@Phone')
    //         .setValue('@Phone', '123890')
    //         .clearValue('@Title')
    //         .setValue('@Title', 'OECCOE')
    //         .click('[name="cancel"]')
    //         .verify.value('@Name', employee1.Name)
    //         .verify.value('@Phone', employee1.Phone)
    //         .verify.value('@Title', employee1.Title)

    //         .click('[name="employee2"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee2.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee2.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee2.Title)
    //         .click('@Save')
    //         .verify.value('@Name', employee2.Name)
    //         .verify.value('@Phone', employee2.Phone)
    //         .verify.value('@Title', employee2.Title)
    //         .clearValue('@Name')
    //         .setValue('@Name', 'man')
    //         .clearValue('@Phone')
    //         .setValue('@Phone', 'yolo')
    //         .clearValue('@Title')
    //         .setValue('@Title', 'haha')
    //         .click('[name="cancel"]')
    //         .verify.value('@Name', employee2.Name)
    //         .verify.value('@Phone', employee2.Phone)
    //         .verify.value('@Title', employee2.Title)

    //         .click('[name="employee3"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee3.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee3.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee3.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee3.Title)
    //         .verify.value('@Phone', employee3.Phone)
    //         .verify.value('@Name', employee3.Name)
    //         .clearValue('@Name')
    //         .setValue('@Name', 'man')
    //         .clearValue('@Phone')
    //         .setValue('@Phone', 'yolo')
    //         .clearValue('@Title')
    //         .setValue('@Title', 'haha')
    //         .click('[name="cancel"]')
    //         .verify.value('@Name', employee3.Name)
    //         .verify.value('@Phone', employee3.Phone)
    //         .verify.value('@Title', employee3.Title)

    //         .click('[name="employee4"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee4.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee4.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee4.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee4.Title)
    //         .verify.value('@Phone', employee4.Phone)
    //         .verify.value('@Name', employee4.Name)


    //         .click('[name="employee5"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee5.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee5.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee5.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee5.Title)
    //         .verify.value('@Phone', employee5.Phone)
    //         .verify.value('@Name', employee5.Name)


    //         .click('[name="employee6"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee6.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee6.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee6.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee6.Title)
    //         .verify.value('@Phone', employee6.Phone)
    //         .verify.value('@Name', employee6.Name)


    //         .click('[name="employee7"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee7.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee7.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee7.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee7.Title)
    //         .verify.value('@Phone', employee7.Phone)
    //         .verify.value('@Name', employee7.Name)


    //         .click('[name="employee8"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee8.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee8.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee8.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee8.Title)
    //         .verify.value('@Phone', employee8.Phone)
    //         .verify.value('@Name', employee8.Name)


    //         .click('[name="employee9"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee9.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee9.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee9.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee9.Title)
    //         .verify.value('@Phone', employee9.Phone)
    //         .verify.value('@Name', employee9.Name)


    //         .click('[name="employee10"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', employee10.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', employee10.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', employee10.Title)
    //         .click('@Save')
    //         .verify.value('@Title', employee10.Title)
    //         .verify.value('@Phone', employee10.Phone)
    //         .verify.value('@Name', employee10.Name)


    // },
    // 'Add Employee': browser => {

    //     moreEmployee
    //         .click('[name="addEmployee"]')
    //         .click('[name="employee11"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', newEmployee1.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', newEmployee1.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', newEmployee1.Title)
    //         .click('@Save')
    //         .verify.value('@Title', newEmployee1.Title)
    //         .verify.value('@Phone', newEmployee1.Phone)
    //         .verify.value('@Name', newEmployee1.Name)

    //         .click('[name="addEmployee"]')
    //         .click('[name="employee12"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', newEmployee2.Name)
    //         .clearValue('@Phone')
    //         .setValue('@Phone', newEmployee2.Phone)
    //         .clearValue('@Title')
    //         .setValue('@Title', newEmployee2.Title)
    //         .click('@Save')
    //         .verify.value('@Title', newEmployee2.Title)
    //         .verify.value('@Phone', newEmployee2.Phone)
    //         .verify.value('@Name', newEmployee2.Name)

    // },
    // 'Check for errors': browser => {
    //     moreEmployee
    //         .click('[name="employee1"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', 'Ortiz Barniejfisla;jifdl;aisjdifl;dsajifd')
    //         .clearValue('@Phone')
    //         .setValue('@Phone', '1234567890sdajfildsa')
    //         .clearValue('@Title')
    //         .setValue('@Title', '12C382938@#$#@EWF')
    //         .click('@Save')
    //         .verify.visible(".errorCard")
    //         .verify.elementPresent(".invalidInfo")
    //         .verify.elementNotPresent(".hidden")
    //         .click('[name="cancel"]')
    //         .verify.elementPresent(".hidden")
    //         .verify.elementNotPresent(".invalidInfo")
    // },
    // 'no entry errors': browser => {
    //     moreEmployee
    //         .click('[name="employee1"]')
    //         .clearValue('@Name')
    //         .setValue('@Name', '')
    //         .clearValue('@Phone')
    //         .setValue('@Phone', ' ')
    //         .clearValue('@Title')
    //         .setValue('@Title', '')
    //         .click('@Save')
    //         .verify.visible(".errorCard")
    //         .verify.elementPresent(".invalidInfo")
    //         .verify.elementNotPresent(".hidden")
    //         .click('[name="cancel"]')
    //         .verify.elementPresent(".hidden")
    //         .verify.elementNotPresent(".invalidInfo")
    // }

}