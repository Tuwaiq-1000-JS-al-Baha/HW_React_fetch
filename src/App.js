import axios from "axios"
import {useEffect, useState} from "react"
import Card from "./components/Card"
import "./App.css"
function  App() {
  const   [news, setNews]=  useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=a662bd5446094ac4b9a55410a90bf4bf").then(response =>{
      const news=(response.data)
      setNews(news.articles)
    })
  },[])
  return(
    <>
    
    
    <Card news={news}/>
   
    
    </>
  )
}
 
export default App
