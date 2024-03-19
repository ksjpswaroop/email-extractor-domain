import { NextApiRequest, NextApiResponse } from 'next';
import { extractEmails } from '../../lib/emailExtractor';
import { SearchSettingsSchema } from '../../lib/searchSettings';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { domain, settings }: { domain: string; settings: SearchSettingsSchema } = req.body;

    try {
      const emailList = await extractEmails(domain, settings);
      res.status(200).json({ emailList });
    } catch (error) {
      res.status(500).json({ error: 'Error extracting emails' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}