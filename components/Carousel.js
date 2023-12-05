import React from 'react';
import styles from '../css/Carousel.module.css';
import Image from 'next/image'

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={handlePrevSlide}>
        &#8249;
      </button>
      {/* <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className={styles.slide}
      /> */}
      <Image
        src={images[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className={styles.slide}
      // src={logoceducaty}
      // alt="Picture of the author"
      // width={100}
      // height={75}
      />
      <button className={styles.nextButton} onClick={handleNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
