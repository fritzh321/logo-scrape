<h1 align="center">
	<img height="150" src="https://cdn.rawgit.com/FritzH321/logo-scraper/master/logo-scraper.svg" alt="Logo Scrape" />
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

<p align="center"><code>LogoScrape</code> scrapes any logo from an url for your Node.js applications.</p>



<hr>


## Installation

## Usage
```bash
$ npm i logo-scraper
```

### NodeJS
```js
const { LogoScrape } = require('logo-scrape');

(async () => {
    const url = 'http://bpost.be';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log(logo, logos)
})();
```

### TypeScript
```ts
import { LogoScraper } from 'logo-scrape';

(async () => {
    const url: string = 'http://bpost.be';
    const logo: string = await LogoScrape.getLogo(url);
    const logos: string[] = await LogoScrape.getLogos(url);
    console.log(logo, logos)
})();
```


## API
The API generated with [TypeDoc](http://typedoc.org/) can be found [here](https://fritzh321.github.io/logo-scrape/).

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; [Fritz Hoste](https://twitter.com/fritz_hoste)
