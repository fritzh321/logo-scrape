# LogoScraper
[![npm version](https://badge.fury.io/js/logo-scrape.svg)](https://www.npmjs.com/package/logo-scrape)

<hr>

Scrape the logo of any website.
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
    const logos = await LogoScrape.getLogo(url);
    console.log(logos)
})();
```

### Usage TypeScript
```ts
import { LogoScraper } from 'logo-scrape';

(async () => {
    const url: string = 'http://bpost.be';
    const logos: string[] = await LogoScrape.getLogo(url);
    console.log(logos)
})();
```


### API
The API generated with [TypeDoc](http://typedoc.org/) can be found [here](https://fritzh321.github.io/LogoScraper/).

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; [Fritz Hoste](https://twitter.com/fritz_hoste)
