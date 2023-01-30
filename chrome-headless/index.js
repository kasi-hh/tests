/**
 * https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
 */

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width:1024,
        height:1000
    });
    page.on('console', (...args) => {
        console.log.apply(console, args);
    });
    await page.goto('https://www.arielgrafik.de/info/info1-22', {waitUntil: 'networkidle'});
    await page.emulateMedia('screen');
    //await page.pdf({path: 'page.pdf', format: 'A4', printBackground:true});
    //await page.screenshot({path: 'screenshot.png',fullPage:true});
    console.log(await page.mainFrame().$eval('a', els => {
        console.log('els',els, els.href);
/*
        for (const el of els){
            result.push(el.href+'\r\n')
        }
*/
        return els;
    }));
    console.log(await page.evaluate(()=>{
        let result = [];
        for (el of document.querySelectorAll('a')){
            result.push(el.href);
        }
        result.push(Array.from(document.querySelectorAll('img')).map((el)=>el.src))
        return result;
    }))
    const elements = await page.$$('a');
    for (const element of elements){
        console.log(element._remoteObject.description)
    }
    console.log(await page.viewport());
    browser.close();
})();