export class Helpers {
    public static validUrl(url: string): boolean {
        const isValidUrl: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return isValidUrl.test(url);
    }

    public static findJsonLdImages(text: string): any {
        const info = JSON.parse(text);
        return info ? info.logo : null;
    }

    public static svgToDataURL(svgStr: string) {
        if (svgStr.indexOf('svg') && svgStr.indexOf('href') === -1) {
            const encoded = encodeURIComponent(svgStr)
                .replace(/'/g, '%27')
                .replace(/"/g, '%22');

            const header = 'data:image/svg+xml,';
            const dataUrl = header + encoded;

            return dataUrl;
        } else {
            return null;
        }

    }
}
