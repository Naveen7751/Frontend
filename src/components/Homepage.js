// Homepage.js
import React, { useState } from "react";
import Header from "./Header";
import heroImage from "../topimg.png";
import detailImg from "../detailsimg.png";
import elig from "../eligiblity.png";
import datetime from "../date&time.png";
import criteria from "../judgingCrit.png";
import prizes from "../prizes.png";
import styles from "./Homepage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PanelistsCarousel from "./PanelistsCarousel";
import Footer from "./Footer";
import imgp from "../judgingCrit.png"
import { useInView } from 'react-intersection-observer';

const cards = [
  { img: imgp, name: "Panelist 1" },
  { img: imgp, name: "Panelist 2" },
  { img: imgp, name: "Panelist 3" },
  { img: imgp, name: "Panelist 4" },
];

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [userEmail, setUserEmail] = useState('');
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isVisibleDetails, setIsVisibleDetails] = useState(false);
  const { ref: refDetails, inView: inViewDetails } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // useState and useInView hooks for Eligibility section
  const [isVisibleEligibility, setIsVisibleEligibility] = useState(false);
  const { ref: refEligibility, inView: inViewEligibility } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // useState and useInView hooks for Date & Time section
  const [isVisibleDate, setIsVisibleDate] = useState(false);
  const { ref: refDate, inView: inViewDate } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // useState and useInView hooks for Judging Criteria section
  const [isVisibleCriteria, setIsVisibleCriteria] = useState(false);
  const { ref: refCriteria, inView: inViewCriteria } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // useState and useInView hooks for Panelists section
  const [isVisiblePanelists, setIsVisiblePanelists] = useState(false);
  const { ref: refPanelists, inView: inViewPanelists } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // useState and useInView hooks for Prizes section
  const [isVisiblePrizes, setIsVisiblePrizes] = useState(false);
  const { ref: refPrizes, inView: inViewPrizes } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Set visibility state when the section comes into view
  if (inViewDetails && !isVisibleDetails) {
    setIsVisibleDetails(true);
  }

  if (inViewEligibility && !isVisibleEligibility) {
    setIsVisibleEligibility(true);
  }

  if (inViewDate && !isVisibleDate) {
    setIsVisibleDate(true);
  }

  if (inViewCriteria && !isVisibleCriteria) {
    setIsVisibleCriteria(true);
  }

  if (inViewPanelists && !isVisiblePanelists) {
    setIsVisiblePanelists(true);
  }

  if (inViewPrizes && !isVisiblePrizes) {
    setIsVisiblePrizes(true);
  }


  // const [isVisible, setIsVisible] = useState(false);
  // const { ref, inView } = useInView({
  //   threshold: 0.5, // Trigger when 50% of the image is in view
  //   triggerOnce: true, // Trigger animation once
  // });

  // // Set visibility state when the image comes into view
  // if (inView && !isVisible) {
  //   setIsVisible(true);
  // }

  return (
    <div>
       <Header />
      <div className={styles.heroSection}>
        <img src={heroImage} alt="Hackathon" className={styles.heroImage} />
      </div>
      <nav className={styles.bottomNav}>
        <ul>
          <li>
            <a href="#details" onClick={() => scrollToSection("details")}>
              Details
            </a>
          </li>
          <li>
            <a
              href="#eligibility"
              onClick={() => scrollToSection("eligibility")}
            >
              Eligibility
            </a>
          </li>
          <li>
            <a href="#date" onClick={() => scrollToSection("date")}>
              Date and Timing
            </a>
          </li>
          <li>
            <a href="#criteria" onClick={() => scrollToSection("criteria")}>
              Judging Criteria
            </a>
          </li>
          <li>
            <a href="#panelists" onClick={() => scrollToSection("panelists")}>
              Panelists
            </a>
          </li>
          <li>
            <a href="#prizes" onClick={() => scrollToSection("prizes")}>
              Prizes
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.contentArea}>
        {/* Container for all sections */}
        <div className={styles.sectionsContainer}>
          {/* Content for each section */}
          <section
            ref={refDetails}
            id="details"
            className=""
          // style={{ height: "100vh", display: "flex" }}
          >
            <div
              className={styles.left}
            // style={{
            //   width: "50%",
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
            >
              <h2 className={`${styles.head} ${isVisibleDetails ? styles.animatedh : ''}`}
                style={{
                  position: "relative",
                  // display: "inline-block",
                  color: "#ff8400",
                }}
              >
                Details{" "}
                <span className={`${styles.span} ${isVisibleDetails ? styles.animatedspan : ''}`}
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    // left: "-10px",
                    width: "100%",
                    height: "1px",
                    backgroundColor: "orange",
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify" }} className={`${styles.p} ${isVisibleDetails ? styles.animatedp : ''}`}>
                Welcome to Hackathon 2024! Our hackathon is a collaborative
                event designed to bring together creative minds and innovative
                thinkers from across the globe. This year, our focus is on
                pushing the boundaries of technology and addressing real-world
                challenges through innovative solutions. Join us on [Date] at
                [Location] for an exciting two-day event filled with coding,
                collaboration, and creativity. Whether you're a seasoned developer
                or just starting out, there's something for everyone at
                Hackathon 2024. Don't miss this chance to network with
                like-minded individuals, gain valuable skills, and make a
                positive impact through technology. Register now and be part of
                the future of innovation!
              </p>
            </div>
            <div className={styles.right}>
              <div className={`${styles.image} ${isVisibleDetails ? styles.animated : ''}`}>
                <img src={detailImg} alt="sjbv" />
              </div>
            </div>
          </section>

          <section
            ref={refEligibility}
            id="eligibility"
            className={styles.blackBackground}
          // style={{ height: "100vh", display: "flex" }}
          >
            <div
              className={styles.left}
            >
              <div className={`${styles.image} ${isVisibleEligibility ? styles.animated : ''}`}>
                <img src={elig} alt="sjbv" />
              </div>
            </div>
            <div
              className={styles.right}
              style={{
                // width: "50%",
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <h2 className={`${styles.head} ${isVisibleEligibility ? styles.animatedh : ''}`}
                style={{
                  position: "relative",
                  // display: "inline-block",
                  color: "#ff8400",
                  // right: "150px",
                }}
              >
                Eligibility{" "}
                <span className={`${styles.span} ${isVisibleEligibility ? styles.animatedspan : ''}`}
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",

                    width: "100%",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify" }} className={`${styles.p} ${isVisibleEligibility ? styles.animatedp : ''}`}>
                To participate in Hackathon 2024, you must meet the following
                eligibility criteria:
                <br />
                - Participants can be individuals or teams of up to 4 members.
                <br />
                {/* - All skill levels are welcome, from beginners to experienced
                developers.
                <br /> */}
                - Participants must adhere to the Hackathon's code of conduct.
                <br />
                - Registrants must agree to abide by the rules and guidelines
                outlined by the organizers.
                <br />
              </p>
            </div>
          </section>

          <section
            ref={refDate}
            id="date"
            className=""
            style={{ height: "100vh" }}
          >
            <div
              className={styles.left}
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
            >
              <h2 className={`${styles.head} ${isVisibleDate ? styles.animatedh : ''}`}
                style={{
                  position: "relative",
                  // display: "inline-block",
                  color: "#ff8400",
                  // right: "120px",
                }}
              >
                Date & Time{" "}
                <span className={`${styles.span} ${isVisibleDate ? styles.animatedspan : ''}`}
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    // left: "-10px",
                    width: "100%",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify" }} className={`${styles.p} ${isVisibleDate ? styles.animatedp : ''}`}>
                Hackathon 2024 will take place on [Date] from [Start Time] to
                [End Time].
                <br />
                The event will span [Number of Days] days and will be held at
                [Location].
                <br />
                Participants are encouraged to arrive on time for registration
                and the opening ceremony.
                <br />
                Mark your calendars and get ready for an exciting two-day event
                filled with coding, collaboration, and innovation!
              </p>
            </div>
            <div
              className={styles.right}
            >
              <div className={`${styles.image} ${isVisibleDate ? styles.animated : ''}`}>
                <img src={datetime} alt="sjbv" />
              </div>
            </div>
          </section>

          <section
            ref={refCriteria}
            id="criteria"
            className={styles.blackBackground}
            style={{ height: "100vh" }}
          >
            <div
              className={styles.left}
            >
              <div className={`${styles.image} ${isVisibleCriteria ? styles.animated : ''}`}>
                <img src={criteria} alt="sjbv" />
              </div>
            </div>
            <div
              className={styles.right}
              style={{
                // width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 className={`${styles.head} ${isVisibleCriteria ? styles.animatedh : ''}`}
                style={{
                  position: "relative",
                  // display: "inline-block",
                  color: "#ff8400",
                  // right: "100px",
                }}
              >
                Judging Criteria{" "}
                <span className={`${styles.span} ${isVisibleCriteria ? styles.animatedspan : ''}`}
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    // left: "-10px",
                    width: "100%",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify" }} className={`${styles.p} ${isVisibleCriteria ? styles.animatedp : ''}`}>
                {/* Projects submitted to Hackathon 2024 will be evaluated based on
                the following criteria:
                <br /> */}
                <strong>- Innovation:</strong> How innovative and original is the project idea?
                <br />
                <strong>-Technical Complexity:</strong> What level of technical complexity is
                demonstrated in the implementation?
                <br />
                <strong>- Impact:</strong> What potential impact does the project have on
                addressing real-world problems?
                <br />
                <strong>- Presentation:</strong> How effectively is the project presented,
                including clarity, coherence, and visual appeal?
                <br />
                <strong>- Execution:</strong> How well is the project executed, including
                functionality, usability, and quality of implementation?
                {/* <br />
                Judges will assess projects based on these criteria to determine
                the winners. Good luck to all participants! */}
              </p>
            </div>
          </section>
          <section
            ref={refPanelists}
            id="panelists"
            className={styles.panelists}
          // style={{
          //   height: "80vh",
          //   display: "flex",
          //   flexDirection: "column",
          // }}
          >
            <h2 className={`${styles.head} ${isVisiblePanelists ? styles.animatedh : ''}`}
              style={{
                position: "relative",
                // display: "inline-block",
                color: "#ff8400",
                // left: "90px",
              }}
            >
              Panelists
              <span className={`${styles.span} ${isVisiblePanelists ? styles.animatedspan : ''}`}
                style={{
                  content: " ",
                  display: "block",
                  position: "absolute",
                  bottom: "-3px",
                  // left: "-10px",
                  width: "400px",
                  height: "1px",
                  backgroundColor: "orange",
                }}
              ></span>
            </h2>
            {/* <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "transparent",
              }}
            ></hr> */}
            <div>
              <PanelistsCarousel cards={cards} />
            </div>
          </section>

          <section
          ref={refPrizes}
            id="prizes"
            className={styles.blackBackground}
            style={{ height: "100vh" }}
          >
            <div
              className={styles.left}
              style={{
                // width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={`${styles.image} ${isVisiblePrizes ? styles.animated : ''}`}>
              <img src={prizes} alt="sjbv" />
            </div>
            </div>
            <div
              className={styles.right}
              style={{
                // width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 className={`${styles.head} ${isVisiblePrizes ? styles.animatedh : ''}`}
                style={{
                  position: "relative",
                  // display: "inline-block",
                  color: "#ff8400",
                  // right: "180px",
                }}
              >
                Prizes{" "}
                <span className={`${styles.span} ${isVisiblePrizes ? styles.animatedspan : ''}`}
                  style={{
                    content: " ",
                    display: "block",
                    position: "absolute",
                    bottom: "-3px",
                    // left: "-10px",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "orange", // Set the background color to orange
                  }}
                ></span>
              </h2>
              <p style={{ textAlign: "justify" }} className={`${styles.p} ${isVisiblePrizes ? styles.animatedp : ''}`}>
                Hackathon 2024 offers exciting prizes for winning projects!
                {/* Participants have the chance to win the following awards: */}
                <br />
                <strong>- First Place:</strong> [Description of First Place Prize]
                <br />
                <strong>- Second Place:</strong> [Description of Second Place Prize]
                <br />
                <strong>- Third Place:</strong> [Description of Third Place Prize]
                <br />
                In addition to cash prizes, winning teams will also receive
                recognition and exposure for their innovative projects. <br /> Don't
                miss out on the opportunity to showcase your skills and compete
                for these prestigious awards!
              </p>
            </div>
          </section>
          <Footer />
        </div>
      </div >
    </div >
  );
};

export default Homepage;
