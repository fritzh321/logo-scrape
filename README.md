<h1 align="center">
    <img height="150" src="http://fr1tz.be/scraper.svg" alt="Logo Scrape" />
    <br> Logo Scrape
</h1>
<p align="center">
  <a href="https://travis-ci.org/fritzh321/logo-scrape">
		<img src="https://img.shields.io/travis/fritzh321/logo-scrape/master.svg?style=flat-square" alt="Build Status">
	</a>
  <a href="https://www.npmjs.com/package/logo-scrape">
    <img src="https://img.shields.io/npm/v/logo-scrape.svg?style=flat-square" />
  </a>
	<a href="https://github.com/fritzh321/logo-scrape">
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
 `getLogo()` or `getLogos()` accepts a url(s) and returns the output for the provided url(s)
 
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

```json
{
  "logo": {
    "type": "link-rel/icon",
    "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32",
    "size": "32x32"
  },
  "logos": [
    {
      "type": "link-rel/icon",
      "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32",
      "size": "32x32"
    },
    {
      "type": "link-rel/icon",
      "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=192",
      "size": "192x192"
    },
    {
      "type": "link-rel/icon",
      "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180"
    },
    {
      "type": "meta-name/msapplication-TileImage",
      "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=270"
    },
    {
      "type": "og:image",
      "url": "https://techcrunch.com/wp-content/themes/techcrunch-2017/images/opengraph-default.png"
    }
  ]
}
```

And for multiple url's

```json
{
  "logoUrls": [
    {
      "type": "link-rel/icon",
      "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32",
      "size": "32x32"
    },
    {
      "type": "link-rel/icon",
      "url": "https://assets.producthunt.com/assets/ph-ios-icon-e1733530a1bfc41080db8161823f1ef262cdbbc933800c0a2a706f70eb9c277a.png"
    }
  ],
  "logosUrls": [
    [
      {
        "type": "link-rel/icon",
        "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32",
        "size": "32x32"
      },
      {
        "type": "link-rel/icon",
        "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=192",
        "size": "192x192"
      },
      {
        "type": "link-rel/icon",
        "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180"
      },
      {
        "type": "meta-name/msapplication-TileImage",
        "url": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=270"
      },
      {
        "type": "og:image",
        "url": "https://techcrunch.com/wp-content/themes/techcrunch-2017/images/opengraph-default.png"
      }
    ],
    [
      {
        "type": "link-rel/icon",
        "url": "https://assets.producthunt.com/assets/ph-ios-icon-e1733530a1bfc41080db8161823f1ef262cdbbc933800c0a2a706f70eb9c277a.png"
      },
      {
        "type": "link-rel/icon",
        "url": "https://www.producthunt.com/favicon.ico"
      },
      {
        "type": "og:image",
        "url": "https://www.producthunt.comhttps://api.url2png.com/v6/P5329C1FA0ECB6/790272390317dc724643b1ca88f5da6e/png/?url=https%3A%2F%2Fwww.producthunt.com%2F"
      },
      {
        "type": "svg:image",
        "data": true,
        "url": "data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M40%2020c0%2011.046-8.954%2020-20%2020S0%2031.046%200%2020%208.954%200%2020%200s20%208.954%2020%2020%22%20fill%3D%22%23DA552F%22%2F%3E%3Cpath%20d%3D%22M22.667%2020H17v-6h5.667a3%203%200%200%201%200%206m0-10H13v20h4v-6h5.667a7%207%200%201%200%200-14%22%20fill%3D%22%23FFF%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      }
    ]
  ]
}
```


## API
The API generated with [TypeDoc](http://typedoc.org/) can be found [here](https://fritzh321.github.io/logo-scrape/).

## Demo
<a href="https://runkit.com/embed/h566z62zd1qx">
	<img src="https://badge.runkitcdn.com/logo-scrape.svg" alt="Try logo-scrape on RunKit"/>
</a>

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; [Fritz Hoste](https://twitter.com/fritz_hoste)
