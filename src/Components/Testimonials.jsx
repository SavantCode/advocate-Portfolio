import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Johnathan Alexander Doe",
    stars: 5,
    review: "Amazing experience! Highly recommended. The service was excellent, and the staff was very professional and accommodating. I will definitely be coming back!",
    dp: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    stars: 4,
    review: "Great service and friendly staff! I felt really comfortable throughout the process. Will surely recommend to my friends.",
    dp: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    stars: 5,
    review: "Loved the quality and professionalism. It was an overall great experience. I am highly satisfied with the result and would gladly return.",
    dp: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    stars: 4,
    review: "Would definitely come back again! The overall experience was really good, though the wait time could have been better.",
    dp: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Michael Lee",
    stars: 5,
    review: "Exceptional service and attention to detail! I am beyond satisfied with everything. The team did an amazing job, and I couldn’t be happier.",
    dp: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const TestimonialSlider = () => {
  const [expanded, setExpanded] = useState(null); // Store which testimonial is expanded

  const handleReadMore = (id) => {
    setExpanded((prevState) => (prevState === id ? null : id)); // Toggle expand
  };

  return (
    <div className="w-full px-4 py-8 bg-gray-900">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500 }}
        speed={1000} // Smoother transition
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 h-full">
              <img
                src={testimonial.dp}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-gray-200"
              />
              <h3 className="text-lg font-semibold w-full break-words">
                {testimonial.name}
              </h3>
              <div className="text-yellow-500 text-lg flex gap-1 mt-1">
                {"⭐".repeat(testimonial.stars)}
              </div>
              <p className={`text-gray-600 text-sm mt-2 italic max-w-[90%] transition-all ${expanded === testimonial.id ? "h-auto" : "h-20 overflow-hidden"}`}>
                "{testimonial.review}"
              </p>
              {testimonial.review.length > 100 && (
                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => handleReadMore(testimonial.id)}
                >
                  {expanded === testimonial.id ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
