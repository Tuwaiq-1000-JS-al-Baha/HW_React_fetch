import axios from "axios"
import Cards from "./components/Cards"
import { useEffect, useState } from "react"
import "./App.css"

function News() {
  const [News, setNews] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2021-11-09&to=2021-11-09&sortBy=popularity&apiKey=fde3ae16be4340ffa648d53190b865f9"
      )
      .then(response => {
        setNews(response.data.articles)
      })
  }, [])

  return (
    <>
      {News.map(New => (
        <Cards New={New} />
      ))}
    </>
  )
}

export default News
