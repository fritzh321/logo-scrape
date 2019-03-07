import cheerio = require('cheerio');
import { HtmlLoader } from './HtmlLoader';

export class LogoScrape {
    public static async getLogos(url: string): Promise<string[]> {
        return this.fetchLogos(url);
    }

    public static async getLogo(url: string): Promise<string> {
        const [logo] = await this.fetchLogos(url);
        return logo;
    }

    private static async fetchLogos(url: string): Promise<string[]> {
        const html = await HtmlLoader.getHTML(url);
        const $ = cheerio.load(html);

        const logos: string[] = [
            $('meta[property="og:logo"]').attr('content'),
            $('meta[itemprop="logo"]').attr('content'),
            $('img[itemprop="logo"]').attr('src'),
            $('link[rel*="icon"]').attr('href'),
            $('img[alt*="logo"]').attr('src'),
        ];

        return logos.filter(e => e);
    }
}
