<h1 align="center">
    <img height="150" src="http://fr1tz.be/scraper.svg" alt="Logo Scrape" />
    <br> Logo Scrape
</h1>
<p align="center">
  <a href="https://travis-ci.org/FritzH321/logo-scrape">
		<img src="https://img.shields.io/travis/FritzH321/logo-scrape/master.svg?style=flat-square" alt="Build Status">
	</a>
  <a href="https://www.npmjs.com/package/logo-scrape">
    <img src="https://img.shields.io/npm/v/logo-scrape.svg?style=flat-square" />
  </a>
	<a href="https://github.com/FritzH321/logo-scrape">
		<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License">
	</a>
</p>

<p align="center"><code>LogoScrape</code> scrapes the logo from a provided url(s) for your Node.js applications.</p>

## Installation
```bash
$ npm i logo-scrape
```
## Import
### NodeJS
```js
const { LogoScrape } = require('logo-scrape');
```

### TypeScript
```ts
import { LogoScrape } from 'logo-scrape';
```
## Usage
 `getLogos()` or `getLogos()` accepts a url(s) and returns the output for the provided url(s)
 
```js
(async () => {
    const url = 'http://bpost.be';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({logo, logos});
    
    const urls = ['http://telenet.be' , 'http://bpost.be'];
    const logoUrls = await LogoScrape.getLogo(urls);
    const logosUrls = await LogoScrape.getLogos(urls);
    console.log({logoUrls, logosUrls});
})();
```



Will output below result;

```json
{
  logo: 'https://www.bpost.be/sites/all/themes/custom/bpost_selfservice/logo.png',
  logos: [
    'https://www.bpost.be/sites/all/themes/custom/bpost_selfservice/logo.png'
  ]
}
```

And for muliple url's

```json
{
  logoUrls: [
    'http://telenet.be/etc/designs/telenet-be/media/icons/apple-touch-icon.png',
    'https://www.bpost.be/sites/all/themes/custom/bpost_selfservice/logo.png'
  ],
  logosUrls: [
    [
      'http://telenet.be/etc/designs/telenet-be/media/icons/apple-touch-icon.png',
      'http://telenet.be/content/dam/www-telenet-be/img/generic/Logos%20&%20Trademarks%20for%20content/ogimage/telenet_headerlogo.svg'
    ],
    [
      'https://www.bpost.be/sites/all/themes/custom/bpost_selfservice/logo.png'
    ]
  ]
}
```


## API
The API generated with [TypeDoc](http://typedoc.org/) can be found [here](https://fritzh321.github.io/logo-scrape/).

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; [Fritz Hoste](https://twitter.com/fritz_hoste)
