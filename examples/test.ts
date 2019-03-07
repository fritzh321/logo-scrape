import { LogoScrape } from 'logo-scrape';

(async () => {
    const logo = await LogoScrape.getLogo('https://www.bpost.be');
    console.log(logo);
})();
