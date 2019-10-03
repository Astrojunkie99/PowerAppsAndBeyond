import React from "react";
import Layout from "../components/layout";
import style from "../styles/apod.module.scss";

class ContactPage extends React.Component {
  state={
    loading: true,
    error:false,
    fetchImg: "",
    fetchText:"",
    fetchDate:"",
    fetchTitle:"",
  };
  
  componentDidMount(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`).then(response =>{
      return response.json()
    }).then(json =>{
      console.log(json);
      this.setState({
        fetchImg:json.url,
        fetchText:json.explanation,
        fetchDate:json.date,
        fetchTitle:json.title,
        loading:false
      })
    })
  }
  render (){
    const {fetchImg} = this.state;
    const {fetchText} = this.state;
    const {fetchTitle} = this.state;
    const {fetchDate} = this.state;


    return (
      <Layout>
        <div className={style.indexCard}>
          <h1>{fetchTitle}</h1>
          <div className={style.container}>
            <img className={style.apodImg} src={fetchImg} alt="APod Picture here..."></img>
          </div>
          <h5 className={style.title}>{fetchDate}</h5>
          <p className={style.body}>{fetchText}</p>
        </div>

      </Layout>
      )
    }

}

export default ContactPage
