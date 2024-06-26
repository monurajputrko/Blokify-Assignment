import { useMediaQuery } from "usehoks";
import { useTheme } from "../Theme/ThemeContext";
import styles from "./AboutLight.module.css";
import style from "./HomeLight.module.css";
import { useEffect, useState } from "react";
import './Test.css';
import './Button.css';
import SocialMediaButtons from "./SocialMedia";

const AboutLight = () => {
  const { theme } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 1350px)");
  const issmallScreen = useMediaQuery("(min-width: 750px)");
  const [flag, setFlag] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setFlag(false);
    }, 500); // Reset animation after 1 second
  };

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (isLargeScreen) {
  //     body.style.overflow = "hidden";
  //   } else {
  //     body.style.overflow = "visible";
  //   }

  //   return () => {
  //     body.style.overflow = "visible";
  //   };
  // }, [isLargeScreen]);


  return (
    <div className={styles.aboutLight}>
      <img style={{zIndex: "100",}} className={styles.aboutLightChild} alt="" src="/vector-11.svg" />
      <img style={{zIndex: "100",}} className={styles.aboutLightItem} alt="" src="/vector-5.svg" />

{
  issmallScreen ? <div className={style.socialsLinks}>
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={style.telegramIcon}
          alt=""
          src="/telegram.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={style.facebookIcon}
          alt=""
          src="/facebook.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={style.instagramIcon}
          alt=""
          src="/instagram.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={style.twitterIcon}
          alt=""
          src="/twitter.svg"
        />
        <img
          style={{
            marginTop: "-60px",
            width: "73.89%",
            filter: theme ? "invert(1)" : "invert(0)",
          }}
          className={style.githubIcon}
          alt=""
          src="/github.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={style.linkedinIcon}
          alt=""
          src="/linkedin.svg"
        />
        {/* <div style={{marginTop:"-100px"}} className={styles.koo}>
          <div className={styles.kooEclipse} />
          <img className={styles.kooBlackIcon} alt="" src="/koo-black@2x.png" />
        </div> */}
      </div> : ""
}
      
      <div
        style={{ color: theme ? "#eeeeee" : "#000000" }}
        className={styles.sinhaanishkumaroutlookcom}
      >
        sinhaanishkumar@outlook.com
      </div>
      <img className={styles.lineIcon} alt="" />

      <div
        style={{
          width: issmallScreen ? "70%" : "100%",
          height: "564px",
          fontSize: "14px",
          zIndex: "100",
        }}
        className={styles.thisIsItParent}
       >
        <>
          <div className={styles.thisIsItContainer}>
            <span
              style={{ fontSize: "30px", color: theme ? "#eeeeee" : "#000000" }}
            >
              T
            </span>
            <span
              style={{ fontSize: "20px", color: theme ? "#eeeeee" : "#000000" }}
              className={styles.hisIsIt}
            >
              {"his is it. ;)"}
            </span>
          </div>
          <div
            style={{ width: "70%", height: "564px", marginTop: "-70px" }}
            className={styles.anishKrSinhaContainer}
          >
            <p className={styles.anishKrSinhaIsAnIndianU}>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.anishKrSinha}
              >{`Anish Kr. Sinha is an Indian `}</span>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.uiuxDesigner}
              >{`UI/UX Designer & Front End Developer`}</span>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.withAPassion}
              >{` with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. `}</span>
            </p>
            <p className={styles.anishKrSinhaIsAnIndianU}>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.withAPassion}
              >{`He holds a `}</span>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.uiuxDesigner}
              >
                bachelor degree in Computer Applications.
              </span>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.anishKrSinha}
              >{` During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, `}</span>
              <span className={styles.uiuxDesigner}>India</span>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.withAPassion}
              >{`. Where he’s working as an independent creative. `}</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.anishKrSinhaIsAnIndianU}>
              <span
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.withAPassion}
              >{`His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing `}</span>
              <span className={styles.uiuxDesigner}>3D floor plan.</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p
              style={{ color: theme ? "#eeeeee" : "#000000" }}
              className={styles.blankLine}
            >
              When he’s not designing, he’s probably hanging out with his
              girlfriend, watching series, sketching or messing around on
              something inspired by YouTube tutorials.
            </p>
          </div>
        </>

        {isLargeScreen ? (
          ""
        ) : (
          <img
            style={{ zIndex: "110", width: "70%", filter: theme ? "invert(1)" : "invert(0)" }}
            className={styles.groupItem}
            alt=""
            src="/line-6.svg"
          />
        )}
        <img
          style={{ zIndex: "110", filter: theme ? "invert(1)" : "invert(0)" }}
          className={styles.groupInner}
          alt=""
          src="/line-7.svg"
        />
      </div>
      <img style={{ zIndex: "110",}} className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <img style={{ zIndex: "110",}} className={styles.vectorIcon} alt="" src="/vector-3.svg" />
      <img style={{ zIndex: "110",}} className={styles.aboutLightChild7} alt="" src="/vector-4.svg" />

      {flag ? (
        ""
      ) : (
        <div style={{ marginTop: "870px", marginLeft: "90px" }}>
          <SocialMediaButtons setFlag={setFlag} />
        </div>
      )}

     {
      issmallScreen ? "" : <div
        style={{
          width:"100%",
          marginBottom: "10px",
          marginTop: "690px",
          marginLeft: "235px",
          backgroundColor: "#eeeeee",
        }}
        className={styles.button}
        onClick={handleClick}
      >
        <img
          className={isAnimating ? "rotate" : ""}
          src="https://img.icons8.com/fluency/48/plus-math.png"
          alt="plus-math"
        />
      </div>
     }
      
    </div>
  );
};

export default AboutLight;
