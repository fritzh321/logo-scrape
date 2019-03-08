import { LogoScrape } from 'logo-scrape';

(async () => {
    const urls = ['http://techcrunch.com' , 'http://producthunt.com'];
    const logoUrls = await LogoScrape.getLogo(urls);
    const logosUrls = await LogoScrape.getLogos(urls);
    console.log({logoUrls, logosUrls});


})();
