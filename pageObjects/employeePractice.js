module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    
    elements: {
        Name: '[name="nameEntry"]',
        Phone: '[name="phoneEntry"]',
        Title: '[name="titleEntry"]',
        Save: '[name="save"]'
    },
    var: employee1 = { //when it is in page object, you need ":" after var.
        Name: 'Ortiz Barnie',
        Phone: '1234567890',
        Title: 'OEC'
    }, //you can also declare this above module.exports. also you need a comma after "}" 
    var: employee2 = {
        Name: 'Barn Man',
        Phone: '2637849863',
        Title: 'OTTC'
    },
    var: employee3 = {
        Name: 'Weaver PHILY',
        Phone: '8755473849',
        Title: 'GerMan'
    },
    var: employee4 = {
        Name: 'Osbone T-bone',
        Phone: '8376453674',
        Title: 'Eng DD'
    },
    var: employee5 = {
        Name: 'BER Dollie',
        Phone: '9876543456',
        Title: 'Front Dev'
    },
    var: employee6 = {
        Name: 'Will Harry',
        Phone: '0987656789',
        Title: 'Dev Fronty'
    },
    var: employee7 = {
        Name: 'Estrada Rude man',
        Phone: '7836746356',
        Title: 'Back Dev'
    },
    var: employee8 = {
        Name: 'White Louis',
        Phone: '9878976432',
        Title: 'Full Dev'
    },
    var: employee9 = {
        Name: 'Sparky Eve',
        Phone: '7867564567',
        Title: 'Manage Product person'
    },
    var: employee10 = {
        Name: 'Brewer Person',
        Phone: '0909878786',
        Title: 'Manage Sales man'
    },
    var: newEmployee1 = {
        Name: 'Funny Person',
        Phone: '8498760987',
        Title: 'Jobless'
    },
    var: newEmployee2 = {
        Name: 'Crazy Dude',
        Phone: '1567489374',
        Title: 'has one job'
    }
}