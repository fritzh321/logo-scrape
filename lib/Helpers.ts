export class Helpers {
    public static validUrl(url: string): boolean {
        const isValidUrl: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return isValidUrl.test(url);
    }

    public static findJsonLdImages(text: string): any {
        const info = JSON.parse(text);
        return info ? info.logo : null;
    }
}
