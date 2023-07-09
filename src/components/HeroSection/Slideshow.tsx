import { useTranslations } from "next-intl";
import Image from "next/image";

import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

// swiperjs
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// install Swiper modules
// SwiperCore.use([Pagination, Navigation, Autoplay]);

const sliders = [
  {
    id: 2,
    image: "/b3.png",
    imageTablet: "/b3.png",
    imageMobile: "/b3.png",
    subtitle: "50% off",
    titleUp: "New Cocktail",
    titleDown: "Dresses",
    rightText: false,
  },
  {
    id: 1,
    image: "/b2.png",
    imageTablet: "/b2.png",
    imageMobile: "/b2.png",
    subtitle: "Spring Revolution",
    titleUp: "Night Summer",
    titleDown: "Dresses",
    rightText: true,
  },
  {
    id: 3,
    image: "/b1.png",
    imageTablet: "/b1.png",
    imageMobile: "/b1.png",
    subtitle: "Spring promo",
    titleUp: "The Weekend",
    titleDown: "Promotions",
    rightText: false,
  },
];

const Slideshow = () => {
  const t = useTranslations("Index");

  return (
    <>
      <div className="relative -top-20 slide-container w-full z-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 100000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="hidden lg:block">
                <Image
                  src={slider.image}
                  width={1144}
                  height={572}
                  alt={"some name"}
                  className="w-full"
                />
              </div>
              <div className="hidden sm:block lg:hidden">
                <Image
                  src={slider.imageTablet}
                  width={820}
                  height={720}
                  alt={"some name"}
                  className="w-full"
                />
              </div>
              <div className="sm:hidden">
                <Image
                  src={slider.imageMobile}
                  width={428}
                  height={800}
                  alt={"some name"}
                  className="w-full"
                  priority
                />
              </div>
              <div
                className={
                  slider.rightText
                    ? styles.rightTextSection
                    : styles.leftTextSection
                }
              >
                <span className={styles.subtitle}>{slider.subtitle}</span>
                <span
                  className={`${styles.title} text-center ${
                    slider.rightText ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  {slider.titleUp} <br />
                  {slider.titleDown}
                </span>
                <TextButton value={t("shop_now")} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slideshow;
