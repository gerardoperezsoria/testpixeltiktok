// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// const Carousel = () => {
//   return (
//     <Swiper navigation={true}>
//       <SwiperSlide>
//         <a href="/ce">
//           <img src="/seminario.png" alt="Imagen 1" />
//         </a>
//       </SwiperSlide>
//       <SwiperSlide>
//         <a href="/ce">
//           <img src="/next.svg" alt="Imagen 2" />
//         </a>
//       </SwiperSlide>
//       <SwiperSlide>
//         <a href="/ce">
//           <img src="/ceducaty.jpg" alt="Imagen 3" />
//         </a>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default Carousel;


import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link'

const CarouselComponent = () => {
    const router = useRouter();
    const items = [
        { id: 1, imageUrl: '/seminario.png', link: '/mkt/registro-seminario-gratuito' },
        { id: 2, imageUrl: '/plandecarrera.png', link: '/mkt/excel/registro' },
        { id: 2, imageUrl: '/instructor.png', link: '/landingpage/instructor' }
    ];

    const onClickItem = (e) => {
        console.log("item", e)
        if (e===0 || e==="0") {
            router.push("/mkt/registro-seminario-gratuito")
        }
        if (e===1 || e==="1") {

            router.push("/mkt/excel/registro")
        }
        if (e===2 || e==="2") {
            router.push("/landingpage/instructor")
        }
    }

    return (
        <Carousel
            showArrows={true} onClickItem={(e) => { onClickItem(e) }}
        >
            {items.map((item) => (
                <div key={item.id}>
                    {/* <a href={item.link}> */}
                    <img src={item.imageUrl} alt={`Slide ${item.id}`} />
                    {/* </a> */}
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;

