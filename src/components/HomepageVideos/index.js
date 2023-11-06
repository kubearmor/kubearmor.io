import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows";

export default function HomepageVideos() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <section className={`videos ${styles.videos}`}>
      <h2 className={styles.videosTitle}>FIRESIDE CHAT</h2>
      <h1 className={styles.videosHeader}>
        Securing Kubernetes Clusters Effectively
      </h1>
      <div className={styles.videosSlider}>
        <Slider{...settings}></Slider>
      </div>
    </section>
  );
}
