export default function handler(req, res) {
  const key = process.env.RESEND_API_KEY || '';
  res.status(200).json({
    keySet: !!key,
    keyPrefix: key.slice(0, 8) + '...',
    keyLength: key.length,
  });
}
