import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = 'http://techcrunch.com';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({logo, logos});


})();
