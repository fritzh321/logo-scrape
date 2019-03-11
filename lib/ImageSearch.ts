import cheerio = require('cheerio');
import { Helpers } from './Helpers';
import { HtmlLoader } from './HtmlLoader';

export class ImageSearch {
    public static async findImages(url: string, showAllImages?: boolean): Promise<string | string[]> {
        const response = await HtmlLoader.getHTML(url);
        const $ = cheerio.load(response.html);


        const logos: string[] = [
            {type: 'og:logo', url: $('meta[property="og:logo"]').attr('content')},
            {type: 'meta-itemprop/logo', url: $('meta[itemprop="logo"]').attr('content')},
             ...$('link[rel*="icon"]').map((i, el) => {
                 return {type: 'link-rel/icon', url: $(el).attr('href'), size: $(el).attr('sizes')};
             }).get(),
            {type: 'img-itemprop/logo', url: $('img[itemprop="logo"]').attr('src')},
            {type: 'meta-name/msapplication-TileImage', url: $('meta[name*="msapplication-TileImage"]').attr('content')},
            {type: 'meta-content/logo', url: $('meta[content*="logo"]').attr('content')},
            {type: 'meta-content/image', url: $('meta[itemprop*="image"]').attr('content')},
            {type: 'json-ld-logo', url: Helpers.findJsonLdImages($('script[type*="application/ld+json"]').html())},
            {type: 'img-alt/logo', url: $('img[alt*="logo"]').attr('src')},
            {type: 'img-src/logo', url: $('img[src*="logo"]').attr('src')},
            {type: 'bootstrap/navbar', url: $('a.navbar-brand img[src*="logo"]').attr('src')},
        ].filter(e => e.url);


        const correctLogos: string[] = logos.map((image: any) => {
            return !Helpers.validUrl(image.url) ? {...image, url: response.url + image.url} : image;
        });

        if (showAllImages) {
            return correctLogos;
        } else {
            const [logo] = correctLogos;
            return logo;
        }

    }

}
