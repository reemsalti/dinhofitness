import "react-responsive-carousel/lib/styles/carousel.min.css"; // 
import { Carousel } from "react-responsive-carousel";
import styles from './gallery.module.css'
const img1 = '/FitnessJourney/2fe62568-4c6b-4dae-bfe4-63528d34e574.JPG';
const img_1 = '/FitnessJourney/IMG_1.jpg';
const img_2 = '/FitnessJourney/IMG_2.jpg';
const img_3 = '/FitnessJourney/IMG_3.jpg';
const img2 = '/FitnessJourney/8a4c449b-217b-4a1f-83d5-a49117358ea6.jpg';
const img3 = '/FitnessJourney/c725438a-f1e7-499b-a0f8-aebde916729e.JPG';
const img4 = '/FitnessJourney/IMG_3BE988D893AF-1.jpeg';
const img5 = '/FitnessJourney/IMG_9E9478A2CFB1-1.jpeg';
const img6 = '/FitnessJourney/IMG_0340.JPG';
const img7 = '/FitnessJourney/IMG_0342.PNG';
const img8 = '/FitnessJourney/IMG_0749.jpg';
const img9 = '/FitnessJourney/IMG_0793.jpg';
const img10 = '/FitnessJourney/IMG_1093.JPG';
const img11 = '/FitnessJourney/IMG_1256.jpg';
const img12 = '/FitnessJourney/IMG_1378.jpg';
const img13 = '/FitnessJourney/IMG_1698.jpg';
const img14 = '/FitnessJourney/IMG_2121.jpg';
const img15 = '/FitnessJourney/IMG_2371.JPG';
const img16 = '/FitnessJourney/IMG_2443.JPG';
const img17 = '/FitnessJourney/IMG_2611.jpg';
const img18 = '/FitnessJourney/IMG_2642.jpg';
const img19 = '/FitnessJourney/IMG_2682.jpg';
const img20 = '/FitnessJourney/IMG_2915.jpg';
const img21 = '/FitnessJourney/IMG_3207.PNG';
const img22 = '/FitnessJourney/IMG_3596.JPG';
const img23 = '/FitnessJourney/IMG_3904.jpg';
const img24 = '/FitnessJourney/IMG_4354.JPG';
const img25 = '/FitnessJourney/IMG_5006.jpg';
const img26 = '/FitnessJourney/IMG_5880.jpg';
const img27 = '/FitnessJourney/IMG_5892.jpg';
const img28 = '/FitnessJourney/IMG_6247.JPG';
const img29 = '/FitnessJourney/IMG_6770.jpg';
const img30 = '/FitnessJourney/IMG_8289.JPG';
const img31 = '/FitnessJourney/IMG_8398.JPG';

const ImageSlider = () => {
  return (
    <div className={styles.gallerywrapper}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        thumbWidth={100}
      >
        <div>
          <img
            src={img18}
            alt=""
          />
        </div>
        <div>
          <img
            src={img_3}
            alt=""
          />
        </div>
        <div>
          <img
            src={img_2}
            alt=""
          />
        </div>
        <div>
          <img
            src={img_1}
            alt=""
          />
        </div>
        <div>
          <img
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            src={img3}
            alt=""
          />
        </div>
        <div>
          <img
            src={img4}
            alt=""
          />
        </div>
        <div>
          <img
            src={img5}
            alt=""
          />
        </div>
        <div>
          <img
            src={img6}
            alt=""
          />
        </div>
        <div>
          <img
            src={img7}
            alt=""
          />
        </div>
        <div>
          <img
            src={img8}
            alt=""
          />
        </div>
        <div>
          <img
            src={img9}
            alt=""
          />
        </div>
        <div>
          <img
            src={img10}
            alt=""
          />
        </div>
        <div>
          <img
            src={img11}
            alt=""
          />
        </div>
        <div>
          <img
            src={img12}
            alt=""
          />
        </div>
        <div>
          <img
            src={img13}
            alt=""
          />
        </div>
        <div>
          <img
            src={img14}
            alt=""
          />
        </div>
        <div>
          <img
            src={img15}
            alt=""
          />
        </div>
        <div>
          <img
            src={img16}
            alt=""
          />
        </div>
        <div>
          <img
            src={img17}
            alt=""
          />
        </div>
        <div>
          <img
            src={img1}
            alt=""
          />
        </div>
        <div>
          <img
            src={img19}
            alt=""
          />
        </div>
        <div>
          <img
            src={img20}
            alt=""
          />
        </div>
        <div>
          <img
            src={img21}
            alt=""
          />
        </div>
        <div>
          <img
            src={img22}
            alt=""
          />
        </div>
        <div>
          <img
            src={img23}
            alt=""
          />
        </div>
        <div>
          <img
            src={img24}
            alt=""
          />
        </div>
        <div>
          <img
            src={img25}
            alt=""
          />
        </div>
        <div>
          <img
            src={img26}
            alt=""
          />
        </div>
        <div>
          <img
            src={img27}
            alt=""
          />
        </div>
        <div>
          <img
            src={img28}
            alt=""
          />
        </div>
        <div>
          <img
            src={img29}
            alt=""
          />
        </div>
        <div>
          <img
            src={img30}
            alt=""
          />
        </div>
        <div>
          <img
            src={img31}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
