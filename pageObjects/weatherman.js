var customCommand = { //custom commands are basically methods/functions without pageobject/browsers.
    searchWeather: function (data) {
        this
            .setValue('@searchBar', [data.search, this.api.Keys.ENTER])
            .waitForElementPresent('@resultCity', 10000)
            .expect.element('@resultCity').text.to.equal(data.result)
        this
            .navigate()
        return this
    }
}

module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [customCommand],
    elements: { //xPath Selector
        searchBar: { selector: '//input[@type="text"]', locateStrategy: 'xpath' },
        resultCity: { selector: '//h3[@class="current-weather__location"]', locateStrategy: 'xpath' },
        errorMessage: { selector: '//h3[@class="error-message__message"]', locateStrategy: 'xpath' },
        searchButton: { selector: '//button[@class="enter-location__submit"]', locateStrategy: 'xpath' },
        searchAgainButton: { selector: '//button[@class="current-weather__search-again"]', locateStrategy: 'xpath' },
        tryAgainButton: { selector: '//button[@class="error-message__try-again"]', locateStrategy: 'xpath' }
    }

}