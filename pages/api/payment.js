import { Stripe } from 'stripe';
import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);
  const event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], `${process.env.WEBHOOK_SECRET}`);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: session.customer_email,
      subject: 'Your Cookbook',
      text: 'Thank you for your purchase! Please find your cookbook attached.',
      attachments: [
        {
          filename: 'MyCookBook.pdf',
          path: '../public/MyCookBook.pdf',
          contentType: 'application/pdf'
        }
      ]
    };

    transporter.sendMail(mailOptions, function(err, info){
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        res.json({ received: true });
      }
    });
  }
}

export default handler;
