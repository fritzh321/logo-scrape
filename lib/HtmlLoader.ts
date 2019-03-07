import got = require('got');

export class HtmlLoader {
    public static async getHTML(targetUrl: string): Promise<string> {
        const { body: html } = await got(targetUrl);
        return html;
    }
}
