export class Helpers {
  public static validUrl(url: string): boolean {
    const isValidUrl: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return isValidUrl.test(url);
  }

  public static findJsonLdImages(text: string | null): any {
    if (text == null) {
      return null;
    }
    const info = JSON.parse(text);
    return info ? info.logo : null;
  }

  public static svgToDataURL(svgStr: string | null): any {
    if (svgStr && svgStr.indexOf('svg') && svgStr.indexOf('href') === -1) {
      const encoded = encodeURIComponent(svgStr)
        .replace(/'/g, '%27')
        .replace(/"/g, '%22');

      const header = 'data:image/svg+xml,';
      return header + encoded;
    } else {
      return null;
    }

  }
}
