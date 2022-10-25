const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

describe('Accordion tests', async () => {
    let browser, page;

    before(async () => browser = await chromium.launch());
    after(async () => await browser.close());
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/');
    });
    afterEach(async () => await page.close());

    it('load titles', async () => {
        await page.waitForSelector('.accordion');
        let content = await page.textContent('#main');

        expect(content).to.contain('Scalable Vector Graphics');
        expect(content).to.contain('Open standard');
        expect(content).to.contain('Unix');
        expect(content).to.contain('ALGOL');
    });

    it('button “More” functionality', async () => {
        let expectedContent = 'Scalable Vector Graphics (SVG) is an Extensible Markup Language (XML)-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999.';
        let expectedBtnName = 'Less';
        
        await page.click('button');
        let actualContent = await page.textContent('p');
        let actualBtnName = await page.textContent('button');
        let isVisible = await page.isVisible('div .extra');

        expect(actualContent).to.be.equal(expectedContent);
        expect(actualBtnName).to.be.equal(expectedBtnName);
        expect(isVisible).to.be.true;
    });

    it('button “Less” functionality', async () => {
        let expectedBtnName = 'More';
        
        await page.click('button');
        await page.click('button');
        let actualBtnName = await page.textContent('button');
        let isVisible = await page.isVisible('div .extra');

        expect(actualBtnName).to.be.equal(expectedBtnName);
        expect(isVisible).to.be.false;
    });
});