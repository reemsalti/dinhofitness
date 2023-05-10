/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img1 from '../public/mealprep.jpg'
import img2 from '../public/cookBook.png'
import ScrollArrow from '../components/ScrollArrow'
import useSticky from '../components/useSticky'
import img3 from '../public/pic3.png'
import img4 from '../public/balanzi.jpeg';
import img5 from '../public/epn.jpeg'
import ContactPage from '../components/contactform'


export default function Home() {
  const { sticky, stickyRef } = useSticky();
  return (
    <div className={styles.container}>
      <Head>
        <title>Dinho Fitness</title>
      </Head>
      <div className={styles.landingpage}>
        <h2 className={styles.shine} id='home'>Dinho Fitness</h2>
        <div className={styles.bgcover}>
        </div> 
        <Image src={img3} alt='' className={styles.landingbg}/>
        <ScrollArrow/>
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
                <Image src={img3} alt='' className={styles.aboutimg}/>
              </div>
              <p className={styles.aboutme}>
                My name is Mohammed, I'm a bodybuilder with over 6 years of experience in the industry. I've competed in several men's physique competitions, and my passion and drive for fitness has led me to help others achieve their goals as well. <br></br> As a personal trainer, I specialize in creating custom meal and fitness plans that are accessible to everyone, because I believe guidance shouldn't be limited by cost.
                I have experience training clients remotely from all over the world, including Canada, Tanzania, and Oman. My goal is to provide personalized guidance and support to help clients achieve their fitness goals no matter where they are located. Whether you're a beginner or an experienced athlete, I'm committed to helping you reach your full potential and achieve the body of your dreams.
              </p>
              </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subheader} id='shop'>Shop</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                    <Image className={styles.prodimg} src={img1} alt=''/>
                    <p className={styles.pricetag}>$0.00/month</p>
                </div>
                <p className={styles.proddescription}>Bulking Cookbook</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/28odRv5yP0sEbVm001' className={styles.buybtn}>Buy now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                    <Image className={styles.prodimg} src={img2} alt=''/>
                    <p className={styles.pricetag}>FREE</p>
                </div>
                <p className={styles.proddescription}>Shredding Cookbook</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/dR66p39P5b7i9NefYY' className={styles.buybtn}>Buy Now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                    <Image className={styles.prodimg} src={img1} alt=''/>
                    <p className={styles.pricetag}>$85.00/month</p>
                </div>
                <p className={styles.proddescription}>Online Personal Training Program</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/6oE00F3qHb7i2kMcMO' className={styles.buybtn}>Buy now</a>
                </div>
              </div>
            </div>
            <h2 className={styles.subheader}>SPONSORSHIP DISCOUNTS</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                    <Image className={styles.prodimg} src={img4} alt=''/>
                    <p className={styles.pricetag}>25% OFF</p>
                </div>
                <p className={styles.proddescription}>Get 25% off jewelry using code "MAMDISAVE25%" **Apply code at Checkout</p>
                <div className={styles.btnwrapper}>
                  <a href="https://balanzi.com/" target='_blank' className={styles.buybtn}>SHOP SITE</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                    <Image className={styles.prodimg} src={img5} alt=''/>
                    <p className={styles.pricetag}>10% OFF</p>
                </div>
                <p className={styles.proddescription}>Get 10% off Nutritional Supplements using code "MFALAHY" **Apply code at Checkout</p>
                <div className={styles.btnwrapper}>
                  <a href="https://ep-nutrition.com?aff=10413" target='_blank' className={styles.buybtn}>SHOP SITE</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subheader} id='contact'>Leave me a message</h2>
            <div className={styles.contactsection}>
              <ContactPage/>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.copyrightline}>
          <p className={styles.copyright}><span className={styles.footerlogo}>DINHO FITNESS</span> © 2023</p>
      </div>
      </footer>
    </div>
  )
}
