import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = ['http://bloomberg.com'];
    const logoUrls = await LogoScrape.getLogo(url);
    const logosUrls = await LogoScrape.getLogos(url);
    console.log({logoUrls, logosUrls});


})();
