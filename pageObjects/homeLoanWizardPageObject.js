var customCommands = {
    fill: function (object) {
        this
            .click('@start')
            .waitForElementVisible('@loan')
            .setValue('@loan', object.loan)
            .setValue('@property', object.property)
            .click('@next')
            .setValue('@city', object.city)
            .click('@next')
            .click(`@${object.house}`)
            .click(`@${object.home}`)
            .click(`@${object.agent}`)
            .setValue('@price', object.price)
            .setValue('@down', object.down)
            .click('@next')
            .click(`@${object.score}`)
            .click(`@${object.bank}`)
            .setValue('@address1', object.address1)
            .setValue('@address2', object.address2)
            .setValue('@address3', object.address3)
            .click('@next')
            .setValue('@first', object.first)
            .setValue('@last', object.last)
            .setValue('@email', object.email)
            .click('@next')
        return this //if you dont have this, you have to rechain the browser
    },
    customVerify: function (object) {
        this
            .verify.containsText('@checkName', object.first)
            .verify.containsText('@checkName', object.last)
            .verify.containsText('@checkEmail', object.email)
            .verify.containsText('@checkLoan', object.checkLoan) //
            .verify.containsText('@checkProperty', object.checkProperty) //
            .verify.containsText('@checkCity', object.city)
            .verify.containsText('@checkPurpose', object.checkHouse) //
            .verify.containsText('@checkFound', object.checkHome) //
            .verify.containsText('@checkAgent', object.checkAgent) //
            .verify.containsText('@checkPrice', object.price)
            .verify.containsText('@checkDown', object.down)
            .verify.containsText('@checkScore', object.checkScore) //
            .verify.containsText('@checkCredit', object.bank)
            .click('@again')
        return this
    }
}
module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [customCommands],
    elements: {
        start: '.home-btn',
        loan: '[id="loanTypes"]',
        property: '[id="propertyTypes"]',
        next: '[name="nextButton"]',
        city: '[type="text"]',
        primary: '[value="Primary Home"]',
        rental: '[value="Rental Property"]',
        secondary: '[value="Secondary Home"]',
        yes: '[name="yesButton"]',
        no: '[name="noButton"]',
        price: '[name="price"]',
        down: '[name="down"]',
        excellent: '[value="excellent"]',
        good: '[value="good"]',
        fair: '[value="fair"]',
        poor: '[value="poor"]',
        none: '[value="Has never been in bankruptcy"]',
        bankruptcy: '[value="Has had bankruptcy before"]',
        foreclosure: '[value="Has had a foreclosure before"]',
        both: '[value="Has had both a foreclosure and a bankruptcy"]',
        address1: '[id="addressOne"]',
        address2: '[id="addressTwo"]',
        address3: '[id="addressThree"]',
        first: '[id="first"]',
        last: '[id="last"]',
        email: '[id="email"]',
        again: '[name="restartButton"]',
        checkName: '[class="name p2"]',
        checkEmail: '[class="email p2"]',
        checkLoan: '[class="loanType p2"]',
        checkProperty: '[class="propertyType p2"]',
        checkCity: '[class="city p2"]',
        checkPurpose: '[class="propertyPurpose p2"]',
        checkFound: '[class="found p2"]',
        checkAgent: '[class="agent p2"]',
        checkPrice: '[class="price p2"]',
        checkDown: '[class="downPayment p2"]',
        checkScore: '[class="creditScore p2"]',
        checkCredit: '[class="creditHistory p2"]'



    }
}