import { Stripe } from 'stripe';
import sgMail from '@sendgrid/mail';
import AWS from 'aws-sdk';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});
const s3 = new AWS.S3();
const urlExpirationTime = 60 * 60; 


const handler = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);
  const event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], `${process.env.WEBHOOK_SECRET}`);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const params = {
      Bucket: 'dinhofitness-public',
      Key: 'MyCookBook.pdf', 
      Expires: urlExpirationTime
    };
    const signedUrl = s3.getSignedUrl('getObject', params);
    console.log(signedUrl);  // Outputs the signed URL
    const msg = {
      to: session.customer_email,
      from: process.env.MY_EMAIL,
      subject: 'Your Cookbook',
      text: `Welcome to the dinhoFitness Fam !!! Thank you for your purchase :) I hope you find the recipes and macros appealing. You can download your cookbook here: ${signedUrl}`
    };

    try {
      await sgMail.send(msg);
      res.json({ received: true });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
      res.status(500).json({ error: 'Error sending email' });
    }
  }
}

export default handler;
