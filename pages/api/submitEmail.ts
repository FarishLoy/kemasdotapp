// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}
  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { email } = req.query
    if (typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' })
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL === undefined) return res.status(500).json({ error: 'Missing env var' })
    if (process.env.GOOGLE_PRIVATE_KEY === undefined) return res.status(500).json({ error: 'Missing env var' })
    if (isValidEmail(email)) {
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
          });

        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0];

        await sheet.addRow({ email: email, timeStamp: new Date().getTime() })


        return res.status(200).json({ email: req.query.email })
    } else {
        return res.status(400).json({ error: 'Invalid email' })
    }
}
  