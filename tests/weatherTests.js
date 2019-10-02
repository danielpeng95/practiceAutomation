var weatherPage
var myData = [ //objects within array
    {
        search: '84601',
        result: 'Provo'
    },
    {
        search: 'San Francisco',
        result: 'San Francisco'
    },
    {
        search: 'London',
        result: 'London'
    }
]

function searchWeather1(pageObject, data) {
    pageObject
        .setValue('@searchBar', [data.search, pageObject.api.Keys.ENTER])
        .waitForElementPresent('@resultCity', 10000)
        .expect.element('@resultCity').text.to.equal(data.result)
    pageObject
        .navigate()
}

function searchWeather2(pageObject, search, result) {
    // steps for your search go here
    pageObject
        .setValue('@searchBar', [search, pageObject.api.Keys.ENTER])
        .waitForElementPresent('@resultCity')
        .expect.element('@resultCity').text.to.equal(result)
    pageObject
        .navigate()
}

function invalidWeather(pageObject, search) {
    pageObject
        .setValue('@searchBar', [search, pageObject.api.Keys.ENTER])
        .waitForElementPresent('@resultCity')
        .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
}
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    after: browser => {
        weatherPage.end()
    },

    'check searches1': browser => {
        myData.forEach(test => {
            weatherPage.searchWeather(test)
        })
    },

    // 'check searches1': browser => {
    //     myData.forEach(test => {
    //         searchWeather1(weatherPage, test)
    //     })
    // },

    // "Check searches2": browser => {
    //     myData.forEach(test => {
    //         searchWeather2(weatherPage, test.search, test.result)
    //     })
    // },


    // 'test2': browser=> searchWeather1(weatherPage, myData[1]),
    // 'test3': browser=> searchWeather1(weatherPage, myData[2]),

    // 'Search for city': browser => {
    //     searchWeather2(weatherPage, 'San Diego', 'San Diego') //calling the function
    //     weatherPage
    //         .api.pause(1000) // you need to re-chain. add ".api" for page object.
    // },
    // 'Search for zip': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['95820', browser.Keys.ENTER])
    //         .waitForElementPresent('@resultCity')
    //         .expect.element('@resultCity').text.to.equal('Sacramento')
    // },
    // 'Search for blank': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['', browser.Keys.ENTER])
    //         .waitForElementPresent('@errorMessage')
    //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    // },
    // 'Search for bad zip': browser => {
    //     // weatherPage
    //     //     .setValue('@searchBar', ['123456789', browser.Keys.ENTER])
    //     //     .waitForElementPresent('@errorMessage')
    //     //     .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    //     invalidWeather(weatherPage, '126374859') //calling a function
    // },
    // 'Search again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '95820')
    //         .click('@searchButton')
    //         .waitForElementPresent('@resultCity')
    //         .click('@searchAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // },
    // 'Try again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '')
    //         .click('@searchButton')
    //         .waitForElementPresent('@errorMessage')
    //         .click('@tryAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // }
}