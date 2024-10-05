/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img1 from '../public/pic4.png'
import img3 from '../public/pic3.png'
import diet1 from '../public/Diet1.jpeg'
import diet2 from '../public/Diet2.jpeg'
import stubbornFat from '../public/Body.png'
import posturePic from '../public/posture.png'
import img4 from '../public/balanzi.jpeg'
import img5 from '../public/epn.jpeg'
import img7 from '../public/truMedic.png'
import abs from '../public/Abs.jpeg'
import ScrollArrow from '../components/ScrollArrow'
import useSticky from '../components/useSticky'
import Link from 'next/link'
import React, { useState } from 'react'
import ContactPage from '../components/contactform'


export default function Home() {
  const { sticky, stickyRef } = useSticky();
  // New states and function for subscription
  const [email, setEmail] = useState('');

  const subscribe = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      console.error(error);
      return;
    }

    alert('Success! 🎉 You are now subscribed to the mailing list.')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Dinho Fitness</title>
        <script id="mcjs" dangerouslySetInnerHTML={{
          __html: `
            !function(c,h,i,m,p){
              m=c.createElement(h),
              p=c.getElementsByTagName(h)[0],
              m.async=1,
              m.src=i,
              p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/73fb9817edc0be55a90510ae1/743c451533ea32536f40f8245.js");
          `}} />
      </Head>
      <div className={styles.landingpage}>
        <h2 className={styles.shine} id='home'>Book your Fitness Consultation with Me</h2>
        <div className={styles.bgcover}>
        </div>
        <Image src={img3} alt='' className={styles.landingbg} />
        <ScrollArrow />
      </div>
      <div className={styles.main}>
        <div className={styles.navcontainer}>
          {/* <h1 className={styles.title}>Dinho Fitness</h1> */}
          <div ref={stickyRef} className={`${styles.navwrapper} ${sticky ? styles.sticky : ''}`} id='nav'>
            <a href='#home' className={styles.navlink}>Home</a>
            <a href='#about' className={styles.navlink}>About</a>
            <a href='#shop' className={styles.navlink}>Shop</a>
            <a href='#contact' className={styles.navlink}>Contact</a>
          </div>
        </div>
        <div className={styles.page}>
          <div className={styles.section}>
            <h2 className={styles.subheader} id='about'>About Me</h2>
            <div className={styles.aboutwrapper}>
              <div className={styles.aboutimgwrapper}>
                <Image src={img3} alt='' className={styles.aboutimg} />
              </div>
              <p className={styles.aboutme}>Welcome to my Fitness page! My name is Mohammed Al-Falahy, I'm a certified ISSA Personal Trainer & coach, and a partner with FRESH-OP retaurant located at LA Fitness Appleby, Burlington. I've been privileged to have competed in three Men's Physique competitions, which has not only shaped my fitness journey but has fueled my passion to empower others to embark their personal fitness quests.
                <br></br><br></br>
                There are infinite reasons why you might want to hire a personal trainer. The commonality, though, is that you have acknowledged what you want, or need, to improve your health or physical fitness ! In other words, you want to change your current state to a more desirable state.
                <br></br><br></br>
                And I'm here to support you the best I can along our amazing staff</p>
            </div>
            <div className={styles.aboutbtnwrapper}>
              <Link className={styles.aboutbtn} href='/FitnessJourney'>Check out my fitness journey from 16 years</Link>
            </div>
          </div>
          <br></br>
          <div className={styles.section}>
            <h2 className={styles.subheader} id='shop'>Shop</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={diet2} alt='' />
                  <p className={styles.pricetag}>$6.00</p>
                </div>
                <p className={styles.proddescription}>BUILD Cookbook</p>
                <p className={styles.proddetail}>The BUILD Cookbook consists of calorie dense healthy meals that are simple to make, and taste great! Click the <span className={styles.footerlogo}>Buy</span> button to learn more </p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/28odRv5yP0sEbVm001' className={styles.buybtn}>Buy now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={diet1} alt='' />
                  <p className={styles.pricetag}>$6.00</p>
                </div>
                <p className={styles.proddescription}>SHRED Cookbook</p>
                <p className={styles.proddetail}>The SHRED Cookbook consists of less calorie dense healthy meals which are perfect when you are trying to lose fat!  Click the <span className={styles.footerlogo}>Buy</span> button to learn more</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/dR66p39P5b7i9NefYY' className={styles.buybtn}>Buy Now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img1} alt='' />
                  <p className={styles.pricetag}>$85.00/month</p>
                </div>
                <p className={styles.proddescription}>Online Personal Training Program</p>
                <p className={styles.proddetail}>One on one training program with me where I'll go over your check ins with you every weekend and track your progress. You will also have my personal number and can get in direct contact</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/6oE00F3qHb7i2kMcMO' className={styles.buybtn}>Buy now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={stubbornFat} alt='' />
                  <p className={styles.pricetag}>FREE</p>
                </div>
                <p className={styles.proddescription}>THE STUBBORN FAT</p>
                <p className={styles.proddetail}>This is an E-book that I personally enjoyed reading. It gives a ton of insight as to why you might not be loosing that stubborn belly fat. </p>
                <div className={styles.btnwrapper}>
                  <a href='https://mypublic-bucket.s3.ca-central-1.amazonaws.com/dinho-fitness/The+Stubborn+Fat+Solution+-+Flatten+Your+Abs.pdf' download className={styles.buybtn}>Download</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={posturePic} alt='' />
                  <p className={styles.pricetag}>FREE</p>
                </div>
                <p className={styles.proddescription}>THE PERFECT POSTURE</p>
                <p className={styles.proddetail}>Do you find yourself constantly in pain around your neck or lower body ? Try the exercises discussed in this book to combat your chronic pain and live pain free! </p>
                <div className={styles.btnwrapper}>
                  <a href='https://mypublic-bucket.s3.ca-central-1.amazonaws.com/dinho-fitness/Posture+and+Core+Conditioning.pdf' download className={styles.buybtn}>Download</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={abs} alt='' />
                  <p className={styles.pricetag}>FREE</p>
                </div>
                <p className={styles.proddescription}>SECRETS TO A LEAN BODY</p>
                <p className={styles.proddetail}>This E-Book created by Mike Geary offers an eye opening solution to easily obtaining a lean body of your choice. Feel free to download the book and hopefully learn a thing or two !</p>
                <div className={styles.btnwrapper}>
                  <a href='https://mypublic-bucket.s3.ca-central-1.amazonaws.com/dinho-fitness/Training+and+Nutrition+Insider+Secrets+for+a+Lean-Body.pdf' download className={styles.buybtn}>Download</a>
                </div>
              </div>
            </div>
            <h2 className={styles.subheader}>SPONSORSHIP DISCOUNTS</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img4} alt='' />
                  <p className={styles.pricetag}>25% OFF</p>
                </div>
                <p className={styles.proddescription}>Get 25% off ice Balanzi UK jewelry using code <span className={styles.footerlogo}>"MAMDISAVE25%"</span> **Apply code at Checkout</p>
                <div className={styles.btnwrapper}>
                  <a href="https://balanzi.com/" target='_blank' className={styles.buybtn}>SHOP SITE</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img7} alt='' />
                  <p className={styles.pricetag}>33% OFF</p>
                </div>
                <p className={styles.proddescription}>Get 33% off TruMedic Cold & Heat Massage gun using code <span className={styles.footerlogo}>"MAMDINHO33"</span> **Apply code at Checkout</p>
                <div className={styles.btnwrapper}>
                  <a href="https://trumedic.com/products/trurelief%E2%84%A2-impact-therapy-device-thermal" target='_blank' className={styles.buybtn}>SHOP SITE</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subheader} id='contact'>Leave me a message or book your 30 min free consultation</h2>
            <div className={styles.contactsection}>
              <ContactPage />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.copyrightline}>
          <p className={styles.copyright}><span className={styles.footerlogo}>DINHO FITNESS</span> © 2024 Mohammed Al-Falahy</p>
        </div>
      </footer>
    </div>
  )
}
