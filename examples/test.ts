import { LogoScrape } from 'logo-scrape';

(async () => {
    const logo = await LogoScrape.getLogos('http://www.telenet.be');
    console.log(logo);
})();
