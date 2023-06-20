// pages/api/payment.js

import { Stripe } from 'stripe';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);

  // Verify the event came from Stripe by checking the signature
  const event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], 'your-webhook-secret');

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Here you would generate the PDF, or fetch it from somewhere
    // and then send an email with it attached
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mohammedfalahy6@gmail.com',
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: 'mohammedfalahy6@gmail.com',
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
