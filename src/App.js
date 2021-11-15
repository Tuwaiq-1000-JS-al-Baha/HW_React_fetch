import axios from "axios"
import { useEffect, useState } from "react"
import CardItem from "./components/CardsItem"
import "./App.css"
function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=8173ff44d6404c948d282ea3e0838b7a").then(response => {
      const news = response.data
      setNews(news.articles)
    })
  }, [])
  return (
    <>
      <CardItem news={news} />
    </>
  )
}
export default App
