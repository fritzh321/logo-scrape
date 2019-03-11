import { Helpers } from './Helpers';
import { ImageSearch } from './ImageSearch';

export class LogoScrape {
    public static async getLogo(url: string | string[]): Promise<any> {
        if (typeof url !== 'string') {
            return Promise.all(
                url.map((urlItem: any) => {
                    if (!Helpers.validUrl(urlItem)) {
                        throw new Error(`No valid url found (${urlItem})`);
                    }
                    return ImageSearch.findImages(urlItem);
                })
            );
        } else {
            if (!Helpers.validUrl(url)) {
                throw new Error(`No valid url found (${url})`);
            }
            return ImageSearch.findImages(url);
        }
    }

    public static async getLogos(url: string | string[]): Promise<any> {
        if (typeof url !== 'string') {
            return Promise.all(
                url.map((urlItem: string) => {
                    if (!Helpers.validUrl(urlItem)) {
                        throw new Error(`No valid url found (${urlItem})`);
                    }
                    return ImageSearch.findImages(urlItem, true);
                })
            );
        } else {
            if (!Helpers.validUrl(url)) {
                throw new Error(`No valid url found (${url})`);
            }
            return ImageSearch.findImages(url, true);
        }
    }
}
