import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from '../assets/image1.jfif'
import image2 from '../assets/image2.avif'
import image3 from '../assets/image3.jfif'
import image4 from '../assets/image4.jfif'
import image5 from '../assets/image5.jfif'
import image6 from '../assets/image6.avif'
import image7 from '../assets/image7.avif'
import image8 from '../assets/image8.jfif'
import image9 from '../assets/image9.avif'
import image10 from '../assets/image10.jfif'


import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Sandhya Sharma",
    image: image1,
    review:
      "Wonderful Experience with Sarthak Clinic. Dr. Mandakini and Dr. Sujeet are wonderful, and the staff was always helpful and kind. I am so glad I chose Sarthak Clinic and would highly recommend to anyone.",
  },
  {
    name: "Diwakar Sahai",
    image: image2,
    review:
      "We are really fortunate to have excellent doctors (Dr. Mandakini and Dr. Sujeet Narayan) available in our vicinity at Sarthak Care Clinic, Sector 75 Noida.",
  },
  {
    name: "Nita",
    image: image3,
    review:
      "I have consulted both the doctors, Dr. Mandakini and Dr. Sujeet. They are excellent doctors in their respective fields. I underwent their treatment and was very happy and satisfied.",
  },
  {
    name: "Archana",
    image: image4,
    review:
      "It is very good and very comfortable. Facilities are excellent. Dr Sujeet Cardiologist and Dr Mandakini Gynecologist are both excellent doctors.",
  },
  {
    name: "Anju Bhalla",
    image:image5,
    review:
      "Dr. Mandakini and Dr. Sujeet are very good doctors. I suggest everyone consult them.",
  },
  {
    name: "Ranjit Kumar",
    image: image6,
    review:
      "I was suffering from Covid and Dr Sujeet Narain helped me a lot during the toughest time of my life. Excellent doctor and outstanding care.",
  },
  {
    name: "Prabhat Sharma",
    image: image7,
    review:
      "You can blindly trust Dr Sujit Narain for your treatment. He is friendly, soft spoken, and always tries to save your money.",
  },
  {
    name: "Jyoti",
    image: image8,
    review:
      "Doctor has been great with providing appropriate treatment. Very responsive, quick and effective at resolving doubts.",
  },
  {
    name: "Satinder Bhalla",
    image:image9,
    review:
      "Excellent clinic and highly competent doctors.",
  },
  {
    name: "Beena Mathur",
    image: image10,
    review:
      "Doctors in the clinic are specialists, very caring and patient. I highly recommend them.",
  },
]

const Review = () => {
  return (
    <section id="reviews" className="py-8 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-[6vw]">

        <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
          What Our Patients Say
        </h2>

        <p className="text-center text-xl text-gray-600 mb-16">
          Excellence in Healthcare, Reflected Through Patient Experiences        
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl border border-cyan-50 p-8 shadow-lg hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl transition-all duration-300">

                <div>
                  <div className="flex items-start justify-between mb-5">

                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-cyan-100"
                        />

                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {item.name}
                          </h3>

                          <p className="text-xs text-gray-500">
                            Verified Patient
                          </p>
                        </div>
                      </div>

                      <div className="text-yellow-400 text-lg tracking-wide">
                        ⭐⭐⭐⭐⭐
                      </div>

                    </div>
                    <div className="text-cyan-500 text-5xl font-serif leading-none mb-3"> ❝ </div>
                      <p className="text-gray-600 leading-relaxed line-clamp-6 mt-4">
                          "{item.review}"
                      </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Review;