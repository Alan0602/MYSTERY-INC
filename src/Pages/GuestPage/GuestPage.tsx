import { useRef, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Crosssvg, Heartsvg, Starsvg, TelMsgsvg } from "../../assets/svg";
import styles from "./GuestPage.module.css";
import { SwiperRef } from "swiper/react";
type Props = {};

interface ProfileData {
  profile: string;
  name: string;
  description: string;
  about: string;
  interests: string[];
  gallery: string[];
}

export const GuestPage = (_props: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [showFullAbout, setShowFullAbout] = useState<boolean>(false);
  const notInterested = () => {
    // Your logic
    console.log("notinterested");
  };

  const interested = () => {
    // Your logic
    console.log("interested");
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

  const toggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  const data: ProfileData[] = [
    {
      profile: "https://source.unsplash.com/random",
      name: "Jessica Parker, 23",
      description: "Proffesional model",
      about:
        "My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..",
      interests: ["Travelling", "Books", "Music", "Dancing", "Modeling"],
      gallery: [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
      ],
    },
  ];

  return (
    <>
      <div className={styles.Wrapper}>
        {data.map((profile, index) => (
          <div key={index}>
            <img className={styles.profileimage} src={profile.profile} alt="" />
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
            <div className={styles.ContentWrapper}>
              <div className={styles.Header}>
                <div>
                  <h1>{profile.name}</h1>
                  <p>{profile.description}</p>
                </div>
                <button>
                  <TelMsgsvg />
                </button>
              </div>
              <div className={styles.Aboutset}>
                <h3>About</h3>
                <p>
                  {showFullAbout
                    ? profile.about
                    : profile.about.length > 100
                    ? `${profile.about.slice(0, 100)}...`
                    : profile.about}
                </p>
                <button onClick={toggleAbout}>
                  {showFullAbout ? "Show Less" : "Read More"}
                </button>
              </div>
              <div className={styles.Interestset}>
                <h3>Interests</h3>
                <div>
                  {profile.interests.map((interest, i) => (
                    <div key={i}>
                      <p>{interest}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.gallery}>
                <h3>Gallery</h3>
                <div>
                  {profile.gallery.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt=""
                      className={i <= 1 ? styles.largeImage : styles.smallImage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navbar />
    </>
  );
};
