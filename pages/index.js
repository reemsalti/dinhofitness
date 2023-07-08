/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img1 from '../public/pic4.png'
import img2 from '../public/cookBook2.png'
import img6 from '../public/cookBook.jpeg'
import ScrollArrow from '../components/ScrollArrow'
import useSticky from '../components/useSticky'
import img3 from '../public/pic3.png'
import img4 from '../public/balanzi.jpeg';
import img5 from '../public/epn.jpeg'
import ContactPage from '../components/contactform'
import Link from 'next/link'


export default function Home() {
  const { sticky, stickyRef } = useSticky();
  const CollapsibleText = ({ text, maxLines = 3 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const style = isExpanded ? {} : { 
      display: "-webkit-box", 
      WebkitLineClamp: maxLines, 
      WebkitBoxOrient: "vertical", 
      overflow: "hidden" 
    };
  return (
    <div className={styles.container}>
      <Head>
        <title>Dinho Fitness</title>
      </Head>
      <div className={styles.landingpage}>
        <h2 className={styles.shine} id='home'>Dinho Fitness</h2>
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
              <p className={styles.aboutme}>
                My name is Mohammed, I'm a Fitness Enthusiast and I've been training for over 6 years now. I competed in two Men's Physique competitions, and my passion and drive for fitness has led me to want to help others achieve their goals as well. <br></br> As a trainer, I specialize in creating custom meal and fitness plans that are accessible to everyone, because I believe guidance shouldn't be limited by cost.
                I have experience training clients remotely from around the world ! My goal is to provide guidance and support to help clients achieve their fitness goals no matter where they are located. Whether you're a beginner or an experienced athlete, I'm committed to helping you reach your full potential and achieve the body of your dreams.
              </p>
            </div>
            <div className={styles.aboutbtnwrapper}>
              <Link className={styles.aboutbtn} href='/FitnessJourney'>Check out my fitness journey</Link>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subheader} id='shop'>Shop</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img6} alt='' />
                  <p className={styles.pricetag}>$10.00</p>
                </div>
                <p className={styles.proddescription}>BUILD Cookbook</p>
                <p className={styles.proddetail}>The BUILD Cookbook consists of calorie dense healthy meals that are simple to make, and taste great!</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/28odRv5yP0sEbVm001' className={styles.buybtn}>Buy now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img2} alt='' />
                  <p className={styles.pricetag}>$10.00</p>
                </div>
                <p className={styles.proddescription}>SHRED Cookbook</p>
                <p className={styles.proddetail}>The SHRED Cookbook consists of less calorie dense healthy meals which are perfect when you are trying to lose fat.</p>
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
                <p className={styles.proddetail}>One on one training program with me where I'll go over your check ins with you every weekend and track your progress. You will also have direct contact with my personal number and can ask me literally anything.</p>
                <div className={styles.btnwrapper}>
                  <a href='https://buy.stripe.com/6oE00F3qHb7i2kMcMO' className={styles.buybtn}>Buy now</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img1} alt='' />
                  <p className={styles.pricetag}>FREE</p>
                </div>
                <p className={styles.proddescription}>THE STUBBORN FAT</p>
                <p className={styles.proddetail}>This is an E-book that I personally enjoyed reading. It gives a ton of insight as to why you might not be loosing that stubborn belly fat. </p>
                <div className={styles.btnwrapper}>
                  <a href='https://dinhofitness-public.s3.amazonaws.com/E-books/The+Stubborn+Fat+Solution+-+Flatten+Your+Abs.pdf' download className={styles.buybtn}>Download</a>
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
                <p className={styles.proddescription}>Get 25% off jewelry using code "MAMDISAVE25%" **Apply code at Checkout</p>
                <div className={styles.btnwrapper}>
                  <a href="https://balanzi.com/" target='_blank' className={styles.buybtn}>SHOP SITE</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgwrapper}>
                  <Image className={styles.prodimg} src={img5} alt='' />
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
              <ContactPage />
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
}
