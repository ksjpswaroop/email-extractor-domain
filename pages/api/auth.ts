import { NextApiRequest, NextApiResponse } from 'next';
import { UserSchema } from '../../lib/UserSchema';
import { authenticateUser } from '../../lib/security';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user: UserSchema = await authenticateUser(email, password);

    if (user) {
      req.session.set('user', user);
      await req.session.save();
      res.status(200).json({ user: req.session.get('user') });
    } else {
      res.status(401).json({ message: 'Authentication failed. Please check your email and password.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed. Please use POST.' });
  }
}