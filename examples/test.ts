import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = 'https://www.umicore.com';
    const info = await LogoScrape.getLogos(url);
    console.log(info);

})();
