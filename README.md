# LogoScraper
[![npm version](https://badge.fury.io/js/logo-scrape.svg)](https://www.npmjs.com/package/logo-scrape)

Scrape the logo of any website.
<hr>

## Getting Started
### Installation
```bash
$ npm i logo-scraper
```

### Usage NodeJS
```js
const { LogoScrape } = require('logo-scrape');

(async () => {
    const url = 'http://bpost.be';
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log(logo, logos)
})();
```

### Usage TypeScript
```ts
import { LogoScraper } from 'logo-scrape';

(async () => {
    const url: string = 'http://bpost.be';
    const logo: string = await LogoScrape.getLogo(url);
    const logos: string[] = await LogoScrape.getLogos(url);
    console.log(logo, logos)
})();
```


### API
The API generated with [TypeDoc](http://typedoc.org/) can be found [here](https://fritzh321.github.io/logo-scrape/).

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; [Fritz Hoste](https://twitter.com/fritz_hoste)
