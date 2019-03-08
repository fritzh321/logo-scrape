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
    const url = 'http://techcrunch.com';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({logo, logos});
    
    const urls = ['http://techcrunch.com' , 'http://producthunt.com'];
    const logoUrls = await LogoScrape.getLogo(urls);
    const logosUrls = await LogoScrape.getLogos(urls);
    console.log({logoUrls, logosUrls});
})();
```



Will output below result;

```console
{
  logo: 'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32',
  logos: [
    'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32',
    'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=192',
    'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180',
    'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=270'
  ]
}
```

And for multiple url's

```console
{
  logoUrls: [
    'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32',
    'https://assets.producthunt.com/assets/ph-ios-icon-e1733530a1bfc41080db8161823f1ef262cdbbc933800c0a2a706f70eb9c277a.png'
  ],
  logosUrls: [
    [
      'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32',
      'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=192',
      'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180',
      'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=270'
    ],
    [
      'https://assets.producthunt.com/assets/ph-ios-icon-e1733530a1bfc41080db8161823f1ef262cdbbc933800c0a2a706f70eb9c277a.png',
      'http://producthunt.com/favicon.ico'
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
