import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = 'http://techcrunch.com';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log(JSON.stringify({logo, logos}));

    const urls = ['http://techcrunch.com' , 'http://producthunt.com'];
    const logoUrls = await LogoScrape.getLogo(urls);
    const logosUrls = await LogoScrape.getLogos(urls);
    console.log(JSON.stringify({logoUrls, logosUrls}));
})();
