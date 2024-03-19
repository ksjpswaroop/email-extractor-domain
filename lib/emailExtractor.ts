```typescript
import axios from 'axios';
import cheerio from 'cheerio';

interface EmailData {
  email: string;
  sourceUrl: string;
}

export async function extractEmails(domain: string): Promise<EmailData[]> {
  const url = `http://${domain}`;
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const emailList: EmailData[] = [];

  const emailRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

  $('body').each((i, elem) => {
    const bodyText = $(elem).text();
    const emails = bodyText.match(emailRegEx);
    if (emails) {
      emails.forEach((email) => {
        emailList.push({ email, sourceUrl: url });
      });
    }
  });

  return emailList;
}
```