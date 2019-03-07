import { LogoScrape } from 'logo-scrape';

(async () => {
    const logo = await LogoScrape.getLogos('http://www.instantonline.be');
    console.log(logo);
})();
