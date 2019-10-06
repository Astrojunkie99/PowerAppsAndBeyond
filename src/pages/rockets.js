import React, { Component } from "react"
import Layout from "../components/layout"
import style from "../styles/apod.module.scss"
import Countdown from "react-countdown-now"
import "isomorphic-fetch"

class rocketPage extends Component {
  state = {
    image: "",
    image1: "",
    image2: "",
    header: "",
    header1: "",
    header2: "",
    description: "",
    description1: "",
    description2: "",
    launchTime: "",
    launchTime1: "",
    launchTime2: "",
    lDay: "",
    lDay1: "",
    lDay2: "",
  }
  componentWillMount() {
    fetch(`https://launchlibrary.net/1.4/launch/next/5`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        const launchDay = new Date(json.launches[0].net)
        const launchDay1 = new Date(json.launches[1].net)
        const launchDay2 = new Date(json.launches[2].net)
        this.setState({
          header: json.launches[0].name,
          description: json.launches[0].missions[0].description,
          launchTime: json.launches[0].net,
          lDay: launchDay.getDay(),
          image: json.launches[0].rocket.imageURL,
          header1: json.launches[1].name,
          description1: json.launches[1].missions[0].description,
          launchTime1: json.launches[1].net,
          lDay1: launchDay1.getDay(),
          image1: json.launches[1].rocket.imageURL,
          header2: json.launches[2].name,
          description2: json.launches[2].missions[0].description,
          launchTime2: json.launches[2].net,
          lDay2: launchDay2.getDay(),
          image2: json.launches[2].rocket.imageURL,
        })
      })
  }
  render() {
    const { image } = this.state
    const { image1 } = this.state
    const { image2 } = this.state
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return (
          <div>
            <p>Complete</p>
          </div>
        )
      } else {
        // Render a countdown
        return (
          <span>
            {days} days: {hours} hours: {minutes} minutes: {seconds} seconds
          </span>
        )
      }
    }
    return (
      <Layout>
        <div className={style.indexCard}>
          <h4 className={style.Title}>{this.state.header}</h4>
          <p className={style.body}>{this.state.description}</p>
          <h3 className={style.clockface}>
            Countdown:{" "}
            <Countdown date={this.state.launchTime} renderer={renderer} />
          </h3>
          <div className={style.imageContainer}>
            <img
              className={style.rocketImg}
              src={image}
              data-img={image}
              alt="Rocket Picture here..."
            ></img>
          </div>
        </div>
        <div className={style.indexCard}>
          <h4 className={style.Title}>{this.state.header1}</h4>
          <p className={style.body}>{this.state.description1}</p>
          <h3 className={style.clockface}>
            Countdown:{" "}
            <Countdown date={this.state.launchTime1} renderer={renderer} />
          </h3>
          <div className={style.imageContainer}>
            <img
              className={style.rocketImg}
              src={image1}
              alt="Rocket Picture here..."
            ></img>
          </div>
        </div>
        <div className={style.indexCard}>
          <h4 className={style.Title}>{this.state.header2}</h4>
          <p className={style.body}>{this.state.description2}</p>
          <h3 className={style.clockface}>
            Countdown:{" "}
            <Countdown date={this.state.launchTime2} renderer={renderer} />
          </h3>
          <div className={style.imageContainer}>
            <img
              className={style.rocketImg}
              src={image2}
              alt="Rocket Picture here..."
            ></img>
          </div>
        </div>
      </Layout>
    )
  }
}
export default rocketPage
