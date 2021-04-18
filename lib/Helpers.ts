import { URL } from 'url';

export class Helpers {
  public static validUrl(url: string): boolean {
    // const isValidUrl: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    // return isValidUrl.test(url);
    //
    try {
      // tslint:disable-next-line:no-unused-expression
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
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

  public static concatUrl(host: string, path: string): string {
    console.log(host, path);
    host = host.trim().replace(/^\/+|\/+$/g, '');
    const hostUrl = new URL(host);
    if (path[0] + path[1] === '//') {
      path = path.trim().replace(/^\/+|\/+$/g, '');
      return hostUrl.protocol + '//' + path;
    }
    if (path[0] === '/') {
      return hostUrl.protocol + '//' + hostUrl.hostname + path;
    }
    const slices: string[] = hostUrl.pathname
      .replace(/^\/+|\/+$/g, '')
      .split('/');
    if (slices.length > 1) {
      slices.splice(-1, 1);
    }
    const nPath: string = slices.join('/');
    console.log(nPath);
    console.log(hostUrl.protocol + '//' + hostUrl.hostname + '/' + nPath + '/' + path);
    return hostUrl.protocol + '//' + hostUrl.hostname + '/' + nPath + '/' + path;
  }
}
