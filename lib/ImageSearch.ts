import cheerio = require('cheerio');
import { Helpers } from './Helpers';
import { HtmlLoader } from './HtmlLoader';

export class ImageSearch {
    public static async findImages(url: string, showAllImages?: boolean): Promise<string | string[]> {
        const html = await HtmlLoader.getHTML(url);
        const $ = cheerio.load(html);

        const logos: string[] = [
            $('meta[property="og:logo"]').attr('content'),
            $('meta[itemprop="logo"]').attr('content'),
            $('img[itemprop="logo"]').attr('src'),
            ...$('link[rel*="icon"]').map((i, el) => $(el).attr('href')).get(),
            $('link[rel*="apple-touch-icon"]').attr('href'),
            $('meta[name*="msapplication-TileImage"]').attr('content'),
            $('img[alt*="logo"]').attr('src'),
            $('a.navbar-brand img[src*="logo"]').attr('src'),
        ].filter(e => !!e).filter((e, i, a) => a.indexOf(e) === i);

        const correctLogos: string[] = logos.map((imageLocation: string) => {
            return !Helpers.validUrl(imageLocation) ? url + imageLocation : imageLocation;
        });

        if (showAllImages) {
            return correctLogos;
        } else {
            const [logo] = correctLogos;
            return logo;
        }
    }
}
