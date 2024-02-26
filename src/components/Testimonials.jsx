
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"

// import './Styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonials() {
  return (
    <div className='container m-auto px-10 py-8'>
    <h2 className='text-2xl font-semibold'>Testimonials</h2>
      <Swiper

        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
      
        className="mySwiper mx-24 my-10"
      >
        <SwiperSlide className='border rounded-xl h-full w-full'><img src="https://images.pexels.com/photos/7079772/pexels-photo-7079772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Can't Load The Image" /></SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 2</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 3</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 4</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 5</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 6</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 7</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 8</SwiperSlide>
        <SwiperSlide className='border rounded-xl h-full w-full'>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
