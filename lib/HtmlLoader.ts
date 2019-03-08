import got = require('got');

export class HtmlLoader {
    public static async getHTML(targetUrl: string, gzipDeflateBr: string = 'gzip, deflate, br'): Promise<string> {
        const { body: html } = await got(targetUrl, {
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-encoding': gzipDeflateBr,
                'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
                'cache-control': 'max-age=0',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36' +
                    '(KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            },
        });
        return html;
    }
}
