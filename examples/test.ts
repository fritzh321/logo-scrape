import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = 'http://www.libelle.be';
    const info = await LogoScrape.getLogos(url);
    console.log(info);

})();
