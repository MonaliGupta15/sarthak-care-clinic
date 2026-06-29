import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import useScrollAnimation from "../hooks/useScrollAnimation"

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

import "swiper/css"
import "swiper/css/pagination"

const reviews = [
  {
    name: "Sandhya Sharma",
    image: image1,
    review: "Wonderful Experience with Sarthak Clinic. Dr. Mandakini and Dr. Sujeet are wonderful, and the staff was always helpful and kind. I am so glad I chose Sarthak Clinic and would highly recommend to anyone.",
  },
  {
    name: "Diwakar Sahai",
    image: image2,
    review: "We are really fortunate to have excellent doctors (Dr. Mandakini and Dr. Sujeet Narayan) available in our vicinity at Sarthak Care Clinic, Sector 75 Noida.",
  },
  {
    name: "Nita",
    image: image3,
    review: "I have consulted both the doctors, Dr. Mandakini and Dr. Sujeet. They are excellent doctors in their respective fields. I underwent their treatment and was very happy and satisfied.",
  },
  {
    name: "Archana",
    image: image4,
    review: "It is very good and very comfortable. Facilities are excellent. Dr Sujeet Cardiologist and Dr Mandakini Gynecologist are both excellent doctors.",
  },
  {
    name: "Anju Bhalla",
    image: image5,
    review: "Dr. Mandakini and Dr. Sujeet are very good doctors. I suggest everyone consult them.",
  },
  {
    name: "Ranjit Kumar",
    image: image6,
    review: "I was suffering from Covid and Dr Sujeet Narain helped me a lot during the toughest time of my life. Excellent doctor and outstanding care.",
  },
  {
    name: "Prabhat Sharma",
    image: image7,
    review: "You can blindly trust Dr Sujit Narain for your treatment. He is friendly, soft spoken, and always tries to save your money.",
  },
  {
    name: "Jyoti",
    image: image8,
    review: "Doctor has been great with providing appropriate treatment. Very responsive, quick and effective at resolving doubts.",
  },
  {
    name: "Satinder Bhalla",
    image: image9,
    review: "Excellent clinic and highly competent doctors.",
  },
  {
    name: "Beena Mathur",
    image: image10,
    review: "Doctors in the clinic are specialists, very caring and patient. I highly recommend them.",
  },
]

const Review = () => {
  const headingRef = useScrollAnimation()
  const swiperRef  = useScrollAnimation()

  return (
    <section id="reviews" className="py-12 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-[6vw]">

        {/* Heading */}
        <div ref={headingRef} className="fade-up text-center mb-8">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider text-xs">
            Patient Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-2">
            What Our Patients Say
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Excellence in Healthcare, Reflected Through Patient Experiences
          </p>
        </div>

        {/* Swiper — fades up when scrolled to */}
        <div ref={swiperRef} className="fade-up stagger-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="flex h-auto">
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-md
                                hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl
                                transition-all duration-300 w-full h-[260px] flex flex-col
                                group">

                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">

                      {/* Avatar with ring on hover */}
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border-2
                                     border-cyan-100 shadow-sm group-hover:border-cyan-400
                                     transition-all duration-300"
                        />
                        {/* Online dot */}
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5
                                         bg-emerald-400 rounded-full border-2 border-white" />
                      </div>

                      <div>
                        <h3 className="font-bold text-sm text-slate-800 leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-[10px] text-gray-400">Verified Patient</p>
                      </div>
                    </div>

                    <div className="text-yellow-400 text-xs tracking-wider shrink-0 mt-1">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>

                  {/* Quote mark */}
                  <div className="text-cyan-400 text-3xl font-serif leading-none
                                  group-hover:text-cyan-500 transition-colors duration-300">
                    ❝
                  </div>

                  {/* Review text */}
                  <div className="mt-2 h-[90px] overflow-y-auto pr-2">
                    <p className="text-gray-500 text-xs leading-relaxed">
                      "{item.review}"
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  )
}

export default Review