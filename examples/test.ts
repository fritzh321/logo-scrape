import { LogoScrape } from 'logo-scrape';

(async () => {
    const url = 'http://bpost.be';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({logo, logos});

    const urls = ['http://telenet.be' , 'http://bpost.be'];
    const logoUrls = await LogoScrape.getLogo(urls);
    const logosUrls = await LogoScrape.getLogos(urls);
    console.log({logoUrls, logosUrls});
})();
