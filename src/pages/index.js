import React from "react"
// import { Link } from "gatsby"
import {
  FaChevronDown,
  FaClipboard,
  FaLock,
  FaChartBar,
  FaRegHandPointUp,
  FaRegEye,
  FaPencilAlt,
} from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeStep from "../components/homeStep"
import logo from "../images/logo@2x.png"
import bg1 from "../images/cover-bg-1@2x.png"
import bg2 from "../images/cover-bg-2@2x.png"
import bg3 from "../images/cover-bg-3@2x.png"
import step1 from "../images/step1.gif"
import step2 from "../images/step2.gif"
import step3 from "../images/step3.gif"
import step4 from "../images/step4.gif"
import logoCalibro from "../images/logo-calibro-black@2x.png"
import logoDD from "../images/logo-DD-black@2x.png"
import styles from "./index.module.scss"

const style = {
  backgroundImage: `url(${bg1})`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const steps = [
  {
    title: "First, insert your data into RAWGraphs",
    image: step1,
    subSteps: [
      {
        title: "As simple as a copy-paste.",
        icon: <FaClipboard className={styles.substepIcon} />,
        text:
          "RAWGraphs works with delimiter-separated values (i.e. csv and tsv files) as well as with copied-and-pasted texts from other applications (e.g. Microsoft Excel, Google Spreadsheets, TextEdit, …). It also works with CORS-enabled endpoints (APIs).",
      },
      {
        title: "No worries, your data is safe.",
        icon: <FaLock className={styles.substepIcon} />,
        text:
          "Even though RAWGraphs is a web app, the data you insert will be processed only by the web browser. No server-side operations or storages are performed, no one will see, touch or copy your data!",
      },
    ],
  },
  {
    title: "Choose within a wide range of visual models",
    image: step2,
    subSteps: [
      {
        title: "Conventional and unconventional layouts.",
        icon: <FaChartBar className={styles.substepIcon} />,
        text:
          "We designed and developed RAWGraphs with designers and vis geeks in mind. That’s why we focused on providing charts that are not easy to produce with other tools. But don’t worry, you can also find bar charts and pies! Something missing? See how easy is to build your own model.",
      },
    ],
  },
  {
    title: "Tune your chart and explore your data",
    image: step3,
    subSteps: [
      {
        title: "Understand and map visually your data dimensions.",
        icon: <FaRegHandPointUp className={styles.substepIcon} />,
        text:
          "Do you want to know more about your data? Do you want to explore patterns and trends? Just map the dimensions of your dataset with the visual variables of the selected layout.",
      },
      {
        title: " Visual feedback, immediately.",
        icon: <FaRegEye className={styles.substepIcon} />,
        text:
          "As soon as the dataset dimensions are mapped you’ll see the visualization appear. Not happy with the result? Try another type of mapping to have a new visualization in the blink of an eye.",
      },
    ],
  },
  {
    title: "Export and go anywhere",
    image: step4,
    subSteps: [
      {
        title: " Semifinished vectors and data structures.",
        icon: <FaPencilAlt className={styles.substepIcon} />,
        text:
          "Do you want to know more about your data? Do you want to explore patterns and trends? Just map the dimensions of your dataset with the visual variables of the selected layout.",
      },
    ],
  },
]

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="container-fluid h-100vh d-flex align-items-center justify-content-around flex-column"
      style={style}
    >
      <div className="row">
        <div className="col-10 offset-1 text-center">
          <img
            src={logo}
            className={`img-fluid ${styles.homeLogo}`}
            alt="logo"
          />
        </div>
        <div className="col-12 text-center">
          <h2 className={styles.claim}>
            The missing link between spreadsheets and data visualization.
          </h2>
        </div>
        <div className="col-10 offset-1 col-sm-4 offset-sm-2 col-md-3 offset-md-3 col-lg-2 offset-lg-4">
          <a target="_blank" href="https://app.rawgraphs.io">
            <button
              className="btn btn-default btn-green btn-larger"
              type="submit"
            >
              Use it now!
            </button>
          </a>
        </div>
        <div className="col-10 offset-1 offset-sm-0 col-sm-4  col-md-3  col-lg-2 ">
          <a target="_blank" href="https://github.com/rawgraphs/raw/">
            <button
              className="btn btn-default btn-grey btn-larger"
              type="submit"
            >
              Fork it on github!
            </button>
          </a>
        </div>
      </div>
      <div className="row d-none d-sm-flex">
        <div className="col-12 text-center">
          <a className={styles.exploreDown} href="#step1">
            <FaChevronDown color="#3E3E41" size="3.25rem"></FaChevronDown>
          </a>
        </div>
      </div>
    </div>
    {steps.map((step, index) => {
      return <HomeStep key={index} {...step} index={index}></HomeStep>
    })}

    <div id="discover-more" className="container-fluid discover-more step">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Discover more</h2>
          </div>
        </div>
      </div>
    </div>

    <div id="partners" className="container-fluid step">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Brought to you by</h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4 col-xs-6">
            <a
              target="_blank"
              className={`${styles.withImg} my-5`}
              href="https://densitydesign.org"
            >
              <img className="img-fluid" src={logoDD} />
            </a>
          </div>
          <div className="col-md-4 col-xs-6">
            <a
              target="_blank"
              className={styles.withImg}
              href="https://calib.ro/"
            >
              <img className="img-fluid" src={logoCalibro} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default HomePage
