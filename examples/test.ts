import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = 'http://stackoverflow.com';
    const info = await LogoScrape.getLogos(url);
    console.log(info);

})();
