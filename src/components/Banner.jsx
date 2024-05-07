import { useContext, useState } from "react";
import { IsMobileContext } from "../utilis/IsMobileContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { motion } from "framer-motion";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { isMobile } = useContext(IsMobileContext);
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        modules={[Thumbs, Autoplay]}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        autoplay={{
          delay: 4000,
        }}
        loop={true}>
        <SwiperSlide>
          <div className="banner-image">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 0, duration: 0.5, staggerChildren: 0.25 }}
              exit={{ opacity: 0, y: '-50%', duration: 0.1 }}
              src="src/assets/images/1.jpg" alt=""
            />
            <div className="banner--text">
              <motion.h2
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              >
                Events coverage{" "}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, staggerChildren: 0.25 }}
                exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam dolores odit repellendus eligendi sunt iure?
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-image">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 0, duration: 0.5, staggerChildren: 0.25 }}
              exit={{ opacity: 0, duration: 0.1 }}
              src="src/assets/images/2.jpg" alt=""
            />
            <div className="banner--text">
              <motion.h2
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              >
                Wedding photography{" "}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam dolores odit repellendus eligendi sunt iure?
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-image">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 0, duration: 0.5, staggerChildren: 0.25 }}
              exit={{ opacity: 0, duration: 0.1 }}
              src="src/assets/images/3.jpg" alt=""
            />
            <div className="banner--text">
              <motion.h2
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              >
                Graduation party photography{" "}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: "50%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam dolores odit repellendus eligendi sunt iure?
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {!isMobile ? (
        <Swiper className="banner-thumbs" modules={[Thumbs]} slidesPerView={3} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, staggerChildren: 0.25 }}
              exit={{ opacity: 0, y: "50%", duration: 0.1 }}
              className="thumbs "
            >
              <motion.img src="src/assets/images/1.jpg" alt=""
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              className="thumbs "
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, staggerChildren: 0.25 }}
              exit={{ opacity: 0, y: "50%", duration: 0.1 }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="src/assets/images/2.jpg" alt="" />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              className="thumbs "
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, staggerChildren: 0.25 }}
              exit={{ opacity: 0, y: "50%", duration: 0.1 }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="src/assets/images/3.jpg" alt="" />
            </motion.div>
          </SwiperSlide>
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;