// import React, { useEffect, useRef, useState } from 'react'
// import "./Home.css"
// import { motion } from "framer-motion"
// import images from "./HomeImg.js"

// const Home = () => {
//     const carouselRef = useRef();
//     const [width, setWidth] = useState(0);
//     useEffect(() => {
//         console.log(carouselRef.current.scrollWidth)
//         console.log(carouselRef.current.offsetWidth)
//         setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
//     }, [])

//     return (
//         <div className='home'>
//             <div className='info'>
//                 <h1 className='headHome'>شركة قُمرة الإمارة</h1>
//                 <p className='textHome'>8 سنوات من الإبداع والعطاء</p>
//             </div>
//             <motion.div ref={carouselRef} className='carousel'>
//                 <motion.div drag="x" dragConstraints={{left: 0, right: width}} className='inner-carousel'>
//                     {images.map((image) => (
//                         <motion.div className='item' key={image}>
//                             <img src={image}/>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </motion.div>
//             <div className='btnHome'>
//               <button className='btn'><a href='#'>احصل على خدماتنا الان</a></button>  
//             </div>
//         </div>
//     )
// }

// export default Home
import "./Home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import img1 from "./images/home.png";
import img2 from "./images/home.png";
import img3 from "./images/home.png";
const swiper = new Swiper('.swiper',{
modules: [Navigation, Pagination,Scrollbar]
});

function Slider() {
    return (
        <div className='home'>
            <Swiper className="superSwiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}


            >
                <SwiperSlide className="subSwiper">  <img src={img1} style={{ width: "100%" ,  maxHeight: "637px" }} /></SwiperSlide>
                <SwiperSlide className="subSwiper"><img src={img2} style={{ width: "100%", maxHeight: "637px"  }} /></SwiperSlide>
                <SwiperSlide className="subSwiper"><img src={img3} style={{ width: "100%", maxHeight: "637px"  }} /></SwiperSlide>

            </Swiper>

            <div className='info'>
                <h1 className='headhome'>شركة قمرة الإمارة</h1>
                <p className='texthome'>8 سنوات من الأبداع والعطاء</p>
            </div>
            <div className='btnhome'>
                <button className='btn'><a href='#'>حصل على خدماتناالان</a></button>
            </div>
        </div>

    )
}

export default Slider;