import cheerio = require('cheerio');
import { HtmlLoader } from './HtmlLoader';

export class LogoScrape {
    public static async getLogos(url: string): Promise<string[]> {
        if (!this.validUrl(url)) {
            throw new Error(`No valid url found (${url})`);
        }
        return this.fetchLogos(url);
    }

    public static async getLogo(url: string): Promise<string> {
        if (!this.validUrl(url)) {
            throw new Error(`No valid url found (${url})`);
        }
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
            $('a.navbar-brand img[src*="logo"]').attr('src'),
        ].filter(e => !!e);

        return logos.map((imageLocation: string) => {
            return !this.validUrl(imageLocation)
                ? url + imageLocation
                : imageLocation;
        });
    }

    private static validUrl(url: string): boolean {
        const isValidUrl: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return isValidUrl.test(url);
    }
}
