import { LogoScrape } from 'logo-scrape';

(async () => {
    const logo: string[][] = await LogoScrape.getLogos(['http://www.telenet.be', 'http://bpost.be']);
    console.log(logo);
})();
