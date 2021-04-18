import { LogoScrape } from '../lib';

(async () => {
    const url = 'http://producthunt.com';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({logo, logos});
})();
