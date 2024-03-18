import {
  ArrowLeftsvg,
  Crosssvg,
  Filtersvg,
  Heartsvg,
  Starsvg,
} from "../../assets/svg";
import styles from "./Dashboard.module.css";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Filter } from "../../Components/Filter/Filter";

type Props = {};

export const Dashboard = (_props: Props) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const notInterested = () => {
    // Your logic
    console.log("notinterested");
  };

  const interested = () => {
    // Your logic
    console.log("interested");
  };

  const handleSwipe = (swiper: any) => {
    if (swiper.swipeDirection == "next") {
      notInterested();
    } else {
      interested();
    }
  };

  const slideLeft = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
      notInterested();
    }
  };

  const slideRight = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
      interested();
    }
  };

  const handleSuper = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
      interested();
      console.log("Super");
    }
  };

    const buttonclick = () => {
     setFilterVisible(!filterVisible);
    };

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.TopNav}>
          <button>
            <ArrowLeftsvg />
          </button>
          <div>
            <h1>Discover</h1>
            <p>Chicago, II</p>
          </div>
          <button onClick={buttonclick}>
            <Filtersvg />
          </button>
        </div>
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            loop={true}
            className="MatchFinder"
            onSlideChange={handleSwipe}
            ref={swiperRef}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={slideLeft}>
            <Crosssvg />
          </button>
          <button onClick={slideRight} style={{ backgroundColor: "red" }}>
            <Heartsvg />
          </button>
          <button onClick={handleSuper}>
            <Starsvg />
          </button>
        </div>
      </div>
      <Navbar />
      {filterVisible && <Filter visible={filterVisible} />}
    </>
  );
};
