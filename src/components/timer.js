import React from "react"
import styles from "../styles/timer.module.scss"
import Time from "react-time"

class Timer extends React.Component {
  state = {
    now: new Date(),
    countdownState: "",
  }

  componentDidMount() {
    fetch('https://launchlibrary.net/1.4/launch/next/5')
    .then(response => {
      return 
      response.json()
    })
    .then((data) =>{
      this.setState({
        Header: data.launches[0].name,
        launchDesc: data.launches[0].missions[0].description,
      })
      console.log(data)
    })
  }
     

  render (){
    return (
      <div className={styles.Timer}>
        <ul>
          <div>
            <li>login name</li>
            <li>
              <Time value={this.state.now} />
            </li>
            <li>
              <Time value={this.state.now} format="HH:mm:ss" />
            </li>
          </div>
        </ul>
      </div>
    )
  }
}
export default Timer
