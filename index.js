"use strict";

let webpages = ["https://mozilla.org", "https://wikipedia.org", "https://php.net", "https://jquery.com", "https://duckduckgo.com", "https://gitlab.com", "https://www.linuxfoundation.org", "https://git-scm.com", "https://www.wikimedia.org", "https://startpage.com", "https://www.cloudflare.com", "https://google.com", "https://example.com", "https://noobys.org"];

let tabs = 2000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

browser.browserAction.onClicked.addListener(async () =>
{
    let i = 0;
    let index = 0;
    let length = webpages.length;
    let finished = false;

    for(i = 0; i < tabs; i++)
    {
        if(index == length - 1) { index = 0; }

        await browser.tabs.create({
            url: webpages[index],
            active: false
        }).then((tab) => {
            browser.tabs.discard(tab.id);
        });

        index++;

        if(tabs > 200 && i % 100 == 0) { await sleep(15000); }
    }
});
