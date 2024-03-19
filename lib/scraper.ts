```typescript
import axios from 'axios';
import cheerio from 'cheerio';
import { EmailSchema } from '../schemas/EmailSchema';

export class Scraper {
  private static instance: Scraper;

  private constructor() {}

  public static getInstance(): Scraper {
    if (!Scraper.instance) {
      Scraper.instance = new Scraper();
    }
    return Scraper.instance;
  }

  public async scrapeWebsite(domain: string): Promise<EmailSchema[]> {
    const response = await axios.get(domain);
    const $ = cheerio.load(response.data);
    const emailList: EmailSchema[] = [];

    $('a[href^="mailto:"]').each((index, element) => {
      const email = $(element).attr('href')?.replace('mailto:', '');
      if (email) {
        emailList.push({
          email,
          source: domain,
          foundAt: new Date(),
        });
      }
    });

    return emailList;
  }
}
```