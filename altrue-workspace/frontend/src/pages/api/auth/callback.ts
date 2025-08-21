import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CALLBACK_URL = process.env.CALLBACK_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { code } = req.body;

    try {
        const response = await axios.post(`${CALLBACK_URL}/auth/callback`, { code });
        const { token } = response.data;

        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/;`);
        return res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
        return res.status(500).json({ message: 'Authentication failed', error: error.message });
    }
}