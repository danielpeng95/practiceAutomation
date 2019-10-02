module.exports = {
    url: 'http://localhost:3000/#/', //you need to be in wanted-queries. then npm start. open new terminal.
    
    elements: {
        wid: '[name="widInput"]',
        hdr: '[name="hdrInput"]',
        mke: '[name="mkeInput"]',
        ori: '[name="oriInput"]',
        nam: '[name="namInput"]',
        sex: '[name="sexInput"]',
        rac: '[name="racInput"]',
        hgt: '[name="hgtInput"]',
        wgt: '[name="wgtInput"]',
        hai: '[name="haiInput"]',
        off: '[name="offInput"]',
        dow: '[name="dowInput"]',
        error: '[class="results"]',
        burger: '.bm-burger-button',
        save: '#saveBtn',
        x: {selector: '//button[@tabindex="0"]', locateStrategy: 'xpath'},
        enterOption: '[name="enterOption"]',
        modifyOption: '[name="modifyOption"]',
        cancelOption: '[name="cancelOption"]',
        res: '[name="resInput"]',
        dat: '[name="datInput"]'
    }
    
}