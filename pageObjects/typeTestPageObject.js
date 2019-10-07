module.exports = {
    /**
     *    this is my first type Test
     * */
    // url: 'https://www.keyhero.com/free-typing-test/',

    // elements: {
    //     start: '[data-reactid=".0.0.1.1.2"]',
    //     current: '.quote',
    //     input: '[class="user-input-text"]',
    //     WPM: '[data-reactid=".0.1.1.1.0"]',
    //     Accuracy: '[data-reactid=".0.1.1.3.0"]'
    // }


    /**
    **   this is my second type Test
    **/
    url: 'https://www.ratatype.com/typing-test/test/',

    elements: {
        start: '[class="submit gr"]',
        current: '[class="mainTxt"]',
        input: '[spellcheck="false"]',
        WPM: { selector: '(//div[@class="blue"])[1]', locateStrategy: 'xpath' },
        Accuracy: { selector: '(//div[@class="blue"])[1]', locateStrategy: 'xpath' }
    }

    
}


