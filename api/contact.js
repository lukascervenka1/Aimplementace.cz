export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Chybí povinné pole' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Web formulář <onboarding@resend.dev>',
                to: ['info@aimplementace.cz'],
                reply_to: email,
                subject: `Poptávka — ${company || name}`,
                html: `
                    <h2>Nová poptávka z webu</h2>
                    <p><strong>Jméno:</strong> ${name}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>Firma / Projekt:</strong> ${company || '—'}</p>
                    <hr />
                    <p><strong>Zpráva:</strong></p>
                    <p>${message.replace(/\n/g, '<br />')}</p>
                `,
            }),
        });

        if (!response.ok) {
            const err = await response.json();
            console.error('Resend error:', err);
            return res.status(500).json({ error: 'Nepodařilo se odeslat e-mail' });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Chyba serveru' });
    }
}
